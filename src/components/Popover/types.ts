import { ReactElement, ReactNode } from 'react'
import { LinkPropTypes } from '../Link/types'
import { ICommon } from '../../type'

export interface TPopoverProps extends IFormCompProps, ICommon {
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
  stopPropagation?: boolean
}

export interface TPopoverDesktopProps extends TPopoverProps {
  showMessage: (evnt: Event) => void
  hideMessage: () => void
  parent: HTMLElement | null
}

export interface TPopoverMobileProps extends TPopoverProps {
  hideMessage: () => void
}
