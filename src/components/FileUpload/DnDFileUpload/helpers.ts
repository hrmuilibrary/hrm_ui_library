import { FILE_ACCEPT_TYPE } from '../../../consts'
import { AreaContentDTO } from '../types'
import { FileTypeEnum } from '../../../type'

export const shortenFileName = (fileName: string, maxLength: number): string => {
  // Regular expression to split the name into three parts: start, middle, and extension
  const regex = /^(.{10}).*?(.{10}\.[^.]*)$/

  // If the file name length exceeds maxLength, shorten it
  if (fileName.length > maxLength) {
    return fileName.replace(regex, '$1...$2')
  }

  // If it's short enough, return as is
  return fileName
}

export const formatFileSize = (sizeInBytes: number, fractionDigits = 0): string => {
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

export const generateAreaContent = ({
  accept,
  maxSize
}: {
  accept: FileTypeEnum[]
  maxSize: number
}): AreaContentDTO => {
  const acceptTypes = accept.map((type: FileTypeEnum) => FILE_ACCEPT_TYPE[type])

  const acceptTypesMessage =
    accept.length === 1
      ? accept[0]
      : accept.reduce((acc, currentValue, _index, _arr) => {
          if (_index === _arr.length - 1) {
            return `${acc} or ${currentValue}`
          }
          return acc ? `${acc}, ${currentValue}` : currentValue
        }, '')

  return {
    acceptTypes,
    maxSizeFormatted: formatFileSize(maxSize),
    acceptTypesMessage
  }
}
