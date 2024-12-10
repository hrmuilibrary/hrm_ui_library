import { ReactNode } from 'react'
import { ISVGIconProps } from '../../SVGIcons/types'

export enum NavigationItemTypes {
  MAIN = 'main',
  SUB = 'sub',
  BLOCK_HEADER = 'block-header',
  USER = 'user',
  PRODUCT = 'product',
  ACTION = 'action'
}

export interface TNavigationLinkPropTypes {
  As: () => React.ReactElement
  expandIconProps?: ISVGIconProps
  type: NavigationItemTypes
  isOpen: boolean
  iconName?: string
  showBadge?: boolean
  expandable?: boolean
  showAction?: boolean
  actionElm?: React.ReactElement
  active?: boolean
  badgeContent?: string
  children?: ReactNode
}
