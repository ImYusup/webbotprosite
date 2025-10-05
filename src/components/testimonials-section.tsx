// src/components/testimonials-section.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Siti Rahma",
    role: "Manajer Operasional",
    company: "Toko Retail Plus",
    content:
      "Automasi WhatsApp dari WebBotPro meningkatkan respon pelanggan kami hingga 90%. Tim sales sekarang bisa fokus closing, bukan hanya jawab pertanyaan dasar.",
    rating: 5,
  },
  {
    name: "Andi Pratama",
    role: "Direktur Marketing",
    company: "GrowTech Indonesia",
    content:
      "Layanan digital marketing mereka benar-benar mengubah kehadiran online kami. Dalam 3 bulan, leads berkualitas naik lebih dari 150%.",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    role: "CEO",
    company: "DataDriven Nusantara",
    content:
      "Dashboard Business Intelligence yang dibuat memberi insight yang belum pernah kami miliki sebelumnya. Pengambilan keputusan kini jauh lebih data-driven dan efektif.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Dipercaya oleh banyak bisnis
            <span className="text-primary block">dari berbagai industri</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Lihat bagaimana WebBotPro membantu bisnis otomatisasi, bertumbuh, dan meraih sukses
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
                <blockquote className="text-lg mb-6 font-serif leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} - {testimonial.company}
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
