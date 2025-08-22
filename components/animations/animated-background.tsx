"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Floating geometric shapes
    const shapes: Array<{
      x: number
      y: number
      size: number
      speed: number
      rotation: number
      rotationSpeed: number
      opacity: number
      type: "triangle" | "circle" | "square"
    }> = []

    // Create shapes
    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        speed: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.1 + 0.05,
        type: ["triangle", "circle", "square"][Math.floor(Math.random() * 3)] as "triangle" | "circle" | "square",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        ctx.save()
        ctx.globalAlpha = shape.opacity
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)

        // Set gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size)
        gradient.addColorStop(0, "#2563EB")
        gradient.addColorStop(1, "#06B6D4")
        ctx.fillStyle = gradient

        // Draw shape
        if (shape.type === "circle") {
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else if (shape.type === "triangle") {
          ctx.beginPath()
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(-shape.size / 2, shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.closePath()
          ctx.fill()
        } else {
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
        }

        ctx.restore()

        // Update position
        shape.y -= shape.speed
        shape.rotation += shape.rotationSpeed

        // Reset position when off screen
        if (shape.y < -shape.size) {
          shape.y = canvas.height + shape.size
          shape.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
