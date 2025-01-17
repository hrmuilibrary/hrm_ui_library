// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react'
import {
  DnDFileUpload as _DnDFileUpload,
  FileUpload as _FileUpload,
  TFileUploadProps
} from '../components/FileUpload'
import IconInfo from '../components/SVGIcons/IconInfo'
import { StoryFn } from '@storybook/react'
import { FileTypeEnum } from '../type'

export default {
  title: 'FileUpload',
  component: _FileUpload
}

const Template: StoryFn<TFileUploadProps> = (args) => {
  const [files, setFiles] = useState([])
  const getFiles = (_files) => {
    if (_files && _files.length) {
      setFiles(_files)
    }
  }
  return (
    <div style={{ width: 400 }}>
      <_FileUpload
        {...args}
        getFiles={getFiles}
        fileAllowedSize={9000000}
        uploadedFiles={files}
        onError={(type) => console.log('type', type)}
      />
    </div>
  )
}
export const FileUpload = Template.bind({})

FileUpload.args = {
  label: 'Label',
  buttonText: 'Attach file',
  isFileUploaded: false,
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}

const Template2 = (args) => {
  const [files, setFiles] = useState([])

  return (
    <div style={{ width: 800 }}>
      <_DnDFileUpload
        {...args}
        setFiles={setFiles}
        selectedFiles={files}
        accept={[FileTypeEnum.PDF]}
      />
    </div>
  )
}

export const DragAndDropFileUpload = Template2.bind({})
DragAndDropFileUpload.args = {}
