/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, ReactElement } from 'react'

import { SimpleDatePickerDesktop } from './SimpleDatePickerDesktop'
import { useIsMobile } from '../../../hooks/useGetIsMobile'
import { SimpleDatePickerMobile } from './SimpleDatePickerMobile'
import { ISimpleDatePickerProps } from '../types'

export const SimpleDatePicker = forwardRef((props: ISimpleDatePickerProps, _ref): ReactElement => {
  const isMobile = useIsMobile()
  return isMobile ? <SimpleDatePickerMobile {...props} /> : <SimpleDatePickerDesktop {...props} />
})

SimpleDatePicker.displayName = 'SimpleDatePicker'
