"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-muted/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">Md Al Adnan</h3>
            <p className="text-sm text-foreground/60">
              Software Engineer & Researcher passionate about ML, security, and innovation. Master's program candidate
              seeking scholarship opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Research", "Projects", "Experience", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Research Interests</h4>
            <div className="flex flex-wrap gap-2">
              {["ML", "Security", "AI", "QA"].map((tag, i) => (
                <span key={i} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">© {currentYear} Md Al Adnan. All rights reserved.</p>
            <p className="text-sm text-foreground/60">
              Built with <span className="text-primary">Modern Web Technologies</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
