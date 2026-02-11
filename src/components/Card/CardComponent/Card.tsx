import React, { ReactNode, ReactElement } from 'react'
import classNames from 'classnames'
import { useCardContext } from '../CardContext'
import { generateDataTestId } from '../../../utils/helpers'
import { ICommon } from '../../../type'
import { ICardProps } from '../types'

export const Card = ({ children, theme = 'light' }: ICardProps): ReactElement => {
  const { isExpanded, className, title, dataId, id, noBorder } = useCardContext()
  const { alignment, color, text } = title ?? { alignment: 'left', color: 'blue' }

  return (
    <div
      className={classNames(
        'card',
        {
          'card--expanded': isExpanded,
          [`card--title--alignment--${alignment}`]: title,
          'card--noBorder': noBorder
        },
        className
      )}
      data-theme={theme}
      id={`${id || ''}`}
      data-id={generateDataTestId('card-item', dataId)}
    >
      {title && (
        <div className={classNames('card__title', { [`card__title--${color}`]: color })}>
          {text}
        </div>
      )}
      <div className="card__content">{children}</div>
    </div>
  )
}
