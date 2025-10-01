import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Automation",
    description:
      "Set up complex workflows in minutes, not hours. Our intuitive drag-and-drop interface makes automation accessible to everyone.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Real-time collaboration tools that keep your team synchronized. Share workflows, assign tasks, and track progress together.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your workflow performance with comprehensive analytics and reporting dashboards.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls.",
  },
]

export function FeaturesSection() {
  return (
     <section id="features" className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to
            <span className="text-primary block">streamline workflows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Powerful features designed to transform how your team works together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-serif leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
