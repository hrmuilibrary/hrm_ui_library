import { IBaseProps } from '../../type'
import { TButtonPropTypes } from '../Button/types'

export interface TEmptyProps extends IBaseProps {
  size?: string
  className?: string
  mainMessage?: string
  paragraphMessage?: string
  buttonProps?: TButtonPropTypes
  illustration?: string
}
