import React from 'react'
import { useCardContext } from '../CardContext'

export const CardFooter = ({ children }: { children: React.ReactNode }) => {
  const { isExpanded } = useCardContext()

  return !isExpanded && <div className="card__content--footer">{children}</div>
}
