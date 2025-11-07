"use client"

import { motion } from "framer-motion"
import { Brain, Clock, FileText, MessageSquare, Search, TrendingUp } from "lucide-react"

const createSeededRandom = (seed: number) => {
  // Deterministic mulberry32 PRNG keeps SSR/client output identical.
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const PARTICLE_CONFIGS = Array.from({ length: 8 }, (_, i) => {
  const rand = createSeededRandom(1000 + i)

  const randomPercent = () => `${rand() * 100}%`

  return {
    animate: {
      x: [rand() * 100, rand() * 100, rand() * 100],
      y: [rand() * 100, rand() * 100, rand() * 100],
      opacity: [0.2, 0.5, 0.2]
    },
    transition: {
      duration: 3 + rand() * 2,
      repeat: Infinity,
      delay: i * 0.3
    },
    style: {
      left: randomPercent(),
      top: randomPercent()
    }
  }
})

export function MemorySection() {
  const memoryFeatures = [
    {
      icon: <Brain size={24} />,
      title: "Contextual Recall",
      description: "Remembers every conversation, decision, and preference across all your interactions",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Clock size={24} />,
      title: "Temporal Understanding",
      description: "Tracks when things happened and why, building a timeline of your work",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <FileText size={24} />,
      title: "Document Memory",
      description: "Connects files, projects, and data points to understand your entire workspace",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Pattern Recognition",
      description: "Learns from your behaviors to predict what you'll need next",
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="memory" className="relative z-10 py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ minHeight: '200px' }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Model Memory</span>
          </div>
          <div className="mb-6" style={{ minHeight: '100px' }}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{ lineHeight: '1.1' }}>
              It Just{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Knows
              </span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            A persistent memory that evolves with you. Not just storage—understanding.
          </p>
        </motion.div>

        {/* Main visual showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="relative rounded-3xl p-12 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/50 backdrop-blur-sm overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at center, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Central brain visualization */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-24 relative"
              >
                {/* Connection lines radiating from brain to top nodes */}
                {memoryFeatures.map((_, idx) => {
                  const totalCards = memoryFeatures.length
                  const angleSpread = 100 // degrees to spread across
                  const startAngle = 90 - angleSpread / 2 // center the spread below the brain
                  const angle = startAngle + (angleSpread / (totalCards - 1)) * idx
                  const lineLength = 120
                  
                  return (
                    <motion.div
                      key={`line-${idx}`}
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                      className="absolute origin-top"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: '2px',
                        height: `${lineLength}px`,
                        transform: `translate(-50%, 0) rotate(${angle}deg)`,
                      }}
                    >
                      <motion.div
                        className="w-full h-full bg-gradient-to-b from-cyan-400/70 to-cyan-500/30 rounded-full"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )
                })}
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-2xl opacity-30" />
                  <div className="relative p-8 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-cyan-500/30">
                    <Brain size={64} className="text-cyan-400" />
                  </div>
                </div>
              </motion.div>

              {/* Connecting lines and nodes */}
              <div className="relative w-full max-w-4xl -mt-4 hidden md:block">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {memoryFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                      className="relative"
                    >
                      {/* Connection line extending upward */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center mb-2">
                        {/* Top connection node (connects to brain) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                          className="relative w-3 h-3 rounded-full bg-cyan-400 border-2 border-zinc-900 shadow-lg shadow-cyan-400/50 z-10"
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full bg-cyan-400"
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.8, 0, 0.8]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.3,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                        
                        {/* Vertical line */}
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.6 + idx * 0.1 }}
                          className="w-[2px] origin-top my-1"
                          style={{ height: '80px' }}
                        >
                          <motion.div
                            className="w-full h-full bg-gradient-to-b from-cyan-400/80 to-cyan-500/60 rounded-full"
                            animate={{
                              opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.3,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                        
                        {/* Bottom connection node (joint at card) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                          className="relative w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-zinc-900 shadow-lg shadow-cyan-500/50 z-10"
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full bg-cyan-500"
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.6, 0, 0.6]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.3 + 0.5,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group/card"
                      >
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 mb-4`}>
                          <div className="text-white">
                            {feature.icon}
                          </div>
                        </div>
                        <h4 className="text-sm font-semibold text-zinc-100 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating particles */}
            {PARTICLE_CONFIGS.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-cyan-500/30"
                animate={particle.animate}
                transition={particle.transition}
                style={particle.style}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile feature list */}
        <div className="md:hidden w-full max-w-xl mx-auto space-y-4 mb-12">
          {memoryFeatures.map((feature, idx) => (
            <motion.div
              key={`mobile-feature-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-900/80 p-4 shadow-lg shadow-black/20"
            >
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg shadow-black/30`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Example showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto group mt-12 md:mt-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          
          <div className="relative rounded-3xl p-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/50 backdrop-blur-sm overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at center, rgba(6, 182, 212, 0.4) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:space-x-6">
              <motion.div 
                className="flex-shrink-0 relative"
                animate={{ 
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-lg opacity-30" />
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                  <MessageSquare size={28} className="text-emerald-400" />
                </div>
              </motion.div>
              
              <div className="flex-1 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2 font-semibold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Example Query
                  </div>
                  <div className="text-xl font-medium text-zinc-100 mb-6">
                    &quot;What was I working on last Tuesday?&quot;
                  </div>
                </div>
                
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 mb-2 font-semibold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Prism Response
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800/40 backdrop-blur-sm">
                    <p className="text-zinc-300 leading-relaxed text-[15px]">
                      You were finalizing the Q4 presentation. You made 47 edits to quarterly-results.pptx 
                      between 2-4 PM, then moved to revenue-projections.xlsx. You also had a call with the 
                      marketing team at 3:30 PM where you discussed the launch timeline.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
