import React, { ReactElement, useMemo } from 'react'
import { ErrorCode } from 'react-dropzone'
import { Alert } from '../../Alert'
import { AreaContentDTO } from '../types'

interface IErrorItemProps {
  code: string
  areaContent: AreaContentDTO
  onRemove: () => void
}

export const ErrorItem = ({
  code,
  onRemove,
  areaContent
}: IErrorItemProps): ReactElement | null => {
  const errorMessage = useMemo(() => {
    if (code === ErrorCode.FileInvalidType) {
      return `The file type should be ${areaContent.acceptTypesMessage}`
    } else if (code === ErrorCode.FileTooLarge) {
      return `The file is too large (Max ${areaContent.maxSizeFormatted})`
    } else if (code === ErrorCode.TooManyFiles) {
      return 'Too many files. Please select one file.'
    }

    return ''
  }, [code])

  return errorMessage ? (
    <Alert type="error" text={errorMessage} closeIcon onClose={onRemove} />
  ) : null
}
