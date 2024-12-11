import React, { ReactElement, useMemo, useState } from 'react'
import { OptionItem } from '../../../../helperComponents'
import { Empty } from '../../../Empty'
import { Modal } from '../../../Modal'
import { Text } from '../../../Text'
import { TRANSLATIONS_DEFAULT_VALUES } from '../../constants'
import { Loading } from '../../SharedComponents'
import { TSingleSelectMobileProps } from '../../types'
import { filterOptions } from '../helpers'
import { MobileTopContent } from './MobileTopContent'

export const SelectMobile = (props: TSingleSelectMobileProps): ReactElement => {
  const {
    translations,
    currentSelection,
    avatar,
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
    labelRightIconComponent
  } = props
  const [searchValue, setSearchValue] = useState<string>('')

  const filteredData = useMemo(() => {
    return filterOptions(options, searchValue)
  }, [searchValue, options])

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

  return (
    <Modal isOpen={isOpen} onClose={closeDropdown} isMobileFullScreen>
      <MobileTopContent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onBack={closeModal}
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
          <div data-id={`${dataId}-options-content`} className="mobile_options_content__inner">
            {filteredData.length > 0 && (
              <div className="mobile_options_container pb-12">
                {filteredData.map((item) => {
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
                      avatar={avatar}
                      disabled={item.disabled}
                      isSelected={isSelected}
                      dataId={item.dataId}
                    />
                  )
                })}
              </div>
            )}
            {filteredData.length === 0 ? (
              <Empty
                size="small"
                mainMessage={
                  translations?.emptyListMainMessage ||
                  TRANSLATIONS_DEFAULT_VALUES.emptyListMainMessage
                }
              />
            ) : null}
          </div>
        )}
      </div>
    </Modal>
  )
}
