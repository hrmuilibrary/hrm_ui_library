import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { TBadgeProps } from './types'
import classNames from 'classnames'

export const Badge = (props: TBadgeProps): ReactElement => {
  const { type = 'primary', size = 'large', text, className = '', theme = 'light' } = props

  return (
    <div
      className={classNames(`badge badge--${type} badge--${size}`, className)}
      data-theme={theme}
    >
      {text ? (
        <Text
          size="xsmall"
          type={type == 'secondary' ? 'primary' : 'inverse'}
          className="badge__inner"
          theme={theme}
        >
          <>{text}</>
        </Text>
      ) : null}
    </div>
  )
}
