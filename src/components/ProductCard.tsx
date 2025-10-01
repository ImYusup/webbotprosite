"use client";
import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={product.images?.edges[0]?.node?.src || "/placeholder.jpg"}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-bold mt-2">
        {product.priceRange?.minVariantPrice?.amount}{" "}
        {product.priceRange?.minVariantPrice?.currencyCode}
      </p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
