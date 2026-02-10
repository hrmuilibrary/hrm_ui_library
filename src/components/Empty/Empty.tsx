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
    theme = 'light'
  } = props

  return (
    <div
      className={classNames(
        `no-result ${size == 'large' ? 'no-result--large' : 'no-result--small'}`,
        className
      )}
      data-theme={theme}
    >
      <div className="no-result__icon">
        <Image imagePath={illustration} theme={theme} />
      </div>
      <div className="no-result__content">
        {mainMessage ? (
          <Text size={size == 'large' ? 'large' : 'small'} weight="bold" theme={theme}>
            {mainMessage}
          </Text>
        ) : null}

        {paragraphMessage ? (
          <Text size={size == 'large' ? 'small' : 'xsmall'} theme={theme}>
            {paragraphMessage}
          </Text>
        ) : null}
        {buttonProps ? (
          <Button {...buttonProps} size="medium" className="mt-4" theme={theme} />
        ) : null}
      </div>
    </div>
  )
}
