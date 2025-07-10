import React, { forwardRef, ReactElement } from 'react'
import { TRadioProps } from './types'
import { Text } from '../Text'
import classnames from 'classnames'

export const Radio = forwardRef((props: TRadioProps, _ref): ReactElement | null => {
  const {
    name,
    label,
    helperText,
    disabled,
    setFieldValue,
    isSelected,
    value,
    className = '',
    onClick,
    dataId = '',
    iconProps
  } = props
  const isChecked = !!value || !!isSelected
  const iconElement = iconProps ? iconProps : <span className="controller__icon"></span>

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <label
      className={classnames('controller', 'controller--radio', className, {
        'controller--disabled': disabled
      })}
    >
      <input
        data-id={dataId}
        type="radio"
        tabIndex={0}
        onChange={changeHandler}
        checked={isSelected}
        disabled={disabled}
      />
      {iconElement}
      {label ? (
        <div className="controller__right">
          <Text type={disabled ? 'disabled' : 'primary'} className="controller__label">
            {label}
          </Text>
          {helperText ? (
            <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
              {helperText}
            </Text>
          ) : null}
        </div>
      ) : null}
    </label>
  )
})

Radio.displayName = 'Radio'
