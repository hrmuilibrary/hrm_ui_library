import { ISVGIconProps } from '../SVGIcons/types'

interface IButtonGroupBase {
  type?: 'primary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
}

export interface IButtonGroupItem extends IButtonGroupBase {
  buttonText: string
  isActive?: boolean
  id?: string | number
  onClick?: () => void
  icons?: {
    left?: ISVGIconProps
    right?: ISVGIconProps
  }
}

export interface IButtonGroup extends IButtonGroupBase {
  buttons: IButtonGroupItem[]
  activeIndex: number
  onTabChange?: (index: number) => void
}
