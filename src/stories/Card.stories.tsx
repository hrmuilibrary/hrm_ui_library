import React from 'react'
import { Card as _Card } from '../components/Card'
import { Text } from '../components/Text'
import type { StoryFn, StoryObj } from '@storybook/react'
import { TCardProps } from '../components/Card/types'
import { boolean } from 'yup'

export default {
  title: 'Card',
  component: _Card,
  argTypes: {
    'title.alignment': {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' }
    },
    'title.text': {
      control: { type: 'text' }
    },
    'title.color': {
      options: ['blue', 'purple', 'yellow', 'pink', 'green', 'grey'],
      control: { type: 'radio' }
    },
    isExpandable: boolean,
    isExpanded: boolean
  }
}

const Template: StoryFn<TCardProps> = (args) => {
  return (
    <_Card {...args}>
      <_Card.Head>Head is here</_Card.Head>
      <_Card.Body>
        <div>
          <br />
          <br />
          <Text>Card Body is here</Text>
          <br />
          <Text>lorem ipsum</Text>
        </div>
      </_Card.Body>
      <_Card.Footer>
        <Text>Footer text here</Text>
      </_Card.Footer>
    </_Card>
  )
}

export const Card: StoryObj<TCardProps> = Template.bind({})

Card.args = {
  title: {
    alignment: 'top',
    text: 'mon',
    color: 'yellow'
  },
  isExpandable: true,
  noDivider: true,
  isExpanded: false
}
