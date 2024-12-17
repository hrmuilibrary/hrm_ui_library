import React, { ReactElement, useRef, useState } from 'react'
import { TSingleSelectPropTypes } from '../types'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { SelectDesktop } from './SelectDesktop'
import classNames from 'classnames'
import { Input } from '../../Input'
import { noop } from '../../../utils/helpers'
import { SELECTED_VISIBLE_MIN_COUNT } from '../constants'
import { SelectMobile } from './SelectMobile'
import { IconCaretUpFilled } from '../../SVGIcons/IconCaretUpFilled'
import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled'

export const Select = (props: TSingleSelectPropTypes): ReactElement | null => {
  const {
    labelAddons,
    dataId,
    className,
    size,
    label,
    hasError,
    isValid,
    disabled,
    outerHelperText,
    isRequiredField,
    placeHolder,
    selectRightIconProps = {
      Component: IconCaretDownFilled,
      size: 'xsmall'
    },
    selectRightIconOpenedProps = {
      Component: IconCaretUpFilled,
      size: 'xsmall'
    },
    options,
    withSearch,
    setSelectedItem,
    setFieldValue,
    name,
    selectedItem,
    value,
    isMobileFullScreen = true,
    ...rest
  } = props
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(null)

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => {
    setIsOpen(false)
    setSearchValue('')
  }

  const onOpenOptions = (e: TClickEventType): void => {
    const result = e?.target as HTMLDivElement
    const className = result?.getAttribute('class')
    if (
      e &&
      className &&
      (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)
    ) {
      setIsOpen(!isOpen)
      e.preventDefault()
      return
    } else if (isOpen && !isWithSearch) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

  const leftIconProps = selectedOption?.optionLeftIcon?.Component
    ? {
        Component: selectedOption?.optionLeftIcon?.Component
      }
    : null

  const isWithSearch = withSearch && options.length > SELECTED_VISIBLE_MIN_COUNT

  const onSearch = (e: TChangeEventType) => {
    setSelectedOption(null)
    setSearchValue(e.target.value)
  }

  const onItemSelect = (value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value)
    }

    closeDropdown()
  }

  const onItemDeselect = () => onItemSelect(null)

  const currentSelection = (value as TItemValue) || selectedItem

  return (
    <div
      data-id={`${dataId}-content`}
      className={classNames(`select select--${size}`, className, {
        'select--opened': isOpen
      })}
      ref={containerRef}
    >
      <Input
        onClick={disabled ? noop : onOpenOptions}
        size={size === 'large' ? 'large' : 'small'}
        dataId={dataId}
        hasError={hasError}
        className="select__input"
        label={label}
        onChange={onSearch}
        required={isRequiredField}
        leftIconProps={leftIconProps}
        rightIconProps={isOpen ? selectRightIconOpenedProps : selectRightIconProps}
        readonly={!isWithSearch}
        placeholder={placeHolder}
        currentValue={searchValue || selectedOption?.label.toString() || ''}
        isValid={isValid}
        disabled={disabled}
        helperText={isOpen ? '' : outerHelperText}
        ref={inputRef}
        labelAddons={labelAddons}
        autoComplete="false"
      />
      {isMobile && isMobileFullScreen ? (
        <SelectMobile
          {...rest}
          options={options}
          isOpen={isOpen}
          closeDropdown={closeDropdown}
          currentSelection={currentSelection}
          isRequiredField={isRequiredField}
          onItemDeselect={onItemDeselect}
          onItemSelect={onItemSelect}
        />
      ) : (
        <SelectDesktop
          {...rest}
          onItemDeselect={onItemDeselect}
          onItemSelect={onItemSelect}
          currentSelection={currentSelection}
          isRequiredField={isRequiredField}
          options={options}
          inputRef={inputRef.current}
          containerRef={containerRef.current}
          isOpen={isOpen}
          closeDropdown={closeDropdown}
          setSelectedOption={setSelectedOption}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
    </div>
  )
}
