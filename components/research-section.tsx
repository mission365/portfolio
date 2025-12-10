"use client"

import { useParallax } from "@/hooks/use-parallax"
import { BookOpen, Award } from "lucide-react"

export default function ResearchSection() {
  const { ref: headerRef, offset: headerOffset } = useParallax(0.2)

  const publications = [
    {
      title: "Analysis of Cybercrime Identification Using AI-Powered Cybersecurity Analytics",
      journal: "Chinese Science Bulletin (Kexue Tongbao)",
      year: "2024",
      authors: "Md Al Adnan, Saifur Rahman, & 6 co-authors",
      focus: "AI-driven threat detection",
      impact: "International peer-reviewed journal",
    },
    {
      title: "Deep Learning-Based Classification of Rice Varieties for Agricultural Applications",
      conference: "ARIIA 2024",
      year: "2024",
      authors: "Irfan Sadiq Rahat, Hritwik Ghosh, Md Al Adnan, & co-authors",
      focus: "Deep learning classification",
      impact: "IEEE International Conference",
    },
    {
      title: "Hybrid Machine Learning Model for Detecting Bangla Smishing Text Using BERT and Character-Level CNN",
      conference: "ICECE 2024",
      year: "2024",
      authors: "MGazi Tanbhir, Md. Farhan Shahriyar, Md Al Adnan, & co-authors",
      focus: "NLP security applications",
      impact: "13th International Conference",
    },
    {
      title: "Hybrid Convolutional Neural Networks for Enhanced Detection of Mango Leaf Diseases",
      conference: "ICCCMLA 2024",
      year: "2024",
      authors: "Shweta Bhattacharjee Porna, Md Al Adnan, & co-authors",
      focus: "Computer vision for agriculture",
      impact: "IEEE 6th International Conference (Oct 19-20)",
    },
    {
      title: "An Explainable Machine Learning Framework for Prediction of Employee Attrition",
      conference: "MIET 2024",
      year: "2024",
      authors: "Nazmun Nahar, Sourav Barman, Md Al Adnan, & co-authors",
      focus: "Explainable AI & HR analytics",
      impact: "2nd International Conference on Machine Intelligence",
    },
  ]

  return (
    <section
      id="research"
      className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent to-muted/20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${headerOffset * 0.3}px)` }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${headerOffset * -0.2}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium">Research Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Peer-Reviewed Publications & Research Contributions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            5 publications across AI, security, and deep learning in leading international conferences and
            journals—demonstrating research rigor and scholarly impact.
          </p>
        </div>

        <div className="grid gap-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up stagger-{Math.min(index + 1, 5)}"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">{pub.authors}</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground/70">
                      {pub.conference || pub.journal}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                      {pub.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-xs font-medium text-secondary">
                      {pub.focus}
                    </span>
                    <span className="text-xs font-medium text-foreground/50 italic ml-auto">{pub.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <h3 className="font-semibold mb-3 text-foreground">Research Interests</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Cybersecurity Analytics",
              "Machine Learning",
              "Software Security",
              "Deep Learning",
              "AI-Driven Detection",
              "NLP Applications",
              "Explainable AI",
            ].map((interest, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-background/50 text-sm font-medium text-foreground/80">
                #{interest.replace(" ", "")}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
