// src/app/about-us/page.tsx
"use client"

import { Bot } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-white">
      <section className="py-20 container mx-auto px-4 flex-1">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-4 animate-pulse">
            Tentang WebBotPro
          </h1>
          <p className="text-lg text-muted-foreground font-serif italic">
            Solusi Otomasi Digital dari Jantung Kota Bandung
          </p>
        </div>

        {/* Card Section */}
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Siapa Kami ?</h2>
              <p className="text-foreground font-serif mb-4 leading-relaxed">
                <strong>WebBotPro</strong> adalah platform penyedia solusi otomatisasi digital dan bisnis berbasis teknologi.
                Kami membantu pelaku usaha mengelola pelanggan, penjualan, dan data dengan sistem yang terintegrasi —
                langsung dari WhatsApp hingga website Anda.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-2">Lokasi Kami</h3>
              <p className="text-foreground font-serif mb-4">
                Berlokasi di <strong>Cibangkong, Bandung – Jawa Barat, Indonesia</strong>.  
                Kami bangga menjadi bagian dari ekosistem digital kreatif Bandung yang terus berkembang.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Layanan Utama Kami</h3>
            <ul className="list-disc list-inside text-foreground font-serif space-y-2 mb-6">
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Otomatisasi WhatsApp Bisnis:</span> Balasan otomatis,
                katalog produk, sistem pemesanan, hingga integrasi dengan Google Sheets & database.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Website & Digital Marketing:</span> Pembuatan website
                (profil, e-commerce, landing page), manajemen media sosial, iklan digital (Meta, Google, TikTok), serta SEO.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Data & Business Intelligence:</span> Dashboard interaktif dengan Power BI,
                visualisasi data, serta integrasi data dari Excel hingga API.
              </li>
            </ul>

            {/* USP */}
            <h3 className="text-xl font-semibold text-primary mb-4">Mengapa Memilih Kami</h3>
            <ul className="list-disc list-inside text-foreground font-serif space-y-2 mb-6">
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Solusi Terpadu:</span> Dari otomatisasi WhatsApp hingga analisis data — semua dalam satu ekosistem.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Harga Kompetitif:</span> Paket fleksibel dan bisa disesuaikan untuk berbagai skala bisnis.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Berbasis Lokal:</span> Dikelola langsung dari Bandung untuk dukungan dan koordinasi yang cepat.
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="font-medium">Dapat Diskalakan:</span> Cocok untuk UMKM, startup, hingga perusahaan besar.
              </li>
            </ul>

            {/* Contact Info */}
            <h3 className="text-xl font-semibold text-primary mb-4">Hubungi Kami</h3>
            <ul className="text-foreground font-serif space-y-3">
              <li>
                📞 <span className="font-medium">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/6281289066999?text=Halo%20WebBotPro%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20solusi%20platform%20digital%20untuk%20usaha%20kami.%20Bisa%20dibantu%3F"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-8906-6999
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Klik untuk langsung terhubung melalui WhatsApp.
                </p>
              </li>

              <li>
                📧 <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:webbotproo@gmail.com?subject=Application%20Request%20WhatsApp%20Commerce%20Automation%20%7C%20Digital%20Presence%20%26%20Marketing%20%7C%20Data%20%26%20Business%20Intelligence"
                  className="text-primary hover:underline"
                >
                  webbotproo@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Kirimkan pertanyaan atau kerja sama melalui email resmi kami.
                </p>
              </li>

              <li>
                📍 <span className="font-medium">Alamat:</span>{" "}
                Cibangkong, Bandung – Jawa Barat, Indonesia
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
