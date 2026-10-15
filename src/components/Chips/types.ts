import { HTMLAttributes, ReactNode } from 'react'
import { ISVGIconProps, IFormCompProps } from '../../type'

export type TChipsColors =
  | 'primary'
  | 'disabled'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'
export interface TChipsProps
  extends IFormCompProps,
    Omit<
      HTMLAttributes<HTMLDivElement>,
      'color' | 'onClick' | 'onChange' | 'placeholder' | 'className' | 'id' | 'children'
    > {
  [key: `data-${string}`]: string | number | boolean | undefined
  text?: string | ReactNode
  leftIconProps?: ISVGIconProps
  color?: TChipsColors
  type?: 'filled' | 'accent' | 'outlined'
  size?: 'large' | 'medium' | 'small' | 'xsmall'
  className?: string
  disabled?: boolean
  withAction?: boolean
  onClick?: (e: TClickEventType) => void
  onRemove?: (e: TClickEventType) => void
  id?: string
}

export enum ChipCustomType {
  filled = 'filled',
  inverse = 'inverse'
}
