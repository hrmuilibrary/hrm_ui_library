import { useEffect, useState } from 'react'

export type AnimationState = 'entering' | 'entered' | 'exiting' | 'exited'

interface UseAnimationOptions {
  isOpen: boolean
  enterDuration?: number
  exitDuration?: number
  onExitComplete?: () => void
}

export const useAnimation = ({
  isOpen,
  enterDuration = 400,
  exitDuration = 200,
  onExitComplete
}: UseAnimationOptions): {
  animationState: AnimationState
  shouldRender: boolean
} => {
  const [animationState, setAnimationState] = useState<AnimationState>(
    isOpen ? 'entered' : 'exited'
  )
  const [shouldRender, setShouldRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      // Start entering animation
      setAnimationState('entering')
      // After a brief moment, mark as entered
      const enterTimer = setTimeout(() => {
        setAnimationState('entered')
      }, 10)

      return () => {
        clearTimeout(enterTimer)
      }
    } else {
      // Start exit animation
      setAnimationState('exiting')
      // After exit duration, remove from DOM and call callback
      const exitTimer = setTimeout(() => {
        setAnimationState('exited')
        setShouldRender(false)
        onExitComplete?.()
      }, exitDuration)

      return () => {
        clearTimeout(exitTimer)
      }
    }
  }, [isOpen, exitDuration, onExitComplete])

  return { animationState, shouldRender }
}
