import { TButtonPropTypes } from '../Button/types'
import { ICommon } from '../../type'

export interface TEmptyProps extends ICommon {
  size?: string
  className?: string
  mainMessage?: string
  paragraphMessage?: string
  buttonProps?: TButtonPropTypes
  illustration?: string
}
