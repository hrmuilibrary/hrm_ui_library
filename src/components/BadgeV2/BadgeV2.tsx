import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { BadgeSize, TBadgeV2Props } from './types'
import classNames from 'classnames'

export const BadgeV2 = (props: TBadgeV2Props): ReactElement => {
  const {
    type = 'blue',
    style = 'filled',
    size = BadgeSize.large,
    text,
    className = '',
    iconProps,
    withDot,
    dot,
    disabled,
    dataId = ''
  } = props
  const {
    size: iconSize = 'small',
    type: iconType,
    alignment: iconAlignment = 'left'
  } = iconProps ?? {}

  const baseClassName = classNames(
    `badge-v2 badge-v2--${type} badge-v2--${style} badge-v2--${size}`,
    { 'badge-v2--disabled': disabled },
    className
  )

  if (dot) {
    return <div className={classNames(baseClassName, 'badge-v2--dot')} data-id={dataId} />
  }

  return (
    <div className={baseClassName} data-id={dataId}>
      {withDot ? (
        <div
          className={classNames(baseClassName, 'badge-v2--dot badge-v2--with-dot')}
          data-id={dataId ? `${dataId}-dot` : ''}
        />
      ) : null}

      {!withDot && iconProps && iconAlignment === 'left' ? (
        <iconProps.Component
          size={iconSize}
          type={iconType}
          dataId={dataId ? `${dataId}-left-icon` : ''}
        />
      ) : null}
      {typeof text === 'string' || typeof text === 'number' ? (
        <Text size="xsmall" className="badge-v2__inner" dataId={dataId ? `${dataId}-text` : ''}>
          {text}
        </Text>
      ) : React.isValidElement(text) ? (
        text
      ) : null}
      {!withDot && iconProps && iconAlignment === 'right' ? (
        <iconProps.Component
          size={iconSize}
          type={iconType}
          dataId={dataId ? `${dataId}-right-icon` : ''}
        />
      ) : null}
    </div>
  )
}
