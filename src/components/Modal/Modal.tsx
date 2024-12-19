import React, { ReactElement, useId, useState } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper'
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks'
import { TModalPropTypes } from './types'
import { ModalContent } from './ModalContent'
import { useIsMobile } from '../../hooks/useGetIsMobile'
import classNames from 'classnames'

const DESKTOP_ANIMATION = {
  initial: { opacity: 0.5, scale: 0.65 },
  animate: { opacity: 1, scale: [0.95, 1] },
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.2
    }
  },
  transition: {
    duration: 0.4,
    type: 'spring',
    damping: 55,
    stiffness: 700
  }
}

export const MOBILE_ANIMATION = (isFullScreen?: boolean) => {
  return {
    initial: {
      height: 0,
      bottom: 0
    },
    animate: {
      height: isFullScreen ? '100%' : 'auto',
      bottom: 0
    },
    exit: {
      height: 0,
      bottom: 0
    },
    transition: {
      duration: 0.3
    }
  }
}
export const Modal = (props: TModalPropTypes): ReactElement => {
  const {
    isOpen,
    onClose,
    className = '',
    size = 'medium',
    closeOnOutsideClick = true,
    isMobileFullScreen,
    ...rest
  } = props

  const isMobile = useIsMobile()

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  useOnOutsideClick(containerRef, onClose, closeOnOutsideClick && isOpen, useId())
  useHideBodyScroll(isOpen)

  return (
    <AnimatePresenceWrapper>
      {isOpen ? (
        <motion.div
          className={classnames('modal', `modal--${size}`, className)}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className={classNames('modal__container', {
              modal__container_fullScreen: isMobile && isMobileFullScreen
            })}
            ref={setContainerRef}
            {...(isMobile ? MOBILE_ANIMATION(isMobileFullScreen) : DESKTOP_ANIMATION)}
          >
            <ModalContent {...rest} onClose={onClose} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresenceWrapper>
  )
}
