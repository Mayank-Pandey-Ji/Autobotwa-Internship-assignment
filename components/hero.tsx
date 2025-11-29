import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-sm font-medium">AI-Powered Content Creation</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-balance">
            Write Better Content{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10x Faster</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Transform your content workflow with intelligent AI assistance. Create compelling blog posts, social media
            content, emails, and more in minutes, not hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-accent text-base">
              Start Writing Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-secondary bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2M+</div>
              <p className="text-sm text-muted-foreground">Posts Created</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative h-96 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/20 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/50">
              <span className="text-3xl">✨</span>
            </div>
            <p className="text-muted-foreground">AI-Powered Content Editor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
