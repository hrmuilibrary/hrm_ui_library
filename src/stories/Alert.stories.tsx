import React from 'react'
import { type StoryFn } from '@storybook/react'
import { Alert as AlertComp } from '../index'
import { TAlertProps } from '../components/Alert/types'

export default {
  title: 'Alert',
  component: AlertComp,
  argTypes: {
    type: {
      options: ['information', 'success', 'error', 'warning', 'discovery'],
      control: { type: 'radio' }
    },
    position: {
      options: ['inline', 'sticky'],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TAlertProps> = (args) => (
  <AlertComp
    {...args}
    buttonProps={{
      confirm: {
        buttonText: 'Register',
        buttonActionType: 'submit'
      },
      cancel: { buttonText: 'Cancel' }
    }}
  />
)

export const Alert = Template.bind({})

Alert.args = {
  type: 'information',
  position: 'inline',
  text: 'Alert line which displays the main function or reason of the alert.',
  subtext: 'Become a legendary UX/UI designer through real world and practical courses.',
  closeIcon: true
}
