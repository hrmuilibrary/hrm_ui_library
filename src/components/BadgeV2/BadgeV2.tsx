import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { BadgeSize, TBadgeProps } from './types'
import classNames from 'classnames'

export const BadgeV2 = (props: TBadgeProps): ReactElement => {
  const {
    type = 'blue',
    style = 'filled',
    size = BadgeSize.large,
    text,
    className = '',
    iconProps
  } = props
  const {
    size: iconSize = 'small',
    type: iconType,
    alignment: iconAlignment = 'left',
    Component
  } = iconProps ?? {}

  return (
    <div className={classNames(`badge badge--${type} badge--${style} badge--${size}`, className)}>
      {iconProps && iconAlignment === 'left' && (
        <iconProps.Component size={iconSize} type={iconType} />
      )}
      {typeof text === 'string' || typeof text === 'number' ? (
        <Text size="xsmall" className="badge__inner">
          <>{text}</>
        </Text>
      ) : React.isValidElement(text) ? (
        text
      ) : null}
      {iconProps && iconAlignment === 'right' && (
        <iconProps.Component size={iconSize} type={iconType} />
      )}
    </div>
  )
}
