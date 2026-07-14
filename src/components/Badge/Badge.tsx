import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { TBadgeProps } from './types'
import classNames from 'classnames'

export const Badge = (props: TBadgeProps): ReactElement => {
  const { type = 'primary', size = 'large', text, className = '', dataId = '' } = props

  return (
    <div className={classNames(`badge badge--${type}  badge--${size}`, className)} data-id={dataId}>
      {text ? (
        <Text
          size="xsmall"
          type={type == 'secondary' ? 'primary' : 'inverse'}
          className="badge__inner"
          dataId={dataId ? `${dataId}-text` : ''}
        >
          <>{text}</>
        </Text>
      ) : null}
    </div>
  )
}
