"use client"

import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface StatCardProps {
  value: number
  label: string
  suffix?: string
  delay?: number
  display?: string
}

export function StatCard({ value, label, suffix = "", delay = 0, display }: StatCardProps) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (display) return
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value, display])

  useEffect(() => {
    if (display) return
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const element = ref.current as HTMLSpanElement
        element.textContent = Math.floor(latest).toLocaleString()
      }
    })

    return () => unsubscribe()
  }, [springValue, display])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      className="text-center group"
    >
      <div className="relative inline-block mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        <div className={`relative font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift text-5xl md:text-6xl lg:text-7xl`}>
          {display ? (
            <span>{display}</span>
          ) : (
            <>
              <span ref={ref}>0</span>
              {suffix}
            </>
          )}
        </div>
      </div>
      <div className="text-zinc-300 text-lg md:text-xl font-medium">{label}</div>
    </motion.div>
  )
}

