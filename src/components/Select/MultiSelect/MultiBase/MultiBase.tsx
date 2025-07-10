import React, { ReactElement, useCallback, useMemo, useState } from 'react'
import { Empty } from '../../../Empty'
import { OptionItem } from '../../../../helperComponents'
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
    const allValues = filteredData.map((item: TSelectOption) => {
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
        style={scrollableContentStyle}
      >
        {filteredData.length > 0 && (
          <List
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
