import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'
export type TTitleSize="medium"| "large"
export interface TModalPropTypes {
  dataIdPrefix?: string
  closeOnOutsideClick?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  title?: string
  subtitle?: string
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  titleSize?:TTitleSize
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

export interface TModalConfirmationPropTypes {
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
