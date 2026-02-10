import { ICommon } from '../../type'

export interface ImagePropTypes extends ICommon {
  name?: string
  imagePath?: string
  className?: string
  isBackgroundImage?: boolean
  backgroundSize?: 'cover' | 'contain'
  isFullWidth?: boolean
  isFullHeight?: boolean
  ratio?: '1/1' | '2/1' | '3/1' | '4/3' | '16/9' | '1/1.618' | '2/3'
}
