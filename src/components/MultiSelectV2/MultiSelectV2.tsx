import React, { ReactElement, useId, useMemo, useRef, useState, forwardRef } from 'react'
import classNames from 'classnames'
import { Text } from '../Text'
import { Avatar } from '../Avatar'
import { BadgeV2 } from '../BadgeV2'
import IconDismiss from '../SVGIcons/IconDismiss'
import { Label } from '../../helperComponents/Label'
import { ErrorMessage } from '../../helperComponents/ErrorMessage'
import { useOnOutsideClick } from '../../hooks'
import { TMultiSelectOption, TMultiSelectV2PropTypes } from './types'

export const MultiSelectV2 = forwardRef<HTMLInputElement, TMultiSelectV2PropTypes>(
  (props, ref): ReactElement => {
    const {
      options,
      selectedItems,
      value,
      onAdd,
      onRemove,
      setFieldValue,
      name,
      placeholder,
      hasError,
      label,
      labelAddons,
      required,
      disabled,
      error,
      helperText,
      className = '',
      dataTestId = '',
      size = 'medium',
      dropdownWidth,
      translations,
      dataTestIdPrefix
    } = props

    const [searchQuery, setSearchQuery] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const uid = useId()

    const prefix = dataTestIdPrefix || dataTestId

    const isErrorVisible = hasError !== undefined ? hasError : !!error

    const items = useMemo<TMultiSelectOption[]>(
      () => (value as unknown as TMultiSelectOption[]) || selectedItems || [],
      [value, selectedItems]
    )

    useOnOutsideClick(
      containerRef.current,
      () => {
        setIsDropdownOpen(false)
        setSearchQuery('')
      },
      isDropdownOpen,
      uid
    )

    const searchResults = options.filter(
      (o) =>
        !items.find((s) => s.id === o.id) &&
        (o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          o.meta?.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    const handleAdd = (item: TMultiSelectOption) => {
      if (disabled) {
        return
      }

      const nextItems = [...items, item]

      if (name && setFieldValue) {
        setFieldValue(name, nextItems as unknown as TFormValue)
      }
      onAdd?.(item)
      setSearchQuery('')
      setIsDropdownOpen(false)
    }

    const handleRemove = (id: string) => {
      if (disabled) {
        return
      }

      const nextItems = items.filter((item) => item.id !== id)

      if (name && setFieldValue) {
        setFieldValue(name, nextItems as unknown as TFormValue)
      }
      onRemove?.(id)
    }

    return (
      <div
        className={classNames('multi-select-v2', `multi-select-v2--${size}`, className, {
          'multi-select-v2--invalid': isErrorVisible,
          'multi-select-v2--disabled': disabled
        })}
      >
        <Label
          text={label}
          required={required}
          disabled={disabled}
          labelAddons={labelAddons}
          dataTestId={dataTestId}
        />

        <div
          ref={containerRef}
          className={classNames(
            'multi-select-v2__inner',
            'flexbox',
            'align-items--center',
            'gap-8'
          )}
          data-test-id={dataTestId}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={classNames('multi-select-v2__chip', {
                'multi-select-v2__chip--highlighted': item.highlighted
              })}
            >
              <Avatar initials={item.initials} size="xsmall" />
              <Text
                size="small"
                type={item.highlighted ? 'selected' : undefined}
                className="multi-select-v2__chip-name"
              >
                {item.name}
              </Text>
              {item.badge ? (
                <BadgeV2
                  text={item.badge}
                  size="small"
                  type="gray"
                  style="light"
                  className="multi-select-v2__chip-badge"
                  dataTestId={prefix ? `${prefix}-badge-${item.id}` : undefined}
                />
              ) : null}
              <button
                type="button"
                className="multi-select-v2__chip-remove"
                disabled={disabled}
                data-test-id={prefix ? `${prefix}-chip-remove-${item.id}` : undefined}
                onClick={() => handleRemove(item.id)}
              >
                <IconDismiss size="xxsmall" type="tertiary" />
              </button>
            </div>
          ))}

          <div className="multi-select-v2__search-wrap">
            <input
              ref={ref}
              className="multi-select-v2__search"
              disabled={disabled}
              data-test-id={prefix ? `${prefix}-search` : undefined}
              value={searchQuery}
              placeholder={placeholder}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setIsDropdownOpen(true)
              }}
              onFocus={() => setIsDropdownOpen(true)}
            />
          </div>

          {isDropdownOpen && !disabled ? (
            <div
              className="multi-select-v2__dropdown"
              style={dropdownWidth ? { width: dropdownWidth, right: 'auto' } : undefined}
            >
              {searchResults.length > 0 ? (
                searchResults.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className="multi-select-v2__dropdown-item"
                    data-test-id={prefix ? `${prefix}-dropdown-item-${option.id}` : undefined}
                    onClick={() => handleAdd(option)}
                  >
                    <Avatar initials={option.initials} size="xsmall" />
                    <div className="multi-select-v2__dropdown-info">
                      <Text size="small" weight="semibold">
                        {option.name}
                      </Text>
                      {option.meta ? (
                        <Text size="xsmall" type="tertiary">
                          {option.meta}
                        </Text>
                      ) : null}
                    </div>
                  </button>
                ))
              ) : (
                <Text
                  size="small"
                  type="tertiary"
                  className="multi-select-v2__dropdown-empty"
                  dataTestId={prefix ? `${prefix}-dropdown-empty` : undefined}
                >
                  {translations?.emptyListMainMessage}
                </Text>
              )}
            </div>
          ) : null}
        </div>

        {error || helperText ? (
          <div className="multi-select-v2__message mt-8">
            {isErrorVisible && error ? (
              <ErrorMessage message={error} icon="infoFilled" dataTestId={dataTestId} />
            ) : null}
            {helperText && !(isErrorVisible && error) ? (
              <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
                {helperText}
              </Text>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }
)

MultiSelectV2.displayName = 'MultiSelectV2'
