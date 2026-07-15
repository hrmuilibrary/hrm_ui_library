import { IBaseProps } from '../../type'
import { ElementType, MouseEvent, ReactNode } from 'react'

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

export interface TextPropTypes extends IBaseProps {
  id?: string
  as?: ElementType
  title?: string
  children?: ReactNode
  type?: TTextTypes
  size?: TTextSize
  weight?: TTextWeight
  lineHeight?: TTextLineHeight
  className?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
}
