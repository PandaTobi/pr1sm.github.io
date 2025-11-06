"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useIsCoarsePointer } from "@/lib/hooks"

export function Spotlight() {
  const isCoarsePointer = useIsCoarsePointer()
  if (isCoarsePointer) return null
  return <MouseSpotlight />
}

function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return

      const { clientX, clientY } = e
      const spotlight = spotlightRef.current

      spotlight.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(139, 92, 246, 0.15), transparent 40%)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

