import React, { ReactElement } from 'react'
import { Modal } from '../../Modal'
import { ICommon } from '../../../type'

type TProps = ICommon & {
  isOpen: boolean
  children: ReactElement
  closeDrodown: () => void
  modalApplyButtonText?: string
  applySelectedItems: (isChecked: boolean) => void
}

export const MobileWrapper = (props: TProps): ReactElement => {
  const {
    applySelectedItems,
    isOpen,
    closeDrodown,
    children,
    modalApplyButtonText = 'Apply',
    theme = 'light'
  } = props

  const submitSelection = () => {
    applySelectedItems(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeDrodown}
      onSubmit={submitSelection}
      isMobileFullScreen
      className={'select__modal'}
      theme={theme}
      buttonProps={{
        confirm: {
          buttonText: modalApplyButtonText
        }
      }}
    >
      {children}
    </Modal>
  )
}
