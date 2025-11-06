"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ButtonShowcaseProps {
  className?: string
}

export function ButtonShowcase({ className }: ButtonShowcaseProps) {
  return (
    <div className={cn("space-y-12", className)}>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Variant 1: Bottom Border Expand</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="group relative px-8 py-4 text-white font-medium overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Variant 2: Thick Border Slide</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="group relative px-8 py-4 text-white font-medium border-b-4 border-zinc-800 hover:border-transparent transition-colors overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium border-b-4 border-purple-500/20 hover:border-purple-500 transition-colors">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Variant 3: Border Expand All Sides</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="group relative px-8 py-4 text-white font-medium">
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 border-2 border-gradient"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "2px",
              }}
            />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium border border-zinc-800 hover:border-transparent transition-colors">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Variant 4: Underline Grow</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="group relative px-8 py-4 text-white font-medium">
            <span className="relative z-10">Get Started</span>
            <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Variant 5: Solid with Thick Bottom</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="group relative px-8 py-4 bg-white text-black font-medium overflow-hidden">
            <span className="relative z-10 group-hover:-translate-y-0.5 inline-block transition-transform">
              Get Started
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:h-1.5 transition-all duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium">
            <span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-0.5 transition-transform">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-white/30 group-hover:h-1.5 transition-all duration-300" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Variant 6: Outline with Border Grow</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="group relative px-8 py-4 text-white font-medium border border-zinc-700 hover:border-zinc-600 transition-colors overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:h-full transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:h-1 transition-all duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium border-2 border-purple-500/30 hover:border-purple-500 transition-colors">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 group-hover:h-full transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

