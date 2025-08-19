import React from 'react'
import { useCardGroupContext } from '../CardGroupContext'
import classNames from 'classnames'

export const CardGroupHead = ({ children }: { children: React.ReactNode }) => {
  const { title } = useCardGroupContext()

  return (
    <div className="card--group__content--header">
      {title && (
        <div
          className={classNames('card--group__title', {
            [`card--group__title--${title.color}`]: title.color
          })}
        >
          {title.text}
        </div>
      )}
      <div className="card--group__content--header--component">{children}</div>
    </div>
  )
}
