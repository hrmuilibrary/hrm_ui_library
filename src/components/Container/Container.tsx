import React, { FC } from 'react'
import { TContainerProps } from './types'

export const Container: FC<TContainerProps> = (props) => {
  const { children, dataId = '' } = props

  return (
    <div className="container" data-id={dataId}>
      {children}
    </div>
  )
}
