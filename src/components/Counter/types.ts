import { ICommon } from '../../type'

export interface ICounterProps extends IFormCompProps, ICommon {
  min?: number
  max?: number
  handleChange?: (value: number | string | undefined) => void
  counter?: number
  customError?: string
  label?: string
  required?: boolean
}
