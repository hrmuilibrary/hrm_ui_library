/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react'
import { ErrorMessage, Label } from '../../helperComponents'
import { TTextAreaTypeProps } from './types'
import { Text } from '../Text'
import classNames from 'classnames'
import IconCheckmarkCircleFilled from '../SVGIcons/IconCheckmarkCircleFilled'

export const Textarea = React.forwardRef<HTMLTextAreaElement, TTextAreaTypeProps>(
  (
    {
      className,
      error,
      hasError,
      label,
      disabled,
      currentValue,
      changeHandler,
      placeHolder,
      onChange,
      required = false,
      maxCount,
      helperText,
      successMessage,
      dataId = '',
      labelAddons,
      isValid,
      setFieldValue,
      ...rest
    },
    ref
  ): React.ReactElement => {
    // const isErrorVisible = hasError !== undefined ? hasError : !!error

    const handleChange = (event: TChangeEventType) => {
      if (changeHandler) {
        changeHandler(event)
      }
      if (onChange) {
        onChange(event)
      }
    }
    const currentLength = useMemo(() => {
      if (currentValue) {
        return currentValue.length
      }
      if (rest && rest.value && typeof rest.value === 'string') {
        return rest.value.length
      }
      return 0
    }, [rest, currentValue])

    return (
      <div className={classNames('textarea', className, { 'textarea--invalid': hasError })}>
        <Label text={label} required={required} disabled={disabled} labelAddons={labelAddons} />
        <div className="textarea__inner">
          {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore */}
          <textarea
            data-id={dataId}
            disabled={disabled}
            ref={ref}
            placeholder={placeHolder}
            {...rest}
            onChange={handleChange}
            {...(currentValue ? { value: currentValue } : {})}
          />
        </div>

        {error || successMessage || helperText || maxCount ? (
          <div className="textarea__message mt-8">
            {error && <ErrorMessage message={error} icon="infoFilled" dataId={dataId} />}
            {successMessage ? (
              <Text size="small" type="success" className="flexbox align-items--center">
                <>
                  <IconCheckmarkCircleFilled type="success" size="xsmall" />
                  <span className="ml-4">{successMessage}</span>
                </>
              </Text>
            ) : null}
            {helperText && !successMessage ? (
              <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
                {helperText}
              </Text>
            ) : null}

            {maxCount ? (
              <Text
                size="small"
                type={disabled ? 'disabled' : 'secondary'}
                className="textarea__counter"
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

Textarea.displayName = 'Textarea'
