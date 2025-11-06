"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  delay?: number
}

export function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 border-zinc-800/50 relative overflow-hidden group backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Quote size={80} className="text-cyan-400" />
        </div>
        
        <div className="relative z-10">
          <div className="mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 mb-4" />
            <p className="text-zinc-200 mb-6 text-lg leading-relaxed font-light">
              <span>&ldquo;</span>
              {quote}
              <span>&rdquo;</span>
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-800/50">
            <p className="text-white font-semibold mb-1">{author}</p>
            <p className="text-zinc-400 text-sm">{role}</p>
          </div>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      </Card>
    </motion.div>
  )
}
