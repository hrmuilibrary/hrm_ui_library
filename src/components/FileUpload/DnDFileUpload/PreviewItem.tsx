import { Text } from '../../Text'
import { Button } from '../../Button'
import IconDelete from '../../SVGIcons/IconDelete'
import React, { ReactElement, useMemo } from 'react'
import { FileType } from '../types'
import { FilePreview } from './FilePreview'
import { formatFileSize, shortenFileName } from './helpers'

export const PreviewItem = ({
  file,
  onRemove
}: {
  file: FileType
  onRemove: () => void
}): ReactElement => {
  const type = file.type.split('/')[0]

  const preview = useMemo(() => {
    return URL.createObjectURL(file)
  }, [file.name])

  return (
    <div className="dnd-file-upload__files--item">
      <div className={'dnd-file-upload__files--item__preview'}>
        <FilePreview preview={preview} type={type} />
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
