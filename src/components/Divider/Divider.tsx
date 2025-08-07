import React from 'react'
import { TDividerProps } from './types'
import classnames from 'classnames'

export const Divider = (props: TDividerProps): React.ReactElement => {
  const { type = 'primary', isHorizontal, className, color = 'light-grey' } = props
  return (
    <hr
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
