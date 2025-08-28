import React, { useState } from 'react'
import { Table as _Table } from '../index'
import { TColumn, TTableProps, TTableState } from '../components/Table/types'
import { TTableProps as TTableV2Props } from '../components/TableV2/types'
import { StoryFn, StoryObj } from '@storybook/react'
import {
  TableV2 as _TableV2,
  AdvancedPagination,
  ColumnSettings,
  Button,
  IconDelete,
  IconEdit,
  IconAdd,
  Chips,
  Text
} from '../index'
import { ColumnDef } from '@tanstack/react-table'
import classnames from 'classnames'
import { IndeterminateCheckbox } from '../components/TableV2/IndeterminateCheckbox'

const data: any[] = [
  {
    user: 'Luke Skywalker',
    age: 21,
    id: 'fffffffsdf',
    visits: [7, 8, 9],
    progress: 'fdfsdfsdfsd',
    status: 'Active'
  },
  ...Array(3).fill({
    user: 'John Doe',
    age: 30,
    id: 'disabledId',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  }),
  ...Array(5).fill({
    user: 'John Doe',
    age: 30,
    id: 'sdfsf',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  }),
  {
    user: 'John Doe',
    age: 30,
    id: 'dsfsdf',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  },
  {
    user: 'Bruce wayne',
    id: 'fffffffeeeee',
    age: 29,
    visits: [1, 2, 3],
    progress: 'diff',
    status: 'Active'
  }
]

const Template: StoryFn<TTableProps> = (args) => {
  const columns: TColumn[] = [
    {
      Header: 'User',
      accessor: 'user',
      fixed: 'left',
      widthInPercent: 30,
      width: 100
    },
    {
      Header: 'Status',
      accessor: 'status',
      widthInPercent: 20
    },
    {
      accessor: 'age',
      Header: 'Age',
      widthInPercent: 20,
      minWidth: 100,
      columnProps: {
        sortable: true
      }
    },
    {
      Header: 'Profile Progress',
      accessor: 'progress',
      widthInPercent: 20
    },
    {
      Header: 'Visits',
      widthInPercent: 10,
      accessor: 'visits',
      fixed: 'right'
    }
  ]

  const handleChange = (state: TTableState) => {
    console.log(state)
  }

  const disableCheckbox = (rowData) => rowData.id === 'disabledId'

  return (
    <_Table
      disableCheckbox={disableCheckbox}
      {...args}
      data={data}
      onChange={handleChange}
      columns={columns}
    />
  )
}

export default {
  title: 'Table',
  component: _Table
}

export const Table: StoryObj<TTableProps> = Template.bind({})

Table.args = {
  fixedHeader: { y: 500 },
  withSelect: true,
  data: [],
  columns: []
}

const dataV2: any[] = [
  {
    user: 'USER',
    age: 21,
    id: 'fffffffsdf',
    visits: [7, 8, 9],
    progress: 'fdfsdfsdfsd',
    status: 'Active',
    subRows: [
      {
        user: 'User 1',
        age: 21,
        id: 'sub1',
        visits: [1, 2, 3],
        progress: 'Sub Progress 1',
        status: 'Active'
      },
      {
        user: 'User 2',
        age: 22,
        id: 'sub2',
        visits: [4, 5, 6],
        progress: 'Sub Progress 2',
        status: 'Inactive'
      }
    ]
  },
  {
    user: 'Bruce Wayne',
    id: 'fffffffeeeee',
    age: 29,
    visits: [1, 2, 3],
    progress: 'diff',
    status: 'Active',
    subRows: [
      {
        user: 'User 3',
        age: 29,
        id: 'sub3',
        visits: [7, 8, 9],
        progress: 'Sub Progress 3',
        status: 'Active'
      }
    ]
  },
  {
    user: 'John Doe',
    age: 30,
    id: 'dsfsdf',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  },
  {
    user: 'Jane Smith',
    age: 25,
    id: 'jane123',
    visits: [2, 3, 4],
    progress: 'progress1',
    status: 'Inactive',
    subRows: [
      {
        user: 'User 4',
        age: 25,
        id: 'sub4',
        visits: [5, 6, 7],
        progress: 'Sub Progress 4',
        status: 'Active'
      },
      {
        user: 'User 5',
        age: 26,
        id: 'sub5',
        visits: [8, 9, 10],
        progress: 'Sub Progress 5',
        status: 'Inactive'
      }
    ]
  },
  ...Array(30).fill({
    user: 'Regular User',
    age: 30,
    id: 'regular',
    visits: [4, 5, 6],
    progress: 'regular',
    status: 'Active'
  })
]

const Template1: StoryFn<TTableV2Props<any>> = (args) => {
  const [selectedSubRows, setSelectedSubRows] = useState<Record<string, boolean>>({})

  const handleSubRowSelection = (subRowId: string, checked: boolean) => {
    setSelectedSubRows((prev) => ({
      ...prev,
      [subRowId]: checked
    }))
  }

  const handleRowSelection = (state: Record<string, boolean>) => {
    // When a parent row is selected/deselected, update its sub-rows accordingly
    Object.entries(state).forEach(([rowId, isSelected]) => {
      const row = dataV2.find((r) => r.id === rowId)
      if (row?.subRows) {
        const newSelectedSubRows = { ...selectedSubRows }
        row.subRows.forEach((subRow: any) => {
          if (isSelected) {
            newSelectedSubRows[subRow.id] = true
          } else {
            delete newSelectedSubRows[subRow.id]
          }
        })
        setSelectedSubRows(newSelectedSubRows)
      }
    })
  }

  const columns: ColumnDef<any>[] = [
    {
      id: 'user',
      header: 'User',
      accessorKey: 'user',
      enablePinning: true,
      enableSorting: false,
      cell: ({ getValue }) => <Text weight="bolder">{`${getValue()}`}</Text>
    },
    {
      header: 'Status',
      id: 'status',
      accessorKey: 'status',
      cell: (row) => <Chips text={'Created'} type={'accent'} color={'information'} />
    },
    {
      id: 'age',
      accessorKey: 'age',
      header: 'Age',
      size: 50
    },
    {
      header: 'Profile Progress',
      id: 'progress',
      accessorKey: 'progress'
    },
    {
      header: 'Test 1',
      id: 'test_1',
      accessorKey: 'visits'
    },
    {
      header: 'Test 2',
      id: 'test_2',
      accessorKey: 'visits'
    },
    {
      header: 'Test 3',
      id: 'test_3',
      accessorKey: 'visits'
    },
    {
      header: 'Test 4',
      id: 'test_4',
      accessorKey: 'visits'
    },
    {
      header: 'Test 5',
      id: 'test_5',
      accessorKey: 'visits',
      enableHiding: false
    },
    {
      header: 'Visits',
      id: 'visits',
      accessorKey: 'visits'
    },
    {
      header: 'Actions',
      id: 'actions',
      accessorKey: 'actions',
      size: 30,
      cell: () => (
        <div className="flexbox align-items--center">
          <Button className="mr-8" iconProps={{ Component: IconAdd }} type="secondary" />
          <Button className="mr-8" iconProps={{ Component: IconEdit }} type="secondary" />
          <Button iconProps={{ Component: IconDelete }} type="secondary" />
        </div>
      )
    }
  ]

  return (
    <div style={{ height: '95vh' }}>
      <_TableV2
        {...args}
        data={dataV2}
        totalCount={100}
        tableSettings={{
          tableName: 'TableV2',
          persistColumnSettings: 'localStorage'
        }}
        columns={columns}
        // defaultHiddenColumns={['user']}
        emptyTitle="Empty title"
        emptySubTitle="Please try to reload the page or use another keyword."
        renderHeader={(table) => (
          <div className="advanced-table__header justify-content--end">
            <ColumnSettings
              hiddenColumns={['user']}
              tooltipText="Column is disabled"
              table={table}
            />
          </div>
        )}
        renderFooter={(table) => (
          <div className="advanced-table__footer">
            <AdvancedPagination table={table} totalCount={1000} />
          </div>
        )}
        renderExpandedContent={(row) => {
          const isParentSelected = row.getIsSelected()
          return (
            <div className="advanced-table__expanded-content">
              <table style={{ width: '100%' }}>
                <tbody>
                  {(row.original.subRows || []).map((subRow: any, index: number) => (
                    <tr
                      key={subRow.id || index}
                      className={classnames({
                        selected: isParentSelected || selectedSubRows[subRow.id]
                      })}
                    >
                      {args.withSelect && (
                        <>
                          <td className="with-checkbox">
                            <IndeterminateCheckbox
                              checked={isParentSelected || selectedSubRows[subRow.id] || false}
                              onChange={(e) => {
                                if (!isParentSelected) {
                                  handleSubRowSelection(subRow.id, e.target.checked)
                                }
                              }}
                              indeterminate={false}
                              disabled={isParentSelected}
                            />
                          </td>
                        </>
                      )}
                      {columns.map((column, colIndex) => {
                        if (column.id === 'actions' || column.id === 'select') return null
                        const cell = row
                          .getVisibleCells()
                          .find((cell) => cell.column.id === column.id)
                        if (!cell) return null

                        const accessorKey = 'accessorKey' in column ? column.accessorKey : column.id

                        return (
                          <td
                            key={column.id}
                            className={classnames({
                              ['pinned-cell']: cell.column.getIsPinned(),
                              ['selected']: isParentSelected || selectedSubRows[subRow.id]
                            })}
                            style={{ width: cell.column.getSize() }}
                          >
                            {column.id === 'status' ? (
                              <Chips
                                text={subRow.status}
                                type={'accent'}
                                color={subRow.status === 'Active' ? 'information' : 'warning'}
                              />
                            ) : (
                              subRow[accessorKey as string]
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }}
        onRowSelection={handleRowSelection}
      />
    </div>
  )
}

const meta = {
  title: 'TableV2',
  component: _TableV2,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    // collapsibleRows: {
    //   control: 'boolean',
    //   description: 'Enable row-level collapsible functionality'
    // }
  }
} as const

export const TableV2 = Template1.bind({})
TableV2.args = {
  // withSelect: true,
  // withBorder: true,
  isActionsVisible: true,
  isLoading: false,
  // collapsibleRows: true,
  onSortChange: (state) => console.log(state),
  onRowSelection: (state) => console.log(state),
  onPaginationChange: (state) => console.log(state),
  onRowClick: (row) => console.log(row)
}

TableV2.parameters = {
  docs: {
    description: {
      story:
        'TableV2 with collapsible rows functionality. Each row can be expanded to show additional content.'
    }
  }
}
