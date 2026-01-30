import React from 'react'
import { Link as _Link } from '../components/Link'
import { StoryFn, type StoryObj } from '@storybook/react'
import { LinkPropTypes } from '../components/Link/types'

export default {
  title: 'Link',
  component: _Link
}

const Template: StoryFn<LinkPropTypes> = (args) => {
  return <_Link {...args} />
}

export const Link: StoryObj<LinkPropTypes> = Template.bind({})
Link.args = {
  children: 'Bro',
  url: '/',
  beforeLink: 'Hello ',
  afterLink: ' By'
}
