import { TButtonPropTypes } from '../Button/types'

export type TAlertTypes = 'success' | 'error' | 'warning' | 'information' | 'discovery'
export type TAlertPosition = 'inline' | 'sticky'

export interface TAlertProps extends IFormCompProps {
  type?: TAlertTypes
  position?: TAlertPosition
  text: string | React.ReactElement
  subtext: string | React.ReactElement
  closeIcon?: boolean
  onClose: () => void
  buttonProps?: {
    confirm: TButtonPropTypes
    cancel?: TButtonPropTypes
  }
  className?: string
}
