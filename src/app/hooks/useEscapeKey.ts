import { useCallback, useEffect } from "react"

type KeyboardEvent = {
  key: string
}

export function useEscapeKey(callback: () => void) {
  const escapeEventHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      callback()
    }
  }, [callback])

  useEffect(() => {
    document.addEventListener("keydown", escapeEventHandler)

    return () => {
      document.removeEventListener("keydown", escapeEventHandler)
    }
  }, [escapeEventHandler])
}