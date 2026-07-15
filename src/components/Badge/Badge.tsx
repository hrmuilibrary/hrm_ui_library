import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { TBadgeProps } from './types'
import classNames from 'classnames'

export const Badge = (props: TBadgeProps): ReactElement => {
  const { type = 'primary', size = 'large', text, className = '', dataTestId = '' } = props

  return (
    <div
      className={classNames(`badge badge--${type}  badge--${size}`, className)}
      data-test-id={dataTestId}
    >
      {text ? (
        <Text
          size="xsmall"
          type={type == 'secondary' ? 'primary' : 'inverse'}
          className="badge__inner"
          dataTestId={dataTestId ? `${dataTestId}-text` : ''}
        >
          <>{text}</>
        </Text>
      ) : null}
    </div>
  )
}
