import React, { useState } from 'react'
import {
  CollapseItem as _CollapseItem,
  CollapseGroup as _CollapseGroup,
  Collapse as _CollapseV2
} from '../index'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TCollapseGroupProps, TCollapseProps, TCollapseV2Props } from '../components/Collapse/types'
import { boolean, string } from 'yup'

export default {
  title: 'Collapse',
  component: _CollapseItem,
  argTypes: {},
  args: {}
}

const Template: StoryFn<TCollapseProps & { textTitle: string }> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <_CollapseItem
      {...args}
      reverse={true}
      title={{ text: args.textTitle }}
      isOpen={isOpen}
      toggle={isOpen ? close : open}
      additionalInfo={<div>COMPONENT</div>}
    >
      <div>My Accordion content</div>
    </_CollapseItem>
  )
}

export const CollapseItem: StoryObj<TCollapseProps & { textTitle: string }> = Template.bind({})

CollapseItem.args = {
  textTitle: 'Collapse'
}

const CollapseItems = [
  {
    title: 'collapse1',
    value: 1,
    content: <div>collapse1 content</div>,
    isOpen: true,
    id: 1
  },
  {
    title: 'collapse2',
    value: 2,
    content: <div style={{ height: 100 }}>collapse2 content</div>,
    isOpen: false
  },
  {
    title: 'collapse3',
    value: 3,
    content: <div style={{ height: 200 }}>collapse3 content</div>,
    isOpen: true,
    id: 3
  }
]

const Template1: StoryFn<TCollapseGroupProps> = (args: any) => {
  return <_CollapseGroup {...args} items={CollapseItems} titleColor="selected" />
}

export const CollapseGroup: StoryObj<TCollapseGroupProps> = Template1.bind({})

CollapseGroup.args = {}

const Template2: StoryFn<TCollapseV2Props> = (args) => <_CollapseV2 {...args} />

const CollapseV2Story = {
  title: 'Collapse',
  component: _CollapseV2,
  argTypes: {}
}

export const CollapseV2: StoryObj<TCollapseV2Props> = Template2.bind(CollapseV2Story)

CollapseV2.args = {
  isOpen: true,
  title: { text: 'Collapse Title' },
  iconAlignment: 'right',
  hasIconBorder: true,
  children: 'Lorem ipsum ...'
}

CollapseV2.argTypes = {
  title: {
    text: string
  },
  isOpen: boolean,
  iconAlignment: {
    control: { type: 'radio' },
    options: ['left', 'right'],
    description: 'Chevron Icon should be on the left or right side of title'
  },
  hasIconBorder: boolean
}
