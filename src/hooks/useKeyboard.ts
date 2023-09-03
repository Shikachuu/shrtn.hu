import { useCallback, useEffect } from "react"

type KeyboardEvent = {
  key: string
}

export function useKeyboard (callback: () => void, key: string) {
  const keyEventHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === key) {
      callback()
    }
  }, [callback, key])

  useEffect(() => {
    document.addEventListener("keydown", keyEventHandler)

    return () => {
      document.removeEventListener("keydown", keyEventHandler)
    }
  }, [keyEventHandler])
}