import React from 'react'
import { IconChevronLeft } from '../../../SVGIcons/IconChevronLeft'
import { Input } from '../../../Input'

type TProps = {
  searchValue: string
  setSearchValue: (value: string) => void
  onBack: () => void
}
export const MobileTopContent = ({ onBack, setSearchValue, searchValue }: TProps) => {
  const onSearch = (e: TChangeEventType) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="flexbox mobile_top_content">
      <IconChevronLeft onClick={onBack} size="large" />
      <Input
        currentValue={searchValue}
        handleChange={onSearch}
        className="ml-8 mb-12"
        size="small"
      />
    </div>
  )
}
