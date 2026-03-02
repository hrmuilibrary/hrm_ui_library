import React, { useState } from 'react'
import { DarkModeSwitcher as _DarkModeSwitcher } from '../components/DarkModeSwitcher'
import IconInfo from '../components/SVGIcons/IconInfo'
import { StoryFn, StoryObj } from '@storybook/react'
import { TSwitcherProps } from '../components/DarkModeSwitcher/types'

export default {
  title: 'DarkModeSwitcher',
  component: _DarkModeSwitcher,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const ID = 'am_custom_DarkModeSwitcher'

const Template: StoryFn<TSwitcherProps> = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <_DarkModeSwitcher {...args} selectedValue={isChecked} onClick={setIsChecked} id={ID} />
}

export const DarkModeSwitcher: StoryObj<TSwitcherProps> = Template.bind({})

DarkModeSwitcher.args = {
  size: 'small',
  inlineType: false,
  disabled: false,
  label: 'label',
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}
