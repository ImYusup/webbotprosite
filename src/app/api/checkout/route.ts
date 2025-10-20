// src/app/api/checkout/route.ts
// ✅ FINAL AUTO-SWITCH XENDIT CHECKOUT API (TypeScript Safe)
import { NextResponse } from "next/server";
import { products } from "@/data/products";

// Tipe untuk item checkout
interface CheckoutItem {
  productId: string;
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Pilih key otomatis (sandbox di dev, live di production)
    const secretKey =
      process.env.NODE_ENV === "production"
        ? process.env.XENDIT_SECRET_KEY_LIVE
        : process.env.XENDIT_SECRET_KEY_SANDBOX;

    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing XENDIT_SECRET_KEY (sandbox/live)" },
        { status: 500 }
      );
    }

    console.log("📦 Incoming checkout:", body);

    // ✅ Validasi & mapping produk
    const validItems =
      (body.items as CheckoutItem[])?.map((i: CheckoutItem) => {
        const product = products.find((p) => p.id === i.productId);
        if (!product) throw new Error(`Product not found: ${i.productId}`);
        const realPrice = product.discountPrice ?? product.price;
        return {
          id: product.id,
          name: product.name,
          price: realPrice,
          quantity: i.quantity,
        };
      }) || [];

    // ✅ Hitung total harga
    const grossAmount = validItems.reduce(
      (sum: number, item) => sum + item.price * item.quantity,
      0
    );

    // ✅ Tentukan endpoint Xendit (sandbox/live)
    const xenditEndpoint =
      process.env.NODE_ENV === "production"
        ? "https://api.xendit.co/v2/invoices"
        : "https://api.xendit.co/v2/invoices";

    // ✅ Request ke Xendit API
    const res = await fetch(xenditEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(secretKey + ":").toString("base64"),
      },
      body: JSON.stringify({
        external_id: "ORDER-" + Date.now(),
        amount: grossAmount,
        payer_email: body.customer?.email || "guest@example.com",
        description:
          "Pembelian produk WebBotPro (" +
          validItems.map((i) => i.name).join(", ") +
          ")",
        success_redirect_url: "https://webbotpro.com/payment/success",
        failure_redirect_url: "https://webbotpro.com/payment/failed",
        items: validItems.map((i) => ({
          name: i.name,
          quantity: i.quantity,
          price: i.price,
          category: "Digital Product",
        })),
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Xendit API error:", errorText);
      return NextResponse.json(
        { error: "Xendit API Error", detail: errorText },
        { status: 400 }
      );
    }

    const data = await res.json();
    console.log("✅ Xendit invoice created:", data);

    return NextResponse.json({
      success: true,
      invoice_url: data.invoice_url,
    });
  } catch (err: any) {
    console.error("❌ Checkout API error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
