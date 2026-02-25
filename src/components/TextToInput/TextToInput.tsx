import React, { useCallback, useMemo, useState } from 'react'
import InputMask from 'react-input-mask'
import classNames from 'classnames'
import { NumericFormat } from 'react-number-format'
import { TextToInputCustomProps } from './types'
import { ErrorMessage } from '../../helperComponents/ErrorMessage'
import { Label } from '../../helperComponents/Label'
import { Text } from '../Text'

import IconCheckmarkCircleFilled from '../SVGIcons/IconCheckmarkCircleFilled'

export const TextToInput = React.forwardRef<HTMLInputElement, TextToInputCustomProps>(
  (
    {
      datePlaceHolderText,
      className,
      size = 'medium',
      error,
      hasError,
      label,
      mask,
      maskChar,
      maskPlaceholder,
      currentValue,
      name,
      leftIconProps,
      rightIconProps,
      disabled,
      required,
      readonly,
      placeholder,
      type = 'text',
      helperText,
      successMessage,
      maxCount,
      setFieldValue,
      handleChange,
      dataId = '',
      isValid,
      allowLeadingZeros,
      thousandSeparator = '',
      allowNegative = false,
      hideCounter = false,
      labelAddons,
      witUpperCase = false,
      isAllowed,
      onChange,
      handleBlurEvent,
      ...rest
    },
    ref
  ): React.ReactElement => {
    const isErrorVisible = hasError !== undefined ? hasError : !!error
    const placeHolder = label === placeholder ? '' : placeholder || datePlaceHolderText
    const [showInput, setShowInput] = useState(false)

    const changeHandler = useCallback(
      (event: TChangeEventType) => {
        const eventValue = event.target.value
        const valueWithoutSeparator =
          type === 'numeric'
            ? eventValue.replace(new RegExp(thousandSeparator, 'g'), '')
            : eventValue

        if (eventValue.length - 1 === maxCount) {
          return
        }
        if (onChange) {
          onChange(event)
        }
        if (setFieldValue && name) {
          setFieldValue(name, valueWithoutSeparator)
        }
        if (handleChange) {
          handleChange(
            event,
            !witUpperCase ? valueWithoutSeparator : valueWithoutSeparator.toUpperCase()
          )
        }
      },
      [currentValue, name, witUpperCase, maxCount]
    )

    const onKeyDownCallback = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          rest?.onKeyDown?.(event)
          setShowInput(false)
        }
      },
      [rest]
    )

    const currentLength = useMemo(() => {
      if (currentValue) {
        return currentValue.length
      }
      if (rest && rest.value && typeof rest.value === 'string') {
        return rest.value.length
      }
      return 0
    }, [rest, currentValue])

    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
      rest?.onBlur?.(e as any)
      handleBlurEvent?.(e)
      setShowInput(false)
    }

    const input = mask ? (
      // @ts-ignore
      <InputMask
        name={name}
        mask={mask}
        // @ts-ignore
        ref={() => ref && ref()}
        {...rest}
        placeholder={placeHolder}
        onBlur={onBlurCallback}
        onChange={changeHandler}
        onKeyDown={onKeyDownCallback}
        disabled={disabled}
        data-id={dataId}
        className={`${isErrorVisible ? 'with-error-styles' : ''}`}
        {...(currentValue ? { value: currentValue } : {})}
        maskChar={maskChar}
        maskPlaceholder={maskPlaceholder}
      />
    ) : type === 'numeric' ? (
      // @ts-ignore
      <NumericFormat
        {...rest}
        name={name}
        onChange={changeHandler}
        placeholder={placeHolder}
        readOnly={readonly}
        allowLeadingZeros={allowLeadingZeros}
        thousandSeparator={thousandSeparator}
        allowNegative={allowNegative}
        maxLength={maxCount}
        inputMode={'numeric'}
        disabled={disabled}
        isAllowed={isAllowed}
        onBlur={onBlurCallback}
        onKeyDown={onKeyDownCallback}
        {...(currentValue !== undefined ? { value: currentValue } : {})}
      />
    ) : (
      // @ts-ignore
      <input
        readOnly={readonly}
        disabled={disabled}
        name={name}
        ref={ref}
        type={type}
        placeholder={placeHolder}
        data-id={dataId}
        {...rest}
        onBlur={onBlurCallback}
        onChange={changeHandler}
        onKeyDown={onKeyDownCallback}
        {...(currentValue !== undefined ? { value: currentValue } : {})}
      />
    )

    return (
      <div
        className={classNames(`input input--${size}`, className, {
          'input--icon-left': leftIconProps,
          'input--icon-right': rightIconProps,
          'input--invalid': isErrorVisible || !!error,
          'input--valid': isValid,
          'input--disabled': disabled
        })}
      >
        {showInput ? (
          <>
            <Label
              text={label}
              required={required}
              disabled={disabled}
              labelAddons={labelAddons}
              dataId={dataId}
            />
            <div className="input__inner">
              {input}
              {leftIconProps?.Component ? (
                <leftIconProps.Component
                  size="small"
                  {...leftIconProps}
                  className={classNames('input__icon', 'input__icon--left', {
                    [leftIconProps.className || '']: !!leftIconProps.className
                  })}
                />
              ) : null}
              {rightIconProps?.Component ? (
                <rightIconProps.Component
                  size="small"
                  {...rightIconProps}
                  className={classNames('input__icon', 'input__icon--right', {
                    [rightIconProps.className || '']: !!rightIconProps.className
                  })}
                />
              ) : null}
            </div>
          </>
        ) : (
          <Text size={size === 'small' ? 'medium' : 'large'} onClick={() => setShowInput(true)}>
            {currentValue || placeHolder || '-'}
          </Text>
        )}

        {error || successMessage || helperText || maxCount ? (
          <div className="input__message mt-8">
            {isErrorVisible && error ? (
              <ErrorMessage message={error} icon="infoFilled" dataId={dataId} />
            ) : null}
            {successMessage ? (
              <Text size="small" type="success" className="flexbox align-items--center">
                <>
                  <IconCheckmarkCircleFilled type="success" size="xsmall" />
                  <span className="ml-4">{successMessage}</span>
                </>
              </Text>
            ) : null}
            {helperText && !successMessage && !(isErrorVisible || error) ? (
              <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
                {helperText}
              </Text>
            ) : null}

            {maxCount && !hideCounter && !hasError ? (
              <Text
                size="small"
                type={disabled ? 'disabled' : 'secondary'}
                className="input__counter"
              >
                {`${currentLength}/${maxCount}`}
              </Text>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }
)

TextToInput.displayName = 'FormInput'
