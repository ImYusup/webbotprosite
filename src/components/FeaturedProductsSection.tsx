// src/components/FeaturedProductsSection.tsx
"use client";

import Link from "next/link";

const products = [
  {
    id: "cashflow-bot",
    name: "WhatsApp Bot Cashflow Automation",
    price: 100000,
    currency: "IDR",
    description: "Otomasi laporan cashflow harian via WhatsApp secara otomatis.",
  },
  {
    id: "sales-bot",
    name: "WhatsApp Bot Sales Automation",
    price: 300000,
    currency: "IDR",
    description: "Bot WhatsApp untuk otomasi penjualan, katalog, dan notifikasi order.",
  },
  {
    id: "company-profile-website",
    name: "Company Profile Website",
    price: 700000,
    currency: "IDR",
    description: "Website profesional sederhana untuk UMKM & company profile bisnis.",
  },
  {
    id: "business-website",
    name: "Business Website (SMB)",
    price: 2500000,
    currency: "IDR",
    description: "Website bisnis modern dengan fitur pembayaran online.",
  },
  {
    id: "ecommerce-website",
    name: "E-Commerce Website",
    price: 5000000,
    currency: "IDR",
    description: "Website toko online lengkap dengan payment gateway & integrasi Instagram Shop.",
  },
  {
    id: "powerbi-dashboard",
    name: "Power BI Dashboard & BI Solutions",
    price: 1000000,
    currency: "IDR",
    description: "Dashboard interaktif untuk analisis data, laporan bisnis, dan decision support.",
  },
];

// ✅ Helper function untuk format ke Rupiah
function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function FeaturedProductsSection() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl shadow hover:shadow-lg transition bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <p className="text-green-600 font-bold text-lg">
                  {formatRupiah(product.price)}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href={`/products/${product.id}`}
                  className="text-primary font-semibold hover:underline"
                >
                  View Product →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
