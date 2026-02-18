import React, { ReactElement, useId, useState } from 'react'
import classnames from 'classnames'
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks'
import { useAnimation } from '../../hooks/useAnimation'
import { TModalPropTypes } from './types'
import { ModalContent } from './ModalContent'
import { useIsMobile } from '../../hooks/useGetIsMobile'
import classNames from 'classnames'
import { useEscapeKey } from '../../hooks/useEscapeKey'

export const Modal = ({
  isOpen,
  onClose,
  className = '',
  size = 'medium',
  closeOnOutsideClick = true,
  isMobileFullScreen,
  ...rest
}: TModalPropTypes): ReactElement | null => {
  const isMobile = useIsMobile()
  const { animationState, shouldRender } = useAnimation({
    isOpen,
    enterDuration: isMobile ? 0 : 400,
    exitDuration: 200
  })

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  useOnOutsideClick(containerRef, onClose, closeOnOutsideClick && isOpen, useId())
  useHideBodyScroll(isOpen)
  useEscapeKey(onClose, { enabled: isOpen })

  if (!shouldRender) {
    return null
  }

  return (
    <div className={classnames('modal', `modal--${size}`, `modal--${animationState}`, className)}>
      <div
        className={classNames('modal__container', `modal__container--${animationState}`, {
          modal__container_fullScreen: isMobile && isMobileFullScreen,
          [`modal__container_fullScreen--${animationState}`]: isMobile && isMobileFullScreen
        })}
        ref={setContainerRef}
      >
        <ModalContent {...rest} onClose={onClose} />
      </div>
    </div>
  )
}
