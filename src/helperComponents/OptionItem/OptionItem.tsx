import classNames from 'classnames'
import React, { useCallback } from 'react'
import { Avatar } from '../../components/Avatar'
import { Checkbox } from '../../components/Checkbox'
import { IconCheckmark } from '../../components/SVGIcons/IconCheckmark'
import { Tooltip } from '../../components/Tooltip'
import { TSelectItemProps } from './types'

export const OptionItem = (props: TSelectItemProps): JSX.Element => {
  const {
    data,
    onClick,
    disabled,
    avatar,
    isSelected,
    labelLeftIconProps,
    LabelRightIconComponent,
    OptionRightIconComponent,
    isCheckbox,
    className = '',
    tooltipAddons,
    dataId = '',
    style = {}
  } = props

  const { label, meta, value, optionLeftIcon } = data

  const handleClick = useCallback(
    (e: TClickEventType) => {
      e.preventDefault()
      e.stopPropagation()

      if (disabled) {
        return
      }
      onClick({ value, label, meta })
    },
    [disabled, value, label, onClick]
  )

  const optionContent = (
    <div
      data-id={dataId}
      id={`${value}`}
      className={classNames(
        'select__option',
        {
          'select__option--disabled': disabled
        },
        className
      )}
      onClick={handleClick}
      style={style}
    >
      {isCheckbox ? (
        <Checkbox className="mr-8" selectedValue={isSelected} disabled={disabled} />
      ) : null}
      {!isCheckbox && isSelected ? (
        <IconCheckmark size="xsmall" type={disabled ? 'disabled' : 'brand'} className="mr-8" />
      ) : null}
      <div className="select__option__inner">
        {optionLeftIcon && optionLeftIcon.Component ? (
          <optionLeftIcon.Component {...optionLeftIcon} size="small" className="mr-8" />
        ) : null}
        {avatar ? <Avatar size="xxsmall" imagePath={avatar} className="mr-4" /> : null}
        {labelLeftIconProps?.Component ? (
          <labelLeftIconProps.Component
            size="xsmall"
            type={disabled ? 'disabled' : 'primary'}
            className="mr-4"
            {...labelLeftIconProps}
          />
        ) : null}
        <div className="select__option__content" data-id={dataId}>
          <span className={`select__option__text pr-4 ${disabled ? 'color-disabled' : ''}`}>
            {label}
          </span>
          {LabelRightIconComponent && LabelRightIconComponent(value)}

          {meta ? (
            <span className={`select__option__meta ${disabled ? 'color-disabled' : ''}`}>
              {meta}
            </span>
          ) : null}
        </div>
      </div>
      {OptionRightIconComponent && OptionRightIconComponent(value)}
    </div>
  )

  return tooltipAddons ? (
    <>
      <Tooltip {...tooltipAddons} text={`${label}`} id={`${value}`} />
      {optionContent}
    </>
  ) : (
    optionContent
  )
}
