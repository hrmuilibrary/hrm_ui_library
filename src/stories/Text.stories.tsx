import React from 'react'
import { Text as _Text } from '../index'
import { StoryFn, StoryObj } from '@storybook/react'
import { TextPropTypes } from '../components/Text/types'

export default {
  title: 'Text',
  component: _Text,
  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'selected',
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
      options: ['xxsmall', 'xsmall', 'small', 'standard', 'medium', 'large', 'xlarge'],
      control: { type: 'radio' }
    },
    as: {
      options: ['p', 'span', 'div', 'h1'],
      control: { type: 'radio' }
    },
    lineHeight: {
      options: ['xsmall', 'small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    weight: {
      options: ['regular', 'semibold', 'bold', 'bolder'],
      control: { type: 'radio' }
    }
  }
}

type TextTemplatePropTypes = TextPropTypes & { text: string }

const Template: StoryFn<TextTemplatePropTypes> = (args) => {
  return (
    <div style={{ padding: '20px', backgroundColor: `${args.type == 'inverse' ? '#919191' : ''}` }}>
      <_Text {...args}>{args.text}</_Text>
    </div>
  )
}

export const Text: StoryObj<TextTemplatePropTypes> = Template.bind({})
Text.args = {
  type: 'primary',
  as: 'p',
  size: 'standard',
  lineHeight: 'large',
  weight: 'regular',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}
