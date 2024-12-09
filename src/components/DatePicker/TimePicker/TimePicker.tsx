import React, { ReactElement } from 'react'
import { ITimePickerProps } from '../types'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { TimePickerMobile } from './TimePickerMobile'
import { TimePickerDesktop } from './TimePickerDesktop'

export const TimePicker = (props: ITimePickerProps): ReactElement => {
  const isMobile = useIsMobile()

  return isMobile ? <TimePickerMobile {...props} /> : <TimePickerDesktop {...props} />
}
