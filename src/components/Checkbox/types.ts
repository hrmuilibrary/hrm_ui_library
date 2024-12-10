import { TPopoverProps } from '../Popover/types'

export interface TCheckboxProps extends IFormCompProps {
  label?: string | React.ReactElement
  beforeLink?: string | React.ReactElement
  afterLink?: string | React.ReactElement
  className?: string
  disabled?: boolean
  required?: boolean
  link?: string
  selectedValue?: boolean
  iconProps?: {
    name: string
  }
  helperText?: string
  onClick?: (isChecked: boolean) => void
  popoverAddons?: TPopoverProps
  isInvalid?: boolean
}
