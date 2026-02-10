import { ReactNode } from 'react'
import { ICommon } from '../../type'

export interface LabelPropTypes extends ICommon {
  required?: boolean
  disabled?: boolean
  invalid?: boolean
  text?: ReactNode
  size?: 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large'
  className?: string
  labelAddons?: React.ReactElement
  dataId?: string
}
