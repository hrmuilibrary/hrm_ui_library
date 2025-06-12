import { TSVGIconSize, TSVGIconType } from '../SVGIcons/types'

export const LITE_LOADER_TYPES = ['primary', 'danger']

export const ICON_SIZE_MAPPING: { [key: string]: TSVGIconSize } = {
  large: 'small',
  medium: 'small',
  small: 'xsmall'
}

export const ICON_TYPE_MAPPING: { [key: string]: TSVGIconType } = {
  primary: 'inverse',
  secondary: 'secondary',
  tertiary: 'primary',
  danger: 'inverse',
  text: 'information',
  link: 'selected'
}
