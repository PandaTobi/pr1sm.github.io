"use client"

import { useEffect, useRef } from "react"
import { useIsCoarsePointer } from "@/lib/hooks"

export function AnimatedGrid() {
  const isCoarsePointer = useIsCoarsePointer()
  if (isCoarsePointer) return null
  return <CanvasGrid />
}

function CanvasGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid settings
    const gridSize = 50
    const baseOpacity = 0.08 // Slightly more visible base opacity
    const pulseRange = 0.03

    // Animation loop
    let animationFrameId = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Increment time for color animation
      timeRef.current += 0.005

      // Calculate animated color values (subtle pulsing between cyan and emerald)
      const colorShift = Math.sin(timeRef.current) * 0.5 + 0.5 // 0 to 1
      const cyan = {
        r: 34 + colorShift * 10,  // 34-44
        g: 211 + colorShift * 30,  // 211-241
        b: 238 - colorShift * 30   // 238-208
      }
      const emerald = {
        r: 16 + (1 - colorShift) * 10,  // 16-26
        g: 185 + (1 - colorShift) * 30,  // 185-215
        b: 129 + (1 - colorShift) * 30   // 129-159
      }

      // Center point for fade effect
      const centerX = canvas.width / 2

      // Draw vertical lines with subtle opacity variation and fade from top center
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        const columnPhase = (x / gridSize) * 0.3
        const opacityVariation = Math.sin(timeRef.current + columnPhase) * pulseRange
        
        // Calculate distance from center (horizontal fade from center)
        const distanceFromCenter = Math.abs(x - centerX)
        const maxDistance = canvas.width / 2
        const horizontalFade = Math.max(0.3, 1 - (distanceFromCenter / maxDistance) * 0.7) // Fade from 1 at center to 0.3 at edges
        
        // Alternate between cyan and emerald tones
        const useCyan = Math.floor(x / gridSize) % 2 === 0
        const color = useCyan ? cyan : emerald
        
        // Create gradient effect vertically - fade from top (stronger) to bottom (fainter)
        const gradient = ctx.createLinearGradient(x, 0, x, canvas.height)
        const topOpacity = (baseOpacity + opacityVariation) * horizontalFade
        const midOpacity = (baseOpacity + opacityVariation) * horizontalFade * 0.5
        const bottomOpacity = (baseOpacity + opacityVariation) * horizontalFade * 0.1
        gradient.addColorStop(0, `rgba(${Math.floor(color.r)}, ${Math.floor(color.g)}, ${Math.floor(color.b)}, ${topOpacity})`)
        gradient.addColorStop(0.3, `rgba(${Math.floor(color.r)}, ${Math.floor(color.g)}, ${Math.floor(color.b)}, ${midOpacity})`)
        gradient.addColorStop(1, `rgba(${Math.floor(color.r)}, ${Math.floor(color.g)}, ${Math.floor(color.b)}, ${bottomOpacity})`)
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines with subtle opacity variation and fade from top center
      for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
        const rowPhase = (y / gridSize) * 0.3
        const opacityVariation = Math.sin(timeRef.current + rowPhase) * pulseRange
        
        // Calculate vertical fade - strongest at top, fades out going down
        const verticalFade = Math.max(0, 1 - (y / canvas.height) * 1.2) // Fade from 1 at top to near 0 at bottom
        
        // Alternate between cyan and emerald tones
        const useCyan = Math.floor(y / gridSize) % 2 === 0
        const color = useCyan ? cyan : emerald
        
        // Create gradient effect horizontally - fade from center outward (stronger at center)
        const gradient = ctx.createLinearGradient(centerX, y, 0, y)
        const centerOpacity = (baseOpacity + opacityVariation) * verticalFade
        const edgeOpacity = (baseOpacity + opacityVariation) * verticalFade * 0.4
        gradient.addColorStop(0, `rgba(${Math.floor(color.r)}, ${Math.floor(color.g)}, ${Math.floor(color.b)}, ${edgeOpacity})`)
        gradient.addColorStop(0.5, `rgba(${Math.floor(color.r)}, ${Math.floor(color.g)}, ${Math.floor(color.b)}, ${centerOpacity})`)
        gradient.addColorStop(1, `rgba(${Math.floor(color.r)}, ${Math.floor(color.g)}, ${Math.floor(color.b)}, ${edgeOpacity})`)
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  )
}

