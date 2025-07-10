import React from 'react'
import { NavigationItem as _NavigationItem } from '../index'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TNavigationLinkPropTypes } from '../components/SideNavigation/NavigationItem/types'

export default {
  title: 'Navigation Item',
  component: _NavigationItem,
  argTypes: {
    showAction: {
      options: ['True', 'False']
    }
  }
}

const Template: StoryFn<TNavigationLinkPropTypes> = (args) => (
  <_NavigationItem {...args} As={() => <div>Hello</div>} />
)

export const NavigationItem: StoryObj<TNavigationLinkPropTypes> = Template.bind({})

NavigationItem.args = {
  showAction: false
}
