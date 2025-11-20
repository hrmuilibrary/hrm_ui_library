import React, { useRef, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../../Input'
import { ITimePickerProps } from '../types'
import { Label } from '../../../helperComponents'
import { useImportFilesDynamically } from '../hooks'
import IconClock from '../../SVGIcons/IconClock'

export const TimePickerDesktop = (props: ITimePickerProps): React.ReactElement => {
  const {
    value,
    currentTime,
    name,
    setFieldValue,
    label,
    size,
    dataId,
    changeHandler,
    required,
    format = 'HH:mm',
    locale = 'hy',
    hasError,
    ...rest
  } = props
  const [time, setTime] = useState<string>()
  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentTime
  const calendarRef = useRef<{
    isCalendarOpen: () => boolean
    setOpen: (isOpen: boolean) => void | null
  }>(null)

  useImportFilesDynamically(locale)

  const onChange = (date: Date | null) => {
    if (changeHandler) {
      changeHandler(date)
    }
    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
  }

  const openDatepicker = () => {
    if (calendarRef.current) {
      const isOpen = calendarRef.current?.isCalendarOpen()
      calendarRef.current?.setOpen(!isOpen)
    }
  }

  const formatAndSetTime = () => {
    const _date = new Date()
    _date.setHours(0, 0)
    if (!time) {
      onChange(_date)
      return
    }

    if (time.includes(':') && time[2] !== ':') {
      onChange(_date)
      return
    }

    const t = time.replace(':', '')

    if (t.length === 4) {
      const hours = Number(t.slice(0, 2))
      const minutes = Number(t.slice(2, 4))

      if (hours < 24 && minutes < 60) {
        _date.setHours(hours, minutes)
      }
    }

    onChange(_date)
  }
  const onInputChange = (e: TChangeEventType) => {
    setTime(e.target.value)
  }

  return (
    <div className="picker-container input__inner">
      <Label text={label} required={required} invalid={hasError} />

      <DatePicker
        selected={dayjs(dateInitialValue).isValid() ? dateInitialValue : null}
        locale={locale}
        showTimeSelect
        showTimeSelectOnly
        dateFormat={format}
        // @ts-ignore
        ref={calendarRef}
        {...rest}
        onChange={onChange}
        customInput={
          <Input
            handleChange={onInputChange}
            handleBlurEvent={formatAndSetTime}
            disabled={rest.disabled}
            dataId={dataId}
            size={size}
            rightIconProps={{ Component: IconClock, onClick: openDatepicker }}
          />
        }
      />
    </div>
  )
}
