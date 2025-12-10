"use client"

import { useParallax } from "@/hooks/use-parallax"
import { Briefcase, BookOpen } from "lucide-react"

export default function ExperienceSection() {
  const { ref: experienceRef, offset: experienceOffset } = useParallax(0.2)

  const experiences = [
    {
      type: "Industry",
      icon: Briefcase,
      title: "Software Quality Assurance Engineer",
      company: "GeeksSoft, Dhaka",
      period: "May 2025 — Present",
      highlights: [
        "Lead QA strategy across 8+ web and mobile products",
        "Designed comprehensive test plans achieving 99% bug detection rate",
        "Mentored 3 junior QA engineers on best practices",
      ],
      badge: "Current Role",
    },
    {
      type: "Industry",
      icon: Briefcase,
      title: "Software Engineer Intern",
      company: "Kona Software Lab, Dhaka",
      period: "May 2022 — Sept 2022",
      highlights: [
        "Developed 3 automation test tools for enterprise projects",
        "Performed API testing on 15+ endpoints using Postman",
        "Executed load testing with JMeter achieving 500+ concurrent user load",
      ],
      badge: "Foundational",
    },
    {
      type: "Education",
      icon: BookOpen,
      title: "University Admission Coach",
      company: "Songshaptak University Coaching Center, Dhaka",
      period: "May 2018 — Dec 2020",
      highlights: [
        "Coached 200+ high school students in Physics, Math, and ICT",
        "Designed 40+ custom mock tests with 87% average pass rate",
        "Mentored 12 students into top-tier universities",
      ],
      badge: "Leadership",
    },
  ]

  const leadership = [
    {
      role: "Division Lead",
      org: "NASA Space App Challenges Bangladesh",
      year: "2021",
      impact: "Organized hackathon with 150+ participants",
    },
    {
      role: "Convenor",
      org: "Basis Student Forum - NSTU Chapter",
      year: "2019-2020",
      impact: "Led professional development programs",
    },
    { role: "Convenor", org: "IT Club - NSTU", year: "2019-2020", impact: "Grew club membership to 400+ students" },
    {
      role: "Convenor",
      org: "NSTU Debating Club",
      year: "2018-2019",
      impact: "Won 3 inter-university debate competitions",
    },
  ]

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent to-muted/20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          style={{ transform: `translateY(${experienceOffset * 0.3}px)` }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-secondary/6 rounded-full blur-3xl"
          style={{ transform: `translateY(${experienceOffset * -0.25}px)` }}
        />
      </div>

      <div ref={experienceRef} className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium">Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Industry Experience & Leadership</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Progressive career growth with demonstrated technical expertise, teaching impact, and community leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 mb-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div key={index} className="group animate-fade-in-up stagger-{Math.min(index + 1, 5)}">
                <div className="p-6 md:p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-foreground/70 font-medium">{exp.company}</p>
                        </div>
                        <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary whitespace-nowrap">
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60 mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-foreground/75 flex gap-2">
                            <span className="text-primary font-bold">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Leadership & Community */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-secondary to-accent rounded-full"></div>
            Community Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map((role, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in-up stagger-{Math.min(index + 1, 5)}"
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="font-bold text-foreground text-sm md:text-base">{role.role}</h4>
                    <p className="text-xs md:text-sm text-foreground/70">{role.org}</p>
                    <p className="text-xs text-foreground/50 mt-2">{role.impact}</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-secondary/10 text-xs font-bold text-secondary whitespace-nowrap">
                    {role.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
