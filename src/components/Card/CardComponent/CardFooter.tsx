import React from 'react'
import { useCardContext } from '../CardContext'
import { ICardProps } from '../types'

export const CardFooter = ({ children, theme = 'light' }: ICardProps) => {
  const { isExpanded } = useCardContext()

  return (
    !isExpanded && (
      <div className="card__content--footer" data-theme={theme}>
        {children}
      </div>
    )
  )
}
