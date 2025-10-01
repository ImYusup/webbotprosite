"use client"

import { Bot } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-white">
      <section className="py-20 container mx-auto px-4 flex-1">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-4 animate-pulse">
            About WebBotPro
          </h1>
          <p className="text-lg text-muted-foreground font-serif italic">
            Empowering Your Digital Future from the Heart of Bandung
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Icon Section */}
            <div className="md:w-1/3">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-12 w-12 text-primary" />
              </div>
            </div>

            {/* About Content */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-foreground font-serif mb-4 leading-relaxed">
                WebBotPro is your gateway to cutting-edge digital automation, proudly based in
                Bandung, Jawa Barat—the vibrant hub of creativity and innovation.
              </p>
              <h3 className="text-xl font-semibold text-primary mb-2">Our Location</h3>
              <p className="text-foreground font-serif mb-4">
                Nestled in Bandung, Indonesia, we bring local expertise and a global vision to
                every project.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Our Core Services</h3>
            <ul className="list-disc list-inside text-foreground font-serif space-y-2 mb-6">
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">WhatsApp Commerce Automation:</span> Auto-replies,
                product catalogs, order workflows, and integrations with Google Sheets & databases.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Digital Presence & Marketing:</span> Websites
                (profiles, e-commerce, landing pages), social media management, ads (Meta, Google,
                TikTok), and SEO.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Data & Business Intelligence:</span> Interactive
                dashboards with Power BI, data visualization, and integrations from Excel to APIs.
              </li>
            </ul>

            {/* USP */}
            <h3 className="text-xl font-semibold text-primary mb-4">What Sets Us Apart</h3>
            <ul className="list-disc list-inside text-foreground font-serif space-y-2">
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Holistic Solutions:</span> From WhatsApp automation
                to data analytics—all in one place.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Competitive Pricing:</span> Tailored packages with
                trials and flexible add-ons for all scales.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Local Edge:</span> Bandung-based for seamless
                coordination and market adaptability.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Scalability:</span> Perfect for startups to
                enterprises.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
