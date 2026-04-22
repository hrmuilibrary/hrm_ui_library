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

export interface LinkPropTypes {
  children?: string | React.ReactElement
  className?: string
  type?: TLinkTypes
  url?: string
  dataId?: string
  target?: string
  beforeLink?: string | React.ReactElement
  afterLink?: string | React.ReactElement
  onclick?: () => void
}
