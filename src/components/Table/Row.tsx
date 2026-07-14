import React, { ReactElement, useMemo } from 'react'
import classNames from 'classnames'
import { Row as RowType, CellValue } from 'react-table'
import { CHECKBOX_DEFAULT_WIDTH, CHECKBOX_HEADER_ID } from './utils'

type Props = IBaseProps & {
  row: RowType
  handleRowClick?: (row: any) => void
  withSelect: boolean
  selectedFlatRows: RowType[]
  uniqueKey: string
}

export function Row({
  row,
  selectedFlatRows,
  withSelect,
  uniqueKey,
  handleRowClick,
  dataId = ''
}: Props): ReactElement {
  const isRowSelected = useMemo(
    () => selectedFlatRows.find((r) => r.id === row.id),
    [selectedFlatRows]
  )

  const { key: keyRow, ...rowProps } = row.getRowProps()

  return (
    <tr
      {...rowProps}
      data-id={dataId ? `${dataId}-row-${row.index}` : ''}
      className={classNames({ selected: Boolean(isRowSelected) })}
      onClick={() => handleRowClick?.(row.original)}
    >
      {row.cells.map(({ getCellProps, column, render }: CellValue, i, arr: CellValue[]) => {
        const isSelection = column.id === CHECKBOX_HEADER_ID
        const { key: keycell, ...cellProps } = getCellProps()
        return (
          <td
            key={`table_cell_${uniqueKey}_${i}`}
            {...cellProps}
            data-id={dataId ? `${dataId}-row-${row.index}-cell-${column.id ?? i}` : ''}
            style={{
              left:
                !isSelection && withSelect && column?.fixed === 'left' ? CHECKBOX_DEFAULT_WIDTH : 0
            }}
            className={classNames({
              fixed_column_left: column?.fixed === 'left',
              fixed_column_right: column?.fixed === 'right',
              fixed_checkbox: isSelection && arr[i + 1].column?.fixed === 'left'
            })}
            onClick={(event) => {
              if (isSelection) event.stopPropagation()
              cellProps.onClick && cellProps.onClick(event)
            }}
          >
            {render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}
