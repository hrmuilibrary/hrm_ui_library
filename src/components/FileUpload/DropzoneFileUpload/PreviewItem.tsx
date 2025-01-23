import { Text } from '../../Text'
import { Button } from '../../Button'
import IconDelete from '../../SVGIcons/IconDelete'
import React, { ReactElement, useMemo } from 'react'
import { FileType, FileUploadMode } from '../types'
import { FilePreview } from './FilePreview'
import { formatFileSize, shortenFileName } from './helpers'
import IconArrowDownloadFilled from '../../SVGIcons/IconArrowDownloadFilled'
import classnames from 'classnames'
import { downloadFile } from '../../../helpers'

export const PreviewItem = ({
  file,
  onRemove,
  mode
}: {
  file: FileType
  onRemove: () => void
  mode: FileUploadMode
}): ReactElement => {
  const type = file.type.split('/')[0]

  const preview = useMemo(() => {
    return URL.createObjectURL(file)
  }, [file.name])

  const handleItemClick = () => {
    if (mode === FileUploadMode.view) {
      window.open(preview, '_blank')
    }
  }

  const onFileDownload = (event: TClickEventType) => {
    event.preventDefault()
    event.stopPropagation()
    downloadFile(preview, file.name)
  }

  return (
    <div
      className={classnames('dz-file-upload__files--item', {
        'dz-file-upload__files--item--view': mode === FileUploadMode.view
      })}
      onClick={handleItemClick}
    >
      <div className={'dz-file-upload__files--item__preview'}>
        <FilePreview preview={preview} type={type} />
      </div>
      <div className={'dz-file-upload__files--item__info'}>
        <div className="dz-file-upload__files--item__info-title">
          <Text weight="semibold">{shortenFileName(file.name, 40)}</Text>
          {mode === FileUploadMode.attach && (
            <Button
              size="small"
              type="tertiary"
              onClick={onRemove}
              iconProps={{ Component: IconDelete }}
            />
          )}
          {mode === FileUploadMode.view && (
            <Button
              size="small"
              type="tertiary"
              onClick={onFileDownload}
              iconProps={{ Component: IconArrowDownloadFilled }}
            />
          )}
        </div>
        <div className="dz-file-upload__files--item__info-size">
          <Text size="small">{formatFileSize(file.size)}</Text>
        </div>
      </div>
    </div>
  )
}
