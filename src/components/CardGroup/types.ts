import { ReactNode } from 'react'

export type TCardGroupTitle = {
  alignment?: 'top' | 'bottom' | 'left' | 'right'
  text: string
  color: 'blue' | 'purple' | 'yellow' | 'pink' | 'green' | 'grey'
}

export type TCardGroupProps = {
  title?: TCardGroupTitle
  children: ReactNode
  className?: string
  id?: string
  dataId?: string
  noDivider?: boolean
}
