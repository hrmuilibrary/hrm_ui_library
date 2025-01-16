import { FILE_UPLOAD_ERRORS } from '../../consts'

export interface TFileUploadProps extends IFormCompProps {
  allowedTypes?: string
  label?: string | React.ReactElement
  buttonText?: string | React.ReactElement
  getFiles?: (files: File[]) => void
  handleFileClick?: (file: File) => void
  removeFiles?: (file: File) => void
  toBase64?: boolean
  required?: boolean
  disabled?: boolean
  isFileUploaded?: boolean
  withFilePreview?: boolean
  uploadedFiles?: File[]
  multiple?: boolean
  mode?: FileUploadMode
  labelAddons?: React.ReactElement
  onError?: (errorType: FILE_UPLOAD_ERRORS) => void
  fileAllowedSize?: number
}

export enum FileUploadMode {
  edit = 'edit',
  attach = 'attach'
}

export interface IUploadItemPropTypes {
  name?: string
  onRemove: (file: File, index: number) => void
  fileType?: string
  isFileUploaded?: boolean
  error?: boolean
  handleFileClick?: (file: File) => void
  withFilePreview?: boolean
  files: File[]
}

// DnDFileUpload types
export type FileType = File & { preview?: string }

export type AreaContentDTO = {
  acceptTypes: string[]
  maxSizeFormatted: string
  acceptTypesMessage: string
}
