import { ElementType, ReactNode } from 'react'
import { ICommon } from '../../type'

export interface HeadingPropTypes extends ICommon {
  children?: ReactNode
  type?: ElementType
  size?: 'xsmall' | 'small' | 'standard' | 'medium' | 'large' | 'xlarge'
  weight?: 'regular' | 'semibold' | 'bold' | 'bolder'
  lineHeight?: 'xsmall' | 'small' | 'medium' | 'large'
  className?: string
  onClick?: (event: TClickEventType) => void
  dataId?: string
}
