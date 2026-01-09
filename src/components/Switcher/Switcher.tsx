import React, { forwardRef, useMemo } from 'react'
import classnames from 'classnames'
import { Label } from '../../helperComponents/Label'
import { TSwitcherProps } from './types'

export const Switcher = forwardRef((props: TSwitcherProps, ref): React.ReactElement => {
  const {
    onClick,
    id = '',
    name,
    value,
    disabled,
    label,
    inlineType = false,
    dataId,
    size = 'large',
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

  return (
    <div
      className={classnames('switcher', {
        'switcher--inline': inlineType,
        'switcher--space-between': hasSpaceBetween
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
          <span className="controller__icon__inner">
            <span className="controller__mark" />
          </span>
        </span>
      </label>
      {label && orientation === 'left' && labelComponent}
    </div>
  )
})

Switcher.displayName = 'Switcher'
