import React from 'react'
import { TErrorMessageProps } from './types'
import { Text } from '../../components/Text'
import { IconDynamicComponent } from '../IconDynamicComponent'
import classnames from 'classnames'

export const ErrorMessage = (props: TErrorMessageProps): JSX.Element => {
  const { message, icon, dataId, className } = props
  return (
    <Text
      className={classnames('error-message', className)}
      size="small"
      type="danger"
      dataId={dataId ? `${dataId}-error-message` : ''}
    >
      <>
        {icon && (
          <IconDynamicComponent componentName={icon} className="mr-4" size="xsmall" type="danger" />
        )}
        <span>{message}</span>
      </>
    </Text>
  )
}
