import React, { useRef } from 'react'
import { Popover as _Popover } from '../components/Popover'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TPopoverProps } from '../components/Popover/types'

export default {
  title: 'Popover',
  component: _Popover,
  argTypes: {
    position: {
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'middle-left',
        'middle-right'
      ],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TPopoverProps> = (args) => {
  const parentRef = useRef<HTMLDivElement | null>(null)
  return (
    <div ref={parentRef}>
      <_Popover
        {...args}
        id="popover_test"
        elemRef={(parentRef.current as HTMLElement) ?? undefined}
      />
      <div
        style={{
          position: 'absolute',
          left: 500,
          top: 200,
          width: 100,
          height: 100,
          background: 'red'
        }}
      >
        <div id="popover_test">Click on me</div>
      </div>
    </div>
  )
}

export const Popover: StoryObj<TPopoverProps> = Template.bind({})

Popover.args = {
  linkAddons: {
    url: 'dasdsa',
    beforeLink: (
      <div>
        Lorem ipsum dolor sit amet.A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem
        qui nemo enim id velit voluptas.EstLorem ipsum dolor sit amet'
      </div>
    )
  },
  text: <div>Test</div>,
  position: 'top-right',
  clicked: true
}
