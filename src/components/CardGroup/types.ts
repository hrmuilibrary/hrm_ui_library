import { ReactNode } from 'react'
import { ICommon } from '../../type'

export type TCardGroupTitle = {
  alignment?: 'top' | 'bottom' | 'left' | 'right'
  text: string
  color: 'blue' | 'purple' | 'yellow' | 'pink' | 'green' | 'grey'
}

export interface ICardGroupProps extends ICommon {
  title?: TCardGroupTitle
  children: ReactNode
  className?: string
  id?: string
  dataId?: string
  noDivider?: boolean
}
