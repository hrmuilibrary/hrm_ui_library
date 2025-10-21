import React, { useCallback } from 'react'
import { useCardContext } from '../CardContext'
import { IconChevronDown, IconChevronRight } from '../../SVGIcons'
import classNames from 'classnames'
import { noop } from '../../../utils/helpers'
import { Button } from '../../Button'

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
    <div
      className={classNames('card__content--header', {
        'card__content--header--expandable': isExpandable
      })}
      onClick={isExpandable ? onToggleExpand : noop}
    >
      {children}
      {isExpandable && (
        <div className="card__content--header--expand">
          <Button
            iconProps={{
              Component: isExpanded ? IconChevronDown : IconChevronRight
            }}
            className={classNames({ 'card__content--header--expand--icon': isExpanded })}
            type="tertiary"
            size="medium"
          />
        </div>
      )}
    </div>
  )
}
