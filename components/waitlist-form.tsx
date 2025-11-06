"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setError("Please enter a valid email address.")
      return
    }

    setLoading(true)
    try {
      // Use same-origin API route to avoid leaking backend URLs and reduce CORS/mixed-content issues
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null)
        const detail = errorBody?.detail
        throw new Error(
          typeof detail === "string"
            ? detail
            : "Unable to join the waitlist right now. Please try again soon."
        )
      }

      setSubmitted(true)
      setEmail("")
    } catch (err) {
      console.error(err)
      const message =
        err instanceof Error
          ? err.message
          : "Unexpected error while joining the waitlist."
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 bg-zinc-900/80 border border-zinc-800/50 rounded-xl backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center"
          >
            <Check className="w-6 h-6 text-white" strokeWidth={3} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <p className="font-semibold text-white mb-1">You&apos;re on the list!</p>
            <p className="text-sm text-zinc-300">We&apos;ll notify you when we launch.</p>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-4 bg-zinc-900/80 border border-zinc-800/50 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all backdrop-blur-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="group relative px-8 py-4 bg-white text-black font-semibold overflow-hidden disabled:opacity-50 whitespace-nowrap rounded-xl transition-all hover:shadow-lg hover:shadow-white/20"
        >
          <span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-0.5 transition-transform">
            {loading ? "Joining..." : "Join Waitlist"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:h-1 transition-all duration-300 rounded-b-xl" />
        </button>
      </div>
      <p className="text-center text-sm text-zinc-400 mt-5">
        Backed by Stanford Cardinal Ventures
      </p>
      {error && (
        <p className="text-center text-sm text-red-400 mt-2">
          {error}
        </p>
      )}
    </form>
  )
}
