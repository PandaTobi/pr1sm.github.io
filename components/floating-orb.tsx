"use client"

import { motion } from "framer-motion"

interface FloatingOrbProps {
  size?: number
  color?: string
  delay?: number
  duration?: number
  className?: string
}

export function FloatingOrb({
  size = 400,
  color = "from-cyan-500 to-emerald-500",
  delay = 0,
  duration = 8,
  className = "",
}: FloatingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
      }}
      animate={{
        x: [0, 100, 0, -100, 0],
        y: [0, -100, 0, 100, 0],
        scale: [1, 1.2, 1, 0.8, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

