import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { BadgeSize, BadgeStyle, BadgeType, IconAlignment, TBadgeProps } from './types'
import classNames from 'classnames'

export const BadgeV2 = (props: TBadgeProps): ReactElement => {
  const { type = BadgeType.blue, style = BadgeStyle.filled, size = BadgeSize.large, text, className = '', iconProps } = props;
  const { size: iconSize = 'small', type: iconType, alignment: iconAlignment = IconAlignment.left, Component} = iconProps ?? {};

  return (
    <div className={classNames(`badge badge--${type} badge--${style} badge--${size}`, className)}>
      {iconProps && iconAlignment === IconAlignment.left && (
        <iconProps.Component
          size={iconSize}
          type={iconType}
        />
      )}
      {text ? (
        <Text
          size="xsmall"
          className="badge__inner"
        >
          <>{text}</>
        </Text>
      ) : null}
      {iconProps && iconAlignment === IconAlignment.right && (
        <iconProps.Component
          size={iconSize}
          type={iconType}
        />
      )}
    </div>
  )
}
