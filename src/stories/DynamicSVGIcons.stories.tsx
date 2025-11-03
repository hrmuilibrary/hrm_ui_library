import React from 'react'
import { StoryFn, StoryObj } from '@storybook/react'
import { ISVGIconProps } from '../components/SVGIcons/types'
import { IconDynamicComponent } from '../components/IconDynamicComponent'
import { ICON_NAMES, TIconName } from '../components/SVGIcons/icon-names'

export default {
  title: 'Dynamic SVG Icons',
  component: null,
  argTypes: {
    icon_name: {
      options: ICON_NAMES,
      control: { type: 'select' }
    },
    size: {
      options: ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'select' }
    },
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'selected',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'select' }
    }
  }
}

const Template: StoryFn<ISVGIconProps & { icon_name: TIconName }> = (args) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      <IconDynamicComponent componentName={args.icon_name} {...args} />
    </div>
  )
}

export const DynamicSVGIcons: StoryObj<ISVGIconProps & { icon_name: TIconName }> = Template.bind({})

DynamicSVGIcons.args = {
  size: 'medium',
  type: 'primary',
  icon_name: 'beach'
}
