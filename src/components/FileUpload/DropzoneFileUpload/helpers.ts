import { FILE_ACCEPT_TYPE } from '../../../consts'
import { AreaContentDTO, IDzTranslation } from '../types'
import { FileTypeEnum } from '../../../type'
import { getTranslationLocale } from '../../../helpers'

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
  allowedTypes,
  maxSize,
  locale
}: {
  allowedTypes: FileTypeEnum[]
  maxSize: number
  locale?: string
}): AreaContentDTO => {
  const acceptTypes: any = allowedTypes.map((type: FileTypeEnum) => FILE_ACCEPT_TYPE[type]).flat()
  const translation = getDropzoneLocale(locale)

  const acceptTypesMessage =
    allowedTypes.length === 1
      ? allowedTypes[0]
      : allowedTypes.reduce((acc, currentValue, _index, _arr) => {
          if (_index === _arr.length - 1) {
            return `${acc} ${translation.or} ${currentValue}`
          }
          return acc ? `${acc}, ${currentValue}` : currentValue
        }, '')

  return {
    acceptTypes,
    maxSizeFormatted: formatFileSize(maxSize),
    acceptTypesMessage
  }
}

export const getDropzoneLocale = (lang?: string): IDzTranslation => {
  const locale = lang || getTranslationLocale()
  const translation: {
    [key: string]: IDzTranslation
  } = {
    en: {
      title: 'Choose a file or drop it here',
      format: 'format',
      formats: 'formats',
      maxSize: 'Maximum size up to $1.',
      fileInvalidType: 'The file type should be $1',
      fileTooLarge: 'The file is too large (Max $1)',
      tooManyFiles: 'Too many files. Please select one file.',
      or: 'or'
    },
    ru: {
      title: 'Выберите файл или перетащите его сюда',
      format: 'формат',
      formats: 'форматы',
      maxSize: 'Максимальный размер до $1',
      fileInvalidType: 'Тип файла должен быть $1',
      fileTooLarge: 'Файл слишком большой (Максимум $1)',
      tooManyFiles: 'Слишком много файлов. Пожалуйста, выберите один файл.',
      or: 'или'
    },
    hy: {
      title: 'Ընտրեք ֆայլ կամ քաշեք այն այստեղ',
      format: 'ֆորմատ',
      formats: 'ֆորմատներ',
      maxSize: 'Առավելագույն չափը՝ մինչև $1',
      fileInvalidType: 'Ֆայլի տեսակը պետք է լինի $1',
      fileTooLarge: 'Ֆայլը չափազանց մեծ է (Առավելագույնը $1)',
      tooManyFiles: 'Չափազանց շատ ֆայլեր։ Խնդրում ենք ընտրել միայն մեկ ֆայլ։',
      or: 'կամ'
    }
  }
  return translation[locale] || translation.en
}
