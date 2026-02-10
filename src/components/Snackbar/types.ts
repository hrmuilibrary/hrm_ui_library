import { TButtonPropTypes } from '../Button/types'
import { ICommon } from '../../type'

export type TSnackbarTypes = 'success' | 'error' | 'warning' | 'information'

export interface TToastProps {
  duration?: number
  type?: TSnackbarTypes
  toastId: number | string
  closeSnackbar?: (id: number | string) => void
  text: string | React.ReactElement
  actionProps?: TButtonPropTypes
}
export interface TSnackbarProps extends IFormCompProps, ICommon {
  duration?: number
  position:
    | 'top-center'
    | 'top-right'
    | 'top-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'bottom-left'
}
