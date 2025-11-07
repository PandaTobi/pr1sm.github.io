"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AdvancedFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  delay?: number
  accentColor?: string
}

export function AdvancedFeatureCard({ 
  icon, 
  title, 
  description, 
  className,
  delay = 0,
  accentColor = "cyan"
}: AdvancedFeatureCardProps) {
  const colorMap: Record<string, { border: string, glow: string, icon: string, shine: string }> = {
    cyan: {
      border: "border-cyan-500/30",
      glow: "from-cyan-500/20 via-cyan-500/5",
      icon: "text-cyan-400 group-hover:text-cyan-300",
      shine: "from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
    },
    emerald: {
      border: "border-emerald-500/30",
      glow: "from-emerald-500/20 via-emerald-500/5",
      icon: "text-emerald-400 group-hover:text-emerald-300",
      shine: "from-emerald-500/0 via-emerald-500/20 to-emerald-500/0"
    },
    teal: {
      border: "border-teal-500/30",
      glow: "from-teal-500/20 via-teal-500/5",
      icon: "text-teal-400 group-hover:text-teal-300",
      shine: "from-teal-500/0 via-teal-500/20 to-teal-500/0"
    },
    violet: {
      border: "border-violet-500/30",
      glow: "from-violet-500/20 via-violet-500/5",
      icon: "text-violet-400 group-hover:text-violet-300",
      shine: "from-violet-500/0 via-violet-500/20 to-violet-500/0"
    },
    blue: {
      border: "border-blue-500/30",
      glow: "from-blue-500/20 via-blue-500/5",
      icon: "text-blue-400 group-hover:text-blue-300",
      shine: "from-blue-500/0 via-blue-500/20 to-blue-500/0"
    },
    pink: {
      border: "border-pink-500/30",
      glow: "from-pink-500/20 via-pink-500/5",
      icon: "text-pink-400 group-hover:text-pink-300",
      shine: "from-pink-500/0 via-pink-500/20 to-pink-500/0"
    }
  }

  const colors = colorMap[accentColor] || colorMap.cyan

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-zinc-950/90 via-zinc-900/90 to-zinc-950/90",
        "border border-zinc-800/50 hover:border-transparent transition-all duration-500",
        "text-center md:text-left",
        colors.border,
        className
      )}
    >
      {/* Animated border glow */}
      <motion.div
        className={cn(
          "absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm",
          `bg-gradient-to-br ${colors.glow} to-transparent`
        )}
      />
      
      {/* Gradient background overlay */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        `bg-gradient-to-br ${colors.glow} to-transparent`
      )} />
      
      {/* Radial glow from top-right */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        `bg-[radial-gradient(circle_at_top_right,${colors.glow}_0%,transparent_50%)]`
      )} />
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className="mb-6 flex justify-center md:justify-start">
          <div className={cn(
            "inline-flex p-4 rounded-2xl bg-gradient-to-br border backdrop-blur-sm",
            "from-zinc-900/80 to-zinc-800/80 border-zinc-700/50",
            "group-hover:border-zinc-600/50 transition-all duration-500 shadow-lg"
          )}>
            <div className={cn("relative", colors.icon)}>
              {icon}
              {/* Icon glow */}
              <div className={cn(
                "absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                colors.icon
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
