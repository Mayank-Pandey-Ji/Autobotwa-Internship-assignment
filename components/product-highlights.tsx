import { Check } from "lucide-react"

const highlights = [
  {
    title: "Advanced AI Models",
    description: "Powered by state-of-the-art language models that understand nuance, context, and your unique style.",
    benefits: ["Context-aware writing", "Tone preservation", "Style consistency", "Brand voice alignment"],
  },
  {
    title: "Content Templates",
    description:
      "Pre-built templates for every content type. Blogs, social posts, emails, product descriptions, and more.",
    benefits: ["30+ templates", "Fully customizable", "Industry-specific", "Community templates"],
  },
  {
    title: "Analytics & Insights",
    description: "Understand what works. Track performance metrics and get AI-powered suggestions for improvement.",
    benefits: ["Engagement tracking", "Performance insights", "SEO metrics", "Optimization tips"],
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Why Choose ContentFlow?</h2>

        <div className="space-y-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-3xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{highlight.description}</p>
                <div className="space-y-3">
                  {highlight.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <span className="text-4xl">📊</span>
                  <p className="text-muted-foreground text-sm">{highlight.title} Visualization</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
