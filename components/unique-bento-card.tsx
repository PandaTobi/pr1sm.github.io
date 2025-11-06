"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface UniqueBentoCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
  accentColor?: string
}

export function UniqueBentoCard({
  title,
  description,
  icon,
  className,
  accentColor = "cyan",
}: UniqueBentoCardProps) {
  
  const colorMap: Record<string, { from: string, to: string, text: string, border: string, stopColor: string }> = {
    cyan: {
      from: "from-cyan-500/20",
      to: "to-teal-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      stopColor: "rgb(34, 211, 238)"
    },
    emerald: {
      from: "from-emerald-500/20",
      to: "to-cyan-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      stopColor: "rgb(16, 185, 129)"
    },
    violet: {
      from: "from-violet-500/20",
      to: "to-purple-500/10",
      text: "text-violet-400",
      border: "border-violet-500/30",
      stopColor: "rgb(139, 92, 246)"
    },
    pink: {
      from: "from-pink-500/20",
      to: "to-rose-500/10",
      text: "text-pink-400",
      border: "border-pink-500/30",
      stopColor: "rgb(236, 72, 153)"
    }
  }

  const colors = colorMap[accentColor] || colorMap.cyan

  const renderBackground = () => {
    return (
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        colors.from,
        colors.to
      )} />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-zinc-950/90 via-zinc-900/90 to-zinc-950/90",
        "border border-zinc-800/50 hover:border-transparent transition-all duration-500",
        colors.border,
        className
      )}
    >
      {/* Animated border glow */}
      <motion.div
        className={cn(
          "absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm",
          `bg-gradient-to-br ${colors.from} ${colors.to}`
        )}
      />
      
      {/* Background pattern */}
      {renderBackground()}
      
      {/* Radial glow */}
      <div className={cn(
        "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        `bg-[radial-gradient(circle_at_top_right,${colors.from}_0%,transparent_50%)]`
      )} />
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className="mb-6">
          <div className={cn(
            "inline-flex p-4 rounded-2xl bg-gradient-to-br border backdrop-blur-sm",
            "from-zinc-900/80 to-zinc-800/80 border-zinc-700/50",
            "group-hover:border-zinc-600/50 transition-all duration-500 shadow-lg"
          )}>
            <div className={cn("relative", colors.text)}>
              {icon}
              {/* Icon glow */}
              <div className={cn(
                "absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                colors.text
              )} />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-zinc-50 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

