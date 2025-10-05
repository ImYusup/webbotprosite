// src/components/services-section.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Globe, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: MessageSquare,
    title: "Automasi WhatsApp Commerce",
    description:
      "Permudah interaksi dengan pelanggan melalui balasan otomatis, katalog produk terintegrasi, dan pemrosesan pesanan yang cepat.",
    features: [
      "Balasan otomatis & sapaan pelanggan",
      "Katalog produk terintegrasi",
      "Alur pesanan & pembuatan invoice otomatis",
      "Integrasi dengan Google Sheets & database",
    ],
    benefits: "Respon pelanggan lebih cepat, proses penjualan lebih efisien, biaya operasional lebih rendah",
    pricingLink: "/pricing/whatsapp",
  },
  {
    icon: Globe,
    title: "Digital Presence & Marketing",
    description:
      "Bangun kehadiran online yang kuat dengan solusi website lengkap, manajemen media sosial, dan kampanye iklan digital yang tepat sasaran.",
    features: [
      "Pembuatan website (company profile, e-commerce, landing page)",
      "Manajemen & optimasi media sosial",
      "Strategi peningkatan follower & engagement",
      "Iklan digital (Meta, Google, TikTok) & SEO",
    ],
    benefits: "Visibilitas online lebih luas, brand awareness meningkat, engagement pelanggan lebih baik",
    pricingLink: "/pricing/marketing",
  },
  {
    icon: BarChart3,
    title: "Data & Business Intelligence",
    description:
      "Ubah data bisnis menjadi insight yang mudah dipahami melalui dashboard interaktif, analisis menyeluruh, dan integrasi data otomatis.",
    features: [
      "Aplikasi & dashboard interaktif dengan Power BI",
      "Visualisasi data untuk sales/marketing/operasional",
      "Integrasi data (Excel, database, API)",
      "Solusi laporan custom",
    ],
    benefits: "Pengambilan keputusan lebih tepat, efisiensi bisnis meningkat, bisnis mudah untuk scale up",
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
            Solusi Digital Modern
            <span className="text-primary block">untuk Pertumbuhan Bisnis Anda</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Layanan lengkap untuk mengotomasi, mengoptimalkan, dan mengembangkan bisnis Anda di era digital
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