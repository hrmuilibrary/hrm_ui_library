import { ICommon } from '../../type'

export interface TFormFieldPropTypes extends ICommon {
  As: (props: IFormCompProps) => React.ReactElement
  name: string
  className?: string
  dataId?: string
  hideErrorMessage?: boolean
  errorMessageIcon?: string
  defaultValue?: any
}
