import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { ChipCustomType, TChipsProps } from './types'
import classNames from 'classnames'
import IconDismissCircleFilled from '../SVGIcons/IconDismissCircleFilled'
import { ICON_SIZE_MAPPING, TEXT_SIZE_MAPPING } from './consts'

export const Chips = (props: TChipsProps): ReactElement => {
  const {
    type = 'filled',
    color = 'primary',
    size = 'large',
    text,
    disabled,
    className = '',
    leftIconProps,
    withAction,
    onClick,
    onRemove,
    dataId = '',
    id = ''
  } = props

  const customType = disabled
    ? 'disabled'
    : type == ChipCustomType.filled
      ? ChipCustomType.inverse
      : color

  const handleClick = (event: TClickEventType) => {
    event.preventDefault()
    event.stopPropagation()
    onClick?.(event)
  }

  const handleRemove = (event: TClickEventType) => {
    event.preventDefault()
    event.stopPropagation()
    onRemove?.(event)
  }

  return (
    <div
      className={classNames(
        `chips chips--${type} chips--${disabled ? 'disabled' : color} chips--${size}`,
        className
      )}
      id={id}
      onClick={handleClick}
    >
      {leftIconProps?.Component ? (
        <leftIconProps.Component
          dataId={`${dataId}-icon`}
          size={ICON_SIZE_MAPPING[size]}
          type={customType}
          className={classNames({ 'mr-6': !!text })}
          {...leftIconProps}
        />
      ) : null}
      {text ? (
        <Text
          dataId={`${dataId}-text`}
          type={customType}
          size={TEXT_SIZE_MAPPING[size]}
          className="chips__label"
        >
          <>{text}</>
        </Text>
      ) : null}
      {withAction && (
        <IconDismissCircleFilled
          dataId={`${dataId}-icon`}
          size={ICON_SIZE_MAPPING[size]}
          type={customType}
          className="chips__delete ml-6"
          onClick={handleRemove}
        />
      )}
    </div>
  )
}
