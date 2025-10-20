// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

interface Props {
  params: Promise<{ slug: string }>; // ✅ ubah ke Promise
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params; // ✅ pakai await

  const product = products.find((p) => p.id === slug);
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
