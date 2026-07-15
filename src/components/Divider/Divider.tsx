import React from 'react'
import { TDividerProps } from './types'
import classnames from 'classnames'

export const Divider = (props: TDividerProps): React.ReactElement => {
  const { type = 'primary', isHorizontal, className, color = 'light-grey', dataTestId = '' } = props
  return (
    <hr
      data-test-id={dataTestId}
      className={classnames(
        'divider',
        `divider--${type}`,
        `divider--${color}`,
        {
          'divider--horizontal': isHorizontal,
          'divider--vertical': !isHorizontal
        },
        className
      )}
    />
  )
}
