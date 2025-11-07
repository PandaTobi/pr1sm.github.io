"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FeatureCard } from "@/components/feature-card"
import { AdvancedFeatureCard } from "@/components/advanced-feature-card"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { FloatingOrb } from "@/components/floating-orb"
import { ParallaxSection } from "@/components/parallax-section"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatCard } from "@/components/stat-card"
import { BentoGrid, BentoCard } from "@/components/bento-grid"
import { UniqueBentoCard } from "@/components/unique-bento-card"
import { Spotlight } from "@/components/spotlight"
import { AnimatedBorder } from "@/components/animated-border"
import { ScrollProgress } from "@/components/scroll-progress"
import { RotatingText } from "@/components/rotating-text"
import { CustomCursor } from "@/components/custom-cursor"
import { WaitlistForm } from "@/components/waitlist-form"
import { AnimatedGrid } from "@/components/animated-grid"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { FloatingHeader } from "@/components/floating-header"
import { MemorySection } from "@/components/memory-section"
import { AutoscripterSection } from "@/components/autoscripter-section"
import {
  Zap,
  Code2,
  Sparkles,
  Rocket,
  Shield,
  GitBranch,
  Brain,
  Layers,
  Terminal,
  ArrowRight,
  ChevronDown,
  Workflow,
  Database,
  Lock,
  Eye,
  Network,
  Cpu,
  Wand2,
} from "lucide-react"

const createSeededRandom = (seed: number) => {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const FOOTER_PARTICLE_CONFIGS = Array.from({ length: 12 }, (_, i) => {
  const rand = createSeededRandom(8000 + i)
  const offset = () => rand() * 100 - 50

  return {
    animate: {
      x: [offset(), offset(), offset()],
      y: [offset(), offset(), offset()],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.5, 1],
    },
    transition: {
      duration: 4 + rand() * 3,
      repeat: Infinity,
      delay: i * 0.3,
    },
    style: {
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
    },
  }
})

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Header */}
      <FloatingHeader />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Spotlight Effect */}
      <Spotlight />
      
      {/* Floating Orbs Background (hidden on mobile) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
        <FloatingOrb
          size={600}
          color="from-cyan-500 to-emerald-500"
          delay={0}
          className="top-0 -left-40"
        />
        <FloatingOrb
          size={500}
          color="from-teal-500 to-cyan-500"
          delay={2}
          className="top-1/3 -right-40"
        />
        <FloatingOrb
          size={400}
          color="from-emerald-500 to-teal-500"
          delay={4}
          className="bottom-0 left-1/4"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 overflow-hidden pt-32">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <AnimatedGrid />
        </div>
        
        <div className="container mx-auto text-center relative z-10 w-full max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-1 md:mb-3 tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Your Computer,
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2 md:mb-4 tracking-tight leading-tight"
          >
            <RotatingText
              words={["Amplified", "Reimagined", "Supercharged", "Elevated", "Transformed"]}
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift"
              wrapperClassName="justify-center"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-zinc-300 mb-6 md:mb-8 max-w-5xl mx-auto leading-relaxed font-light px-4"
          >
            The AI-native productivity layer for macOS. It knows your files, learns your workflows, 
            and executes with intention.{" "}
            <span className="text-zinc-200 font-normal">Your personal intelligence system.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-3xl mx-auto px-4"
          >
            <WaitlistForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 md:mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-400 transition-colors cursor-pointer"
            >
              <span className="text-sm md:text-base font-medium tracking-wider uppercase">Scroll</span>
              <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StatCard value={1000} label="Built-in functions" suffix="+" delay={0} />
            <StatCard value={99} label="Memory accuracy" suffix="%" delay={0.2} />
            <StatCard value={0} display="∞" label="Possible scripts" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Features</span>
              </div>
              <div className="mb-6" style={{ minHeight: '100px' }}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{ lineHeight: '1.1' }}>
                  Intelligence That{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                    Adapts
                  </span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                An AI that doesn&apos;t just assist—it anticipates, understands, and evolves with you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AdvancedFeatureCard
              icon={<Brain size={36} />}
              title="Contextual Memory"
              description="Every file, every preference, every pattern—stored and understood. Your AI doesn't just remember, it comprehends your entire digital ecosystem."
              delay={0.1}
              accentColor="cyan"
            />

            <AdvancedFeatureCard
              icon={<Zap size={36} />}
              title="Execute Anything"
              description="From launching apps to automating complex workflows—speak your intention and watch it materialize. No commands to memorize, no scripts to write."
              delay={0.2}
              accentColor="emerald"
            />

            <AdvancedFeatureCard
              icon={<Eye size={36} />}
              title="Predictive Vision"
              description="Anticipates your needs before you articulate them. Surfaces the right file, the right app, the right action at the perfect moment."
              delay={0.3}
              accentColor="teal"
            />

            <AdvancedFeatureCard
              icon={<Shield size={36} />}
              title="Privacy First"
              description="100% on-device processing. Your data stays on your Mac, encrypted and secure. Intelligence without compromise."
              delay={0.4}
              accentColor="violet"
            />

            <AdvancedFeatureCard
              icon={<Network size={36} />}
              title="Deep Integration"
              description="Native macOS experience that connects everything. Works seamlessly with every app, every file, every tool you use."
              delay={0.5}
              accentColor="blue"
            />

            <AdvancedFeatureCard
              icon={<Cpu size={36} />}
              title="Adaptive Intelligence"
              description="Self-learning system that evolves with your workflow. Gets smarter with every interaction, adapts to your unique work style."
              delay={0.6}
              accentColor="pink"
            />
          </div>
        </div>
      </section>

      {/* Model Memory Section */}
      <MemorySection />

      {/* Bento Grid Section */}
      <section id="automation" className="relative z-10 py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Automation</span>
              </div>
              <div className="mb-6" style={{ minHeight: '100px' }}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{ lineHeight: '1.1' }}>
                  Beyond{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                    Automation
                  </span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                This isn&apos;t a tool. It&apos;s an extension of your mind.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <UniqueBentoCard
              title="Learns Your Patterns"
              description="Every click, every command, every preference—Prism evolves with you. It doesn't just remember, it predicts. Your digital twin that understands intention."
              icon={<Brain size={32} />}
              className="md:col-span-2"
              accentColor="cyan"
            />
            <UniqueBentoCard
              title="On-Device Intelligence"
              description="100% local processing. Your data never touches the cloud. Military-grade encryption meets cutting-edge AI. Privacy isn't optional—it's foundational."
              icon={<Lock size={32} />}
              accentColor="emerald"
            />
            <UniqueBentoCard
              title="Natural Language Control"
              description="Speak naturally. No commands to memorize, no syntax to learn. Just describe what you want in your own words and watch it happen."
              icon={<Sparkles size={32} />}
              accentColor="violet"
            />
            <UniqueBentoCard
              title="Proactive Intelligence"
              description="Anticipates your next move before you make it. Opens files before you ask. Suggests actions at the perfect moment. True predictive computing."
              icon={<Zap size={32} />}
              className="md:col-span-2"
              accentColor="pink"
            />
          </div>
        </div>
      </section>


      {/* Autoscripter Section */}
      <AutoscripterSection />

      {/* CTA Section */}
      <section id="waitlist" className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl opacity-50" />
              
              <div className="relative rounded-3xl border border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm overflow-hidden">
                <div className="p-12 md:p-16 lg:p-20">
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
                    >
                      <Rocket className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400">Early Access</span>
                    </motion.div>
                    
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                    >
                      <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        Your Productivity,
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                        Reimagined
                      </span>
                    </motion.h2>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                      Join thousands on the waitlist. Be among the first to experience the AI that knows your Mac as well as you do.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-xl mx-auto mb-8"
                  >
                    <WaitlistForm />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 text-zinc-500 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-emerald-400" />
                      <span>100% on-device processing</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-cyan-400" />
                      <span>macOS exclusive</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
                    <div className="flex items-center gap-2">
                      <Rocket size={16} className="text-violet-400" />
                      <span>Launching 2026</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 pt-16 px-6 mt-8 overflow-hidden">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        <div className="hidden md:block">
          {FOOTER_PARTICLE_CONFIGS.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-500/40"
              animate={particle.animate}
              transition={particle.transition}
              style={particle.style}
            />
          ))}
        </div>

        <div className="container mx-auto relative pb-16">
          <div className="flex flex-col items-center gap-8">
            {/* Logo and tagline */}
            <motion.div 
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/60 transition-all">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <div>
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-emerald-100 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% auto'
                  }}
                >
                  Prism
                </motion.span>
                <span className="text-xs text-zinc-400 font-medium">The AI native productivity layer</span>
              </div>
            </motion.div>

            {/* Quick nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
              {[
                { name: "Features", href: "#features" },
                { name: "Memory", href: "#memory" },
                { name: "Automation", href: "#automation" },
                { name: "Autoscripter", href: "#autoscripter" },
                { name: "Join Waitlist", href: "#waitlist" }
              ].map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="group relative text-zinc-400 hover:text-white transition-colors font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </motion.a>
              ))}
            </nav>

            {/* Copyright with subtle animation */}
            <motion.div 
              className="text-zinc-500 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                © 2025 Prism
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Animated divider line at the bottom */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </footer>
    </main>
  )
}
