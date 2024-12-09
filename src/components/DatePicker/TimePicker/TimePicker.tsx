import React, { useRef, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../../Input'
import { ITimePickerProps } from '../types'
import { Label } from '../../../helperComponents'
import { useImportFilesDynamically } from '../hooks'
import IconClock from '../../SVGIcons/IconClock'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { TimePickerMobile } from './TimePickerMobile'
import { TimePickerDesktop } from './TimePickerDesktop'

export const TimePicker = (props: ITimePickerProps): JSX.Element => {
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
    dayjsLocale = 'hy-am',
    placeholderText,
    hasError,
    ...rest
  } = props

  const isMobile = useIsMobile()

  return isMobile ? <TimePickerMobile {...props} /> : <TimePickerDesktop {...props} />
}
