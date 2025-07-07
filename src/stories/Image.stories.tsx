import React from 'react'
import {Meta, StoryFn, type StoryObj} from '@storybook/react'
import { Image as _Image } from '../index'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imageFile from '../assets/images/avatar.jpg'
import { ImagePropTypes } from '../components/Image/types'

const image = {
  src: imageFile,
  alt: 'my image'
}

export default {
  title: 'Image',
  component: _Image,
  argTypes: {
    backgroundSize: {
      options: ['cover', 'contain'],
      control: { type: 'radio' }
    },
    ratio: {
      options: ['1/1', '2/1', '3/1', '4/3', '16/9', '1/1.618', '2/3'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template: StoryFn<ImagePropTypes> = (args) => (
  <div style={{ width: 300 }}>
    <_Image {...args} />
  </div>
)

export const Image:StoryObj<ImagePropTypes> = Template.bind({})
Image.args = {
  imagePath: image.src,
  isBackgroundImage: false,
  backgroundSize: 'contain',
  isFullWidth: false,
  isFullHeight: false,
  ratio: '1/1'
}
