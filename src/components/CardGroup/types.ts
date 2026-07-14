import { ReactNode } from 'react'

export type TCardGroupTitle = {
  alignment?: 'top' | 'bottom' | 'left' | 'right'
  text: string
  color: 'blue' | 'purple' | 'yellow' | 'pink' | 'green' | 'grey'
}

export type TCardGroupProps = IBaseProps & {
  title?: TCardGroupTitle
  children: ReactNode
  className?: string
  id?: string
  noDivider?: boolean
}
