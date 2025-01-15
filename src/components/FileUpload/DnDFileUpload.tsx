import React, { ReactElement, useState } from 'react'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import IconUpload from '../SVGIcons/IconUpload'
import { Text } from '../Text'
import classnames from 'classnames'
import { Button } from '../Button'
import filePreviewSVG from '../../assets/images/file-preview.svg'
import { Progress } from '../Progress'
import IconDelete from '../SVGIcons/IconDelete'

interface DnDFileUploadProps {
  maxSize?: number
  accept?: string
}

type FileType = File & { preview: string }

const shortenFileName = (fileName: string, maxLength: number) => {
  // Regular expression to split the name into three parts: start, middle, and extension
  const regex = /^(.{10}).*?(.{10}\.[^.]*)$/

  // If the file name length exceeds maxLength, shorten it
  if (fileName.length > maxLength) {
    return fileName.replace(regex, '$1...$2')
  }

  // If it's short enough, return as is
  return fileName
}

const formatFileSize = (sizeInBytes: number, fractionDigits = 0) => {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B` // Bytes
  } else if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(fractionDigits)} KB` // Kilobytes
  } else if (sizeInBytes < 1024 * 1024 * 1024) {
    return `${(sizeInBytes / (1024 * 1024)).toFixed(fractionDigits)} MB` // Megabytes
  } else {
    return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(fractionDigits)} GB` // Gigabytes
  }
}

const FilePreview = ({ preview, type }: { preview: string; type: string }) => {
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleImageOnLoad = () => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const handleImageOnError = () => {
    setHasError(true)
    setLoading(false)
  }

  if (type === 'image') {
    return (
      <>
        {loading && <Progress size="small" loop noText percent={30} type="circle" dimension={20} />}
        <img
          src={hasError ? filePreviewSVG : preview}
          alt="Preview"
          onLoad={handleImageOnLoad}
          onError={handleImageOnError}
          className={classnames('dnd-file-upload__files--item__preview--image', {
            'dnd-file-upload__files--item__preview--image--loading': loading
          })}
        />
      </>
    )
  }

  return (
    <img
      src={filePreviewSVG}
      alt="Preview"
      className="dnd-file-upload__files--item__preview--image dnd-file-upload__files--item__preview--image_default"
    />
  )
}

const PreviewItem = ({ file, onRemove }: { file: FileType; onRemove: () => void }) => {
  const type = file.type.split('/')[0]

  return (
    <div className="dnd-file-upload__files--item">
      <div className={'dnd-file-upload__files--item__preview'}>
        <FilePreview preview={file.preview} type={type} />
      </div>
      <div className={'dnd-file-upload__files--item__info'}>
        <div className="dnd-file-upload__files--item__info-title">
          <Text weight="semibold">{shortenFileName(file.name, 40)}</Text>
          <Button
            size={'small'}
            type="tertiary"
            onClick={onRemove}
            iconProps={{ Component: IconDelete }}
          />
        </div>
        <div className="dnd-file-upload__files--item__info-size">
          <Text size="small">{formatFileSize(file.size)}</Text>
        </div>
      </div>
    </div>
  )
}

export const DnDFileUpload = ({
  maxSize = 40 * 1024 * 1024,
  accept = 'application/pdf, image/*, video/*'
}: DnDFileUploadProps): ReactElement => {
  const [acceptedFiles, setAcceptedFiles] = useState<FileType[]>([])
  const [errors, setErrors] = useState<FileError[]>([])
  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    const newAcceptedFiles = acceptedFiles.map((file: File) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    })
    const errors = fileRejections.map((fileRejection: FileRejection) => fileRejection.errors).flat()
    setAcceptedFiles((prevFiles: FileType[]) => [...prevFiles, ...newAcceptedFiles])
    setErrors(errors)
  }

  const { getRootProps, getInputProps, isFocused, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept,
    maxSize
  })

  const removeFile = (fileName: string) => {
    setAcceptedFiles((prevFiles: FileType[]) =>
      prevFiles.filter((file: FileType) => file.name !== fileName)
    )
  }

  console.log(errors)

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
        <input {...getInputProps()} />
        <Text type="primary" weight="semibold" className="mb-6">
          Choose a file or drag it here
        </Text>
        {/* Todo: check description depends on accept types*/}
        <Text size="small">JPEG, PNG, PDF, and MP4 formats, up to {formatFileSize(maxSize)}.</Text>
      </div>

      <div className="dnd-file-upload__files">
        {acceptedFiles.map((file: FileType, index: number) => {
          return <PreviewItem file={file} onRemove={() => removeFile(file.name)} key={index} />
        })}
      </div>
    </div>
  )
}
