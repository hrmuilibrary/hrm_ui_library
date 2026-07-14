import React, { ReactElement } from 'react'
import { TBreadCrumbItem, TBreadCrumbProps } from './types'

export const Breadcrumb = (props: TBreadCrumbProps): ReactElement | null => {
  const { selectedValue, breadCrumbItems, className = '', onSelect, dataId = '' } = props

  return (
    <div className={`breadcrumb ${className}`} data-id={dataId}>
      {breadCrumbItems.map((itemInfo: TBreadCrumbItem, index: number) => {
        return (
          <span className="breadcrumb__item" key={itemInfo.value}>
            <span
              className={`breadcrumb__item__inner ${
                selectedValue === itemInfo.value ? 'selected' : ''
              }`}
              data-id={dataId ? `${dataId}-crumb-${index}` : ''}
              onClick={() => onSelect(itemInfo.value)}
            >
              {itemInfo.label}
            </span>
          </span>
        )
      })}
    </div>
  )
}
