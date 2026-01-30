import React, { useState } from 'react'
import {
  SimpleDatePicker as _SimpleDatePicker,
  TimePicker as _TimePicker,
  RangeDatePicker as _RangeDatePicker
} from '../components/DatePicker'
import { StoryFn, type StoryObj } from '@storybook/react'
import { IRangeDatePickerProps, ISimpleDatePickerProps } from '../components/DatePicker/types'

export default {
  title: 'DatePicker',
  component: _RangeDatePicker,
  argTypes: {
    locale: { control: 'radio', options: ['en', 'ru', 'hy'] }
  }
}

const CURRENT_YEAR = new Date().getFullYear()

const getAllLastDays = () => {
  const arr: Date[] = []

  for (let month = 0; month <= 12; month++) {
    const lastDayDate = new Date(CURRENT_YEAR, month + 1, 0)
    const lastDayOfMonth = lastDayDate.getDate()

    for (let day = 25; day <= lastDayOfMonth; day++) {
      arr.push(new Date(CURRENT_YEAR, month, day))
    }
  }
  return [new Date('2025-01-14T00:00:00')]
}

const isWeekend = (date: Date) => {
  return date.getDay() === 6 || date.getDay() === 0 // 6 is Saturday, 0 is Sunday
}

const isSameDay = (date1: Date, date2: Date): boolean => {
  const day1 = date1.getDate()
  const month1 = date1.getMonth()
  const year1 = date1.getFullYear()

  const day2 = date2.getDate()
  const month2 = date2.getMonth()
  const year2 = date2.getFullYear()

  return day1 === day2 && month1 === month2 && year1 === year2
}

const isWeekday = (date: Date, publicHolidays: string[]): boolean => {
  // Return true if the day is not Saturday or Sunday or Public holiday
  return !isWeekend(date) && !publicHolidays.some((holiday) => isSameDay(new Date(holiday), date))
}
const publicHolidays = ['2025-01-14T00:00:00']

const SimplePicker: StoryFn<ISimpleDatePickerProps> = (args) => {
  const [value, setValue] = useState<Date | undefined>(undefined)

  return (
    <div style={{ width: 300 }}>
      <_SimpleDatePicker
        {...args}
        value={value}
        minDate={new Date()}
        label={'Simple Date Picker'}
        modalOptions={{
          title: 'Select date'
        }}
        changeHandler={setValue}
        format="DD, MMMM YYYY"
        // label="ddd"
        placeholderText="Select date"
        size="small"
        // excludeDates={getAllLastDays()}
        // minDate={new Date(new Date().setDate(new Date().getDate() + 15))}
        // maxDate={new Date(new Date().setDate(new Date().getDate() + 60))}
        filterDate={(date: Date) => isWeekday(date, publicHolidays)}
      />
    </div>
  )
}
export const SimpleDatePicker: StoryObj<ISimpleDatePickerProps> = SimplePicker.bind({
  locale: 'en'
})

const TimeDatePicker = (): React.ReactElement => {
  const [value1, setValue1] = useState<Date>(new Date())
  // const [value2, setValue2] = useState<Date>(new Date())
  // const filterPassedTime = (time) => {
  //   // const currentDate = value1
  //   const selectedDate = new Date(time)
  //   return value1.getTime() < selectedDate.getTime()
  // }
  return (
    <div style={{ width: 300 }}>
      <_TimePicker
        value={value1}
        changeHandler={setValue1}
        timeIntervals={60}
        format={'HH:mm'}
        label="time"
        modalOptions={{ title: 'Select time', btnConfirmText: 'Apply' }}
      />
      {/* <_TimePicker value={value2} changeHandler={setValue2} filterTime={filterPassedTime} /> */}
    </div>
  )
}
export const TimePicker = TimeDatePicker.bind({})

const RangePicker: StoryFn<IRangeDatePickerProps> = (args) => {
  const [value, setValue] = useState<any>([new Date(), new Date()])

  return (
    <div style={{ width: 300 }}>
      <_RangeDatePicker
        {...args}
        value={value}
        changeHandler={setValue}
        label={'Range Label'}
        modalOptions={{ title: 'Select date', btnConfirmText: 'Apply', btnCancelText: 'Cancel' }}
        filterDate={(date: Date) => date.getDay() !== 0 && date.getDay() !== 6}
      />
    </div>
  )
}
export const RangeDatePicker: StoryObj<IRangeDatePickerProps> = RangePicker.bind({})

RangeDatePicker.args = {
  label: 'Range Date Picker',
  format: 'DD, MMMM YYYY'
}
