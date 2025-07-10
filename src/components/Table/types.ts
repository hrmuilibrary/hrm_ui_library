import { Column, TableState } from 'react-table'

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type TColumnProps = {
  sortable?: boolean
}

export type TFixedSide = 'left' | 'right'

export type TColumnFields = {
  columnProps?: TColumnProps
  fixed?: TFixedSide
  widthInPercent?: IntRange<0, 100>
}

export type TColumn = Column & TColumnFields

export type TTableProps = {
  className?: string
  columns: TColumn[]
  data: any[]
  withSelect?: boolean
  fixedHeader?: { y: number }
  handleRowClick?: (row: any) => void
  onChange?: (state: TableState) => void
  containerRefHandler?: (ref: HTMLDivElement) => void
}

export type SortBy = {
  id: string
  desc: boolean
}

export interface TTableState extends TableState {
  selectedRowIds?: Record<string, number>
  pageSize?: number
  pageIndex?: number
  sortBy?: SortBy[]
}
