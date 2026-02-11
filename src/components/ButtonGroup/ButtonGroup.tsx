import React, { useState } from 'react'
import { IButtonGroup } from './types'
import classNames from 'classnames'
import { ButtonGroupItem } from './ButtonGroupItem'

export const ButtonGroup = ({
  buttons,
  activeIndex = 0,
  className,
  type,
  size,
  disabled,
  onTabChange,
  theme = 'light'
}: IButtonGroup) => {
  const [activeItem, setActiveItem] = useState<number | string>(activeIndex)

  const handleItemClick = (index: number | string) => {
    if (disabled || activeItem === index) return
    setActiveItem(index)
    onTabChange?.(index)
  }

  return (
    <div className={classNames('button-group', className)} data-theme={theme}>
      {buttons.map((button) => {
        return (
          <ButtonGroupItem
            key={`buttonGroup_${button.id}`}
            {...button}
            type={type}
            size={size}
            isActive={activeItem === button.id}
            disabled={disabled}
            onClick={() => handleItemClick(button.id)}
            theme={theme}
          />
        )
      })}
    </div>
  )
}
