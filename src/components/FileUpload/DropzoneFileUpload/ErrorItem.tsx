import React, { ReactElement, useMemo } from 'react'
import { ErrorCode } from 'react-dropzone'
import { Alert } from '../../Alert'
import { AreaContentDTO } from '../types'
import { getDropzoneLocale } from './helpers'

interface IErrorItemProps {
  code: string
  areaContent: AreaContentDTO
  onRemove: () => void
  locale?: string
}

export const ErrorItem = ({
  code,
  onRemove,
  areaContent,
  locale
}: IErrorItemProps): ReactElement | null => {
  const errorMessage = useMemo(() => {
    const translation = getDropzoneLocale(locale)
    if (code === ErrorCode.FileInvalidType) {
      return translation.fileInvalidType.replace('$1', areaContent.acceptTypesMessage)
    } else if (code === ErrorCode.FileTooLarge) {
      return translation.fileTooLarge.replace('$1', areaContent.maxSizeFormatted)
    } else if (code === ErrorCode.TooManyFiles) {
      return translation.tooManyFiles
    }

    return ''
  }, [code])

  return errorMessage ? (
    <Alert type="error" text={errorMessage} closeIcon onClose={onRemove} />
  ) : null
}
