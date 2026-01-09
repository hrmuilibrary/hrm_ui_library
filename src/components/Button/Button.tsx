import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { TButtonPropTypes } from './types'
import { Loader } from '../../helperComponents/Loader'
import { ICON_SIZE_MAPPING, ICON_TYPE_MAPPING, LITE_LOADER_TYPES } from './consts'

export const Button = (props: TButtonPropTypes): ReactElement => {
  const {
    buttonText,
    type = 'primary',
    size = 'large',
    className = '',
    iconProps,
    buttonActionType = 'button',
    disabled,
    pressed,
    isLoading,
    formId,
    dataId = '',
    onClick,
    refHandler = null,
    children,
    ...rest
  } = props

  const justIcon = !buttonText && !children && iconProps !== undefined

  const clickHandler = (e: TClickEventType) => {
    if (pressed || disabled || isLoading) {
      return
    }

    onClick?.(e)
  }

  return (
    <button
      ref={refHandler}
      data-id={dataId}
      disabled={disabled}
      type={buttonActionType}
      className={classnames(
        'btn',
        `btn--${type}`,
        `btn--${size}`,
        {
          pressed: pressed,
          'btn--icon': justIcon,
          [`btn--icon-${iconProps?.alignment || 'left'}`]:
            !isLoading && !justIcon && iconProps?.Component
        },
        className
      )}
      onClick={clickHandler}
      form={formId}
      {...rest}
    >
      {isLoading ? (
        <Loader size={size} type={LITE_LOADER_TYPES.indexOf(type) === -1 ? 'dark' : 'lite'} />
      ) : (
        <>
          {iconProps?.Component ? (
            <iconProps.Component
              size={ICON_SIZE_MAPPING[iconProps.size || size]}
              type={ICON_TYPE_MAPPING[iconProps.type || type]}
              className="btn__icon"
            />
          ) : null}
          {/* {buttonSecondaryText ? <span className="btn__text">{buttonSecondaryText}</span> : null} */}
          {buttonText || children ? (
            <span className="btn__text">{buttonText || children}</span>
          ) : null}
        </>
      )}
    </button>
  )
}
