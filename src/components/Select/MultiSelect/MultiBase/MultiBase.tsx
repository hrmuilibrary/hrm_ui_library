import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Empty } from '../../../Empty'
import { OptionItem } from '../../../../helperComponents/OptionItem'
import { ContentTop } from '../../SharedComponents'
import { TMultiSingleTabPropTypes } from '../../types'
import { FixedSizeList as List } from 'react-window'
import { DROPDOWN_HEIGHT, DROPDOWN_WIDTH, ITEM_SIZE, ITEM_SIZE_MOBILE } from '../../constants'
import classNames from 'classnames'

export const MultiBase = (props: TMultiSingleTabPropTypes): ReactElement | null => {
  const {
    isMobile,
    closeDropdown,
    scrollableContentStyle,
    options,
    helperText,
    translations,
    onItemSelect,
    onItemDeselect,
    isSearchAvailable,
    setSelectedValues,
    selectedValues,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent,
    maxSelectCount,
    menuOptions,
    dataIdPrefix,
    dropdownWidth
  } = props

  const { emptyListMainMessage, emptyListSecondaryMessage } = translations || {}

  const [searchValue, setSearchValue] = useState('')
  const [isAllSelected, setAllSelected] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const listRef = useRef<List>(null)
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex((prev) => Math.min(prev + 1, options.length - 1))
        break

      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex((prev) => Math.max(prev - 1, 0))
        break

      case 'Enter':
        e.preventDefault()
        const item = filteredData[activeIndex]
        if (!item) {
          return
        }
        const isSelected = checkIsSelected(item.value)
        if (isSelected) {
          onDeselect(item)
        } else {
          onItemSelect(item)
        }
        break

      case 'Escape':
        closeDropdown()
        break
    }
  }

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToItem(activeIndex, 'smart')
    }
  }, [activeIndex])

  useEffect(() => {
    if (dropdownRef) {
      dropdownRef.focus()
    }
  }, [dropdownRef])

  const clearAll = useCallback(() => {
    setAllSelected(false)
    setSelectedValues([])
  }, [])

  const filteredData = useMemo((): TSelectOptions => {
    if (!searchValue) {
      const selectedValuesArray = selectedValues.map((item) => item.value)
      const newOptions = options.filter((item) => selectedValuesArray.indexOf(item.value) === -1)
      return [...selectedValues, ...newOptions]
    }

    return options.filter((dataItem) => {
      return (
        typeof dataItem.label === 'string' &&
        dataItem.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    })
  }, [searchValue, options, selectedValues])

  const selectAll = useCallback(() => {
    setAllSelected(true)
    const allValues = filteredData
      .filter((f) => !f.disabled)
      .map((item: TSelectOption) => {
        const { value, label, meta } = item
        return { value, label, meta }
      })

    setSelectedValues(allValues)
  }, [filteredData])

  const onDeselect = (item: TSelectedValue) => {
    setAllSelected(false)
    onItemDeselect(item)
  }

  const checkIsSelected = (itemValue: TItemValue) => {
    return selectedValues.find((item) => item.value === itemValue) !== undefined
  }

  const optionProps = useMemo(() => {
    return {
      isCheckbox: true,
      labelLeftIconProps,
      optionRightIconComponent,
      labelRightIconComponent
    }
  }, [labelLeftIconProps, optionRightIconComponent, labelRightIconComponent])

  return (
    <>
      <ContentTop
        closeDropdown={closeDropdown}
        dataIdPrefix={dataIdPrefix}
        menuOptions={menuOptions}
        selectAll={selectAll}
        clearAll={clearAll}
        hasLimitation={!!maxSelectCount}
        isAnySelected={selectedValues.length !== 0}
        helperText={helperText}
        isSearchAvailable={isSearchAvailable}
        isSelectAllDisabled={isAllSelected || filteredData.length === 0}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        translations={translations}
      />

      <div
        className={classNames('select__options__scroll scrollbar', {
          select__options__scroll_mobile: isMobile
        })}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={scrollableContentStyle}
        ref={setDropdownRef}
      >
        {filteredData.length > 0 && (
          <List
            ref={listRef}
            height={
              isMobile
                ? window.innerHeight - 80 - 73 - 24
                : filteredData.length * ITEM_SIZE > DROPDOWN_HEIGHT
                  ? DROPDOWN_HEIGHT
                  : filteredData.length * ITEM_SIZE
            }
            itemCount={filteredData.length}
            itemSize={isMobile ? ITEM_SIZE_MOBILE : ITEM_SIZE}
            width={isMobile ? window.innerWidth : dropdownWidth || DROPDOWN_WIDTH}
            style={{ width: dropdownWidth || '100%' }}
          >
            {({ index, style }) => {
              const item = filteredData[index]
              const isSelected = checkIsSelected(item.value)
              const isActive = index === activeIndex
              return (
                <OptionItem
                  size={isMobile ? 'large' : 'small'}
                  data={item}
                  dataId={item.dataId}
                  onClick={isSelected ? onDeselect : onItemSelect}
                  disabled={
                    item.disabled || (!isSelected && selectedValues.length === maxSelectCount)
                  }
                  isSelected={isSelected}
                  style={style}
                  className={classNames('option', {
                    'option--active': isActive
                  })}
                  {...optionProps}
                />
              )
            }}
          </List>
        )}
      </div>
      {filteredData.length === 0 ? (
        <Empty
          size="small"
          mainMessage={emptyListMainMessage}
          paragraphMessage={emptyListSecondaryMessage}
        />
      ) : null}
    </>
  )
}
