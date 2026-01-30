import { ElementType, MouseEvent, ReactNode } from 'react'
import { ICommon } from '../../type'

type TTextTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'inverse'
  | 'selected'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'

export type TTextSize = 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large' | 'xlarge'
type TTextWeight = 'regular' | 'semibold' | 'bold' | 'bolder'
type TTextLineHeight = 'xsmall' | 'small' | 'medium' | 'large'

export interface TextPropTypes extends ICommon {
  id?: string
  as?: ElementType
  title?: string
  children?: ReactNode
  type?: TTextTypes
  size?: TTextSize
  weight?: TTextWeight
  lineHeight?: TTextLineHeight
  className?: string
  dataId?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
}
