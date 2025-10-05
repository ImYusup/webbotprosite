// src/data/products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  currency: string;
  description: string;
  features?: string[];
  benefits?: string[];
  targetUsers?: string[];
  notes?: string;
  images?: string[];
  videoUrl?: string;
};

export const products: Product[] = [
  {
    id: "cashflow-bot",
    name: "WhatsApp Bot Cashflow Automation",
    price: 150000,
    discountPrice: 100000,
    currency: "IDR",
    description:
      "Kontrol arus kas bisnis kamu dengan ringkasan real-time yang dikirim langsung ke WhatsApp setiap hari.",
    features: [
      "Ringkasan harian, mingguan, dan bulanan otomatis",
      "Notifikasi arus kas real-time: suIDRlus atau defisit",
      "Mudah digunakan, cukup kirim pesan ke WhatsApp Bot",
    ],
    benefits: [
      "Menghemat waktu dengan laporan keuangan otomatis",
      "Langsung tahu kebocoran keuangan",
      "Bikin keputusan bisnis lebih cepat dan berbasis data",
    ],
    targetUsers: [
      "UMKM yang butuh kontrol arus kas lebih baik",
      "Pemilik bisnis yang ingin laporan instan di WhatsApp",
      "Pengusaha yang lagi scale-up dan butuh monitoring keuangan cerdas",
    ],
    notes:
      "Setelah pesanan selesai, masukkan nomor WhatsApp kamu di catatan order supaya akun bisa langsung diaktifkan.",
    images: [
      "/images/whatsapp/cashflow-jualan1.jpeg",
      "/images/whatsapp/cashflow-jualan2.jpeg",
      "/images/whatsapp/cashflow-jualan3.jpeg",
      "/images/whatsapp/cashflow-jualan4.jpeg",
      "/images/whatsapp/cashflow-jualan5.jpeg",
    ],
    videoUrl: "https://drive.google.com/file/d/1VVdGTkRf_YgwpnPCTG5eAlvKJz8aP8V9/preview",
  },
  {
    id: "sales-bot",
    name: "WhatsApp Bot Sales Automation",
    price: 450000,
    discountPrice: 300000, // opsional kalau mau kasih diskon
    currency: "IDR",
    description:
      "Bot WhatsApp untuk otomasi penjualan, katalog, dan notifikasi order. Bikin jualan makin gampang dan cepat.",
    features: [
      "Katalog produk otomatis via WhatsApp",
      "Notifikasi order langsung ke admin",
      "Auto-reply untuk pertanyaan produk",
      "Integrasi dengan sistem pembayaran sendiri",
    ],
    benefits: [
      "Menghemat waktu untuk balas chat pelanggan",
      "Meningkatkan konversi penjualan",
      "Bikin pelanggan lebih nyaman dengan respon instan",
      "Mudah dipakai tanpa perlu teknis ribet",
    ],
    targetUsers: [
      "Online shop yang ingin respon cepat ke pelanggan",
      "UMKM yang jualan via WhatsApp",
      "Bisnis yang butuh sistem order otomatis",
      "Dropshipper dan reseller yang butuh efisiensi",
    ],
    notes:
      "Setelah pesanan selesai, masukkan nomor WhatsApp kamu di catatan order supaya bot bisa langsung diaktifkan.",
    images: [
      "/images/whatsapp/wa-jualan1.jpeg",
      "/images/whatsapp/wa-jualan2.jpeg",
      "/images/whatsapp/wa-jualan3.jpeg",
      "/images/whatsapp/wa-jualan4.jpeg",
    ],
    videoUrl: "https://drive.google.com/file/d/1Qf2VzUr_BUsGWgLlu5f3F3wscX0ZoaSC/preview",
  },
  {
    id: "company-profile-website",
    name: "Company Profile Website",
    price: 1000000,
    discountPrice: 700000,
    currency: "IDR",
    description:
      "Website profesional sederhana untuk UMKM & company profile bisnis.",
    features: [
      "Desain modern & responsif",
      "Mudah dikelola tanpa perlu coding",
      "SEO basic untuk tampil di Google",
      "Halaman About, Layanan, Kontak, dan lainnya",
    ],
    benefits: [
      "Meningkatkan kredibilitas bisnis",
      "Tampil profesional di mata pelanggan",
      "Bisa diakses 24/7 dari mana saja",
      "Cocok untuk UMKM yang ingin go digital",
    ],
    targetUsers: [
      "UMKM yang butuh website company profile cepat",
      "Startup yang ingin punya landing page profesional",
      "Bisnis lokal yang ingin tampil di internet",
    ],
    notes:
      "Setelah pesanan selesai, tim kami akan menghubungi kamu untuk mengumpulkan konten (logo, foto, teks) sebelum website di-deploy.",
    images: [
      "/images/website/wb-webbotpro1.jpg",
      "/images/website/wb-webbotpro2.jpg",
      "/images/website/wb-webbotpro3.jpg",
      "/images/website/wb-webbotpro4.jpg",
    ],
    videoUrl: "https://drive.google.com/file/d/10qTOrzS0lAFNmHcc85bGcsSXGMqptIii/preview",
  },
  {
    id: "ecommerce-website",
    name: "E-Commerce Website",
    price: 7500000,
    discountPrice: 5000000,
    currency: "IDR",
    description:
      "Website toko online lengkap dengan payment gateway & integrasi Instagram Shop. Cocok buat UMKM dan bisnis yang serius jualan online.",
    features: [
      "Desain modern & mobile friendly",
      "Integrasi payment gateway (Midtrans, dll)",
      "Manajemen produk & stok",
      "Integrasi Instagram Shop",
      "Fitur diskon & voucher",
      "Laporan penjualan otomatis",
    ],
    benefits: [
      "Mempermudah pelanggan belanja 24/7",
      "Meningkatkan kepercayaan dan profesionalitas toko online",
      "Otomatisasi penjualan & pembayaran",
      "Mudah kelola produk tanpa coding",
    ],
    targetUsers: [
      "UMKM yang ingin punya toko online sendiri",
      "Pebisnis yang jualan di Instagram/TikTok tapi mau punya website resmi",
      "Startup dan brand lokal yang butuh sistem e-commerce terintegrasi",
    ],
    notes:
      "Setelah pesanan selesai, tim kami akan menghubungi kamu untuk mengumpulkan data produk, logo, dan kebutuhan integrasi sebelum website di-deploy.",
    images: [
      "/images/website/bg-webbotpro1.jpg",
      "/images/website/bg-webbotpro2.jpg",
      "/images/website/bg-webbotpro3.jpg",
      "/images/website/bg-webbotpro4.jpg",
      "/images/website/bg-webbotpro5.jpg",
    ],
    videoUrl: "https://drive.google.com/file/d/1rThsHOEJlCe4SAQbW2U242Urq8lT9pSA/preview",
  },
  {
    id: "powerbi-dashboard",
    name: "Power BI Dashboard & BI Solutions",
    price: 1500000,
    discountPrice: 1000000,
    currency: "IDR",
    description:
      "Dashboard interaktif untuk analisis data, laporan bisnis, dan decision support. Bikin keputusan bisnis lebih cepat dengan visualisasi data yang powerful.",
    features: [
      "Dashboard interaktif dengan filter & drill-down",
      "Integrasi ke Google Sheets, Excel, atau database",
      "Laporan otomatis real-time",
      "Visualisasi data yang mudah dipahami",
      "Bisa diakses via web & mobile",
    ],
    benefits: [
      "Meningkatkan kecepatan pengambilan keputusan",
      "Mempermudah monitoring KPI bisnis",
      "Mengurangi human error dalam laporan manual",
      "Bikin data lebih transparan & terstruktur",
    ],
    targetUsers: [
      "Pemilik bisnis yang butuh laporan interaktif",
      "Tim manajemen yang ingin KPI selalu up-to-date",
      "Perusahaan yang pakai Google Sheets/Excel tapi ingin data lebih rapi",
      "Startup yang mulai data-driven decision making",
    ],
    notes:
      "Setelah pesanan selesai, kamu bisa share file/data ke tim kami untuk setup dashboard sesuai kebutuhan bisnis.",
    images: [
      "/images/powerbi/powerbi1.png",
      "/images/powerbi/powerbi2.png",
      "/images/powerbi/powerbi3.png",
    ],
    videoUrl: "https://drive.google.com/file/d/1Jrsprlu-2eFY-4o0x57vqdK_QplVbioU/preview",
  }

];
