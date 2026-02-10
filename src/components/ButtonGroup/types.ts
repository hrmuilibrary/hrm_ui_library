import { ISVGIconProps, ICommon } from '../../type'

interface IButtonGroupBase extends ICommon {
  type?: 'primary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
}

export interface IButtonGroupItem extends IButtonGroupBase {
  buttonText: string
  isActive?: boolean
  id: string | number
  onClick?: () => void
  icons?: {
    left?: ISVGIconProps
    right?: ISVGIconProps
  }
}

export interface IButtonGroup extends IButtonGroupBase {
  buttons: IButtonGroupItem[]
  activeIndex: number | string
  onTabChange?: (index: number | string) => void
}
