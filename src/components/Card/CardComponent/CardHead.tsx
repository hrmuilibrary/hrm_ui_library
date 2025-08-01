import React, { useCallback } from 'react'
import { useCardContext } from '../CardContext'
import { IconChevronDown, IconChevronRight } from '../../SVGIcons'

export const CardHead = ({ children }: { children: React.ReactNode }) => {
  const { toggleIsExpanded, onExpand, isExpandable, isExpanded } = useCardContext()

  const onToggleExpand = useCallback(() => {
    toggleIsExpanded &&
      toggleIsExpanded((prevVal: boolean) => {
        onExpand && onExpand(!prevVal)
        return !prevVal
      })
  }, [])

  return (
    <div className="card__content--header">
      {children}
      {isExpandable && (
        <div className="card__content--header--expand" onClick={onToggleExpand}>
          {isExpanded ? <IconChevronRight /> : <IconChevronDown />}
        </div>
      )}
    </div>
  )
}
