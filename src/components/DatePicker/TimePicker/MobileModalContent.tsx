import React, { ReactElement, useState } from 'react'
import { Modal } from '../../Modal'
import { HOUR_OPTIONS, MINUTE_OPTIONS } from './consts'
import { WheelPicker, WheelPickerWrapper } from '@ncdai/react-wheel-picker'
import '@ncdai/react-wheel-picker/style.css'

type TProps = {
  mobileTitle?: string
  isOpen: boolean
  onApply: (selectedDate: Date) => void
  closeTimePicker: () => void
  dateInitialValue: Date | undefined
  modalApplyButtonText?: string
}

export const MobileModalContent = ({
  onApply,
  isOpen,
  mobileTitle,
  modalApplyButtonText = 'Apply',
  closeTimePicker,
  dateInitialValue = new Date()
}: TProps): ReactElement => {
  const [selectedHour, setSelectedHour] = useState<string>(`${dateInitialValue.getHours()}`)
  const [selectedMinute, setSelectedMinute] = useState<string>(`${dateInitialValue.getMinutes()}`)

  const applyDate = () => {
    const selectedDate = new Date()
    selectedDate.setHours(+selectedHour, +selectedMinute, 0)
    onApply(selectedDate)
  }

  return (
    <Modal
      isOpen={isOpen}
      title={mobileTitle}
      onClose={closeTimePicker}
      className="time-picker-mobile"
      buttonProps={{
        confirm: {
          buttonText: modalApplyButtonText,
          onClick: applyDate,
          className: 'time_apply_button'
        }
      }}
      closeIcon={true}
    >
      <div className="mobile_time_picker">
        <WheelPickerWrapper className="mobile_time_picker-wheel-picker">
          <WheelPicker
            value={`${selectedHour}`}
            options={HOUR_OPTIONS}
            infinite
            classNames={{
              optionItem:
                'mobile_time_picker-wheel-picker-item mobile_time_picker-wheel-picker-item__hour',
              highlightWrapper: 'mobile_time_picker-wheel-picker-highlight',
              highlightItem: 'mobile_time_picker-wheel-picker-highlight-item__hour'
            }}
            onValueChange={(hour: string) => {
              setSelectedHour(hour)
            }}
          />
          <WheelPicker
            value={`${selectedMinute}`}
            options={MINUTE_OPTIONS}
            infinite
            classNames={{
              optionItem:
                'mobile_time_picker-wheel-picker-item mobile_time_picker-wheel-picker-item__minute',
              highlightWrapper: 'mobile_time_picker-wheel-picker-highlight',
              highlightItem: 'mobile_time_picker-wheel-picker-highlight-item__minute'
            }}
            onValueChange={(minute: string) => {
              setSelectedMinute(minute)
            }}
          />
        </WheelPickerWrapper>
      </div>
    </Modal>
  )
}
