import { IBaseProps } from '../../type'
type TLinkTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'inverse'
  | 'selected'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'

export interface LinkPropTypes extends IBaseProps {
  children?: string | React.ReactElement
  className?: string
  type?: TLinkTypes
  url?: string
  target?: string
  beforeLink?: string | React.ReactElement
  afterLink?: string | React.ReactElement
  onclick?: () => void
}
