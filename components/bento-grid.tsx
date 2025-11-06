"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  )
}

interface BentoCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
  gradient?: string
}

export function BentoCard({
  title,
  description,
  icon,
  className,
  gradient = "from-purple-500/10 to-blue-500/10",
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 bg-zinc-900 border border-zinc-800",
        "hover:border-zinc-700 transition-all duration-300",
        className
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300", gradient)} />
      
      <div className="relative z-10">
        <div className="mb-4 text-cyan-400 transform group-hover:scale-110 transition-transform duration-300 inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-zinc-100">{title}</h3>
        <p className="text-zinc-300 text-sm">{description}</p>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </motion.div>
  )
}

