import React, { ReactElement, useId, useState } from 'react'
import { useGetTooltipStyles, useHideOnScroll, useOnOutsideClick } from '../../hooks'
import classNames from 'classnames'
import { Link } from '../Link'
import { Text } from '../Text'
import { TPopoverDesktopProps } from './types'

export const PopoverDesktop = (props: TPopoverDesktopProps): ReactElement => {
  const {
    dataId,
    text,
    linkAddons,
    className = '',
    position = 'top-left',
    children,
    hideMessage,
    parent,
    clicked = false
  } = props
  const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null)

  const { tooltipPosition: popoverPosition, tooltipStyles: popoverStyles } = useGetTooltipStyles({
    elemRef: parent,
    tooltipRef: popoverRef,
    initialPosition: position
  })

  useHideOnScroll(hideMessage, parent)
  useOnOutsideClick(popoverRef, hideMessage, clicked, useId())

  return (
    <>
      {clicked && (
        <div
          data-id={dataId ? `${dataId}-popover-content` : ''}
          className={classNames(`popover popover--${popoverPosition}`, className)}
          ref={setPopoverRef}
          style={popoverStyles}
        >
          <div className="popover__inner scrollbar scrollbar--vertical pr-8">
            {linkAddons ? (
              <Link
                dataId={linkAddons.dataId}
                url={linkAddons.url}
                beforeLink={linkAddons.beforeLink}
                afterLink={linkAddons.afterLink}
                target={linkAddons.target}
                className={'popover__link'}
              >
                {text}
              </Link>
            ) : (
              <Text
                dataId={dataId ? `${dataId}-popover-text` : ''}
                type="primary"
                weight="regular"
                lineHeight="medium"
                size="small"
                as="div"
              >
                {text}
              </Text>
            )}
          </div>
        </div>
      )}
      {children}
    </>
  )
}
