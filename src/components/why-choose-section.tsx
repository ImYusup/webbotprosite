// src/components/why-choose-section.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Award, DollarSign, Puzzle } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Solusi yang Bisa Tumbuh Bersama",
    description: "Layanan kami dirancang scalable, cocok untuk bisnis kecil hingga level enterprise.",
  },
  {
    icon: Award,
    title: "Keahlian Terbukti",
    description: "Berpengalaman bertahun-tahun membantu transformasi digital berbagai industri.",
  },
  {
    icon: DollarSign,
    title: "Efisien & Hemat Biaya",
    description: "Maksimalkan keuntungan dengan otomasi yang memangkas biaya operasional.",
  },
  {
    icon: Puzzle,
    title: "Integrasi Tanpa Ribet",
    description: "Mudah dihubungkan dengan sistem dan proses bisnis yang sudah berjalan.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Kenapa Pilih
            <span className="text-primary block">WebBotPro?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Kami hadir dengan solusi nyata untuk mendukung pertumbuhan dan kesuksesan bisnis kamu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 why-choose-cards">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-serif leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
