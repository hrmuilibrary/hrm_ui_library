import React, { ReactElement } from 'react'
import { TBreadCrumbItem, TBreadCrumbProps } from './types'

export const Breadcrumb = (props: TBreadCrumbProps): ReactElement | null => {
  const { selectedValue, breadCrumbItems, className = '', onSelect, dataTestId = '' } = props

  return (
    <div className={`breadcrumb ${className}`} data-test-id={dataTestId}>
      {breadCrumbItems.map((itemInfo: TBreadCrumbItem, index: number) => {
        return (
          <span className="breadcrumb__item" key={itemInfo.value}>
            <span
              className={`breadcrumb__item__inner ${
                selectedValue === itemInfo.value ? 'selected' : ''
              }`}
              data-test-id={dataTestId ? `${dataTestId}-crumb-${index}` : ''}
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
