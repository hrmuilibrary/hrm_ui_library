import React, { useRef, useState, MouseEvent } from 'react'
import { Text } from '../../Text'
import { useGetElemPositions } from '../../../hooks'
import classNames from 'classnames'
import { IconChevronDown } from '../../SVGIcons/IconChevronDown'
import { IconChevronUp } from '../../SVGIcons/IconChevronUp'
import { Modal } from '../../Modal'
import { formatHour, formatMinute } from './helpers'

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
}: TProps) => {
  const [selectedHour, setSelectedHour] = useState<number>(dateInitialValue.getHours())

  const [selectedMinute, setSelectedMinute] = useState<number>(dateInitialValue.getMinutes())
  const decrementHour = () => {
    setSelectedHour((_hour) => {
      if (_hour === 1) {
        return 24
      }
      return _hour - 1
    })
  }
  const incrementHour = () => {
    setSelectedHour((_hour) => {
      if (_hour === 24) {
        return 1
      }
      return _hour + 1
    })
  }
  const decrementMinute = () => {
    setSelectedMinute((_minute) => {
      if (_minute === 0) {
        return 59
      }
      return _minute - 1
    })
  }
  const incrementMinute = () => {
    setSelectedMinute((_minute) => {
      if (_minute === 59) {
        return 0
      }
      return _minute + 1
    })
  }

  const applyDate = () => {
    const selectedDate = new Date()
    selectedDate.setHours(selectedHour)
    selectedDate.setMinutes(selectedMinute)
    selectedDate.setSeconds(0)
    onApply(selectedDate)
  }
  return (
    <Modal
      isOpen={isOpen}
      title={mobileTitle}
      onClose={closeTimePicker}
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
        <div className="flexbox flexbox align-items--center justify-content--center picker_items">
          <div className="date_item_picker_container">
            <IconChevronUp size="medium" onClick={decrementHour} />
            <Text size="large" weight="bolder" className="m-16">
              {formatHour(selectedHour)}
            </Text>
            <IconChevronDown size="medium" onClick={incrementHour} />
          </div>
          <div className="date_item_picker_container">
            <IconChevronUp size="medium" onClick={decrementMinute} />
            <Text size="large" weight="bolder" className="m-16">
              {formatMinute(selectedMinute)}
            </Text>
            <IconChevronDown size="medium" onClick={incrementMinute} />
          </div>
        </div>
      </div>
    </Modal>
  )
}
