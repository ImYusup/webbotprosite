import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Santos",
    role: "Operations Manager",
    company: "RetailPlus",
    content:
      "WebBotPro's WhatsApp automation increased our customer response rate by 90%. Our sales team can now focus on closing deals instead of answering basic queries.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    company: "GrowthTech Solutions",
    content:
      "The digital marketing services transformed our online presence. We saw a 150% increase in qualified leads within just 3 months.",
    rating: 5,
  },
  {
    name: "Jennifer Walsh",
    role: "CEO",
    company: "DataDriven Corp",
    content:
      "Their business intelligence dashboards gave us insights we never had before. Decision-making is now data-driven and much more effective.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by businesses
            <span className="text-primary block">across industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            See how WebBotPro has helped businesses automate, grow, and succeed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 font-serif leading-relaxed">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}