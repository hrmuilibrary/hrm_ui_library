import React from 'react'
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion'

interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode
}

//  This component is for exit animation
export function AnimatePresenceWrapper({
  children,
  initial = true
}: {
  children: React.ReactNode
  initial?: boolean
}): React.ReactElement {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence

  return <NewAnimatePresence initial={initial}>{children}</NewAnimatePresence>
}
