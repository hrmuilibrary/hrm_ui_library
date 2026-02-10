import React from 'react'
import { ImagePropTypes } from './types'

export const Image = (props: ImagePropTypes): React.ReactElement => {
  const {
    name,
    imagePath = 'static/media/src/assets/images/image-placeholder.png',
    isBackgroundImage,
    backgroundSize,
    className = '',
    isFullWidth,
    isFullHeight,
    ratio,
    theme = 'light'
  } = props

  return isBackgroundImage ? (
    <div
      className={`image image--bg ${className}`}
      style={{
        backgroundImage: `${imagePath ? `url(${imagePath})` : ''}`,
        backgroundSize: backgroundSize,
        aspectRatio: ratio
      }}
      data-theme={theme}
    />
  ) : (
    <img
      className={`image ${className}`}
      src={imagePath}
      alt={name}
      style={{
        aspectRatio: ratio,
        width: isFullWidth ? '100%' : '',
        height: isFullHeight ? '100%' : ''
      }}
      data-theme={theme}
    />
  )
}
