import React, { useState } from 'react'
import { Modal as _Modal } from '../components/Modal'
import { ModalConfirmation as _ModalConfirmation } from '../components/Modal'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TModalConfirmationPropTypes, TModalPropTypes } from '../components/Modal/types'
import IconDelete from '../components/SVGIcons/IconDelete'
import { Select } from '../components/Select'

export default {
  title: 'Modal',
  component: _Modal,
  argTypes: {
    size: {
      options: ['xlarge', 'large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const OPTIONS = [
  {
    value: 1,
    label: 'Armenia',
    meta: 'AM'
  },
  {
    value: 2,
    label: 'Italy',
    meta: 'IT'
  }
]

const Template: StoryFn<TModalPropTypes> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <_Modal
        {...args}
        titleSize="medium"
        onClose={closeModal}
        isOpen={isOpen}
        onSubmit={() => {
          closeModal()
          console.log('submit')
        }}
        buttonProps={{
          confirm: {
            buttonText: 'Save',
            buttonActionType: 'submit'
          },
          cancel: { buttonText: 'Cancel', type: 'secondary' }
        }}
      >
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>
  )
}
export const Modal: StoryObj<TModalPropTypes> = Template.bind({})

Modal.args = {
  size: 'medium',
  title: 'Title',
  subtitle: 'Subtitle',
  closeIcon: true,
  withFooter: true,
  confirmBtnTooltipText: 'Confirm'
}

const ModalConfirmationTemplate: StoryFn<TModalConfirmationPropTypes> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation
        {...args}
        iconProps={{
          Component: IconDelete
        }}
        onClose={closeModal}
        isOpen={isOpen}
        onSubmit={() => {
          closeModal()
          console.log('submit')
        }}
        buttonProps={{
          confirm: {
            buttonText: 'Delete the card',
            buttonActionType: 'submit'
          },
          cancel: { buttonText: 'Cancel' }
        }}
      />
    </div>
  )
}
export const ModalConfirmation: StoryObj<TModalConfirmationPropTypes> =
  ModalConfirmationTemplate.bind({})

ModalConfirmation.args = {
  size: 'small',
  title: 'Title text',
  subtitle: 'This is your subtitle that will give you more context'
}
