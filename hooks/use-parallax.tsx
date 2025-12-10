"use client"

import { useEffect, useState, useRef } from "react"

export function useParallax(intensity = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const element = ref.current
      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in view
      if (elementTop < windowHeight && elementTop + elementRect.height > 0) {
        const scrolled = window.scrollY
        const elementScrollTop = element.offsetTop
        const parallaxOffset = (scrolled - elementScrollTop) * intensity

        setOffset(parallaxOffset)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [intensity])

  return { ref, offset }
}
