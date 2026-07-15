import React, { ReactElement } from 'react'
import { OptionItem } from '../../../../helperComponents/OptionItem'
import { Empty } from '../../../Empty'
import { Modal } from '../../../Modal'
import { Text } from '../../../Text'
import { ITEM_SIZE_MOBILE } from '../../constants'
import { Loading } from '../../SharedComponents'
import { ISingleSelectMobileProps } from '../../types'
import { MobileTopContent } from './MobileTopContent'
import { FixedSizeList as List } from 'react-window'
import { getOptionDataTestId } from '../../helper'

export const SelectMobile = (props: ISingleSelectMobileProps): ReactElement => {
  const {
    translations,
    currentSelection,
    isOpen,
    closeDropdown,
    isLoading,
    dataTestId,
    innerHelperText,
    filteredData,
    isRequiredField,
    onItemSelect,
    onItemDeselect,
    tooltipAddons,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    withSearch,
    searchValue,
    setSearchValue
  } = props

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
        dataTestId={dataTestId}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onBack={closeModal}
        withSearch={withSearch}
        isOpen={isOpen}
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
          <div data-test-id={dataTestId ? `${dataTestId}-content` : ''}>
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
                      dataTestId={
                        getOptionDataTestId(dataTestId, item.value, index) || item.dataTestId
                      }
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
