import classNames from 'classnames'
import React, { ReactElement, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { DROPDOWN_AND_INPUT_GAP } from '../../../../consts'
import { OptionItem } from '../../../../helperComponents/OptionItem'
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
  const listRef = useRef<List>(null);
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) =>
          Math.min(prev + 1, options.length - 1)
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) =>
          Math.max(prev - 1, 0)
        );
        break;

      case "Enter":
        e.preventDefault();
        onItemSelect(options[activeIndex].value);
        closeDropdown();
        break;

      case "Escape":
        closeDropdown();
        break;
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToItem(activeIndex, "smart");
    }
  }, [activeIndex]);
  
  const setCurrentSelectedLabel = useCallback(() => {
    const selectedItemIndex = options.findIndex((item) => item.value === currentSelection) 
    setSelectedOption(options[selectedItemIndex])
    setActiveIndex(selectedItemIndex)
  }, [currentSelection, options])

  useEffect(() => {
    setCurrentSelectedLabel()
  }, [setCurrentSelectedLabel])
  
  useEffect(() => {
    if(dropdownRef && isOpen){
      dropdownRef.focus()
    }
  }, [dropdownRef, isOpen])

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
          tabIndex={0}
          onKeyDown={handleKeyDown}
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
                    ref={listRef}
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
                      const isActive = activeIndex === index
                      return (
                        <OptionItem
                          tooltipAddons={tooltipAddons}
                          data={item}
                          key={item.value}
                          onClick={clickHandler(isSelected)}
                          labelLeftIconProps={labelLeftIconProps}
                          OptionRightIconComponent={optionRightIconComponent}
                          LabelRightIconComponent={labelRightIconComponent}
                          disabled={item.disabled}
                          isSelected={isSelected}
                          dataId={item.dataId}
                          style={style}
                          className={classNames("option", {
                            "option--active": isActive,
                          })}
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
