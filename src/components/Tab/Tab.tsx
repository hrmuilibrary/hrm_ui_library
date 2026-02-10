import React, { ReactElement } from 'react'
import { TTabProps } from './types'
import { TabItem } from './TabItem'
import classNames from 'classnames'

export const Tab = (props: TTabProps): ReactElement => {
  const { selectedValue, tabItems, onSelect, className, theme = 'light', ...rest } = props

  return (
    <div className="tabs-container" data-theme={theme}>
      <div className={classNames('tabs-header-container', className)}>
        {tabItems.map((tabInfo) => {
          return (
            <TabItem
              label={tabInfo.label}
              badgeProps={tabInfo.badgeProps}
              onClick={() => onSelect(tabInfo.value)}
              key={tabInfo.value}
              val={tabInfo.value}
              isSelected={selectedValue === tabInfo.value}
              dataId={tabInfo?.dataId || ''}
              disabled={tabInfo.disabled}
              {...rest}
            />
          )
        })}
      </div>
    </div>
  )
}
