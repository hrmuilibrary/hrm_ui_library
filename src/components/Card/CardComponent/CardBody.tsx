import React from 'react'
import { motion } from 'motion/react'
import { useCardContext } from '../CardContext'
import { Divider } from '../../Divider'
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper'

export const CardBody = ({ children }: { children: React.ReactNode }) => {
  const { isExpanded } = useCardContext()

  if (!isExpanded) return null

  return (
    <AnimatePresenceWrapper initial={false}>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        exit={{ height: 0 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
      >
        <div className="card__content--body">
          <Divider type="primary" isHorizontal className="card__divider" />
          {children}
        </div>
      </motion.div>
    </AnimatePresenceWrapper>
  )
}
