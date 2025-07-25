import { ReactNode } from 'react'
import { TSVGIconType } from '../SVGIcons/types'

export interface TBadgeProps extends IFormCompProps {
  text?: number | string | ReactNode
  type?:
    | 'gray'
    | 'blue'
    | 'orange'
    | 'red'
    | 'green'
    | 'yellow'
    | 'purple'
    | 'sky'
    | 'pink'
    | 'teal'
    | 'empty'
  size?: 'large' | 'small'
  style?: 'filled' | 'light' | 'lighter' | 'stroke'
  iconProps?: TIconProps
  className?: string
}

export enum BadgeSize {
  small = 'small',
  large = 'large'
}
export interface TIconProps {
  size?: TIconSize
  type?: TSVGIconType
  alignment?: 'left' | 'right'
  Component: TSVGIconComponent
}
