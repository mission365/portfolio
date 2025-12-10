"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ResearchSection from "@/components/research-section"
import AchievementsSection from "@/components/achievements-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    // Simulate content load and trigger animations
    const loadTimer = setTimeout(() => {
      setIsLoading(false)
      setPageLoaded(true)
    }, 1200)

    return () => clearTimeout(loadTimer)
  }, [])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-primary border-t-accent animate-spin" />
            <p className="text-sm text-muted-foreground font-medium">Loading portfolio...</p>
          </div>
        </div>
      )}

      <main
        className={`min-h-screen bg-gradient-to-br from-background via-background to-muted/30 transition-opacity duration-700 ${
          pageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="opacity-0 animate-fade-in-up">
          <Navigation />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-1">
          <Hero />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-2">
          <ResearchSection />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-3">
          <AchievementsSection />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-4">
          <SkillsSection />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-2">
          <ProjectsSection />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-3">
          <ExperienceSection />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-4">
          <ContactSection />
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-5">
          <Footer />
        </div>
      </main>
    </>
  )
}
