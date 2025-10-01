"use client";
import React, { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="border-b py-4">
            <p>{item.title}</p>
            <p>
              {item.price} × {item.quantity}
            </p>
          </div>
        ))
      )}
      <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded">
        Checkout
      </button>
    </main>
  );
}
