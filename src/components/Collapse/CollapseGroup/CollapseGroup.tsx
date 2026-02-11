import React, { ForwardedRef, forwardRef, ReactElement, useState } from 'react'
import { CollapseItem } from '../CollapseItem/CollapseItem'

import { ICollapseGroupProps, TCollapseItem, TCollapseValue } from '../types'
import classNames from 'classnames'

export const CollapseGroup = forwardRef(
  (props: ICollapseGroupProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const { items, singleSelection, titleProps = {}, className, theme = 'light' } = props
    const { size, color } = titleProps
    const [openValues, setOpenValues] = useState<TCollapseValue[]>(
      items.filter((item: TCollapseItem) => item.isOpen).map((item) => item.value)
    )

    const onCollapseSelect = (value: TCollapseValue) => {
      if (singleSelection) {
        setOpenValues([value])
      } else {
        setOpenValues([...openValues, value])
      }
    }
    const onCollapseDeselect = (value: TCollapseValue) => {
      setOpenValues(openValues.filter((item) => item !== value))
    }

    return (
      <div className={classNames('collapse-group', className)} ref={ref} data-theme={theme}>
        {items.map(({ id, title, value, content, dataId, iconProps }) => {
          const isOpen = openValues.indexOf(value) !== -1
          return (
            <CollapseItem
              className={'collapse-group__item'}
              id={id}
              isOpen={isOpen}
              key={value}
              dataId={dataId}
              title={{ size, color, text: title }}
              toggle={() => (isOpen ? onCollapseDeselect(value) : onCollapseSelect(value))}
              labelLeftIconProps={iconProps}
              theme={theme}
            >
              {content}
            </CollapseItem>
          )
        })}
      </div>
    )
  }
)

CollapseGroup.displayName = 'CollapseGroup'
