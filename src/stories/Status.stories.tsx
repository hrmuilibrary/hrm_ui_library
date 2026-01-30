import React from 'react'
import { Popover } from '../components/Popover'
import { Text } from '../components/Text'
import { Status as _Status } from '../components/Status'
import IconPerson from '../components/SVGIcons/IconPerson'
import { StoryFn, StoryObj } from '@storybook/react'
import { TStatusProps } from '../components/Status/types'

export default {
  title: 'Status',
  component: _Status,
  argTypes: {
    type: {
      options: [
        'primary',
        'disabled',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TStatusProps> = (args) => {
  return (
    <>
      <_Status {...args}>{/*<Text size={'small'}>Status subtext</Text>*/}</_Status>
    </>
  )
}

export const Status: StoryObj<TStatusProps> = Template.bind({})

Status.args = {
  text: 'Status',
  type: 'discovery',
  size: 'large',
  withCircle: false,
  withBackground: true,
  leftIconProps: {
    Component: IconPerson
  }
}
