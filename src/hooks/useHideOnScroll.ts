import { useEffect } from 'react'
import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE } from '../consts'

export const useHideOnScroll = (hide: () => void, elementRef?: HTMLElement | null): null => {
  const scrollElement = elementRef ?? document
  useEffect(() => {
    scrollElement.addEventListener('scroll', hide)
    return () => {
      scrollElement.removeEventListener('scroll', hide)
    }
  }, [])

  useEffect(() => {
    scrollElement.addEventListener(CUSTOM_SCROLL_NAME, (event: Event) => {
      const customEvent = event as CustomEvent<string>
      // Check the event type
      if (customEvent.detail === CUSTOM_SCROLL_MESSAGE) {
        // Close the menu
        hide()
      }
    })
  }, [])

  return null
}
