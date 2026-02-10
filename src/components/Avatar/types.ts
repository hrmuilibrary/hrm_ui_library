import { ReactElement } from 'react'
import { FILE_UPLOAD_ERRORS } from '../../consts'
import { ICommon } from '../../type'

export interface TAvatarProps extends IFormCompProps, ICommon {
  allowedTypes?: string
  id?: string
  dataId?: string
  imagePath?: string
  initials?: string | ReactElement
  color?: 'default' | 'purple' | 'blue' | 'green' | 'red'
  type?: 'count'
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
  className?: string
  isEditable?: boolean
  onAvatarChange?: (file: File) => void
  tooltipContent?: string | ReactElement
  onError?: (type: FILE_UPLOAD_ERRORS) => void
  fileAllowedSize?: number
}

export interface TAvatarGroupProps extends ICommon {
  dataId?: string
  avatarGroup: TAvatarProps[]
  onAddUser?: () => void
  maxCount?: 0 | 2 | 4 | 6
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
}
