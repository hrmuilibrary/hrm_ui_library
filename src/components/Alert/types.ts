import { TButtonPropTypes } from '../Button/types'
import { ICommon, IFormProps } from '../../type'

export type TAlertTypes = 'success' | 'error' | 'warning' | 'information' | 'discovery'
export type TAlertPosition = 'inline' | 'sticky'

export interface TAlertProps extends IFormProps, ICommon {
  type?: TAlertTypes
  position?: TAlertPosition
  text: string | React.ReactElement
  subtext?: string | React.ReactElement
  closeIcon?: boolean
  onClose: () => void
  buttonProps?: {
    confirm: TButtonPropTypes
    cancel?: TButtonPropTypes
  }
  className?: string
}
