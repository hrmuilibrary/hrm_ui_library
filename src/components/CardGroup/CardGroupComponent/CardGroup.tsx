import React, { ReactElement } from 'react'
import { ICardGroupProps } from '../types'
import classNames from 'classnames'
import { generateDataTestId } from '../../../utils/helpers'
import { useCardGroupContext } from '../CardGroupContext'

export const CardGroup = ({ children, theme = 'light' }: ICardGroupProps): ReactElement => {
  const { className, title, dataId, id } = useCardGroupContext()
  const { alignment } = title ?? { alignment: 'left' }

  return (
    <div
      data-theme={theme}
      className={classNames(
        'card--group',
        { [`card--group--title--alignment--${alignment}`]: title },
        className
      )}
      id={`${id || ''}`}
      data-id={generateDataTestId('card--group-item', dataId)}
    >
      <div className="card--group__content">{children}</div>
    </div>
  )
}
