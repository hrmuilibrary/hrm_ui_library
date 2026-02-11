import React, { ReactElement, useState } from 'react'
import { Progress } from '../../Progress'
import filePreviewSVG from '../../../assets/images/file-preview.svg'
import classnames from 'classnames'
import { ICommon } from '../../../type'

interface IFilePreviewProps extends ICommon {
  preview?: string
  type: string
}

export const FilePreview = ({
  preview,
  type,
  theme = 'light'
}: IFilePreviewProps): ReactElement => {
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
        {loading && (
          <Progress
            size="small"
            loop
            noText
            percent={30}
            type="circle"
            dimension={20}
            theme={theme}
          />
        )}
        <img
          src={hasError ? filePreviewSVG : preview}
          alt="Preview"
          onLoad={handleImageOnLoad}
          onError={handleImageOnError}
          className={classnames('dz-file-upload__files--item__preview--image', {
            'dz-file-upload__files--item__preview--image--loading': loading
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
