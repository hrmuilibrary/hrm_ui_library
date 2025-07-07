// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import {
  DropzoneFileUpload as _DropzoneFileUpload,
  FileUpload as _FileUpload,
  FileUploadMode,
  TFileUploadProps
} from '../components/FileUpload'
import IconInfo from '../components/SVGIcons/IconInfo'
import {StoryFn, type StoryObj} from '@storybook/react'
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
export const FileUpload: StoryObj<TFileUploadProps> = Template.bind({})

FileUpload.args = {
  label: 'Label',
  buttonText: 'Attach file',
  isFileUploaded: false,
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}

async function urlToFile(url, fileName) {
  const response = await fetch(url) // Fetch the file from the URL
  const blob = await response.blob() // Convert the response to a Blob
  return new File([blob], fileName, { type: blob.type }) // Create a File object
}

const mockFiles = [
  {
    name: 'file1.jpeg',
    url: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'file2.jpeg',
    url: 'https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const Template2 = (args) => {
  const [files, setFiles] = useState([])
  useEffect(() => {
    mockFiles.forEach((file) => {
      urlToFile(file.url, file.name).then((file) => {
        setFiles((prev) => [...prev, file])
      })
    })
  }, [])

  return (
    <div style={{ width: 800 }}>
      <_DropzoneFileUpload
        {...args}
        setFiles={setFiles}
        selectedFiles={files}
        maxSize={30 * 1024 * 1024}
        accept={[FileTypeEnum.IMAGE]}
        mode={FileUploadMode.attach}
        multiple={false}
        // maxFiles={2}
      />
    </div>
  )
}

export const DropzoneFileUpload = Template2.bind({})
DropzoneFileUpload.args = {}
