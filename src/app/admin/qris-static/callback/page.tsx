// src/app/(admin)/qris-static/callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QrisCallback() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/qris-static");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-12 rounded-lg shadow-lg text-center">
        <div className="animate-spin w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          QRIS Sedang Digenerate...
        </h2>
        <p className="text-gray-600">
          Tunggu sebentar, Anda akan diarahkan kembali.
        </p>
      </div>
    </div>
  );
}