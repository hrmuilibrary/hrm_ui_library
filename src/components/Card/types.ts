import { ReactNode } from 'react'

export type TCardTitle = {
  alignment?: 'top' | 'bottom' | 'left' | 'right'
  text: string
  color: 'blue' | 'purple' | 'yellow' | 'pink' | 'green' | 'grey'
}

export type TCardProps = {
  title?: TCardTitle
  isExpandable?: boolean
  isExpanded?: boolean
  isExpandedFromParent?: boolean
  onExpand?: (isExpanded: boolean) => void
  children: ReactNode
  className?: string
  id?: string
  dataId?: string
}
