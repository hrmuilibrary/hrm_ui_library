export interface TSwitcherProps extends IFormCompProps {
  onClick?: (isChecked: boolean) => void
  className?: string
  disabled?: boolean
  selectedValue?: boolean
  size?: 'large' | 'small'
  inlineType?: boolean
  id?: string
  label?: string
  labelAddons?: React.ReactElement
  orientation?: 'left' | 'right'
  hasSpaceBetween?: boolean
}
