import { InputHTMLAttributes, ReactElement, RefObject } from 'react'
import { ISVGIconProps } from '../SVGIcons/types'
export interface InputCustomProps
  extends IFormCompProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'onFocus' | 'value' | 'onChange' | 'autoComplete'
    > {
  mask?: string
  maskChar?: string | null
  maskPlaceholder?: string | null
  className?: string
  size?: 'large' | 'medium' | 'small'
  currentValue?: string
  error?: string | ReactElement
  label?: string | ReactElement
  leftIconProps?: ISVGIconProps | null
  rightIconProps?: ISVGIconProps
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  ref?: RefObject<HTMLInputElement>
  style?: Record<string, string>
  type?: 'text' | 'number' | 'time' | 'password' | 'email' | 'file' | 'tel' | 'date' | 'numeric'
  handleChange?: (event: TChangeEventType, value: string) => void
  placeholder?: string
  datePlaceHolderText?: string
  helperText?: string
  successMessage?: string
  maxCount?: number
  onFocus?: (event: TClickEventType) => void
  hideCounter?: boolean
  allowNegative?: boolean
  currencySymbol?: string
  separatorSymbol?: string
  allowLeadingZeros?: boolean
  thousandSeparator?: string
  labelAddons?: ReactElement
  autoComplete?: string
  witUpperCase?: boolean
  isAllowed?: (values: {
    formattedValue: string
    value: string
    floatValue: number | undefined
  }) => boolean
}
