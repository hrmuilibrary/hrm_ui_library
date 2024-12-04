import { ReactElement, ReactNode } from 'react'
import { LinkPropTypes } from '../Link/types'

export interface TPopoverProps extends IFormCompProps {
  clicked?: boolean
  text?: string | ReactElement
  linkAddons?: LinkPropTypes
  linkText?: string
  children?: ReactNode
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'middle-left'
    | 'middle-right'
  className?: string
  elemRef?: HTMLElement
  id?: string | number
  mobileTitle?: string
}

export interface TPopoverDesktopProps extends TPopoverProps {
  showMessage: () => void
  hideMessage: () => void
  parent: HTMLElement | null
}

export interface TPopoverMobileProps extends TPopoverProps {
  hideMessage: () => void
}
