// src/app/products/page.tsx
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Semua Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: product.currency,
              })}
            </p>
            <Link href={`/products/${product.id}`} className="text-blue-600">
              Lihat Detail →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

