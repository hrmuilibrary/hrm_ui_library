import React from 'react'
import { TFilterGroupDropdownContentProps } from '../types'
import { FilterDropdownContent } from './FilterDropdown'

export const FilterGroupDropdownContent = (
  props: TFilterGroupDropdownContentProps
): React.ReactElement => {
  const { options, theme = 'light', ...rest } = props

  return (
    <>
      {options.map(({ data, title }: TSelectGroupOption) => {
        return (
          <div className="group_container" key={title} data-theme={theme}>
            <span>{title}</span>
            <FilterDropdownContent options={data} theme={theme} {...rest} />
          </div>
        )
      })}
    </>
  )
}
