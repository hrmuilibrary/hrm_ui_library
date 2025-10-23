import React, { ReactElement, useMemo, useRef } from 'react'
import classNames from 'classnames'
import { Button } from './Button/Button'

import { useGetHasBottomSpace } from '../../../../hooks'
import { TSelectWrapperProps } from '../../types'
import { noop } from '../../../../utils/helpers'
import { useChangePositionsOnScroll } from '../../../../hooks/useChangePositionsOnScroll'
import { MobileWrapper } from '../../MultiSelect/MobileWrapper'
import { DesktopWrapper } from '../../MultiSelect/DesktopWrapper'

export const ButtonSelectWrapper = (props: TSelectWrapperProps): ReactElement => {
  const {
    offsets,
    children,
    size,
    className,
    dropdownWidth,
    align = 'left',
    isOpen,
    setIsOpen,
    containerRef,
    setContainerRef,
    dropdownRef,
    setDropdownRef,
    selectedValues,
    placeHolder,
    dataId,
    disabled,
    modalApplyButtonText,
    type = 'secondary',
    applySelectedItems,
    isMobile
  } = props

  const buttonRef = useRef<HTMLButtonElement>(null)

  const openDropdown = () => setIsOpen(true)

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: buttonRef.current
  })

  const selectedItemsLabels = useMemo(() => {
    if (isMobile)
      return selectedValues && selectedValues.length > 0 ? selectedValues.length.toString() : ''
    if (!selectedValues || selectedValues?.length === 0) return ''
    if (selectedValues?.length === 1) return `${selectedValues[0].label}`

    return ` ${selectedValues[0].label} +${selectedValues.length - 1}`
  }, [selectedValues])

  useChangePositionsOnScroll(buttonRef?.current, dropdownRef, hasBottomSpace)

  return (
    <div className={classNames(`select select--${size}`, className)} ref={setContainerRef}>
      <Button
        size={size}
        type={type}
        dataId={dataId}
        isOpen={isOpen}
        buttonText={placeHolder || ''}
        selectedItemsLabels={selectedItemsLabels}
        onClick={disabled ? noop : openDropdown}
        refHandler={buttonRef}
        className="select_button"
      />

      <>
        {isMobile ? (
          <MobileWrapper
            applySelectedItems={applySelectedItems}
            isOpen={isOpen}
            closeDrodown={() => setIsOpen(false)}
            modalApplyButtonText={modalApplyButtonText}
          >
            {children}
          </MobileWrapper>
        ) : (
          <DesktopWrapper
            offsets={offsets}
            setDropdownRef={setDropdownRef}
            isOpen={isOpen}
            align={align}
            dropdownWidth={dropdownWidth}
            inputRef={buttonRef.current}
            dropdownRef={dropdownRef}
            containerRef={containerRef}
          >
            {children}
          </DesktopWrapper>
        )}
      </>
    </div>
  )
}
