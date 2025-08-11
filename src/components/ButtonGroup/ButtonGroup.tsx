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
  onChange
}: IButtonGroup) => {
  const [activeItem, setActiveItem] = useState(activeIndex)

  const handleClick = (index: number) => {
    if (disabled || activeItem === index) return
    setActiveItem(index)
    onChange?.(index)
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
            onClick={() => handleClick(index)}
          />
        )
      })}
    </div>
  )
}
