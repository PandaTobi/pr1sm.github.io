import { useEffect, useState } from "react"

export function useIsCoarsePointer(): boolean {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersCoarse = typeof window.matchMedia === "function"
      ? window.matchMedia("(pointer: coarse)").matches
      : false

    const hasTouchPoints = typeof navigator !== "undefined" && (navigator as any).maxTouchPoints > 0

    setIsCoarsePointer(prefersCoarse || hasTouchPoints)
  }, [])

  return isCoarsePointer
}


