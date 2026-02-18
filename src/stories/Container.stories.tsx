import React from 'react'
import { Container as _Container } from '../components/Container'
import { Text } from '../components/Text'
import { Button } from '../components/Button'

import { noop } from '../utils/helpers'
import { TContainerProps } from '../components/Container/types'
import type { StoryFn, StoryObj } from '@storybook/react'

export default {
  title: 'Container',
  component: _Container
}
const Template: StoryFn<TContainerProps> = (args): React.ReactElement => {
  const helperStyles = {
    marginTop: '10px'
  }

  return (
    <div>
      <_Container {...args}>
        <div>
          <Text size="small" />
          <div style={helperStyles}>
            <Button buttonText="Next" onClick={noop} type="primary" />
          </div>
        </div>
      </_Container>
    </div>
  )
}

export const Container: StoryObj<TContainerProps> = Template.bind({})

Container.args = {
  theme: 'light'
}
