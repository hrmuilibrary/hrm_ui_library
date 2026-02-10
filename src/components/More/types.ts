import { TextPropTypes } from '../Text/types'
import { ICommon } from '../../type'

export type TMorePropTypes = ICommon & {
  textProps?: TextPropTypes
  expandedText: string
  collapsedText: string
  buttonText?: {
    expand: string
    collapse: string
  }
}
