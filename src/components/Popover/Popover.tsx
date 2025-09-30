import React, { ReactElement, useEffect, useState } from 'react'
import { TPopoverProps } from './types'
import { useIsMobile } from '../../hooks/useGetIsMobile'
import { PopoverMobile } from './PopoverMobile'
import { PopoverDesktop } from './PopoverDesktop'

export const Popover = (props: TPopoverProps): ReactElement | null => {
  const { elemRef, id, clicked, stopPropagation, ...rest } = props
  const isMobile = useIsMobile()

  const [isClicked, setIsClicked] = useState(false)
  const [parent, setElement] = useState<HTMLElement | null>(elemRef || null)

  const showMessage = (evnt: Event) => {
    if (stopPropagation) evnt.stopPropagation()
    setIsClicked(true)
  }

  const hideMessage = () => setIsClicked(false)

  useEffect(() => {
    if (parent) {
      parent.addEventListener('click', showMessage)
    }
  }, [parent])

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id.toString())
      setElement(element)
    }
  }, [id])

  useEffect(() => {
    if (clicked === false) {
      setIsClicked(clicked)
    }
  }, [clicked])

  return isMobile ? (
    <PopoverMobile {...rest} clicked={isClicked} hideMessage={hideMessage} />
  ) : (
    <PopoverDesktop
      {...rest}
      parent={parent}
      clicked={isClicked}
      showMessage={showMessage}
      hideMessage={hideMessage}
    />
  )
}
