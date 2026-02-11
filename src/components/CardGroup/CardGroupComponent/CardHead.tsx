import React from 'react'
import { useCardGroupContext } from '../CardGroupContext'
import classNames from 'classnames'
import { ICardGroupProps } from '../types'

export const CardGroupHead = ({ children, theme = 'light' }: ICardGroupProps) => {
  const { title } = useCardGroupContext()

  return (
    <div className="card--group__content--header" data-theme={theme}>
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
