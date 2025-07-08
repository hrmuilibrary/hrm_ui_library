import React, { ReactElement, useEffect, useState } from 'react'
import { HourWheel } from './HourWheel'
import { MinuteWheel } from './MinuteWheel'

interface ITimePickerProps {
  value?: string
  cellHeight?: number
  onChange?: (value: string) => void
}

export const TimePicker = ({
  value: initialValue = '00:00',
  cellHeight: height = 36,
  onChange
}: ITimePickerProps): ReactElement => {
  const [value, setValue] = useState(initialValue)
  const params = {
    height,
    value,
    setValue
  }

  useEffect(() => {
    onChange?.(value)
  }, [value])

  return (
    <div className="react-time-picker">
      <div className="react-time-picker-container" style={{ height: `${height * 5 + 40}px` }}>
        <div
          className="react-time-picker-selected-overlay"
          style={{
            top: `${height * 2 + 20}px`,
            height: `${height}px`
          }}
        />
        <HourWheel {...params} />
        <div className="react-time-picker-colon">:</div>
        <MinuteWheel {...params} />
      </div>
    </div>
  )
}
