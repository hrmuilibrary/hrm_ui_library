import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import IconUpload from '../../SVGIcons/IconUpload'
import { Text } from '../../Text'
import classnames from 'classnames'
import { FileTypeEnum } from '../../../type'
import { DnDFileUploadProps, FileType } from '../types'
import { generateAreaContent } from './helpers'
import { ErrorItem } from './ErrorItem'
import { PreviewItem } from './PreviewItem'
import { uniqueFiles as _uniqueFiles } from '../../../utils/helpers'

export const DnDFileUpload = ({
  maxSize = 10 * 1024 * 1024,
  accept = [FileTypeEnum.IMAGE, FileTypeEnum.PDF, FileTypeEnum.DOC],
  multiple = true,
  name,
  setFiles,
  setFieldValue
}: DnDFileUploadProps): ReactElement => {
  const [acceptedFiles, setAcceptedFiles] = useState<FileType[]>([])
  const [errors, setErrors] = useState<FileError[]>([])
  const areaContent = generateAreaContent({
    accept,
    maxSize
  })

  const onDrop = (fileAccepted: File[], fileRejections: FileRejection[]) => {
    const newFileAccepted = fileAccepted.map((file: File) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    })
    const errors = fileRejections.map((fileRejection: FileRejection) => fileRejection.errors).flat()
    setAcceptedFiles((prevFiles: FileType[]) => _uniqueFiles([...prevFiles, ...newFileAccepted]))
    setErrors(errors)
  }

  const { getRootProps, getInputProps, isFocused, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: areaContent.acceptTypes,
    maxSize,
    maxFiles: multiple ? undefined : 1
  })

  const removeFile = (fileName: string) => {
    setAcceptedFiles((prevFiles: FileType[]) =>
      prevFiles.filter((file: FileType) => file.name !== fileName)
    )
  }

  const removeError = (index: number) => {
    setErrors((prevErrors: FileError[]) =>
      prevErrors.filter((_error: FileError, i: number) => i !== index)
    )
  }

  const updateInForm = useCallback(
    (values: File[]) => {
      if (name && setFieldValue) {
        setFieldValue(name, values as TFormValue)
      }
    },
    [name, setFieldValue]
  )

  useEffect(() => {
    setFiles?.(acceptedFiles)
    updateInForm(acceptedFiles)
  }, [acceptedFiles])

  return (
    <div className="dnd-file-upload">
      <div
        {...getRootProps()}
        className={classnames('dnd-file-upload__area', {
          'dnd-file-upload__area--focused': isFocused,
          'dnd-file-upload__area--active': isDragActive,
          'dnd-file-upload__area--rejected': isDragReject
        })}
      >
        <IconUpload className="mb-20" size="xlarge" />
        <input {...getInputProps()} name={name} />
        <Text type="primary" weight="semibold" className="mb-6">
          Choose a file or drag it here
        </Text>
        <Text size="small">
          {areaContent.acceptTypesMessage} formats, Maximum size up to{' '}
          {areaContent.maxSizeFormatted}.
        </Text>
      </div>

      <div className="dnd-file-upload__files">
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
        {acceptedFiles.map((file, index) => {
          return <PreviewItem key={index} file={file} onRemove={() => removeFile(file.name)} />
        })}
      </div>
    </div>
  )
}
