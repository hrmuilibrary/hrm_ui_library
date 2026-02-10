import React, { ReactElement } from 'react'
import { TErrorMessageProps } from './types'
import { Text } from '../../components/Text'
import { generateDataTestId } from '../../utils/helpers'
import classnames from 'classnames'
import { ICONS_MAPPING } from './consts'
import { IconDynamicComponent } from '../IconDynamicComponent'

export const ErrorMessage = ({
  message,
  icon = 'infoFilled',
  dataId,
  className,
  theme = 'light'
}: TErrorMessageProps): ReactElement => {
  return (
    <Text
      className={classnames('error-message', className)}
      size="small"
      type="danger"
      dataId={generateDataTestId('error-message', dataId)}
      theme={theme}
    >
      <>
        <IconDynamicComponent
          Component={ICONS_MAPPING[icon]}
          className="mr-4"
          size="xsmall"
          type="danger"
        />
        <span>{message}</span>
      </>
    </Text>
  )
}
