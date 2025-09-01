import React, { ReactElement, useEffect, useMemo, useRef, useState, useId } from 'react'
import {
  useSortBy,
  useTable,
  useRowSelect,
  Column,
  HeaderGroup,
  Row as RowType,
  TableInstance,
  Hooks
} from 'react-table'
import { TColumn, TTableProps } from './types'
import { setSelectedRows } from './utils'
import { Row } from './Row'
import { Header } from './Header'
import classNames from 'classnames'
import { useDispatchEventOnScroll } from '../../hooks/useDispatchEventOnScroll'
import { Button } from '../Button'
import { TABLE_LOCALIZATION } from './localization'
import { setTranslationValue } from '../../utils/helpers'
import IconCheckmark from '../SVGIcons/IconCheckmark'
import IconDismiss from '../SVGIcons/IconDismiss'

export function Table({
  columns,
  data,
  onChange,
  fixedHeader,
  withSelect = false,
  handleRowClick,
  className,
  language = 'en',
  containerRefHandler,
  submitButton
}: TTableProps): ReactElement {
  console.log(language)
  const tableRef = useRef<HTMLTableElement | null>(null)
  const [tableWidth, setTableWidth] = useState(400)
  const uniqueKey = useId()

  const dispatchScrollEvent = useDispatchEventOnScroll()

  const sortedColumns = useMemo(() => {
    const condition1 = (item: TColumn) => item.fixed === 'left' // Move even numbers to the start
    const condition2 = (item: TColumn) => item.fixed === 'right' // Move numbers greater than 5 to the end

    // Custom sorting function
    columns.sort((a, b) => {
      if (condition1(a) && !condition1(b)) {
        return -1 // Move 'a' to the start
      } else if (!condition1(a) && condition1(b)) {
        return 1 // Move 'b' to the start
      } else if (condition2(a) && !condition2(b)) {
        return 1 // Move 'a' to the end
      } else if (!condition2(a) && condition2(b)) {
        return -1 // Move 'b' to the end
      } else {
        return 0 // Their order doesn't matter
      }
    })

    return [...columns]
  }, [columns])

  const {
    getTableProps,
    getTableBodyProps,
    selectedFlatRows,
    headerGroups,
    rows,
    prepareRow,
    toggleAllRowsSelected,
    state
  } = useTable(
    {
      columns: sortedColumns as Column[],
      data
    },
    useSortBy,
    useRowSelect,
    (hooks: Hooks) => setSelectedRows(hooks, withSelect)
  ) as TableInstance & { selectedFlatRows: RowType[]; toggleAllRowsSelected: (c: boolean) => void }

  const handleResize = () => {
    if (tableRef.current) {
      setTableWidth(tableRef.current?.offsetWidth)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (tableRef.current) {
      setTableWidth(tableRef.current?.offsetWidth)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [tableRef.current])

  const onClearSelectedRows = () => {
    toggleAllRowsSelected(false)
  }

  const onSubmitSelectedRows = () => {
    onChange?.({ state, callback: onClearSelectedRows })
  }

  return (
    <div
      onScroll={dispatchScrollEvent}
      ref={containerRefHandler}
      className={classNames(
        'table-wrapper scrollbar scrollbar--horizontal scrollbar--vertical',
        className
      )}
      style={{ maxHeight: fixedHeader?.y }}
    >
      {withSelect && selectedFlatRows.length > 0 && (
        <div className="flexbox align-items--center full-width">
          <Button
            buttonText={setTranslationValue(
              TABLE_LOCALIZATION[language].n_selected || '',
              selectedFlatRows.length
            )}
            onClick={onClearSelectedRows}
            disabled={submitButton?.isLoading}
            type="tertiary"
            size="medium"
            iconProps={{ alignment: 'left', Component: IconDismiss }}
          />
          <Button
            iconProps={{ alignment: 'left', Component: IconCheckmark }}
            onClick={onSubmitSelectedRows}
            buttonText={submitButton?.buttonText || 'Submit'}
            type="secondary"
            size="medium"
            isLoading={submitButton?.isLoading}
          />
        </div>
      )}

      <table {...getTableProps()} ref={tableRef}>
        <thead>
          {headerGroups.map((headerGroup: HeaderGroup, i) => (
            <Header
              key={`table_head_${uniqueKey}_${i}`}
              withSelect={withSelect}
              fixedHeader={Boolean(fixedHeader)}
              headerGroup={headerGroup}
              tableWidth={tableWidth}
              uniqueKey={uniqueKey}
            />
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: RowType) => {
            prepareRow(row)
            return (
              <Row
                handleRowClick={handleRowClick}
                withSelect={withSelect}
                selectedFlatRows={selectedFlatRows}
                row={row}
                key={`table_row_${uniqueKey}_${row.id}`}
                uniqueKey={uniqueKey}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
