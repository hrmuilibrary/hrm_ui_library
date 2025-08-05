import { ReactElement, ReactNode } from 'react'

export type TCollapseTitleColor = 'selected' | 'primary'

export interface ICollapseTitleProps {
  size?: 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large'
  color?: TCollapseTitleColor
  weight?: 'regular' | 'semibold' | 'bold' | 'bolder'
}

export interface TCollapseItemTitle extends ICollapseTitleProps {
  text: string | ReactNode
}

export type TCollapseProps = {
  isOpen: boolean
  toggle: () => void
  children: ReactNode
  title: TCollapseItemTitle
  reverse?: boolean
  additionalInfo?: ReactNode
  dataId?: string | undefined
  labelLeftIconProps?: TSelectIconProps
  id?: string | number
  className?: string
}

export type TCollapseValue = string | number

export type TCollapseItem = {
  title: string
  value: TCollapseValue
  content?: ReactElement | null
  iconProps?: TSelectIconProps
  isOpen?: boolean
  dataId?: string
  id?: string | number
}

export type TCollapseGroupProps = {
  items: TCollapseItem[]
  singleSelection?: boolean
  titleProps?: ICollapseTitleProps
  className?: string
}

export interface TCollapseItemTitleV2 extends ICollapseTitleProps {
  text?: string | ReactNode
}

export type TCollapseV2Props = {
  isOpen?: boolean
  toggle?: (isOpen: boolean) => void
  children: ReactNode
  title: TCollapseItemTitleV2
  iconAlignment?: 'left' | 'right'
  hasIconBorder?: boolean
  dataId?: string | undefined
  id?: string | number
  className?: string
}
