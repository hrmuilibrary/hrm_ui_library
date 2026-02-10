import React, { FC } from 'react'
import { TContainerProps } from './types'

export const Container: FC<TContainerProps> = (props) => {
  const { children, theme = 'light' } = props

  return (
    <div className="container" data-theme={theme}>
      {children}
    </div>
  )
}
