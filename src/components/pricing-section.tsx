import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "100 automated workflows",
      "Basic analytics",
      "Email support",
      "Standard integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 25 team members",
      "Unlimited workflows",
      "Advanced analytics",
      "Priority support",
      "Premium integrations",
      "Custom templates",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Enterprise workflows",
      "Custom analytics",
      "Dedicated support",
      "All integrations",
      "White-label options",
      "SLA guarantee",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, transparent
            <span className="text-primary block">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Choose the perfect plan for your team. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-xl scale-105" : "border-0 shadow-lg"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base font-serif mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="font-serif">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8" variant={plan.popular ? "default" : "outline"} size="lg">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
