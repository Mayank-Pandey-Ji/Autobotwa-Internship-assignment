import { Zap, Brain, Rocket, CheckCircle } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Lightning-Fast Writing",
    description:
      "Generate high-quality content in seconds. Our AI understands context and tone to match your brand voice perfectly.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Smart Optimization",
    description:
      "Automatic SEO optimization, readability scoring, and tone adjustment. Get better results without the extra work.",
    icon: Brain,
  },
  {
    id: 3,
    title: "Multi-Platform Ready",
    description:
      "Create content optimized for blogs, social media, emails, and more. One tool for all your content needs.",
    icon: Rocket,
  },
  {
    id: 4,
    title: "Collaborative Editing",
    description: "Share drafts with your team, get real-time feedback, and collaborate seamlessly on content projects.",
    icon: CheckCircle,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create amazing content, faster than ever before
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="p-8 rounded-xl border border-border hover:border-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/50">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
