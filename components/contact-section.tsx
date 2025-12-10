"use client"

import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const contactLinks = [
    { icon: Mail, label: "Email", value: "md.al.adnan00@gmail.com", href: "mailto:md.al.adnan00@gmail.com" },
    { icon: Phone, label: "Phone", value: "+880 162 520 8031", href: "tel:+8801625208031" },
    { icon: MapPin, label: "Location", value: "Bangladesh", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", value: "GitHub Profile", href: "https://github.com" },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Open to Master's Programs & Collaborations
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Actively seeking full-ride scholarship opportunities for master's studies. Open to research collaborations
            and academic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 animate-slide-in-left">
            <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group animate-fade-in-up stagger-{index + 1}"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-foreground/60">{link.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Quick Message */}
          <div className="animate-slide-in-right">
            <div className="p-6 md:p-8 rounded-xl border border-border/50 bg-card/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Message</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-semibold text-foreground">Message sent successfully!</p>
                  <p className="text-sm text-foreground/60 mt-2">I'll get back to you soon.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
