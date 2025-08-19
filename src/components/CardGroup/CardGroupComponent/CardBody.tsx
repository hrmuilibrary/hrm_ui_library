import React, { useId, useMemo } from 'react'

export const CardGroupBody = ({ children }: { children: React.ReactNode }) => {
  const isChildrenArray = useMemo(() => Array.isArray(children), [children])

  const componentKey = useId()

  return (
    <div className="card--group__content--body">
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
