import React from 'react'
import { useCardContext } from '../CardContext'
import { motion } from 'motion/react'
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper'

export const CardFooter = ({ children }: { children: React.ReactNode }) => {
  const { isExpanded } = useCardContext()

  return (
    <AnimatePresenceWrapper initial={false}>
      {!isExpanded && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
        >
          <div className="card__content--footer">{children}</div>
        </motion.div>
      )}
    </AnimatePresenceWrapper>
  )
}
