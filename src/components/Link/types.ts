export interface LinkPropTypes {
  children?: string | React.ReactElement
  className?: string
  url?: string
  dataId?: string
  target?: string
  beforeLink?: string | React.ReactElement
  afterLink?: string | React.ReactElement
  onclick?: () => void
}
