import React, { useId, useMemo } from 'react'
import { ICardGroupProps } from '../types'

export const CardGroupBody = ({ children, theme = 'light' }: ICardGroupProps) => {
  const isChildrenArray = useMemo(() => Array.isArray(children), [children])

  const componentKey = useId()

  return (
    <div className="card--group__content--body" data-theme={theme}>
      {isChildrenArray &&
        (children as Array<React.ReactNode>)?.map((child, id) => (
          <div className="card--group__child" key={`${componentKey}_${id}`}>
            {child}
          </div>
        ))}
      {!isChildrenArray && children}
    </div>
  )
}
