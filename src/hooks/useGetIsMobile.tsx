import { useEffect, useRef, useState } from 'react'
import { MOBILE_POINT } from '../consts'

const useEventListener = (
  eventName: string,
  handler: (event: MouseEvent) => void,
  element: HTMLElement | null | Window = window
): void => {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler, savedHandler])

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event: MouseEvent) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener as EventListener)
    return () => {
      element.removeEventListener(eventName, eventListener as EventListener)
    }
  }, [eventName, element, savedHandler])
}

const useWindowSize = (): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEventListener('resize', handleResize)

  useEventListener('orientationchange', handleResize)

  return windowSize
}

export const useIsMobile = (size: number = MOBILE_POINT): boolean => {
  const windowSize = useWindowSize()
  return windowSize.width <= size
}
