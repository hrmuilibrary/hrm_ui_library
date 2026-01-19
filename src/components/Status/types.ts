import { ReactElement, ReactNode } from 'react'
import { ISVGIconProps } from '../../type'

export type TStatusTypes =
  | 'primary'
  | 'disabled'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'

export interface TStatusProps extends IFormCompProps {
  text?: string
  children?: ReactNode
  leftIconProps?: ISVGIconProps
  rightIconProps?: ReactElement
  type?: TStatusTypes
  size?: 'large' | 'medium' | 'small'
  className?: string
  withCircle?: boolean
  withBackground?: boolean
  dataId?: string
}
