import React from 'react'
import { Badge as _Badge } from '../index'
import { BadgeV2 as _BadgeV2 } from '../index'
import type { StoryFn, StoryObj } from '@storybook/react'
import { TBadgeProps } from '../components/Badge/types'
import { TBadgeProps as TBadgePropsV2 } from '../components/BadgeV2/types'

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

const TemplateV2: StoryFn<TBadgePropsV2> = (args) => <_BadgeV2 {...args} />

export const BadgeV2: StoryObj<TBadgePropsV2> = TemplateV2.bind({})

BadgeV2.args = {
  text: '999+',
  style: 'filled',
  type: 'blue',
  size: 'large'
}

BadgeV2.argTypes = {
  type: {
    options: [
      'gray',
      'blue',
      'orange',
      'red',
      'green',
      'yellow',
      'purple',
      'sky',
      'pink',
      'teal',
      'empty'
    ],
    control: { type: 'select' }
  },
  style: {
    options: ['filled', 'light', 'lighter', 'stroke'],
    control: { type: 'select' }
  },
  size: {
    options: ['large', 'small'],
    control: { type: 'radio' }
  }
}
