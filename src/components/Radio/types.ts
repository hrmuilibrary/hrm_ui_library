import { ReactElement } from 'react'
import { ICommon } from '../../type'

export interface TRadioProps extends IFormCompProps, ICommon {
  showRadioIcon?: boolean
  label?: string | ReactElement
  helperText?: string | ReactElement
  className?: string
  disabled?: boolean
  iconProps?: ReactElement
  isSelected?: boolean
  onClick?: (isChecked: boolean) => void
}

export type TRadioOptionItem = {
  value: number | string
  label: string
  helperText?: string | ReactElement
  dataId?: string
}

export interface TRadioGroupProps extends IFormCompProps, ICommon {
  label?: string | ReactElement
  className?: string
  isHorizontal?: boolean
  selected: number | string
  options: TRadioOptionItem[]
  handleChange?: (selected: number | string) => void
  required?: boolean
  disabled?: boolean
  labelAddons?: ReactElement
}
