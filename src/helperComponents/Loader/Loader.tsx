import React, { ReactElement } from 'react'
import { LoaderProps } from './types'

export const Loader = (props: LoaderProps): ReactElement => {
  const { size = 'large', type = 'lite', theme = 'light' } = props
  return (
    <div className={`loader loader--${type} loader--${size}`} data-theme={theme}>
      <span className="loader__inner"></span>
    </div>
  )
}
