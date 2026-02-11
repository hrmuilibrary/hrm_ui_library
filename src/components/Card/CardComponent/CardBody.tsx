import React from 'react'
import { motion } from 'motion/react'
import { useCardContext } from '../CardContext'
import { Divider } from '../../Divider'
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper'
import { ICardProps } from '../types'

export const CardBody = ({ children, theme = 'light' }: ICardProps) => {
  const { isExpanded, noDivider } = useCardContext()

  return (
    <AnimatePresenceWrapper initial={false}>
      {isExpanded && (
        <motion.div
          data-theme={theme}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
        >
          <div className="card__content--body">
            {!noDivider && <Divider type="primary" isHorizontal className="card__divider" />}
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresenceWrapper>
  )
}
