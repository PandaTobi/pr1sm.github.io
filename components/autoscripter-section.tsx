"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Sparkles, Terminal, Wand2, Layers } from "lucide-react"

export function AutoscripterSection() {
  const examples = [
    {
      prompt: "Resize all images in this folder to 1920x1080",
      description: "Automatically generates and executes image processing script",
      icon: <Layers size={20} />
    },
    {
      prompt: "Backup my documents folder to external drive every Friday",
      description: "Creates scheduled automation with error handling",
      icon: <Terminal size={20} />
    },
    {
      prompt: "When I get an email from John, save attachments to project folder",
      description: "Builds custom workflow with email monitoring and file management",
      icon: <Zap size={20} />
    }
  ]

  return (
    <section id="autoscripter" className="relative z-10 py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Wand2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Autoscripter</span>
          </div>
          <div className="mb-6" style={{ minHeight: '100px' }}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{ lineHeight: '1.1' }}>
              Prompt Your Own{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Functionality
              </span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Describe what you want. Prism writes, tests, and executes the code. No scripting knowledge required.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Main demo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/50 backdrop-blur-sm overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center gap-6 mb-8 md:flex-row md:text-left md:items-start md:space-x-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                        <Terminal size={32} className="text-emerald-400" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-50">
                      Write Code by Describing It
                    </h3>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                      Turn natural language into custom automations. Prism understands your intent, 
                      writes production-ready code, and integrates it seamlessly into your workflow.
                    </p>
                  </div>
                </div>

                {/* Interactive terminal mockup */}
                <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/50 backdrop-blur-sm overflow-hidden">
                  <div className="flex items-center space-x-2 px-4 py-3 bg-zinc-900/50 border-b border-zinc-800/50">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 text-center text-xs text-zinc-500 font-medium">
                      autoscripter.sh
                    </div>
                  </div>
                  
                  <div className="p-6 font-mono text-sm space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-emerald-400">→</span>
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="text-zinc-300"
                        >
                          Create a script that organizes my Downloads folder by file type
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: "auto" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="space-y-2"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-cyan-400">✓</span>
                        <div className="flex-1 text-zinc-400">
                          Analyzing requirements...
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-cyan-400">✓</span>
                        <div className="flex-1 text-zinc-400">
                          Generating script...
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-cyan-400">✓</span>
                        <div className="flex-1 text-zinc-400">
                          Testing implementation...
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="pt-2 border-t border-zinc-800/50"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <Sparkles size={16} className="text-emerald-400 mt-1" />
                        <div className="flex-1 text-emerald-400 font-medium">
                          Script ready! Created folder organization automation.
                        </div>
                      </div>
                      <div className="text-xs text-zinc-500 space-y-1 ml-6">
                        <div>• Created folders: Images, Documents, Videos, Archives, Others</div>
                        <div>• Added file type detection and safe moving logic</div>
                        <div>• Included duplicate handling and error logging</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative h-full rounded-2xl p-6 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-800/50 backdrop-blur-sm group-hover:border-transparent transition-all duration-500">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      {example.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-emerald-400 mb-2">
                        &quot;{example.prompt}&quot;
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center pt-8"
          >
            <p className="text-zinc-400 text-lg">
              No coding required. Just describe what you need, and Prism builds it for you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
