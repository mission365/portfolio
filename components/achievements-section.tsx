"use client"

import { useParallax } from "@/hooks/use-parallax"
import { Trophy } from "lucide-react"

export default function AchievementsSection() {
  const { ref: containerRef, offset: containerOffset } = useParallax(0.25)

  const achievements = [
    {
      category: "Standardized Test Scores",
      items: [
        {
          title: "GRE: 323",
          subtitle: "Top 88th percentile",
          details: "Quant: 168/170 | Verbal: 155/170 | AWA: 4/6 | May 2024",
          icon: "📊",
        },
        {
          title: "IELTS: 7.5",
          subtitle: "Proficient in English",
          details: "Reading: 7.5 | Listening: 8 | Speaking: 7 | Writing: 7 | March 2025",
          icon: "🗣️",
        },
      ],
    },
    {
      category: "Professional Certifications",
      items: [
        {
          title: "ISTQB® CTFL v4.0",
          subtitle: "Certified Tester Foundation Level",
          details: "Internationally recognized software testing certification",
          icon: "✅",
        },
        {
          title: "Software Development Engineering in Test",
          subtitle: "Road to SDET - 100% Grade",
          details: "Advanced test automation and quality engineering",
          icon: "🔧",
        },
        {
          title: "Cybersecurity Foundation",
          subtitle: "Arena Web Security - 100% Grade",
          details: "Comprehensive cybersecurity principles and practices",
          icon: "🔒",
        },
        {
          title: "Web Design & Development",
          subtitle: "IIT-NSTU - 100% Grade",
          details: "Full-stack web development certification",
          icon: "🌐",
        },
      ],
    },
  ]

  return (
    <section id="achievements" className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl"
          style={{ transform: `translateY(${containerOffset * 0.4}px) translateX(${containerOffset * 0.2}px)` }}
        />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium">Achievements & Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Academic Excellence & Professional Credentials
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Strong standardized test performance and industry-recognized certifications demonstrating mastery across
            testing, security, and development.
          </p>
        </div>

        <div className="space-y-12">
          {achievements.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                {section.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-fade-in-up stagger-{Math.min(index + 1, 5)}"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-primary font-semibold mt-1">{item.subtitle}</p>
                        <p className="text-sm text-foreground/60 mt-2">{item.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Background */}
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Bachelor of Science in Software Engineering</p>
                  <p className="text-sm text-foreground/70">Institute of Information Technology, NSTU</p>
                  <p className="text-sm text-accent font-medium">GPA: 3.41/4.00 | Sep 2023</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Security",
                  "ML & AI",
                  "QA & Testing",
                  "System Design",
                  "Network Security",
                  "Data Structures",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-background text-sm font-medium text-foreground/80 border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
