import { ReactNode } from 'react'
import { ICommon } from '../../type'

export type TCardTitle = {
  alignment?: 'top' | 'bottom' | 'left' | 'right'
  text: string
  color: 'blue' | 'purple' | 'yellow' | 'pink' | 'green' | 'grey'
}

export type TCardProps = ICommon & {
  title?: TCardTitle
  isExpandable?: boolean
  isExpanded?: boolean
  isExpandedFromParent?: boolean
  noBorder?: boolean
  noDivider?: boolean
  onExpand?: (isExpanded: boolean) => void
  children: ReactNode
  className?: string
  id?: string
  dataId?: string
}
