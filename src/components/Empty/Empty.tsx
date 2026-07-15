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
    dataTestId = ''
  } = props

  return (
    <div
      data-test-id={dataTestId}
      className={classNames(
        `no-result ${size == 'large' ? 'no-result--large' : 'no-result--small'}`,
        className
      )}
    >
      <div className="no-result__icon">
        <Image imagePath={illustration} dataTestId={dataTestId ? `${dataTestId}-image` : ''} />
      </div>
      <div className="no-result__content">
        {mainMessage ? (
          <Text
            size={size == 'large' ? 'large' : 'small'}
            weight="bold"
            dataTestId={dataTestId ? `${dataTestId}-text` : ''}
          >
            {mainMessage}
          </Text>
        ) : null}

        {paragraphMessage ? (
          <Text
            size={size == 'large' ? 'small' : 'xsmall'}
            dataTestId={dataTestId ? `${dataTestId}-subtext` : ''}
          >
            {paragraphMessage}
          </Text>
        ) : null}
        {buttonProps ? (
          <Button
            {...buttonProps}
            size="medium"
            className="mt-4"
            dataTestId={buttonProps.dataTestId ?? (dataTestId ? `${dataTestId}-action` : '')}
          />
        ) : null}
      </div>
    </div>
  )
}
