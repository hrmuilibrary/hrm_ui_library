import React, { ReactElement } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import type { ToastItem } from 'react-toastify'
import { Text } from '../Text'
import { Button } from '../Button'
import { TSnackbarProps, TToastProps } from './types'
import { DEFAULT_DURATION, ICONS_MAPPING, TYPE_MAPPING } from './consts'
import { IconDynamicComponent } from '../../helperComponents/IconDynamicComponent'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({
  actionProps,
  toastId,
  type = 'information',
  text,
  theme = 'light'
}: TToastProps) => {
  return (
    <div data-id={`${type}-toast-message`} className="snackbar" key={toastId} data-theme={theme}>
      <div className="snackbar__content">
        <IconDynamicComponent
          Component={ICONS_MAPPING[type]}
          type={TYPE_MAPPING[type]}
          size="medium"
        />
        <Text
          theme={theme}
          className="snackbar__text pl-16 pr-8"
          type="primary"
          size="standard"
          weight="regular"
          lineHeight="large"
        >
          {text}
        </Text>
      </div>

      {actionProps ? (
        <Button
          theme={theme}
          size="small"
          type="tertiary"
          {...actionProps}
          onClick={(e) => {
            toast.dismiss(toastId)
            actionProps?.onClick?.(e)
          }}
        />
      ) : null}
    </div>
  )
}

export const notify = (toastProps: TToastProps): void => {
  const { toastId, closeSnackbar, actionProps, duration = DEFAULT_DURATION } = toastProps
  toast(CustomToast(toastProps), {
    className: '_container',
    toastId,
    autoClose: actionProps ? false : duration
  })
  toast.onChange((payload: ToastItem) => {
    if (payload.status === 'removed') {
      closeSnackbar?.(payload.id)
    }
  })
}

export const Snackbar = (props: TSnackbarProps): ReactElement => {
  const { duration = 1000, position = 'bottom-center', theme = 'light' } = props

  return (
    <ToastContainer
      className={'snackbar-wrapper'}
      theme={theme}
      data-theme={theme}
      hideProgressBar
      transition={Slide}
      position={position}
      autoClose={duration}
      closeButton={() => null}
    />
  )
}
