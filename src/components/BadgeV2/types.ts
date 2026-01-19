import { ReactNode } from 'react'
import { TSVGIconType } from '../../type'

export interface TBadgeV2Props extends IFormCompProps {
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
  size?: 'large' | 'small'
  style?: 'filled' | 'light' | 'lighter' | 'stroke'
  iconProps?: TIconProps
  className?: string
  disabled?: boolean
  dot?: boolean
  withDot?: boolean
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
