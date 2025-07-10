import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Label } from '../../helperComponents'
import { TSwitcherProps } from './types'
import IconCheckmark from '../SVGIcons/IconCheckmark'

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
    labelAddons
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

  return (
    <div className={classnames('switcher', { 'switcher--inline': inlineType })}>
      {label && (
        <Label
          text={label}
          disabled={disabled}
          labelAddons={labelAddons}
          size={inlineType ? 'standard' : size}
          className="switcher__label"
        />
      )}
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
            <IconCheckmark size="xsmall" className="controller__mark" />
          </span>
        </span>
      </label>
    </div>
  )
})

Switcher.displayName = 'Switcher'
