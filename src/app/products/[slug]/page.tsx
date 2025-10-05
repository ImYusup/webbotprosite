// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  // ⬇️ ini fix-nya, harus await
  const { slug } = await params;

  const product = products.find((p) => p.id === slug);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
