import React, { useMemo } from 'react'
import { ErrorMessage } from '../../helperComponents/ErrorMessage'
import { Label } from '../../helperComponents/Label'
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
      theme = 'light',
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
      <div
        className={classNames('textarea', className, { 'textarea--invalid': hasError })}
        data-theme={theme}
      >
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
            {error && (
              <ErrorMessage theme={theme} message={error} icon="infoFilled" dataId={dataId} />
            )}
            {successMessage ? (
              <Text
                size="small"
                type="success"
                className="flexbox align-items--center"
                theme={theme}
              >
                <>
                  <IconCheckmarkCircleFilled type="success" size="xsmall" />
                  <span className="ml-4">{successMessage}</span>
                </>
              </Text>
            ) : null}
            {helperText && !successMessage ? (
              <Text size="small" type={disabled ? 'disabled' : 'secondary'} theme={theme}>
                {helperText}
              </Text>
            ) : null}

            {maxCount ? (
              <Text
                size="small"
                type={disabled ? 'disabled' : 'secondary'}
                className="textarea__counter"
                theme={theme}
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
