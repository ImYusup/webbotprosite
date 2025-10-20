// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

type Props = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const product = products.find((p) => p.id === slug);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
