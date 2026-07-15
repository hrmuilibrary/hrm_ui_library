import React from 'react'
import { TCardGroupProps } from '../types'
import classNames from 'classnames'
import { generateDataTestId } from '../../../utils/helpers'
import { useCardGroupContext } from '../CardGroupContext'

export const CardGroup = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { className, title, dataTestId, id } = useCardGroupContext()
  const { alignment } = title ?? { alignment: 'left' }

  return (
    <div
      className={classNames(
        'card--group',
        { [`card--group--title--alignment--${alignment}`]: title },
        className
      )}
      id={`${id || ''}`}
      data-test-id={generateDataTestId('card--group-item', dataTestId)}
    >
      <div className="card--group__content">{children}</div>
    </div>
  )
}
