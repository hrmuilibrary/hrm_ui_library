import React, { forwardRef, useMemo } from 'react'
import classnames from 'classnames'
import { Label } from '../../helperComponents/Label'
import { TSwitcherProps } from './types'
import IconMoon from '../SVGIcons/IconMoon'
import IconSun from '../SVGIcons/IconSun'

export const DarkModeSwitcher = forwardRef((props: TSwitcherProps, ref): React.ReactElement => {
  const {
    onClick,
    id = '',
    name,
    value,
    disabled,
    label,
    inlineType = false,
    dataId,
    size = 'small',
    setFieldValue,
    selectedValue,
    className = '',
    labelAddons,
    orientation = 'right',
    hasSpaceBetween = true
  } = props
  const isChecked = !!value || !!selectedValue

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked)
    }

    if (onClick) {
      onClick(!isChecked)
    }
  }

  const labelComponent = useMemo(
    () => (
      <Label
        text={label}
        disabled={disabled}
        labelAddons={labelAddons}
        size={inlineType ? 'standard' : size}
        className="switcher__label"
      />
    ),
    [label, disabled, labelAddons, inlineType, size]
  )

  const iconSize = size === 'small' ? 'xsmall' : 'small'
  return (
    <div
      className={classnames('dark-mode-switcher', {
        'dark-mode-switcher--inline': inlineType,
        'dark-mode-switcher--space-between': hasSpaceBetween
      })}
    >
      {label && orientation === 'right' && labelComponent}
      <label
        id={id}
        className={classnames(
          'controller',
          'controller--switch',
          `controller--switch-${size}`,
          className,
          { 'controller--disabled': disabled }
        )}
      >
        <input
          data-id={dataId}
          type="checkbox"
          tabIndex={0}
          onChange={changeHandler}
          checked={isChecked}
          disabled={disabled}
        />
        <span className="controller__icon">
          {selectedValue ? <IconSun size={iconSize} /> : <IconMoon size={iconSize} />}
          <span className="controller__icon__inner"></span>
        </span>
      </label>
      {label && orientation === 'left' && labelComponent}
    </div>
  )
})

DarkModeSwitcher.displayName = 'DarkModeSwitcher'
