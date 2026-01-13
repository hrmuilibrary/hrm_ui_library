import React, { useCallback } from 'react'
import { useCardContext } from '../CardContext'
import classNames from 'classnames'
import { noop } from '../../../utils/helpers'
import { Button } from '../../Button'
import IconChevronDown from '../../SVGIcons/IconChevronDown'
import IconChevronRight from '../../SVGIcons/IconChevronRight'

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
