"use client"

import { Code2, Database, Shield } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "R", "JavaScript/TypeScript"],
      color: "from-primary to-blue-500",
    },
    {
      icon: Shield,
      title: "Security & Testing",
      skills: ["Selenium", "Postman", "JMeter", "Appium", "TestNG", "ISTQB"],
      color: "from-accent to-orange-500",
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: ["Git/GitHub", "Eclipse", "PyCharm", "Google Colab", "Docker", "Linux"],
      color: "from-secondary to-green-500",
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Full-Stack Technical Proficiency</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Diverse skill set spanning programming languages, security testing tools, and modern development platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="group animate-fade-in-up stagger-{index + 1}">
                <div className="h-full p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Context */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-muted/50 border border-border/50">
            <h4 className="font-bold text-foreground mb-3">ML & AI Expertise</h4>
            <p className="text-sm text-foreground/70">
              Deep learning, classification models, NLP applications, explainable AI frameworks, and
              agricultural/security use cases.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-muted/50 border border-border/50">
            <h4 className="font-bold text-foreground mb-3">Quality Assurance</h4>
            <p className="text-sm text-foreground/70">
              Test automation, manual testing, API testing, load testing, and end-to-end testing across web and mobile
              platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
