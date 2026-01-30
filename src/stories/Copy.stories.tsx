import React from 'react'
import { Copy as _Copy } from '../components/Copy'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TCopyProps } from '../components/Copy/types'

export default {
  title: 'Copy',
  component: _Copy,
  argTypes: {}
}

const Template: StoryFn<TCopyProps> = (args) => <_Copy {...args} />

export const Copy: StoryObj<TCopyProps> = Template.bind({})

Copy.args = {
  textAfterCopy: 'Copied'
}
