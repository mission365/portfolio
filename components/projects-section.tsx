"use client"

import { useParallax } from "@/hooks/use-parallax"
import { Code, Database, Zap } from "lucide-react"

export default function ProjectsSection() {
  const { ref: projectsRef, offset: projectsOffset } = useParallax(0.3)

  const projects = [
    {
      title: "University Website with Integrated AI Chatbot",
      description:
        "NLP-powered web application providing real-time university information and automated student support. Achieved 92% user satisfaction in pilot testing.",
      tech: ["NLP", "Python", "React", "Web Development"],
      icon: Zap,
      impact: "Automated 87% of routine student inquiries",
    },
    {
      title: "E-Commerce Platform Automation Suite",
      description:
        "Comprehensive test automation covering signup, login, and purchase workflows. Implemented both positive and negative test scenarios using TestNG framework.",
      tech: ["Selenium", "TestNG", "Java", "QA"],
      icon: Code,
      impact: "Reduced QA cycle time by 65%",
    },
    {
      title: "Restaurant Management System",
      description:
        "Full-featured web application enabling online food ordering and restaurant table booking. Responsive design with Bootstrap and PHP backend.",
      tech: ["PHP", "Bootstrap", "MySQL", "Web Design"],
      icon: Database,
      impact: "Supported 500+ concurrent users",
    },
  ]

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"
          style={{ transform: `translateY(${projectsOffset * 0.35}px)` }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${projectsOffset * -0.25}px)` }}
        />
      </div>

      <div ref={projectsRef} className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
            <Code className="w-4 h-4 text-secondary" />
            <span className="text-xs md:text-sm font-medium">Software Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Real-World Engineering Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Practical implementations demonstrating full-stack development, QA automation, and scalable system design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:border-secondary/50 animate-fade-in-up stagger-{index + 1}"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-green-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded text-xs font-medium bg-secondary/10 text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-foreground/80">
                    <span className="text-secondary">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
