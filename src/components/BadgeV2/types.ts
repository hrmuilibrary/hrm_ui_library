import { TSVGIconType } from "../SVGIcons/types"

export interface TBadgeProps extends IFormCompProps {
  text?: number | string
  type?: BadgeType //'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'small'
  style?: BadgeStyle
  iconProps?: TIconProps
  className?: string
}

export enum BadgeStyle {
  filled = 'filled',
  light = 'light',
  lighter = 'lighter',
  stroke = 'stroke'
}

export enum BadgeType {
  gray = 'gray',
  blue = 'blue',
  orange = 'orange',
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  purple = 'purple',
  sky = 'sky',
  pink = 'pink',
  teal = 'teal',
  empty = 'empty'
}

export enum IconAlignment {
  left = 'left',
  right = 'right'
}

export enum BadgeSize {
  small = 'small',
  large = 'large'
}
export interface TIconProps {
  size?: TIconSize
  type?: TSVGIconType
  alignment?: IconAlignment
  Component: TSVGIconComponent
}