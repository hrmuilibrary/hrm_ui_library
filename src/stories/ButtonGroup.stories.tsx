import type { StoryObj } from '@storybook/react-webpack5'
import { ButtonGroup as _ButtonGroup } from '../components/ButtonGroup'
import type { StoryFn } from '@storybook/react'
import React from 'react'
import { IButtonGroup } from '../components/ButtonGroup/types'
import {
  IconOnlyEmployee,
  IconPeopleList,
  IconProjectProduct,
  IconUnitsEmployee
} from '../components/SVGIcons'
import { noop } from '../utils/helpers'

export default {
  title: 'Button Group',
  component: _ButtonGroup,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    buttonText: {
      control: 'text',
      description: 'Text for the button'
    }
  }
}

const buttons = [
  {
    buttonText: 'Units Employee',
    icons: {
      left: { Component: IconUnitsEmployee },
      right: { Component: IconUnitsEmployee }
    },
    onClick: noop,
    id: 'unitsEmployee'
  },
  {
    buttonText: 'Only Employee',
    icons: {
      left: { Component: IconPeopleList }
    },
    onClick: noop,
    id: 'onlyEmployee'
  },
  {
    buttonText: 'Project Product',
    icons: {
      left: { Component: IconProjectProduct }
    },
    onClick: noop,
    id: 'projectProduct'
  }
]

const Template: StoryFn<IButtonGroup> = (args) => {
  const [index, setIndex] = React.useState(1)
  const onChange = (index: number) => {
    console.log(`Active button index: ${index}`)
    setIndex(index)
  }
  return <_ButtonGroup {...args} buttons={buttons} activeIndex={index} onTabChange={onChange} />
}

export const ButtonGroup: StoryObj<IButtonGroup> = Template.bind({})

ButtonGroup.args = {
  type: 'primary',
  size: 'large'
}
