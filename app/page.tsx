import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Highlights from "@/components/product-highlights"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export const metadata = {
  title: "ContentFlow - AI-Powered Content Creation",
  description: "Create compelling content 10x faster with AI. Write, optimize, and publish with ContentFlow.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Highlights />
      <Pricing />
      <Footer />
    </main>
  )
}
