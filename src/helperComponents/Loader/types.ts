import { ICommon } from '../../type'

export interface LoaderProps extends ICommon {
  size?: 'small' | 'medium' | 'large'
  type?: 'lite' | 'dark'
}
