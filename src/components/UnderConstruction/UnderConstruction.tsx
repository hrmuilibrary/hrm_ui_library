import React from 'react'
import { Text } from '../Text'
import { Image } from '../Image'
import { TUnderConstructionProps } from './types'
import classNames from 'classnames'
import noResultImage from '../../assets/images/under-construction.webp'
import { SELECT_TRANSLATIONS } from './localization'

export const UnderConstruction = (props: TUnderConstructionProps): React.ReactElement => {
  const {
    size = 'large',
    mainMessage,
    paragraphMessage,
    className,
    illustration = noResultImage,
    language = 'en',
    dataId = ''
  } = props

  const localizations = SELECT_TRANSLATIONS[language]

  return (
    <div
      className={classNames(
        `under-construction ${size === 'large' ? 'under-construction--large' : 'under-construction--small'}`,
        className
      )}
      data-id={dataId}
    >
      <div className="under-construction__icon">
        <Image imagePath={illustration} dataId={dataId ? `${dataId}-image` : ''} />
      </div>
      <div className="under-construction__content">
        <Text
          size={size == 'large' ? 'large' : 'medium'}
          weight="bold"
          dataId={dataId ? `${dataId}-text` : ''}
        >
          {mainMessage ?? localizations.mainMessage}
        </Text>
        <Text
          size={size == 'large' ? 'standard' : 'small'}
          dataId={dataId ? `${dataId}-subtext` : ''}
        >
          {paragraphMessage ?? localizations.paragraphMessage}
        </Text>
      </div>
    </div>
  )
}
