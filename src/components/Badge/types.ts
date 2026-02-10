import { ICommon } from '../../type'

export interface TBadgeProps extends IFormCompProps, ICommon {
  text?: number | string
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'small'
  className?: string
}
