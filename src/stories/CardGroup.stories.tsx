import React from 'react'
import { CardGroup as _CardGroup } from '../components/CardGroup'
import {  Card } from '../components/Card'
import {  Text } from '../components/Text'
import type { StoryFn, StoryObj } from '@storybook/react'
import { TCardGroupProps } from '../components/CardGroup/types'

export default {
  title: 'CardGroup',
  component: _CardGroup,
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
    }
  },
  render: (args) => {
    return (
      <_CardGroup {...args}>
        <_CardGroup.Head>Head is here</_CardGroup.Head>
        <_CardGroup.Body>Body is here</_CardGroup.Body>
      </_CardGroup>
    )
  }
}

const Template: StoryFn<TCardGroupProps> = (args) => (
  <_CardGroup {...args}>
    <_CardGroup.Head>
      <Text>Head is here</Text>
    </_CardGroup.Head>
    <_CardGroup.Body>
      <Card isExpandable noBorder key="card-group-1">
        <Card.Head>Head 1</Card.Head>
        <Card.Body>Body 1</Card.Body>
      </Card>
      <Card isExpandable noBorder key="card-group-2">
        <Card.Head>Head 2</Card.Head>
        <Card.Body>Body 2</Card.Body>
      </Card>
      <Card isExpandable noBorder key="card-group-3">
        <Card.Head>Head 3</Card.Head>
        <Card.Body>Body 3</Card.Body>
      </Card>
    </_CardGroup.Body>
  </_CardGroup>
)

export const CardGroup: StoryObj<TCardGroupProps> = Template.bind({})

CardGroup.args = {
  title: {
    alignment: 'left',
    text: 'mon',
    color: 'yellow'
  }
}
