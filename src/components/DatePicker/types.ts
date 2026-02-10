import { DatePickerProps } from 'react-datepicker'
import { ReactNode } from 'react'
import { ICommon } from '../../type'

type DatePickerDefaultProps = Omit<IFormCompProps, 'value'> &
  Omit<DatePickerProps, 'onChange' | 'value'>

export interface TDatepickerBaseProps extends DatePickerDefaultProps, ICommon {
  dataId?: string
  dataIdPrefix?: string
  label?: ReactNode
  format?: string
  inline?: boolean
  modalOptions?: {
    title?: string
    btnConfirmText?: string
    btnCancelText?: string
  }
  locale?: string
}

export interface ISimpleDatePickerProps extends TDatepickerBaseProps {
  helperText?: string
  currentDate?: Date | undefined
  changeHandler?: (date: Date | null) => void
  excludeDates?: Date[]
  required?: boolean
  value?: Date
  size?: 'large' | 'small'
}
export interface ITimePickerProps extends TDatepickerBaseProps {
  currentTime?: Date | undefined
  changeHandler?: (date: Date | null) => void
  required?: boolean
  filterTime?: (date: Date) => boolean
  value?: Date
  size?: 'large' | 'small'
  modalApplyButtonText?: string
}

export interface IRangeDatePickerProps extends TDatepickerBaseProps {
  currentDates?: TRangePickerValues
  changeHandler: (date: TRangePickerValues) => void
  maxDate?: Date | undefined
  value?: [Date, Date]
}

export type TRangePickerValues = [Date | null, Date | null]

export enum DateFormat {
  LongDate = 'MMMM D, YYYY',
  ShortDate = 'MMM D, YYYY'
}
