// src/components/about-contact-section.tsx
"use client"

export function AboutContactSection() {
  return (
    <section id="about-contact" className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          Tentang <span className="text-foreground">WebBotPro</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif leading-relaxed mb-10">
          <strong>WebBotPro</strong> adalah penyedia solusi <em>otomasi digital</em> dan pengembangan bisnis
          berbasis teknologi yang berlokasi di <strong>Cibangkong, Bandung – Jawa Barat, Indonesia</strong>.
          Kami membantu pelaku usaha mengelola pelanggan, penjualan, dan data melalui sistem terintegrasi —
          mulai dari <em>WhatsApp automation</em>, pembuatan website profesional, hingga
          <em> business intelligence dashboard</em>.
        </p>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-semibold text-primary mb-6">Hubungi Kami</h3>

          <div className="space-y-4 text-lg font-serif text-foreground">
            <p>
              📞 <span className="font-medium">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/6281289066999?text=Halo%20WebBotPro%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20solusi%20otomatisasi%20digital."
                className="text-primary hover:underline"
                target="_blank"
              >
                0812-8906-6999
              </a>
            </p>
            <p>
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:webbotproo@gmail.com?subject=Permintaan%20Informasi%20Layanan%20WebBotPro"
                className="text-primary hover:underline"
              >
                webbotproo@gmail.com
              </a>
            </p>
            <p>
              📍 <span className="font-medium">Alamat:</span>{" "}
              Cibangkong, Bandung – Jawa Barat, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
