import React, { ReactElement, useState } from 'react'
import { Modal } from '../../../Modal'
import { TimePicker } from './TimePicker'
import { formatHourOrMinute } from '../helpers'

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
  const [selectedHour, setSelectedHour] = useState<number>(dateInitialValue.getHours())
  const [selectedMinute, setSelectedMinute] = useState<number>(dateInitialValue.getMinutes())

  const applyDate = () => {
    const selectedDate = new Date()
    selectedDate.setHours(selectedHour, selectedMinute, 0)
    onApply(selectedDate)
  }

  const onChange = (value: string) => {
    const [hours, minutes] = value.split(':').map(Number)
    setSelectedHour(hours)
    setSelectedMinute(minutes)
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
        <TimePicker
          onChange={onChange}
          value={`${formatHourOrMinute(selectedHour)}:${formatHourOrMinute(selectedMinute)}`}
        />
      </div>
    </Modal>
  )
}
