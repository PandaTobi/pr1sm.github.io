"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("group", className)}
    >
      <Card className="h-full p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 hover:border-zinc-600 transition-all duration-300 relative overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 transform group-hover:scale-110 inline-block">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-zinc-100">{title}</h3>
          <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
            {description}
          </p>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </Card>
    </motion.div>
  )
}

