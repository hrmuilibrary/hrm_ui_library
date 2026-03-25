import React, { useState } from 'react'
import { DarkModeSwitcher as _DarkModeSwitcher } from '../components/DarkModeSwitcher'
import { StoryFn, StoryObj } from '@storybook/react'
import { TSwitcherProps } from '../components/DarkModeSwitcher/types'
import { ThemeMode } from '../consts'

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

const Template: StoryFn<TSwitcherProps> = (args) => {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = (value: boolean) => {
    setIsChecked(value)
    document.body.setAttribute('data-theme', value ? ThemeMode.Dark : ThemeMode.Light)
  }

  return (
    <div>
      <_DarkModeSwitcher {...args} checked={isChecked} onChange={onChange} />
    </div>
  )
}

export const DarkModeSwitcher: StoryObj<TSwitcherProps> = Template.bind({})

DarkModeSwitcher.args = {
  size: 'small',
  disabled: false
}
