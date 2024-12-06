import React, { ReactElement } from 'react'
import { RangeDatePickerDesktop } from './RangeDatePickerDesktop'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { RangeDatePickerMobile } from './RangeDatePickerMobile'
import { IRangeDatePickerProps } from '../types'

export const RangeDatePicker = (props: IRangeDatePickerProps): ReactElement => {
  const isMobile = useIsMobile()
  return isMobile ? <RangeDatePickerMobile {...props} /> : <RangeDatePickerDesktop {...props} />
}
