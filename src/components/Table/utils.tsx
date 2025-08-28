import React from 'react'
import { Column, Hooks } from 'react-table'
import { IndeterminateCheckbox } from './IndeterminateCheckbox'

export const CHECKBOX_HEADER_ID = 'selection'
export const CHECKBOX_DEFAULT_WIDTH = 48

export function setSelectedRows(
  hooks: Hooks,
  withSelect: boolean,
  disableCheckbox?: (rowData: any) => boolean
): void {
  if (withSelect) {
    hooks.visibleColumns.push((columns: Column[]) => [
      {
        id: CHECKBOX_HEADER_ID,

        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }: any) => {
          const isCheckboxDisabled = disableCheckbox ? disableCheckbox(row.original) : false
          return (
            <IndeterminateCheckbox
              disabled={isCheckboxDisabled}
              {...row.getToggleRowSelectedProps()}
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
