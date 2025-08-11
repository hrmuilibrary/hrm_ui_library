import { TTextSize } from '../Text/types'
import { TSVGIconSize } from '../SVGIcons/types'

export const TEXT_SIZE_MAPPING: { [key: string]: TTextSize } = {
  large: 'standard',
  medium: 'standard',
  small: 'small'
}

export const ICON_SIZE_MAPPING: { [key: string]: TSVGIconSize } = {
  large: 'small',
  medium: 'small',
  small: 'xsmall'
}
