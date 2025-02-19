import classNames from 'classnames'
import React, { ReactElement, useCallback, useEffect, useId, useMemo, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { DROPDOWN_AND_INPUT_GAP } from '../../../../consts'
import { OptionItem } from '../../../../helperComponents'
import {
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace,
  useOnOutsideClick
} from '../../../../hooks'
import { useChangePositionsOnScroll } from '../../../../hooks/useChangePositionsOnScroll'
import { Empty } from '../../../Empty'
import { Text } from '../../../Text'
import { Loading } from '../../SharedComponents'
import { DROPDOWN_HEIGHT, DROPDOWN_WIDTH, ITEM_SIZE } from '../../constants'
import { ISingleSelectDesktopProps } from '../../types'
import { filterOptions } from '../helpers'

export const SelectDesktop = (props: ISingleSelectDesktopProps): ReactElement | null => {
  const {
    currentSelection,
    avatar,
    options,
    isLoading,
    dataId = '',
    innerHelperText,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent,
    tooltipAddons,
    dropdownWidth,
    isOpen,
    closeDropdown,
    setSelectedOption,
    inputRef,
    containerRef,
    onItemSelect,
    onItemDeselect,
    searchValue,
    setSearchValue,
    translations
  } = props

  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)

  const setCurrentSelectedLabel = useCallback(() => {
    const selectedItem = options.find((item) => item.value === currentSelection) as TSelectOption
    setSelectedOption(selectedItem)
  }, [currentSelection, options])

  useEffect(() => {
    setCurrentSelectedLabel()
  }, [setCurrentSelectedLabel])

  const handleOutsideClick = () => {
    if (!searchValue && isRequiredField) {
      setCurrentSelectedLabel()
    }
    closeDropdown()
  }

  useOnOutsideClick(containerRef, handleOutsideClick, isOpen, useId())

  const { bottom, left, top } = useGetElemPositions(inputRef)
  const { width } = useGetElemSizes(containerRef)

  const filteredData = useMemo(() => {
    return filterOptions(options, searchValue)
  }, [searchValue, options])

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
      setSearchValue('')
      if (!isSelected) {
        onItemSelect(value)
        return
      }
      if (!isRequiredField) {
        onItemDeselect()
      }
    }

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef
  })

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef
  })

  useChangePositionsOnScroll(inputRef, dropdownRef, hasBottomSpace)

  return (
    <>
      {isOpen && (
        <div
          className="select__options"
          style={{
            left,
            width,
            ...(hasBottomSpace || !hasTopSpace
              ? { top: bottom }
              : { bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP })
          }}
          ref={setDropdownRef}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                data-id={`${dataId}-options-content`}
                className={classNames('select__options__scroll', 'scrollbar')}
              >
                {innerHelperText ? (
                  <div className="content-top">
                    <Text size="xsmall" type="secondary" className="content-top__label">
                      {innerHelperText}
                    </Text>
                  </div>
                ) : null}
                {filteredData.length > 0 && (
                  <List
                    height={
                      filteredData.length * ITEM_SIZE > DROPDOWN_HEIGHT
                        ? DROPDOWN_HEIGHT
                        : filteredData.length * ITEM_SIZE
                    }
                    itemCount={filteredData.length}
                    itemSize={ITEM_SIZE}
                    width={dropdownWidth || DROPDOWN_WIDTH}
                    style={{
                      width: dropdownWidth || '100%',
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      willChange: 'auto'
                    }}
                  >
                    {({ index, style }) => {
                      const item = filteredData[index]
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
                          dataId={item.dataId}
                          style={style}
                        />
                      )
                    }}
                  </List>
                )}
                {filteredData.length === 0 ? (
                  <Empty size="small" mainMessage={translations?.emptyListMainMessage} />
                ) : null}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
