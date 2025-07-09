import type { WheelPickerOption } from '@ncdai/react-wheel-picker'

export const createArray = (length: number, add = 0): WheelPickerOption[] =>
  Array.from({ length }, (_, i) => {
    const value = i + add
    return {
      label: value.toString().padStart(2, '0'),
      value: value.toString()
    }
  })

export const meridiemOptions: WheelPickerOption[] = [
  { label: 'AM', value: 'AM' },
  { label: 'PM', value: 'PM' }
]
