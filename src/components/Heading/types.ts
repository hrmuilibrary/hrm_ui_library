import { IBaseProps } from '../../type'
import { ElementType, ReactNode } from 'react'

export interface HeadingPropTypes extends IBaseProps {
  children?: ReactNode
  type?: ElementType
  size?: 'xsmall' | 'small' | 'standard' | 'medium' | 'large' | 'xlarge'
  weight?: 'regular' | 'semibold' | 'bold' | 'bolder'
  lineHeight?: 'xsmall' | 'small' | 'medium' | 'large'
  className?: string
  onClick?: (event: TClickEventType) => void
}
