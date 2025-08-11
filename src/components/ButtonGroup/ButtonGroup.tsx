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
  onTabChange
}: IButtonGroup) => {
  const [activeItem, setActiveItem] = useState(activeIndex)

  const handleItemClick = (index: number) => {
    if (disabled || activeItem === index) return
    setActiveItem(index)
    onTabChange?.(index)
  }

  return (
    <div className={classNames('button-group', className)}>
      {buttons.map((button, index) => {
        return (
          <ButtonGroupItem
            key={index}
            {...button}
            type={type}
            size={size}
            isActive={activeItem === index}
            disabled={disabled}
            onClick={() => handleItemClick(index)}
          />
        )
      })}
    </div>
  )
}
