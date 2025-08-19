import React, { useMemo } from 'react'

export const CardGroupBody = ({ children }: { children: React.ReactNode }) => {
  const isChildrenArray = useMemo(() => Array.isArray(children), [children])

  return (
    <div className="card--group__content--body">
      {isChildrenArray &&
        (children as Array<React.ReactNode>)?.map((child) => (
          <div className="card--group__child">{child}</div>
        ))}
      {!isChildrenArray && children}
    </div>
  )
}
