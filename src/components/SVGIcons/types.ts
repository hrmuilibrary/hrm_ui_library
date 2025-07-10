import { LegacyRef, MouseEvent } from 'react'

export type TSVGIconSize =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

export type TSVGIconType =
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

export interface ISVGIconProps {
  size?: TSVGIconSize
  type?: TSVGIconType
  onClick?: (event: MouseEvent<any>) => void
  className?: string
  refHandler?: LegacyRef<SVGSVGElement> | undefined
  id?: string
  dataId?: string
  Component?: TSVGIconComponent
}

export type TTextSize = 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large'
