// src/components/hero-section.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  "/assets/webbotpro.com-1.png",
  "/assets/webbotpro.com-2.png",
  "/assets/webbotpro.com-3.png",
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  // Auto slide setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-12 bg-teal-600 text-white">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Automasi & Solusi Digital untuk Bisnis Modern 🚀
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            WebBotPro membantu UMKM & perusahaan scale-up dengan <strong>otomatisasi cerdas</strong>,{" "}
            <strong>digital marketing</strong>, <strong>business intelligence</strong>. Semua dalam satu platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://wa.me/6281289066999?text=Halo%20WebBotPro%2C%20saya%20tertarik%20untuk%20mencoba%20demo%20solusi%20otomatisasi%20dan%20payment%20gateway%20Anda.%20Bisa%20dibantu%20jadwalkan%20demo%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-green-500 hover:bg-green-600 text-white">
                Coba Demo Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/6281289066999?text=Halo%20WebBotPro%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20solusi%20digital%20dan%20integrasi%20payment%20gateway.%20Bisa%20dibantu%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
              >
                Chat via WhatsApp
              </Button>
            </a>
          </div>
         
          {/* Slideshow */}
          <div className="relative max-w-6xl mx-auto">
            <div className="w-full rounded-xl border bg-muted/50 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full flex justify-center items-center"
                >
                  <Image
                    src={images[current]}
                    alt="WebBotPro Digital Solutions Dashboard"
                    className="rounded-xl shadow-2xl object-contain"
                    width={1600}
                    height={900}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === current ? "bg-white" : "bg-gray-400/40"
                  }`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
