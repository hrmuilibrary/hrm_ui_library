import React from 'react'
import { Text } from '../Text'
import { Image } from '../Image'
import { TUnderConstructionProps } from './types'
import classNames from 'classnames'
// @ts-ignore
import noResultImage from '../../assets/images/under-construction.svg'
import { SELECT_TRANSLATIONS } from './localization'

export const UnderConstruction = (props: TUnderConstructionProps): React.ReactElement => {
  const {
    size = 'large',
    mainMessage,
    paragraphMessage,
    className,
    illustration = noResultImage,
    language = 'en'
  } = props

  const localizations = SELECT_TRANSLATIONS[language]

  return (
    <div
      className={classNames(
        `under-construction ${size === 'large' ? 'under-construction--large' : 'under-construction--small'}`,
        className
      )}
    >
      <div className="under-construction__icon">
        <Image imagePath={illustration} />
      </div>
      <div className="under-construction__content">
        <Text size={size == 'large' ? 'large' : 'medium'} weight="bold">
          {mainMessage ?? localizations.mainMessage}
        </Text>
        <Text size={size == 'large' ? 'standard' : 'small'}>
          {paragraphMessage ?? localizations.paragraphMessage}
        </Text>
      </div>
    </div>
  )
}
