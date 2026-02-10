import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'
import { ICommon } from '../../type'
export type TTitleSize = 'medium' | 'large'
export interface TModalPropTypes extends ICommon {
  dataIdPrefix?: string
  closeOnOutsideClick?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  title?: string
  subtitle?: string
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  titleSize?: TTitleSize
  withFooter?: boolean
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  closeIcon?: boolean
  children?: ReactNode
  className?: string
  confirmBtnTooltipText?: string
  isMobileFullScreen?: boolean
}

export interface TModalConfirmationPropTypes extends ICommon {
  dataIdPrefix?: string
  closeOnOutsideClick?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  subtitle?: string
  size?: 'small' | 'large'
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  iconProps?: {
    Component: TSVGIconComponent
  }
  className?: string
}
