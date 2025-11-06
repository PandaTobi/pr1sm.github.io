"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function FloatingHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-6 left-0 right-0 z-[100] mx-auto w-[95%] max-w-6xl"
          style={{ transform: 'translateX(0)' }}
        >
          <div className="backdrop-blur-xl bg-black/80 rounded-2xl border border-zinc-800/50 shadow-2xl shadow-black/40 px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Prism
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex items-center space-x-6"
              >
                <a href="#features" className="group relative text-zinc-300 font-medium hover:text-white transition-colors text-sm">
                  Features
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
                <a href="#memory" className="group relative text-zinc-300 font-medium hover:text-white transition-colors text-sm">
                  Memory
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
                <a href="#automation" className="group relative text-zinc-300 font-medium hover:text-white transition-colors text-sm">
                  Automation
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
                <a href="#autoscripter" className="group relative text-zinc-300 font-medium hover:text-white transition-colors text-sm">
                  Autoscripter
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
                <a href="#waitlist">
                  <button className="group relative px-6 py-2.5 bg-white text-black font-semibold overflow-hidden rounded-lg transition-all hover:shadow-lg hover:shadow-white/20">
                    <span className="relative z-10 group-hover:-translate-y-0.5 inline-block transition-transform text-sm">
                      Join Waitlist
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:h-1 transition-all duration-300 rounded-b-lg" />
                  </button>
                </a>
              </motion.div>

              {/* Mobile menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="bg-zinc-900/60 border-zinc-800 text-zinc-200">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="top" className="p-6">
                    <div className="space-y-4">
                      <a href="#features" className="block text-base font-medium text-zinc-200">
                        Features
                      </a>
                      <a href="#memory" className="block text-base font-medium text-zinc-200">
                        Memory
                      </a>
                      <a href="#automation" className="block text-base font-medium text-zinc-200">
                        Automation
                      </a>
                      <a href="#autoscripter" className="block text-base font-medium text-zinc-200">
                        Autoscripter
                      </a>
                      <a href="#waitlist" className="block">
                        <Button className="w-full">Join Waitlist</Button>
                      </a>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

