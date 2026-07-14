import React, { ReactElement } from 'react'
import { TTabProps } from './types'
import { TabItem } from './TabItem'
import classNames from 'classnames'

export const Tab = (props: TTabProps): ReactElement => {
  const { selectedValue, tabItems, onSelect, className, dataId = '', ...rest } = props

  return (
    <div className="tabs-container" data-id={dataId}>
      <div className={classNames('tabs-header-container', className)}>
        {tabItems.map((tabInfo, index) => {
          return (
            <TabItem
              label={tabInfo.label}
              badgeProps={tabInfo.badgeProps}
              onClick={() => onSelect(tabInfo.value)}
              key={tabInfo.value}
              val={tabInfo.value}
              isSelected={selectedValue === tabInfo.value}
              dataId={tabInfo?.dataId || (dataId ? `${dataId}-item-${index}` : '')}
              disabled={tabInfo.disabled}
              {...rest}
            />
          )
        })}
      </div>
    </div>
  )
}
