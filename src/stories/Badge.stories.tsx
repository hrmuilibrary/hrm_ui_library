import React from 'react'
import { Badge as _Badge } from '../index'
import type { StoryFn, StoryObj } from '@storybook/react'
import { TBadgeProps } from '../components/Badge/types'

export default {
  title: 'Badge',
  component: _Badge,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TBadgeProps> = (args) => <_Badge {...args} />

export const Badge: StoryObj<TBadgeProps> = Template.bind({})

Badge.args = {
  text: '999+',
  type: 'primary',
  size: 'large'
}
