import React, { FC } from 'react'
import { TContainerProps } from './types'

export const Container: FC<TContainerProps> = (props) => {
  const { children, dataTestId = '' } = props

  return (
    <div className="container" data-test-id={dataTestId}>
      {children}
    </div>
  )
}
