"use client"

import { useEffect, useState, useRef } from "react"
import { useIsCoarsePointer } from "@/lib/hooks"
import { motion } from "framer-motion"

export function CustomCursor() {
  const isCoarsePointer = useIsCoarsePointer()
  if (isCoarsePointer) return null
  return <DesktopCursor />
}

function DesktopCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        (target.style && target.style.cursor === "pointer") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", updateCursor)

    const interactiveElements = document.querySelectorAll("a, button, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
        }}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

