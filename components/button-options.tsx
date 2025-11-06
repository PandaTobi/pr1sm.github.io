"use client"

import { ArrowRight } from "lucide-react"

export function ButtonOptions() {
  return (
    <div className="space-y-16 max-w-4xl mx-auto">
      {/* Option 1: Thick Bottom Border Growth */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 1: Thick Bottom Border</h3>
        <p className="text-zinc-400 mb-6">Classic and bold. Bottom border grows on hover.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 bg-white text-black font-medium text-lg overflow-hidden">
            <span className="relative z-10 group-hover:-translate-y-0.5 inline-block transition-transform">
              Join Waitlist
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:h-1.5 transition-all duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg border border-zinc-700 hover:border-zinc-600 transition-colors overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 group-hover:h-full transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:h-1 transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Option 2: Gradient Fill */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 2: Gradient Fill</h3>
        <p className="text-zinc-400 mb-6">Fills with gradient from bottom to top on hover.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 text-white font-medium text-lg border border-cyan-500/30 overflow-hidden">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg border border-zinc-700 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Option 3: Glow Effect */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 3: Glow Effect</h3>
        <p className="text-zinc-400 mb-6">Glowing border appears on hover with scale effect.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 bg-white text-black font-medium text-lg transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg border border-zinc-700 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
          </button>
        </div>
      </div>

      {/* Option 4: Slide & Scale */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 4: Slide & Scale</h3>
        <p className="text-zinc-400 mb-6">Background slides in from left with subtle scale.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 text-white font-medium text-lg border-2 border-cyan-500 overflow-hidden transition-transform hover:scale-105">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg border-2 border-zinc-700 overflow-hidden transition-transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Option 5: Minimal Underline */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 5: Minimal Underline</h3>
        <p className="text-zinc-400 mb-6">Ultra minimal with just an animated underline.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 text-white font-medium text-lg">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>

      {/* Option 6: Border Morph */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 6: Border Morph</h3>
        <p className="text-zinc-400 mb-6">Border thickness grows and changes color on hover.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 text-white font-medium text-lg border-2 border-zinc-700 hover:border-4 hover:border-cyan-500 transition-all duration-300">
            <span className="relative z-10">Join Waitlist</span>
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg border-2 border-zinc-800 hover:border-4 hover:border-emerald-500 transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Option 7: Skew Transform */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 7: Skew Transform</h3>
        <p className="text-zinc-400 mb-6">Subtle skew animation with gradient background.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium text-lg overflow-hidden transition-transform hover:scale-105">
            <span className="relative z-10 inline-block group-hover:skew-x-2 transition-transform">Join Waitlist</span>
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg border border-cyan-500/30 overflow-hidden transition-transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2 group-hover:skew-x-2 transition-transform">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Option 8: Corner Accent */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-2">Option 8: Corner Accent</h3>
        <p className="text-zinc-400 mb-6">Corner lines appear and grow on hover.</p>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="group relative px-8 py-4 bg-white text-black font-medium text-lg">
            <span className="relative z-10">Join Waitlist</span>
            {/* Top left */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent group-hover:w-8 transition-all duration-300" />
            <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 to-transparent group-hover:h-8 transition-all duration-300" />
            {/* Bottom right */}
            <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-emerald-500 to-transparent group-hover:w-8 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-emerald-500 to-transparent group-hover:h-8 transition-all duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 text-white font-medium text-lg border border-zinc-700">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Top left */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent group-hover:w-8 transition-all duration-300" />
            <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 to-transparent group-hover:h-8 transition-all duration-300" />
            {/* Bottom right */}
            <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-emerald-500 to-transparent group-hover:w-8 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-emerald-500 to-transparent group-hover:h-8 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

