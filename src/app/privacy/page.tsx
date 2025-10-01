"use client"

import { Bot } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-white">
      <section className="py-20 container mx-auto px-4 flex-1">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-4 animate-pulse">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground font-serif italic">
            Protecting your privacy is our priority at WebBotPro
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

            {/* Privacy Content */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
              <p className="text-foreground font-serif mb-4 leading-relaxed">
                At <strong>WebBotPro</strong>, we respect and protect your privacy. This Privacy
                Policy explains how we collect, use, and safeguard your data when using our
                automation and financial services.
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="mt-8 space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-primary mb-2">Information We Collect</h3>
              <ul className="list-disc list-inside text-foreground font-serif space-y-2">
                <li>WhatsApp phone number and messages sent to our service.</li>
                <li>Basic contact details you provide when using our platform.</li>
                <li>Usage data such as logs and interactions for analytics and improvements.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-2">How We Use Data</h3>
              <ul className="list-disc list-inside text-foreground font-serif space-y-2">
                <li>To deliver and improve our automation and reporting features.</li>
                <li>To send updates and notifications related to your account.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-2">Data Protection</h3>
              <p className="text-foreground font-serif leading-relaxed">
                We apply industry-standard security measures to safeguard your data from
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-2">Third-Party Services</h3>
              <p className="text-foreground font-serif leading-relaxed">
                We may work with trusted third parties (like Meta Platforms for WhatsApp Cloud API)
                to process data on our behalf.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-2">Contact Us</h3>
              <p className="text-foreground font-serif leading-relaxed">
                If you have any questions about this Privacy Policy, please reach out at:
                <br />
                📧{" "}
                <a
                  href="mailto:webbotproo@gmail.com?subject=Privacy%20Policy%20Inquiry%20%7C%20WebBotPro"
                  className="text-primary font-bold hover:underline"
                >
                  webbotproo@gmail.com
                </a>
              </p>
            </section>

            <p className="text-sm text-muted-foreground italic">
              Effective Date: September 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
