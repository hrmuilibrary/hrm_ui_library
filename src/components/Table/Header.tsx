import React, { ReactElement } from 'react'
import { HeaderGroup, CellValue } from 'react-table'
import classNames from 'classnames'
import { calcColumnWidth, CHECKBOX_DEFAULT_WIDTH, CHECKBOX_HEADER_ID } from './utils'
import { Text } from '../Text'
import IconArrowDown from '../SVGIcons/IconArrowDown'
import IconArrowUp from '../SVGIcons/IconArrowUp'

type Props = {
  fixedHeader?: boolean
  withSelect: boolean
  tableWidth: number
  headerGroup: HeaderGroup
  uniqueKey: string
}

export function Header({
  headerGroup,
  tableWidth,
  withSelect,
  uniqueKey,
  fixedHeader = false
}: Props): ReactElement {
  const { key: keyheaderGroup, ...headerGroupProps } = headerGroup.getHeaderGroupProps()

  return (
    <tr {...headerGroupProps} className={classNames({ fixed_header: fixedHeader })}>
      {headerGroup.headers.map(
        (
          {
            id,
            minWidth,
            maxWidth,
            width,
            widthInPercent,
            getHeaderProps,
            fixed,
            columnProps,
            render,
            isSorted,
            isSortedDesc,
            getSortByToggleProps
          }: CellValue,
          i: number,
          arr: CellValue[]
        ) => {
          const isSelection = id === CHECKBOX_HEADER_ID

          const style = {
            width: isSelection
              ? CHECKBOX_DEFAULT_WIDTH
              : calcColumnWidth(widthInPercent, tableWidth),
            left: !isSelection && withSelect && fixed === 'left' ? CHECKBOX_DEFAULT_WIDTH : 0,
            ...(!isSelection && minWidth ? { minWidth } : {}),
            ...(!isSelection && maxWidth ? { maxWidth } : {}),
            ...(!isSelection && width ? { width } : {})
          }

          const { key: keyHead, ...headProps } = getHeaderProps(
            columnProps?.sortable ? getSortByToggleProps() : undefined
          )
          return (
            <th
              key={`table_head_${uniqueKey}_${i}`}
              {...headProps}
              className={classNames({
                fixed_column_left: fixed === 'left',
                fixed_column_right: fixed === 'right',
                fixed_checkbox: isSelection && arr[i + 1]?.fixed === 'left',
                pointer: columnProps?.sortable
              })}
              style={style}
            >
              <div className="flexbox align-items--center">
                <Text weight="bold" className="table-header-title">
                  {render('Header')}
                </Text>
                {isSorted && isSortedDesc && <IconArrowDown size="xsmall" className="ml-4" />}
                {isSorted && !isSortedDesc && <IconArrowUp size="xsmall" className="ml-4" />}
                {!isSorted && columnProps?.sortable && (
                  <IconArrowDown size="xsmall" className="ml-4 unsorted__icon" />
                )}
              </div>
            </th>
          )
        }
      )}
    </tr>
  )
}
