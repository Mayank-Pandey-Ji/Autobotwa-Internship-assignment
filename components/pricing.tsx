import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 50 content pieces/month",
      "5 template categories",
      "Basic analytics",
      "Email support",
      "Standard AI models",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "month",
    description: "Ideal for teams and serious creators",
    features: [
      "Unlimited content pieces",
      "All 30+ templates",
      "Advanced analytics",
      "Priority email & chat support",
      "Premium AI models",
      "Team collaboration (up to 5)",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantee",
      "Custom AI models",
      "Unlimited team members",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. Always flexible to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 scale-105 shadow-lg shadow-primary/20"
                  : "bg-background border-border hover:border-primary/30"
              } p-8`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                <div className="space-y-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <p className="text-muted-foreground text-sm">per {plan.period}</p>
                </div>
              </div>

              <Button className="w-full mb-8" variant={plan.highlighted ? "default" : "outline"}>
                Get Started
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
