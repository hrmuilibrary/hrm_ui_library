import React, { ReactElement, useEffect, useId, useMemo, useState, forwardRef } from 'react'

import { OptionsWrapper } from './OptionsWrapper'
import { Footer, InputSelectWrapper, ButtonSelectWrapper } from '../SharedComponents'
import { useOnOutsideClick } from '../../../hooks'
import { TMultiSelectPropTypes } from '../types'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { SELECT_TRANSLATIONS } from '../localization'

export const MultiSelect = forwardRef((props: TMultiSelectPropTypes, _ref): ReactElement => {
  const {
    isMobileFullScreen = true,
    options,
    footerButtonProps,
    selectedItems,
    setSelectedItems,
    name,
    setFieldValue,
    value,
    label,
    placeHolder,
    isRequiredField,
    labelAddons,
    className = '',
    disabled,
    dropdownWidth,
    align = 'left',
    size,
    isButtonSelect,
    checkboxInfo,
    translations,
    hasError,
    language = 'en',
    hideSelectedOptions = false,
    ...rest
  } = props

  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)

  const initialSelected = (value as TSelectedValue[]) || selectedItems || []

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>(initialSelected)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  const hasChange = useMemo(() => {
    if (selectedValues?.length !== initialSelected?.length) {
      return true
    }

    return (
      selectedValues?.findIndex(
        (value) => initialSelected?.findIndex((i: TSelectOption) => i.value === value.value) === -1
      ) !== -1
    )
  }, [selectedValues, initialSelected])

  useEffect(() => {
    setSelectedValues((value as TSelectedValue[]) || [])
  }, [value])

  useEffect(() => {
    if (selectedItems) {
      setSelectedValues(selectedItems || [])
    }
  }, [selectedItems])

  const cancelSelectedItems = () => {
    setSelectedValues(initialSelected)
    closeDropdown()
  }

  useOnOutsideClick(containerRef, cancelSelectedItems, isOpen, useId())

  const submitSelectedValue = (selections: TSelectedValue[], isChecked: boolean) => {
    if (setSelectedItems) {
      setSelectedItems(selections, isChecked)
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections)
    }

    closeDropdown()
  }

  const applySelectedItems = (isChecked = false) => {
    submitSelectedValue(selectedValues, isChecked)
  }

  const WrapperComponent = isButtonSelect ? ButtonSelectWrapper : InputSelectWrapper

  const localizations = { ...SELECT_TRANSLATIONS[language], ...translations }

  const isMobile = useIsMobile()

  return (
    <WrapperComponent
      dropdownRef={dropdownRef}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      containerRef={containerRef}
      setContainerRef={setContainerRef}
      dropdownWidth={dropdownWidth}
      setDropdownRef={setDropdownRef}
      size={size}
      label={label}
      align={align}
      disabled={disabled}
      className={className}
      labelAddons={labelAddons}
      placeHolder={placeHolder}
      selectedValues={selectedValues}
      isRequiredField={isRequiredField}
      overflowText={localizations.overflowText}
      hasError={hasError}
      applySelectedItems={applySelectedItems}
      isMobile={isMobile && isMobileFullScreen}
      hideSelectedOptions={hideSelectedOptions}
    >
      <>
        <OptionsWrapper
          // @ts-ignore
          options={options}
          isOpen={isOpen}
          translations={localizations}
          setIsOpen={setIsOpen}
          dropdownRef={dropdownRef}
          openDropdown={openDropdown}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          containerRef={containerRef}
          dropdownWidth={dropdownWidth}
          isMobileFullScreen={isMobileFullScreen}
          applySelectedItems={applySelectedItems}
          {...rest}
        />
        {options.length && !(isMobile && isMobileFullScreen) ? (
          <Footer
            checkboxInfo={checkboxInfo}
            hasChange={hasChange}
            buttonProps={footerButtonProps}
            onCancel={cancelSelectedItems}
            onApply={applySelectedItems}
            language={language}
          />
        ) : null}
      </>
    </WrapperComponent>
  )
})

MultiSelect.displayName = 'MultiSelect'
