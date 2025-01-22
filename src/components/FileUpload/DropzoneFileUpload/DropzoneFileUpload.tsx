import React, { ReactElement, useCallback, useState } from 'react'
import { ErrorCode, FileError, FileRejection, useDropzone } from 'react-dropzone'
import IconUpload from '../../SVGIcons/IconUpload'
import { Text } from '../../Text'
import classnames from 'classnames'
import { FileTypeEnum } from '../../../type'
import { DzFileUploadProps, FileType, FileUploadMode } from '../types'
import { generateAreaContent } from './helpers'
import { ErrorItem } from './ErrorItem'
import { PreviewItem } from './PreviewItem'
import { uniqueFiles as _uniqueFiles } from '../../../utils/helpers'

export const DropzoneFileUpload = ({
  maxSize = 10 * 1024 * 1024,
  accept = [FileTypeEnum.IMAGE, FileTypeEnum.PDF, FileTypeEnum.DOC],
  name,
  setFiles,
  setFieldValue,
  value,
  selectedFiles,
  maxFiles = 1,
  mode = FileUploadMode.attach
}: DzFileUploadProps): ReactElement => {
  const initialFiles = (value as FileType[]) || selectedFiles || []
  const initialMaxFiles = initialFiles.length >= maxFiles ? 0 : maxFiles - initialFiles.length
  const [errors, setErrors] = useState<FileError[]>([])
  const areaContent = generateAreaContent({
    accept,
    maxSize
  })

  const onDrop = (fileAccepted: File[], fileRejections: FileRejection[]) => {
    if (initialMaxFiles === 0) {
      setErrors([{ code: ErrorCode.TooManyFiles, message: '' }])
      return
    }
    const newFiles = _uniqueFiles([...initialFiles, ...fileAccepted])
    const errors = fileRejections.map((fileRejection: FileRejection) => fileRejection.errors).flat()
    setFiles?.(newFiles)
    updateInForm(newFiles)
    setErrors(errors)
  }

  const { getRootProps, getInputProps, isFocused, isDragActive } = useDropzone({
    onDrop,
    accept: areaContent.acceptTypes,
    maxSize,
    maxFiles: initialMaxFiles,
    multiple: initialMaxFiles > 1
  })

  const removeFile = (fileName: string) => {
    const newFiles = initialFiles.filter((file: FileType) => file.name !== fileName)
    if (newFiles.length === 0) {
      setErrors([])
    }
    setFiles?.(newFiles)
    updateInForm(newFiles)
  }

  const removeError = (index: number) => {
    setErrors((prevErrors: FileError[]) =>
      prevErrors.filter((_error: FileError, i: number) => i !== index)
    )
  }

  const updateInForm = useCallback(
    (values: FileType[]) => {
      if (name && setFieldValue) {
        setFieldValue(name, values as TFormValue)
      }
    },
    [name, setFieldValue]
  )

  return (
    <div className="dz-file-upload">
      {mode !== FileUploadMode.view ? (
        <div
          {...getRootProps()}
          className={classnames('dz-file-upload__area', {
            'dz-file-upload__area--focused': isFocused,
            'dz-file-upload__area--active': isDragActive
          })}
        >
          <IconUpload className="mb-20" size="xlarge" />
          <input {...getInputProps()} name={name} />
          <Text type="primary" weight="semibold" className="mb-6">
            Choose a file or drop it here
          </Text>
          <Text size="small">
            {areaContent.acceptTypesMessage}{' '}
            {areaContent.acceptTypes.length === 1 ? 'format' : 'formats'}, Maximum size up to{' '}
            {areaContent.maxSizeFormatted}.
          </Text>
        </div>
      ) : null}

      <div className="dz-file-upload__files">
        {errors.map(({ code }, index) => {
          return (
            <ErrorItem
              key={index}
              code={code}
              areaContent={areaContent}
              onRemove={() => removeError(index)}
            />
          )
        })}
        {initialFiles.map((file, index) => {
          return (
            <PreviewItem
              key={index}
              file={file}
              onRemove={() => removeFile(file.name)}
              mode={mode}
            />
          )
        })}
      </div>
    </div>
  )
}
