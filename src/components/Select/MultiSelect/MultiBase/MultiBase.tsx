import React, { ReactElement, useCallback, useMemo, useState } from 'react'
import { Empty } from '../../../Empty'
import { OptionItem } from '../../../../helperComponents'
import { ContentTop } from '../../SharedComponents'
import { TMultySingleTabPropTypes } from '../../types'
import { FixedSizeList as List } from 'react-window'
import { DROPDOWN_HEIGHT, DROPDOWN_WIDTH, ITEM_SIZE } from '../../constants'

export const MultiBase = (props: TMultySingleTabPropTypes): ReactElement | null => {
  const {
    avatar,
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

  const { emptyListMainMessage, emptyListSecondaryMessage } = translations

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
      const { value, label } = item
      return { value, label }
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
      avatar,
      isCheckbox: true,
      labelLeftIconProps,
      optionRightIconComponent,
      labelRightIconComponent
    }
  }, [avatar, labelLeftIconProps, optionRightIconComponent, labelRightIconComponent])

  return (
      <>
        <ContentTop
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

        <div className={'select__options__scroll scrollbar'} style={scrollableContentStyle}>
          {filteredData.length > 0 && (
              <List
                  height={DROPDOWN_HEIGHT}
                  itemCount={filteredData.length}
                  itemSize={ITEM_SIZE}
                  width={dropdownWidth || DROPDOWN_WIDTH}
                  style={{ width: dropdownWidth || '100%' }}
              >
                {({ index, style }) => {
                  const item = filteredData[index]
                  const isSelected = checkIsSelected(item.value)
                  return (
                      <OptionItem
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
