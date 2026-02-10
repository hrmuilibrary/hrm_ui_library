import { ICommon } from '../../type'

export interface TDividerProps extends ICommon {
  type: 'primary' | 'secondary'
  isHorizontal?: boolean
  className?: string
  color?: 'light-grey' | 'grey'
}
