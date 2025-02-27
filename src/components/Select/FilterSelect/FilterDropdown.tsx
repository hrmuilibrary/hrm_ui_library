import React, { useMemo } from 'react'
import { OptionItem } from '../../../helperComponents'
import { TFilterDropdownContentProps } from '../types'

export const FilterDropdownContent = (props: TFilterDropdownContentProps): React.ReactElement => {
  const {
    checkIsSelected,
    filterValue,
    options,
    onItemSelect,
    onItemDeselect,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent
  } = props

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      return option.label.toString().includes(filterValue)
    })
  }, [filterValue, options])

  return (
    <>
      {filteredOptions.map((item: TSelectOption) => {
        const isSelected = checkIsSelected(item.value)

        return (
          <OptionItem
            data={item}
            key={item.value}
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
