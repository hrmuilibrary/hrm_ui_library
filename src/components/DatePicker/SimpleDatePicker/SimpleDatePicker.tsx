import React, { ReactElement } from 'react'

import { SimpleDatePickerDesktop } from './SimpleDatePickerDesktop'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { SimpleDatePickerMobile } from './SimpleDatePickerMobile'
import { ISimpleDatePickerProps } from '../types'

export const SimpleDatePicker = (props: ISimpleDatePickerProps): ReactElement => {
  const isMobile = useIsMobile()
  return isMobile ? <SimpleDatePickerMobile {...props} /> : <SimpleDatePickerDesktop {...props} />
}
