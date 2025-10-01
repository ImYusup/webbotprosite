import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Globe, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp Commerce Automation",
    description:
      "Streamline your customer interactions with intelligent auto-replies, product catalog automation, and seamless order processing.",
    features: [
      "Auto-reply & greeting systems",
      "Product catalog automation",
      "Workflow order & invoice processing",
      "Google Sheets & database integration",
    ],
    benefits: "Faster customer response, streamlined sales process, reduced operational costs",
    pricingLink: "/pricing/whatsapp",
  },
  {
    icon: Globe,
    title: "Digital Presence & Marketing",
    description:
      "Build a powerful online presence with comprehensive website solutions, social media management, and targeted advertising campaigns.",
    features: [
      "Website creation (company profile, e-commerce, landing pages)",
      "Social media management & optimization",
      "Follower & engagement growth strategies",
      "Digital ads (Meta, Google, TikTok) & SEO",
    ],
    benefits: "Stronger online visibility, increased brand awareness, enhanced customer engagement",
    pricingLink: "/pricing/marketing",
  },
  {
    icon: BarChart3,
    title: "Data & Business Intelligence",
    description:
      "Transform your data into actionable insights with interactive dashboards, comprehensive analytics, and seamless integrations.",
    features: [
      "Interactive apps & dashboards with Power BI",
      "Data visualization for sales/marketing/operations",
      "Data integration (Excel, database, API)",
      "Custom reporting solutions",
    ],
    benefits: "Better decision-making with clear insights, improved business efficiency, enhanced scalability",
    pricingLink: "/pricing/data",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-10 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Digital Solutions
            <span className="text-primary block">for Your Business Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Comprehensive services designed to automate, optimize, and scale your business operations
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-0 mb-0 items-stretch service-cards">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
            >
              <CardHeader className="pb-4 space-y-3 min-h-[160px]">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                <CardDescription className="text-base font-serif leading-relaxed text-left">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 p-0">
                {/* Features */}
                <div className="flex-1 p-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 w-2.5 h-2.5 bg-secondary rounded-full flex-shrink-0" />
                        <span className="leading-relaxed text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="p-6 pt-4 mt-0 border-t">
                  <p className="text-sm font-medium text-secondary mb-2">Benefits:</p>
                  <p className="text-sm text-muted-foreground font-serif leading-relaxed text-left">
                    {service.benefits}
                  </p>
                </div>

                {/* Pricing Button */}
                <div className="p-6 mt-auto pt-0">
                  <Button asChild size="sm" className="w-full">
                    <Link href={service.pricingLink} className="flex items-center no-spacing">
                      View Pricing<ArrowRight className="h-4 w-4" style={{ marginLeft: 0 }} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}