import React, {
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { TSingleSelectPropTypes } from '../types'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { SelectDesktop } from './SelectDesktop'
import classNames from 'classnames'
import { Input } from '../../Input'
import { noop } from '../../../utils/helpers'
import { SELECTED_VISIBLE_MIN_COUNT } from '../constants'
import { SelectMobile } from './SelectMobile'
import IconChevronUp from '../../SVGIcons/IconChevronUp'
import IconChevronDown from '../../SVGIcons/IconChevronDown'
import { SELECT_TRANSLATIONS } from '../localization'
import { Button } from '../../Button'
import { filterOptions } from './helpers'

export const Select = forwardRef((props: TSingleSelectPropTypes, _ref): ReactElement | null => {
  const {
    labelAddons,
    dataId,
    className,
    size,
    label,
    hasError,
    isValid,
    disabled,
    outerHelperText,
    isRequiredField,
    placeHolder,
    selectRightIconProps = {
      Component: IconChevronDown,
      size: 'small'
    },
    selectRightIconOpenedProps = {
      Component: IconChevronUp,
      size: 'small'
    },
    options,
    withSearch = false,
    setSelectedItem,
    setFieldValue,
    name,
    selectedItem,
    value,
    isMobileFullScreen = true,
    language = 'en',
    translations,
    isButtonSelect,
    ...rest
  } = props
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => {
    setIsOpen(false)
    setSearchValue('')
  }

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

  const leftIconProps = selectedOption?.optionLeftIcon?.Component
    ? {
        Component: selectedOption?.optionLeftIcon?.Component
      }
    : null

  const isWithSearch = withSearch && options.length > SELECTED_VISIBLE_MIN_COUNT

  const onSearch = (e: TChangeEventType) => {
    setSelectedOption(null)
    setSearchValue(e.target.value)
  }

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

  const currentSelection = (value as TItemValue) || selectedItem
  const localizations = { ...SELECT_TRANSLATIONS[language], ...translations }

  const filteredData = useMemo(() => {
    return filterOptions(options, searchValue)
  }, [searchValue, options])
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex((prev) => Math.min(prev + 1, filteredData.length - 1))
        break

      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex((prev) => Math.max(prev - 1, 0))
        break

      case 'Enter':
        e.preventDefault()
        const activeItem = filteredData[activeIndex]
        if (!activeItem?.disabled) {
          onItemSelect(activeItem.value)
          closeDropdown()
        }
        break

      case 'Escape':
        closeDropdown()
        break
    }
  }

  const setCurrentSelectedLabel = useCallback(() => {
    const selectedItemIndex = options.findIndex((item) => item.value === currentSelection)
    setSelectedOption(options[selectedItemIndex])
    setActiveIndex(selectedItemIndex)
  }, [currentSelection, options])

  useEffect(() => {
    setCurrentSelectedLabel()
  }, [setCurrentSelectedLabel])

  return (
    <div
      data-id={`${dataId}-content`}
      className={classNames(`select select--${size}`, className, {
        'select--opened': isOpen
      })}
      ref={containerRef}
    >
      {!isButtonSelect && (
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
          placeholder={placeHolder}
          currentValue={searchValue || selectedOption?.label.toString() || ''}
          isValid={isValid}
          disabled={disabled}
          helperText={isOpen ? '' : outerHelperText}
          ref={inputRef}
          labelAddons={labelAddons}
          autoComplete="false"
          readOnly={(isMobile && isMobileFullScreen) || !isWithSearch}
          onKeyDown={handleKeyDown}
        />
      )}
      {/*// TODO add buttonSelect option for desktop view*/}
      {isButtonSelect && (
        <Button
          size={size}
          type="secondary"
          dataId={dataId}
          iconProps={selectRightIconProps}
          buttonText={placeHolder || ''}
          onClick={disabled ? noop : openDropdown}
          className="select_button"
        />
      )}
      {isMobile && isMobileFullScreen ? (
        <SelectMobile
          {...rest}
          isOpen={isOpen}
          filteredData={filteredData}
          closeDropdown={closeDropdown}
          currentSelection={currentSelection}
          isRequiredField={isRequiredField}
          onItemDeselect={onItemDeselect}
          onItemSelect={onItemSelect}
          translations={localizations}
          withSearch={withSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      ) : (
        <SelectDesktop
          {...rest}
          onItemDeselect={onItemDeselect}
          onItemSelect={onItemSelect}
          currentSelection={currentSelection}
          isRequiredField={isRequiredField}
          filteredData={filteredData}
          inputRef={inputRef.current}
          containerRef={containerRef.current}
          isOpen={isOpen}
          closeDropdown={closeDropdown}
          setCurrentSelectedLabel={setCurrentSelectedLabel}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          translations={localizations}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  )
})

Select.displayName = 'Select'
