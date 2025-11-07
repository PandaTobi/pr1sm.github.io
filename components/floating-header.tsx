"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

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
                <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow overflow-hidden">
                  <Image
                    src="/prism-logo.png"
                    alt="Prism logo"
                    width={36}
                    height={36}
                    priority
                  />
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
                  <SheetContent
                    side="top"
                    className="pt-24 pb-10 px-6 max-h-[85vh] overflow-y-auto"
                    showCloseButton={false}
                    title="Mobile navigation"
                  >
                    <div className="absolute inset-x-0 top-0 px-6 py-4 border-b border-zinc-800/60 bg-black/90 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center shadow-lg shadow-cyan-500/30 overflow-hidden">
                            <Image
                              src="/prism-logo.png"
                              alt="Prism logo"
                              width={28}
                              height={28}
                              priority
                            />
                          </div>
                          <span className="text-lg font-semibold text-white">Prism</span>
                        </div>
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Menu</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <SheetClose asChild>
                        <a href="#features" className="block text-lg font-medium text-white">
                          Features
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#memory" className="block text-lg font-medium text-white">
                          Memory
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#automation" className="block text-lg font-medium text-white">
                          Automation
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#autoscripter" className="block text-lg font-medium text-white">
                          Autoscripter
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#waitlist" className="block">
                          <Button className="w-full">Join Waitlist</Button>
                        </a>
                      </SheetClose>
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
