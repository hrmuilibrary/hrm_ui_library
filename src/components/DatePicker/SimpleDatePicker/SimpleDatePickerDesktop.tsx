import React, { ReactElement, useRef } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../../Input'
import { Label } from '../../../helperComponents/Label'
import { CustomHeader } from '../CustomHeader/CustomHeader'
import { useImportFilesDynamically } from '../hooks'
import { ISimpleDatePickerProps } from '../types'
import IconCalendarRight from '../../SVGIcons/IconCalendarRight'

export const SimpleDatePickerDesktop = (props: ISimpleDatePickerProps): ReactElement => {
  const {
    value,
    currentDate,
    setFieldValue,
    name,
    label,
    size,
    locale = 'hy',
    changeHandler,
    format = 'M/D/YYYY',
    required = false,
    dataId,
    hasError,
    placeholderText,
    minDate,
    maxDate,
    dataIdPrefix,
    helperText,
    inline,
    theme = 'light',
    ...rest
  } = props

  const startYear = minDate ? minDate.getFullYear() : 1900
  const endYear = maxDate ? maxDate.getFullYear() : new Date().getFullYear() + 5
  const calendarRef = useRef<{
    isCalendarOpen: () => boolean
    setOpen: (isOpen: boolean) => void | null
  }>(null)

  useImportFilesDynamically(locale)

  const selectedDate =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentDate

  const openDatepicker = () => {
    if (calendarRef.current) {
      const isOpen = calendarRef.current?.isCalendarOpen()
      calendarRef.current?.setOpen(!isOpen)
    }
  }

  const onChange = (date: Date | null) => {
    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
    if (changeHandler) {
      changeHandler(date)
    }
  }

  return (
    <div className="picker-container" data-theme={theme}>
      <Label text={label} required={required} invalid={hasError} theme={theme} />

      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
        selected={dayjs(selectedDate).isValid() ? selectedDate : null}
        locale={locale}
        // @ts-ignore
        ref={calendarRef}
        customInput={
          <Input
            theme={theme}
            size={size}
            dataId={dataId}
            helperText={helperText}
            datePlaceHolderText={label ? '' : placeholderText}
            rightIconProps={{ Component: IconCalendarRight, onClick: openDatepicker }}
            currentValue={selectedDate ? dayjs(selectedDate.toString()).format(format) : ''}
          />
        }
        inline={inline}
        {...rest}
        onChange={onChange}
        renderCustomHeader={(props) => (
          <CustomHeader
            {...props}
            theme={theme}
            locale={locale}
            startYear={startYear}
            endYear={endYear}
            dataPrefix={dataIdPrefix}
          />
        )}
      />
    </div>
  )
}
