// src/app/(admin)/qris-static/page.tsx
"use client";

import { useState } from "react";

export default function QrisStaticPage() {
  const [loading, setLoading] = useState(false);
  const [loginUrl, setLoginUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateQris = async () => {
    setLoading(true);
    setError(null);
    setLoginUrl(null);

    try {
      const res = await fetch("/api/generate-qris-static", { method: "POST" });
      const data = await res.json();

      if (data.success) {
        setLoginUrl(data.loginUrl);
      } else {
        setError(data.error || "Gagal generate URL");
      }
    } catch (err) {
      setError("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            QRIS MPM Statis - SolidBrand
          </h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-blue-900 mb-2">Info Penting</h2>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• 1 QR untuk semua transaksi</li>
              <li>• Customer input nominal sendiri</li>
              <li>• Bisa dicetak atau dikirim via WA</li>
              <li>• Cocok untuk toko tas & luggage</li>
            </ul>
          </div>

          <button
            onClick={generateQris}
            disabled={loading}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Sedang Generate..." : "Generate QRIS Statis"}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium">Error: {error}</p>
            </div>
          )}

          {loginUrl && (
            <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3">URL Login BRI</h3>
              <p className="text-sm text-green-800 mb-4">
                Klik tombol di bawah untuk login ke BRI dan generate QR:
              </p>
              <a
                href={loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
              >
                Buka Portal BRI Generate QR
              </a>
              <p className="text-xs text-green-700 mt-3">
                Setelah login Download QR Simpan & Cetak!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}