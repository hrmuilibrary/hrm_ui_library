import React, { useMemo } from 'react'
import { IButtonGroupItem } from './types'
import { Text } from '../Text'
import classNames from 'classnames'
import { ICON_SIZE_MAPPING, TEXT_SIZE_MAPPING } from './consts'

export const ButtonGroupItem = ({
  buttonText,
  size = 'medium',
  type = 'primary',
  isActive,
  disabled,
  onClick,
  className,
  icons
}: IButtonGroupItem) => {
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    onClick?.()
  }

  const iconType = useMemo(() => {
    if (disabled) {
      return 'disabled'
    }
    if (isActive) {
      return 'primary'
    }
    return 'tertiary'
  }, [disabled, isActive])

  return (
    <div
      className={classNames(
        'button-group-item',
        `button-group-item__${type}`,
        `button-group-item__${size}`,
        { active: isActive, disabled },
        className
      )}
      onClick={onClickHandler}
    >
      {icons?.left?.Component ? (
        <icons.left.Component size={ICON_SIZE_MAPPING[size]} type={iconType} />
      ) : null}
      <Text size={TEXT_SIZE_MAPPING[size]} type={iconType}>
        {buttonText}
      </Text>
      {icons?.right?.Component ? (
        <icons.right.Component size={ICON_SIZE_MAPPING[size]} type={iconType} />
      ) : null}
    </div>
  )
}
