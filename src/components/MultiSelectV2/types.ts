import { ReactElement } from 'react'
import { IFormCompProps } from '../../type'

export type TMultiSelectOption = {
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}

export type TMultiSelectV2Translations = {
  emptyListMainMessage?: string
}

export interface TMultiSelectV2PropTypes extends IFormCompProps {
  options: TMultiSelectOption[]
  selectedItems?: TMultiSelectOption[]
  onAdd?: (item: TMultiSelectOption) => void
  onRemove?: (id: string) => void
  className?: string
  label?: string | ReactElement
  labelAddons?: ReactElement
  required?: boolean
  disabled?: boolean
  error?: string | ReactElement
  helperText?: string
  size?: 'small' | 'medium' | 'large'
  dropdownWidth?: number
  translations?: TMultiSelectV2Translations
  dataTestIdPrefix?: string
}
