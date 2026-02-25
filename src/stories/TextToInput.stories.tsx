import React, { useState } from 'react'
import { TextToInput as _TextToInput } from '../components/TextToInput'
import { Popover } from '../components/Popover'
import IconInfo from '../components/SVGIcons/IconInfo'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TextToInputCustomProps } from '../components/TextToInput/types'
import IconCalendarRight from '../components/SVGIcons/IconCalendarRight'

export default {
  title: 'TextToInput',
  component: _TextToInput,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template: StoryFn<TextToInputCustomProps> = (args) => {
  const [value, setValue] = useState('some text')
  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const changeHandler = (e: any, value: string) => {
    setValue(value)
    setIsErrorVisible(true)
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <_TextToInput
        {...args}
        error={!value && isErrorVisible ? 'requeired field' : ''}
        currentValue={value}
        handleChange={changeHandler}
      />
    </div>
  )
}

export const TextToInput: StoryObj<TextToInputCustomProps> = Template.bind({})

TextToInput.args = {
  type: 'text',
  size: 'large',
  mask: '',
  maskChar: '',
  leftIconProps: {
    Component: IconInfo
  },
  rightIconProps: {
    Component: IconCalendarRight
  },
  disabled: false,
  required: true,
  maxCount: 15,
  witUpperCase: false,
  currentValue: 'Some text',
  labelAddons: (
    <Popover
      linkAddons={{ url: 'link', beforeLink: 'text before link' }}
      id="beneficiary-tooltip"
      text={'data'}
      position="top-center"
    >
      <div id="beneficiary-tooltip">
        <IconInfo type="information" size="xsmall" className={'ml-4 pointer'} />
      </div>
    </Popover>
  ),
  helperText: 'This is your helper text',
  successMessage: 'Success message'
}
