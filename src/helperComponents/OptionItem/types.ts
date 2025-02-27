import { CSSProperties, ReactElement } from 'react'
import { TTooltipProps } from '../../components/Tooltip/types'

export type TSelectItemProps = {
  isSelected?: boolean
  data: TSelectOption
  className?: string
  onClick: (itemValue: TSelectedValue) => void
  labelLeftIconProps?: TSelectIconProps
  OptionRightIconComponent?: (value: TItemValue) => ReactElement
  LabelRightIconComponent?: (value: TItemValue) => ReactElement
  disabled?: boolean
  isCheckbox?: boolean
  tooltipAddons?: TTooltipProps
  dataId?: string
  style?: CSSProperties
  size?: 'small' | 'large'
}
