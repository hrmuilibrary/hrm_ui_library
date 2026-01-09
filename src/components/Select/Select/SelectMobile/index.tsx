import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { OptionItem } from '../../../../helperComponents/OptionItem'
import { Empty } from '../../../Empty'
import { Modal } from '../../../Modal'
import { Text } from '../../../Text'
import { ITEM_SIZE_MOBILE } from '../../constants'
import { Loading } from '../../SharedComponents'
import { ISingleSelectMobileProps } from '../../types'
import { filterOptions } from '../helpers'
import { MobileTopContent } from './MobileTopContent'
import { FixedSizeList as List } from 'react-window'

export const SelectMobile = (props: ISingleSelectMobileProps): ReactElement => {
  const {
    translations,
    currentSelection,
    isOpen,
    closeDropdown,
    isLoading,
    dataId,
    innerHelperText,
    options,
    isRequiredField,
    onItemSelect,
    onItemDeselect,
    tooltipAddons,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    setSelectedOption,
    withSearch
  } = props
  const [searchValue, setSearchValue] = useState<string>('')

  const filteredData = useMemo(() => {
    return filterOptions(options, searchValue)
  }, [searchValue, options])

  const setCurrentSelectedLabel = useCallback(() => {
    const selectedItem = options.find((item) => item.value === currentSelection) as TSelectOption
    setSelectedOption(selectedItem)
  }, [currentSelection, options])

  useEffect(() => {
    setCurrentSelectedLabel()
  }, [setCurrentSelectedLabel])

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
  const closeModal = () => {
    closeDropdown()
    setSearchValue('')
  }

  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  return (
    <Modal isOpen={isOpen} onClose={closeDropdown} isMobileFullScreen>
      <MobileTopContent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onBack={closeModal}
        withSearch={withSearch}
      />
      <div className="mobile_options_content">
        {innerHelperText ? (
          <Text size="xsmall" type="secondary" className="mobile_options_content__label">
            {innerHelperText}
          </Text>
        ) : null}
        {isLoading ? (
          <Loading />
        ) : (
          <div data-id={`${dataId}-options-content`}>
            {filteredData.length > 0 && (
              <List
                height={windowHeight - 30 - 32 - 24}
                itemCount={filteredData.length}
                itemSize={ITEM_SIZE_MOBILE}
                width={windowWidth}
                style={{
                  width: '100%',
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
                      size="large"
                      tooltipAddons={tooltipAddons}
                      data={item}
                      key={item.value}
                      onClick={clickHandler(isSelected)}
                      labelLeftIconProps={labelLeftIconProps}
                      OptionRightIconComponent={optionRightIconComponent}
                      LabelRightIconComponent={labelRightIconComponent}
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
              <Empty size="small" mainMessage={translations?.emptyListMainMessage} />
            ) : null}
          </div>
        )}
      </div>
    </Modal>
  )
}
