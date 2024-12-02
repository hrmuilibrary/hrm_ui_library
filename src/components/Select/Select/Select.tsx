import classNames from 'classnames'
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { DROPDOWN_AND_INPUT_GAP } from '../../../consts'
import { OptionItem } from '../../../helperComponents'
import {
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace,
  useOnOutsideClick
} from '../../../hooks'
import { useChangePositionsOnScroll } from '../../../hooks/useChangePositionsOnScroll'
import { noop } from '../../../utils/helpers'
import { Empty } from '../../Empty'
import { Input } from '../../Input'
import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled'
import { IconCaretUpFilled } from '../../SVGIcons/IconCaretUpFilled'
import { Text } from '../../Text'
import { Loading } from '../SharedComponents'
import {
  DROPDOWN_HEIGHT,
  DROPDOWN_WIDTH,
  ITEM_SIZE,
  SELECTED_VISIBLE_MIN_COUNT,
  TRANSLATIONS_DEFAULT_VALUES
} from '../constants'
import { TSingleSelectPropTypes } from '../types'

export const Select = (props: TSingleSelectPropTypes): JSX.Element | null => {
  const {
    className,
    size = 'large',
    name,
    value,
    label,
    avatar,
    options,
    hasError,
    isLoading,
    isValid,
    // REMEMBER that withSearch works only when options length is more than SELECTED_VISIBLE_MIN_COUNT/15
    withSearch,
    disabled,
    dataId = '',
    placeHolder,
    selectedItem = null,
    setFieldValue,
    setSelectedItem,
    outerHelperText,
    innerHelperText,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent,
    selectRightIconProps = {
      Component: IconCaretDownFilled,
      size: 'xsmall'
    },
    selectRightIconOpenedProps = {
      Component: IconCaretUpFilled,
      size: 'xsmall'
    },
    labelAddons,
    tooltipAddons,
    dropdownWidth
  } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState<string>('')
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)
  const currentSelection = (value as TItemValue) || selectedItem
  const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(null)
  const isWithSearch = withSearch && options.length > SELECTED_VISIBLE_MIN_COUNT

  const setCurrentSelectedLabel = useCallback(() => {
    const selectedItem = options.find((item) => item.value === currentSelection) as TSelectOption
    setSelectedOption(selectedItem)
  }, [currentSelection, options])

  const leftIconProps = selectedOption?.optionLeftIcon?.Component
    ? {
        Component: selectedOption?.optionLeftIcon?.Component
      }
    : null

  useEffect(() => {
    setCurrentSelectedLabel()
  }, [setCurrentSelectedLabel])

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => {
    setIsOpen(false)
    setSearchValue('')
  }

  const handleOutsideClick = () => {
    if (!searchValue && isRequiredField) {
      setCurrentSelectedLabel()
    }
    closeDropdown()
  }

  useOnOutsideClick(containerRef.current, handleOutsideClick, isOpen, useId())

  const { bottom, left, top } = useGetElemPositions(inputRef.current)
  const { width } = useGetElemSizes(containerRef.current)

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return options
    }

    return options.filter((dataItem) => {
      return (
        typeof dataItem.label === 'string' &&
        dataItem.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  }, [searchValue, options])

  const onItemSelect = (value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value)
    }

    closeDropdown()
  }

  const onItemDeselect = () => onItemSelect(null)

  const onOpenOptions = (e: TClickEventType): void => {
    const result = e?.target as HTMLDivElement
    const className = result?.getAttribute('class')
    if (
      e &&
      className &&
      (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)
    ) {
      setIsOpen(!isOpen)
      e.preventDefault()
      return
    } else if (isOpen && !isWithSearch) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

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

  const onSearch = (e: TChangeEventType) => {
    setSelectedOption(null)
    setSearchValue(e.target.value)
  }
  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  useChangePositionsOnScroll(inputRef?.current, dropdownRef, hasBottomSpace)

  return (
    <div
      data-id={`${dataId}-content`}
      className={classNames(`select select--${size}`, className, {
        'select--opened': isOpen
      })}
      ref={containerRef}
    >
      <Input
        onClick={disabled ? noop : onOpenOptions}
        size={size === 'large' ? 'large' : 'small'}
        dataId={dataId}
        hasError={hasError}
        className="select__input"
        label={label}
        onChange={onSearch}
        required={isRequiredField}
        leftIconProps={leftIconProps}
        rightIconProps={isOpen ? selectRightIconOpenedProps : selectRightIconProps}
        readonly={!isWithSearch}
        placeholder={placeHolder}
        currentValue={searchValue || selectedOption?.label.toString() || ''}
        isValid={isValid}
        disabled={disabled}
        helperText={isOpen ? '' : outerHelperText}
        ref={inputRef}
        labelAddons={labelAddons}
        autoComplete="false"
      />

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
                ref={scrollRef}
                className={classNames(
                  'select__options__scroll',
                  'scrollbar'
                  // 'scrollbar--vertical',
                  // {
                  //   'mr-6': scrollHeight > 300
                  // }
                )}
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
                  <Empty
                    size="small"
                    mainMessage={TRANSLATIONS_DEFAULT_VALUES.emptyListMainMessage}
                  />
                ) : null}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
