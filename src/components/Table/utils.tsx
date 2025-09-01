import React from 'react'
import { Column, Hooks, Row } from 'react-table'
import { IndeterminateCheckbox } from './IndeterminateCheckbox'

export const CHECKBOX_HEADER_ID = 'selection'
export const CHECKBOX_DEFAULT_WIDTH = 48

export function setSelectedRows(hooks: Hooks, withSelect: boolean): void {
  if (withSelect) {
    hooks.visibleColumns.push((columns: Column[]) => [
      {
        id: CHECKBOX_HEADER_ID,
        Header: ({ getToggleAllRowsSelectedProps, rows, state, toggleRowSelected }: any) => {
          const allEnabledRows: Row[] = rows.filter((row: Row) =>
            'enableSelection' in row.original ? row.original.enableSelection : false
          )
          const allSelected = allEnabledRows.every((row) => state.selectedRowIds[row.id])
          const someSelected = allEnabledRows.some((row) => state.selectedRowIds[row.id])

          return (
            <IndeterminateCheckbox
              {...getToggleAllRowsSelectedProps({
                checked: allSelected,
                indeterminate: !allSelected && someSelected,
                disabled: allEnabledRows.length === 0
              })}
              onChange={(e) => {
                const checked = e.target.checked
                allEnabledRows.forEach((row) => {
                  toggleRowSelected(row.id, checked)
                })
              }}
            />
          )
        },
        Cell: ({ row }: any) => {
          const disabled = 'enableSelection' in row.original ? !row.original.enableSelection : false

          return (
            <IndeterminateCheckbox
              {...row.getToggleRowSelectedProps({
                disabled
              })}
            />
          )
        }
      },
      ...columns
    ])
  }
}

export function calcColumnWidth(percent: number, tableWidth: number): number {
  return (percent * tableWidth) / 100
}
