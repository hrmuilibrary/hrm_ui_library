import React, { ReactElement } from 'react'
import { TErrorMessageProps } from './types'
import { Text } from '../../components/Text'
import { IconDynamicComponent } from '../IconDynamicComponent'
import { generateDataTestId } from '../../utils/helpers'
import classnames from 'classnames'

export const ErrorMessage = ({
  message,
  icon,
  dataId,
  className
}: TErrorMessageProps): ReactElement => {
  return (
    <Text
      className={classnames('error-message', className)}
      size="small"
      type="danger"
      dataId={generateDataTestId('error-message', dataId)}
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
