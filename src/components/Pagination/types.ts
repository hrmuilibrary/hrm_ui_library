import { ReactElement } from 'react'
import { ICommon } from '../../type'

export type TPaginationProps = ICommon & {
  labels?: {
    next: string | ReactElement
    previous: string | ReactElement
  }
  totalCount: number
  page?: number
  pageSize: number
  handleChangePage: (pageNumber: number) => void
  breakLabel?: ReactElement
  classname?: string
  size?: 'large' | 'medium' | 'small'
  disableInitialCallback?: boolean
}
