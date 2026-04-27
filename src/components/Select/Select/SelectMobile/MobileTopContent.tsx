import React, { ReactElement, useEffect, useRef } from 'react'
import IconChevronLeft from '../../../SVGIcons/IconChevronLeft'
import { Input } from '../../../Input'
import IconDismissFilled from '../../../SVGIcons/IconDismissFilled'
import IconSearchFilled from '../../../SVGIcons/IconSearchFilled'

type TProps = {
  searchValue: string
  setSearchValue: (value: string) => void
  onBack: () => void
  withSearch: boolean
  isOpen: boolean
}
export const MobileTopContent = ({
  onBack,
  setSearchValue,
  searchValue,
  withSearch,
  isOpen
}: TProps): ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSearch = (e: TChangeEventType) => {
    setSearchValue(e.target.value)
  }

  const removeFilter = () => {
    setSearchValue('')
  }

  useEffect(() => {
    if (isOpen && inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current, isOpen])
  return (
    <div className="flexbox mobile_top_content">
      <IconChevronLeft onClick={onBack} size="large" />
      {withSearch && (
        <Input
          currentValue={searchValue}
          handleChange={onSearch}
          className="ml-8"
          size="small"
          ref={inputRef}
          rightIconProps={{
            Component: searchValue ? IconDismissFilled : IconSearchFilled,
            size: searchValue ? 'xsmall' : 'small',
            onClick: removeFilter
          }}
        />
      )}
    </div>
  )
}
