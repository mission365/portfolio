"use client"

import { useParallax } from "@/hooks/use-parallax"
import { ParallaxBackground } from "@/components/parallax-hero"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const { ref: contentRef, offset: contentOffset } = useParallax(0.3)

  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
      <ParallaxBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-transform duration-500 ease-out"
          style={{
            transform: `translateY(${contentOffset * 0.5}px)`,
          }}
        >
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium">Aspiring Graduate Researcher</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Advancing Software Security Through{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ML-Driven Innovation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 text-balance leading-relaxed">
              Researcher & Engineer passionate about cybersecurity, machine learning, and resilient software systems. 5
              peer-reviewed publications. Seeking full-ride scholarship for master's degree.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#research"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 group"
              >
                View Research
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors duration-200"
              >
                Connect With Me
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { number: "5", label: "Publications", highlight: "peer-reviewed" },
                { number: "323", label: "GRE Score", highlight: "top 88%" },
                { number: "7.5", label: "IELTS", highlight: "fluent" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="space-y-2 p-3 rounded-lg bg-card/50 border border-border/50 animate-scale-in stagger-{index + 1}"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs md:text-sm font-medium text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-card to-muted rounded-3xl p-8 md:p-12 border border-border/50 backdrop-blur">
              <div className="space-y-6">
                {[
                  { icon: "🔒", title: "Security Research", desc: "Cybersecurity analytics & threat detection" },
                  { icon: "🤖", title: "ML Applications", desc: "Deep learning for classification & detection" },
                  { icon: "💻", title: "Software Engineering", desc: "Quality assurance & system design" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
