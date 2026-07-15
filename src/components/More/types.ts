import { IBaseProps } from '../../type'
import { TextPropTypes } from '../Text/types'

export type TMorePropTypes = IBaseProps & {
  textProps?: TextPropTypes
  expandedText: string
  collapsedText: string
  buttonText?: {
    expand: string
    collapse: string
  }
}
