import React from 'react'
import { Text } from '../Text'
import { Image } from '../Image'
import { Button } from '../Button'
import { TEmptyProps } from './types'
import classNames from 'classnames'
// @ts-ignore
import noResultImage from '../../assets/images/no-result.svg'

export const Empty = (props: TEmptyProps): React.ReactElement => {
  const {
    size = 'large',
    mainMessage,
    paragraphMessage,
    buttonProps,
    className,
    illustration = noResultImage,
    dataId = ''
  } = props

  return (
    <div
      data-id={dataId}
      className={classNames(
        `no-result ${size == 'large' ? 'no-result--large' : 'no-result--small'}`,
        className
      )}
    >
      <div className="no-result__icon">
        <Image imagePath={illustration} dataId={dataId ? `${dataId}-image` : ''} />
      </div>
      <div className="no-result__content">
        {mainMessage ? (
          <Text
            size={size == 'large' ? 'large' : 'small'}
            weight="bold"
            dataId={dataId ? `${dataId}-text` : ''}
          >
            {mainMessage}
          </Text>
        ) : null}

        {paragraphMessage ? (
          <Text
            size={size == 'large' ? 'small' : 'xsmall'}
            dataId={dataId ? `${dataId}-subtext` : ''}
          >
            {paragraphMessage}
          </Text>
        ) : null}
        {buttonProps ? (
          <Button
            {...buttonProps}
            size="medium"
            className="mt-4"
            dataId={buttonProps.dataId ?? (dataId ? `${dataId}-action` : '')}
          />
        ) : null}
      </div>
    </div>
  )
}
