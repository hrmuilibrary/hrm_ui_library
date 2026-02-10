import { ICommon } from '../../type'

export interface TErrorMessageProps extends ICommon {
  message?: string | React.ReactElement
  icon?: string
  dataId?: string
  className?: string
}
