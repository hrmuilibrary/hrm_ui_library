import React, { ReactElement, useState } from 'react'
import { ITimePickerProps } from '../types'
import { Label } from '../../../helperComponents'
import { Input } from '../../Input'
import IconCalendarRight from '../../SVGIcons/IconCalendarRight'
import dayjs from 'dayjs'
import { MobileModalContent } from './MobileModalContent'

export const TimePickerMobile = (props: ITimePickerProps): ReactElement => {
  const {
    value,
    currentTime,
    format,
    label,
    required,
    hasError,
    size,
    placeholderText,
    dataId,
    changeHandler,
    setFieldValue,
    modalOptions,
    name
  } = props
  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentTime

  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [selectedTime, setCurrentTime] = useState(dateInitialValue)
  const openTimePicker = () => setIsPickerOpen(true)

  const closeTimePicker = () => setIsPickerOpen(false)

  const onChange = (date: Date) => {
    setCurrentTime(date)

    if (changeHandler) {
      changeHandler(date)
    }
    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
  }

  const onApply = (selectedTime: Date) => {
    onChange(selectedTime)
    closeTimePicker()
  }

  return (
    <>
      <Label text={label} required={required} invalid={hasError} />
      <Input
        size={size}
        onClick={openTimePicker}
        dataId={dataId}
        readOnly={true}
        datePlaceHolderText={label ? '' : placeholderText}
        rightIconProps={{ Component: IconCalendarRight, onClick: openTimePicker }}
        currentValue={selectedTime ? dayjs(selectedTime.toString()).format(format) : ''}
      />
      <MobileModalContent
        dateInitialValue={dateInitialValue}
        onApply={onApply}
        mobileTitle={modalOptions?.title}
        isOpen={isPickerOpen}
        closeTimePicker={closeTimePicker}
        modalApplyButtonText={modalOptions?.btnConfirmText}
      />
    </>
  )
}
