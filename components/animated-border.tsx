"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedBorderProps {
  children: ReactNode
  className?: string
  borderClassName?: string
}

export function AnimatedBorder({
  children,
  className,
  borderClassName = "bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500",
}: AnimatedBorderProps) {
  return (
    <div className={cn("relative group", className)}>
      <motion.div
        className={cn(
          "absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-1000",
          borderClassName
        )}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

