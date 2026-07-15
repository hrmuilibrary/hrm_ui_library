import React, { useMemo } from 'react'
import { OptionItem } from '../../../helperComponents/OptionItem'
import { TFilterDropdownContentProps } from '../types'
import { getOptionDataTestId } from '../helper'

export const FilterDropdownContent = (props: TFilterDropdownContentProps): React.ReactElement => {
  const {
    checkIsSelected,
    filterValue,
    options,
    onItemSelect,
    onItemDeselect,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    dataTestId
  } = props

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      return option.label.toString().includes(filterValue)
    })
  }, [filterValue, options])

  return (
    <>
      {filteredOptions.map((item: TSelectOption, index: number) => {
        const isSelected = checkIsSelected(item.value)

        return (
          <OptionItem
            data={item}
            key={item.value}
            dataTestId={getOptionDataTestId(dataTestId, item.value, index) || item.dataTestId}
            onClick={isSelected ? onItemDeselect : onItemSelect}
            labelLeftIconProps={labelLeftIconProps}
            OptionRightIconComponent={optionRightIconComponent}
            LabelRightIconComponent={labelRightIconComponent}
            isCheckbox={true}
            disabled={item.disabled}
            isSelected={isSelected}
          />
        )
      })}
    </>
  )
}
