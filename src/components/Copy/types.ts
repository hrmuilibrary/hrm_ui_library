import { ICommon } from '../../type'

export type TCopyProps = ICommon & {
  className?: string
  textAfterCopy?: string
  text: string
  dataId?: string
}
