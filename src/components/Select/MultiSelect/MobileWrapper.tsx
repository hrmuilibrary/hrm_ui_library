import React, { ReactElement } from 'react'
import { Modal } from '../../Modal'

type TProps = {
  isOpen: boolean
  children: ReactElement
  closeDrodown: () => void
  modalApplyButtonText?: string
  applySelectedItems: (isChecked: boolean) => void
  dataId?: string
}

export const MobileWrapper = (props: TProps): ReactElement => {
  const {
    applySelectedItems,
    isOpen,
    closeDrodown,
    children,
    modalApplyButtonText = 'Apply',
    dataId
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
      dataIdPrefix={dataId}
      className={'select__modal'}
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
