/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, ReactElement, useRef, useState } from 'react'
import { TSingleSelectPropTypes } from '../types'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { SelectDesktop } from './SelectDesktop'
import classNames from 'classnames'
import { Input } from '../../Input'
import { noop } from '../../../utils/helpers'
import { SELECTED_VISIBLE_MIN_COUNT } from '../constants'
import { SelectMobile } from './SelectMobile'
import { IconChevronUp } from '../../SVGIcons/IconChevronUp'
import { IconChevronDown } from '../../SVGIcons/IconChevronDown'
import { SELECT_TRANSLATIONS } from '../localization'
import { Button } from '../../Button'

export const Select = forwardRef((props: TSingleSelectPropTypes, _ref): ReactElement | null => {
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
      Component: IconChevronDown,
      size: 'xsmall'
    },
    selectRightIconOpenedProps = {
      Component: IconChevronUp,
      size: 'xsmall'
    },
    options,
    withSearch = false,
    setSelectedItem,
    setFieldValue,
    name,
    selectedItem,
    value,
    isMobileFullScreen = true,
    language = 'en',
    translations,
    isButtonSelect,
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
  const localizations = { ...SELECT_TRANSLATIONS[language], ...translations }
  return (
    <div
      data-id={`${dataId}-content`}
      className={classNames(`select select--${size}`, className, {
        'select--opened': isOpen
      })}
      ref={containerRef}
    >
      {!isButtonSelect && (
        <Input
          onClick={disabled ? noop : onOpenOptions}
          size={size === 'large' ? 'large' : 'small'}
          dataId={dataId}
          hasError={hasError}
          className="select__input"
          label={label}
          handleChange={onSearch}
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
      )}
      {/*// TODO add buttonSelect option for desktop view*/}
      {isButtonSelect && (
        <Button
          size={size}
          type="secondary"
          dataId={dataId}
          iconProps={selectRightIconProps}
          buttonText={placeHolder || ''}
          onClick={disabled ? noop : openDropdown}
          className="select_button"
        />
      )}
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
          translations={localizations}
          setSelectedOption={setSelectedOption}
          withSearch={withSearch}
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
          translations={localizations}
        />
      )}
    </div>
  )
})

Select.displayName = 'Select'
