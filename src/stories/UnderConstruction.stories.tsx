import React from 'react'
import { UnderConstruction as _UnderConstruction } from '../index'
import IconAdd from '../components/SVGIcons/IconAdd'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TUnderConstructionProps } from '../components/UnderConstruction/types'

export default {
  title: 'UnderConstruction',
  component: _UnderConstruction,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template: StoryFn<TUnderConstructionProps> = (args) => {
  return <_UnderConstruction {...args} />
}

export const UnderConstruction: StoryObj<TUnderConstructionProps> = Template.bind({})

UnderConstruction.args = {
  size: 'large',
  language: 'hy'
}
