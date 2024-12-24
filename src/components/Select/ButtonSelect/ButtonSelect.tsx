import React, { ReactElement, useRef, useId, useState } from 'react'
import classNames from 'classnames'
import { OptionItem } from '../../../helperComponents'
import { useGetElemSizes, useOnOutsideClick } from '../../../hooks'
import { Loading, ButtonSelectWrapper } from '../SharedComponents'
import { TButtonSelectPropTypes } from '../types'
import { noop } from '../../../utils/helpers'
import { useIsMobile } from '../../../hooks/useGetIsMobile'

export const ButtonSelect = (props: TButtonSelectPropTypes): ReactElement => {
  const {
    size,
    className,
    isLoading,
    options,
    name,
    setSelectedItem,
    setFieldValue,
    isRequiredField,
    selectedItem,
    labelLeftIconProps,
    tooltipAddons,
    dropdownWidth,
    avatar,
    labelRightIconComponent,
    optionRightIconComponent,
    align = 'left',
    value,
    placeHolder,
    offsets,
    dataId,
    type,
    isMobileFullScreen = false
  } = props

  const currentSelection = (value as TItemValue) || selectedItem

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)

  const { scrollHeight } = useGetElemSizes(scrollRef.current)

  const closeDropdown = () => setIsOpen(false)

  useOnOutsideClick(containerRef, closeDropdown, isOpen, useId())

  const onItemDeselect = () => onItemSelect(null)
  const isMobile = useIsMobile()

  const onItemSelect = (value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value)
    }

    closeDropdown()
  }

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
      if (!isSelected) {
        onItemSelect(value)
        return
      }
      if (!isRequiredField) {
        onItemDeselect()
      }
    }

  return (
    <ButtonSelectWrapper
      applySelectedItems={noop}
      size={size}
      className={className}
      dropdownWidth={dropdownWidth}
      align={align}
      offsets={offsets}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      containerRef={containerRef}
      setContainerRef={setContainerRef}
      dropdownRef={dropdownRef}
      setDropdownRef={setDropdownRef}
      placeHolder={placeHolder}
      dataId={dataId}
      type={type}
      isMobile={isMobile && isMobileFullScreen}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            ref={scrollRef}
            className={classNames('select__options__scroll', 'scrollbar', 'scrollbar--vertical', {
              'mr-6': scrollHeight > 300
            })}
          >
            {options.map((item: TSelectOption) => {
              const isSelected = item.value === currentSelection
              return (
                <OptionItem
                  tooltipAddons={tooltipAddons}
                  data={item}
                  key={item.value}
                  onClick={clickHandler(isSelected)}
                  labelLeftIconProps={labelLeftIconProps}
                  OptionRightIconComponent={optionRightIconComponent}
                  LabelRightIconComponent={labelRightIconComponent}
                  avatar={avatar}
                  disabled={item.disabled}
                  isSelected={isSelected}
                />
              )
            })}
          </div>
        </>
      )}
    </ButtonSelectWrapper>
  )
}
