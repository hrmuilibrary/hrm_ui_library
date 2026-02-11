import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { TStatusProps } from './types'
import classNames from 'classnames'

enum StatusTextSize {
  large = 'standard',
  medium = 'small',
  small = 'xsmall'
}

export const Status = (props: TStatusProps): ReactElement => {
  const {
    type = 'primary',
    size = 'large',
    text = '',
    children,
    className = '',
    leftIconProps,
    rightIconProps,
    withCircle = true,
    withBackground = false,
    dataId,
    theme = 'light'
  } = props

  return (
    <div
      className={classNames(`status status--${size}`, className, {
        status__withBackground: withBackground,
        [`status__withBackground--${type}`]: withBackground
      })}
      data-theme={theme}
    >
      {withCircle ? (
        <span
          className={classNames('status__circle', 'mr-6', {
            [`status__circle--${type}`]: true
          })}
        />
      ) : null}
      {leftIconProps?.Component ? (
        <leftIconProps.Component size="xsmall" type={type} className="mr-6" {...leftIconProps} />
      ) : null}
      <div className="status__label">
        <Text
          theme={theme}
          className="status__label-text"
          dataId={`${dataId}-text`}
          weight={withBackground ? 'semibold' : 'regular'}
          type={!withCircle || withBackground ? type : 'primary'}
          size={StatusTextSize[size]}
        >
          {text}
        </Text>
        {children}
      </div>
      {rightIconProps}
    </div>
  )
}
