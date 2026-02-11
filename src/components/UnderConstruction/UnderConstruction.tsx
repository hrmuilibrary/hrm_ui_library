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
    theme = 'light'
  } = props

  const localizations = SELECT_TRANSLATIONS[language]

  return (
    <div
      className={classNames(
        `under-construction ${size === 'large' ? 'under-construction--large' : 'under-construction--small'}`,
        className
      )}
      data-theme={theme}
    >
      <div className="under-construction__icon">
        <Image imagePath={illustration} theme={theme} />
      </div>
      <div className="under-construction__content">
        <Text size={size == 'large' ? 'large' : 'medium'} weight="bold" theme={theme}>
          {mainMessage ?? localizations.mainMessage}
        </Text>
        <Text size={size == 'large' ? 'standard' : 'small'} theme={theme}>
          {paragraphMessage ?? localizations.paragraphMessage}
        </Text>
      </div>
    </div>
  )
}
