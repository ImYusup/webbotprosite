// src/components/CartSidebar.ts
"use client";

import { useCart, CartItem } from "@/lib/cart-store";

export default function CartSidebar() {
  const { items, removeItem, clearCart, showCart, setShowCart } = useCart();

  if (!showCart) return null;

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const checkout = async () => {
    try {
      const payload = {
        amount: items.reduce((sum: number, i: CartItem) => sum + i.price * i.quantity, 0),
        name: "Guest", // bisa lu isi dari form user
        email: "guest@example.com",
        productName: items.map((i) => i.title).join(", "),
      };

      console.log("🛒 Checkout payload:", payload);

      const res = await fetch("/api/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("❌ Server error:", res.status, res.statusText);
        return;
      }

      const data = await res.json();
      console.log("✅ Midtrans response:", data);

      if (!data?.token) {
        console.error("❌ Missing transaction token:", data);
        return;
      }

      // 🔑 load snap.js
      if (typeof window !== "undefined") {
        // pastikan pakai clientKey sandbox/production sesuai env
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!);
        document.body.appendChild(script);

        script.onload = () => {
          // @ts-ignore
          window.snap.pay(data.token, {
            onSuccess: (result: any) => {
              console.log("✅ Success:", result);
              clearCart();
            },
            onPending: (result: any) => {
              console.log("⏳ Pending:", result);
            },
            onError: (err: any) => {
              console.error("❌ Error:", err);
            },
            onClose: () => {
              console.warn("❌ User closed the popup without finishing payment");
            },
          });
        };
      }
    } catch (err) {
      console.error("❌ Checkout failed:", err);
    }
  };

  const total = items.reduce((sum: number, i: CartItem) => sum + i.price * i.quantity, 0);

  return (
    <aside className="fixed right-0 top-0 w-[320px] h-full bg-white shadow-lg p-4 z-50">
      <button
        onClick={() => setShowCart(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        aria-label="Close cart"
      >
        ×
      </button>
      <h2 className="text-lg font-bold mb-4">Keranjang Belanja</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Keranjang masih kosong</p>
      ) : (
        <>
          <ul className="space-y-3">
            {items.map((item: CartItem) => (
              <li key={item.variantId} className="flex gap-3 items-center">
                {item.image && (
                  <img src={item.image} className="w-12 h-12 object-cover rounded" />
                )}
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} × {formatRupiah(item.price)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.variantId)}
                  className="text-red-500 text-sm"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4">
            <p className="font-bold">Total: {formatRupiah(total)}</p>
            <button
              onClick={checkout}
              className="mt-2 w-full bg-black text-white py-2 rounded hover:opacity-90"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="mt-2 w-full text-sm text-gray-500 hover:underline"
            >
              Kosongkan Keranjang
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
