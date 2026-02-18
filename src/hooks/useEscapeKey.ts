import { useEffect } from 'react'

type UseEscapeKeyOptions = {
  enabled?: boolean
}

export function useEscapeKey(onEscape: () => void, { enabled = true }: UseEscapeKeyOptions = {}) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscape()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEscape, enabled])
}
