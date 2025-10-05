"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";

type Props = {
  params: Promise<{ category: string }>;
};

const pricingData: Record<
  string,
  {
    title: string;
    plans?: {
      name: string;
      price?: string;
      description: string;
      features?: string[];
      note?: string;
    }[];
    content?: string;
    contact?: string;
  }
> = {
  whatsapp: {
    title: "📱 Automasi WhatsApp Commerce – Pricing Plan",
    plans: [
      {
        name: "🌱 Starter",
        price: "Rp500K - Rp1Jt",
        description: "Untuk UMKM pemula yang mau mulai jualan via WhatsApp.",
        features: [
          "Auto-Reply & Greeting Otomatis",
          "Katalog Produk Praktis (Google Sheet)",
          "Paket Harga Fleksibel",
          "Pencatatan Pelanggan & Riwayat Chat",
          "Workflow Order Dasar",
        ],
        note: "Cocok untuk: warung grosir, toko online rumahan, reseller kecil",
      },
      {
        name: "💼 Business",
        price: "Rp1.5Jt - Rp2.5Jt",
        description: "Untuk UMKM berkembang dan bisnis menengah yang butuh sistem efisien.",
        features: [
          "Semua Fitur Paket Starter",
          "Konfirmasi Pembayaran Otomatis",
          "Integrasi Google Sheets",
          "Tracking Pengiriman Real-Time",
          "Multi-Produk Checkout via WhatsApp",
        ],
        note: "Cocok untuk: grosir, distribusi kecil, online shop >50 order/hari",
      },
      {
        name: "🏢 Premium",
        price: "Rp3Jt - Rp5Jt",
        description: "Untuk corporate & bisnis besar dengan skalabilitas tinggi.",
        features: [
          "Semua Fitur Paket Business",
          "VPS Dedicated (High Performance)",
          "AI Assistant Produk",
          "Multi-User Support",
          "Laporan Transaksi Otomatis",
        ],
        note: "Cocok untuk: perusahaan distribusi, corporate retail, e-commerce",
      },
    ],
    contact: "WhatsApp Us",
  },
  marketing: {
    title: "🎯 Digital Presence & Marketing – Pricing Plan",
    plans: [
      {
        name: "🌱 Starter",
        price: "Rp5Jt",
        description: "Untuk UMKM pemula yang mau punya identitas digital.",
        features: [
          "Website Company Profile / Landing Page (1–3 halaman)",
          "Domain + Hosting 1 tahun",
          "Basic Social Media Setup (1 akun, 12 posting template)",
        ],
        note: "Cocok untuk: klinik, kursus, jasa lokal",
      },
      {
        name: "💼 Business",
        price: "Rp8Jt",
        description: "Untuk bisnis menengah yang butuh audience lebih besar.",
        features: [
          "Semua Fitur Paket Starter",
          "Website E-Commerce / Company Profile Lengkap",
          "Social Media Management (1 akun, 20 posting template)",
          "Follower IG/FB 10K",
          "1 Konten IG/FB dengan 700K views & 50K likes",
          "SEO Nasional",
        ],
        note: "Cocok untuk: resto & café, toko online mid",
      },
      {
        name: "🏢 Premium",
        price: "Rp10Jt",
        description: "Untuk corporate/brand besar yang mau all-in digital presence.",
        features: [
          "Semua Fitur Paket Business",
          "Website Custom (Landing Page + Toko Online)",
          "Premium Social Media Management (1 akun, 30 posting template)",
          "Follower IG/FB 30K",
          "1 Konten IG/FB dengan 1M views & 150K likes",
          "Advanced SEO",
          "Free 1 bulan trial Ads",
        ],
        note: "Cocok untuk: franchise, corporate brand, e-commerce",
      },
    ],
    contact: "WhatsApp Us",
  },
  data: {
    title: "📊 Data & Business Intelligence – Pricing Plan",
    plans: [
      {
        name: "🌱 Starter",
        price: "Rp1Jt",
        description: "Untuk bisnis kecil/menengah yang mau rapihin data & monitoring.",
        features: [
          "Data Visualization + Basic Dashboard",
          "3x revisi",
          "7 Chart/Graph",
          "Konektivitas data source dasar (Excel, CSV)",
          "Basic Data Cleansing",
        ],
        note: "Cocok untuk: UMKM, toko retail, usaha lokal, kantor cabang",
      },
      {
        name: "💼 Business",
        price: "Rp2Jt",
        description: "Untuk bisnis menengah & corporate yang butuh analisis mendalam.",
        features: [
          "Semua fitur Paket Starter",
          "Advanced Report & Interactive Visuals",
          "7x revisi",
          "15 Chart/Graph",
          "Interactive/Animated Visuals",
          "Advanced Data Cleansing + Multi Source",
          "Konektivitas data source (Excel, Database, API)",
        ],
        note: "Cocok untuk: perusahaan distribusi, restoran chain, startup growing",
      },
    ],
    contact: "Contact Us",
  },
  "about-us": {
    title: "Tentang WebBotPro",
    content: `
WebBotPro — Empowering Digital Automation from Bandung

Lokasi: Bandung, Jawa Barat, pusat kreativitas dan inovasi digital 🌆

**Layanan Utama:**
- WhatsApp Commerce Automation: balasan & sapaan otomatis, katalog otomatis, workflow order & invoice, integrasi Google Sheets dan database
- Digital Presence & Marketing: pembuatan website (company profile / e-commerce / landing page), manajemen & optimasi media sosial, pertumbuhan followers & engagement, iklan digital (Meta, Google, TikTok Ads), SEO
- Data & Business Intelligence: dashboard interaktif dengan Power BI, visualisasi data penjualan/marketing/operasional, integrasi data dari Excel, database, API

**Apa yang Membedakan WebBotPro?**
- Solusi Holistik: Dari automatisasi WhatsApp sales, digital marketing, hingga analisis data — semua on one stop solution.
- Harga Kompetitif, Value Maksimal: Paket dirancang untuk pemula sampai enterprise, dengan pendekatan trial dan add-on terbuka.
- Berbasis di Bandung, Dekat dengan Klien Lokal: Memudahkan koordinasi, pertemuan tatap muka, serta adaptasi cepat terhadap kebutuhan pasar lokal.
- Skalabilitas dan Kustomisasi: Cocok untuk UMKM hingga perusahaan besar.
    `,
  },
  "custom-testimonials": {
    title: "Custom Solutions",
    content: `
Silakan isi form di bawah ini untuk mengajukan permintaan aplikasi kustom:

- **Nama**: Masukkan nama lengkap Anda.
- **Nomor HP**: Masukkan nomor telepon yang bisa dihubungi.
- **Email**: Masukkan alamat email Anda.
- **Permintaan Aplikasi**: Jelaskan detail kebutuhan aplikasi Anda.
    `,
  },
};

export default function PricingCategoryPage({ params }: Props) {
  const categoryParams = use(params);
  const { category } = categoryParams;
  console.log("Client: Category received:", category);

  const data = pricingData[category.toLowerCase()];

  if (!data) {
    console.log("Client: Data not found for category:", category);
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-20 container mx-auto px-4 flex-1">
        <h1 className="text-4xl font-bold mb-10 text-center text-foreground">{data.title}</h1>
        {data.plans ? (
          <>
            <div className="grid md:grid-cols-3 gap-6">
              {data.plans.map((plan, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-xl shadow-lg bg-card hover:shadow-xl transition-all text-center flex flex-col h-full"
                >
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">{plan.name}</h2>
                    {plan.price && (
                      <p className="text-4xl font-extrabold text-primary mb-6">{plan.price}</p>
                    )}
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="text-sm space-y-2 mb-6 max-w-xs mx-auto">
                      {plan.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✔</span>
                          <span className="break-words text-left text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground">{plan.note}</p>
                  </div>
                  <div className="mt-auto pt-4">
                    <p className="text-sm text-muted-foreground mb-2">*Harga dapat bervariasi berdasarkan kebutuhan spesifik.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="https://wa.me/6281289066999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {data.contact}
              </Link>
            </div>
          </>
        ) : data.content ? (
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <div
              className="text-foreground font-serif"
              dangerouslySetInnerHTML={{ __html: data.content.replace(/\n/g, "<br>") }}
            />
            {category.toLowerCase() === "custom-testimonials" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form submitted:", {
                    name: (e.target as any).name.value,
                    phone: (e.target as any).phone.value,
                    email: (e.target as any).email.value,
                    requestApps: (e.target as any).requestApps.value,
                  });
                  alert("Terima kasih! Permintaan Anda telah dikirim. Kami akan segera menghubungi Anda.");
                  (e.target as any).reset();
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">Nama</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-border p-2"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">Nomor HP</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-md border border-border p-2"
                    placeholder="Masukkan nomor HP"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-border p-2"
                    placeholder="Masukkan email Anda"
                  />
                </div>
                <div>
                  <label htmlFor="requestApps" className="block text-sm font-medium text-foreground">Permintaan Aplikasi</label>
                  <textarea
                    id="requestApps"
                    name="requestApps"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-border p-2"
                    placeholder="Jelaskan permintaan aplikasi Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Kirim Permintaan
                </button>
              </form>
            )}
          </div>
        ) : null}
      </section>
    </div>
  );
}