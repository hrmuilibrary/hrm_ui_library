import React from 'react'
import { Text } from '../components/Text'
import { StoryFn, StoryObj } from '@storybook/react'
import { ISVGIconProps } from '../type'

// Dynamically import all icon components from SVGIcons folder
// @ts-ignore
const iconModules = import.meta.glob('../components/SVGIcons/Icon*.tsx', { eager: true }) as Record<
  string,
  { default: React.ComponentType<ISVGIconProps> }
>

// Extract icon names and components
const Icons: Record<string, React.ComponentType<ISVGIconProps>> = {}
Object.keys(iconModules).forEach((path) => {
  const module = iconModules[path]
  // Extract component name from path (e.g., '../components/SVGIcons/IconAdd.tsx' -> 'IconAdd')
  const fileName = path.split('/').pop()?.replace('.tsx', '') || ''
  if (fileName && module.default) {
    Icons[fileName] = module.default
  }
})

export default {
  title: 'SVG Icons',
  component: null,
  argTypes: {
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
    },
    filled: {
      options: ['false', 'true'],
      control: { type: 'select' }
    }
  }
}

const Template: StoryFn<ISVGIconProps & { filled: string }> = (args) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {Object.keys(Icons)
        .filter((iconName) => {
          const isFilledIncluded = iconName.toLowerCase().includes('filled')
          return args.filled === 'true' ? isFilledIncluded : !isFilledIncluded
        })
        .map((iconName, index) => {
          const Component = Icons[iconName]

          return (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '10px'
              }}
            >
              <Component {...args} />
              <Text className="mt-8">
                {iconName
                  .replace(/^Icon([A-Z])/g, '$1')
                  .replace(/([a-z])([A-Z])/g, '$1-$2')
                  .toLowerCase()}
              </Text>
            </div>
          )
        })}
    </div>
  )
}

export const SVGIcons: StoryObj<ISVGIconProps & { filled: string }> = Template.bind({})

SVGIcons.args = {
  size: 'medium',
  type: 'primary',
  filled: 'false'
}
