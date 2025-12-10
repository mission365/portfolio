"use client"

import { useParallax } from "@/hooks/use-parallax"

export function ParallaxBackground() {
  const { ref, offset } = useParallax(0.5)

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </div>
  )
}
