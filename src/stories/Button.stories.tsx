import React from 'react'
import { type StoryFn, type StoryObj } from '@storybook/react'

import { Button as _Button, IconChevronDown } from '../index'
import { TButtonPropTypes } from '../components/Button/types'
import { CodeBlock } from '../helperComponents'

export default {
  title: 'Button',
  component: _Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'text', 'link'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const designSpecs = `
<Button size="large" buttonText="Label" />
<Button type="tertiary" size="large" buttonText="Label" />
<Button size="large" buttonText="Label" isLoading />
<Button type="text" size="large" buttonText="Label" iconProps={{ Component: IconChevronDown }} />
<Button type="link" size="large">Label</Button>
`

const Template: StoryFn<TButtonPropTypes> = (args) => (
  <div>
    <_Button {...args} />
    <br />
    <div
      style={{
        display: 'flex',
        gap: '20px',
        borderTop: '1px solid #ccc',
        marginTop: '30px',
        paddingTop: '20px'
      }}
    >
      <_Button size="large" buttonText="Label" />
      <_Button type="tertiary" size="large" buttonText="Label" />
      <_Button size="large" buttonText="Label" isLoading />
      <_Button
        type="text"
        size="large"
        buttonText="Label"
        iconProps={{ Component: IconChevronDown }}
      />
      <_Button type="link" size="large">
        Label
      </_Button>
    </div>
    <br />
    <CodeBlock title="Design Specs Example">{designSpecs}</CodeBlock>
  </div>
)

export const Button: StoryObj<TButtonPropTypes> = Template.bind({})
Button.args = {
  iconProps: {
    Component: IconChevronDown
  },
  autoFocus: true,
  type: 'tertiary',
  size: 'large',
  disabled: false,
  isLoading: false,
  buttonText: 'Label',
  onClick: () => console.log('button clicked')
}
