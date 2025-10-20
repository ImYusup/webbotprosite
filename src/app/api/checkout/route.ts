// src/app/api/checkout/route.ts
// ✅ FINAL AUTO-SWITCH + FALLBACK XENDIT CHECKOUT API (TypeScript Safe)
import { NextResponse } from "next/server";
import { products } from "@/data/products";

interface CheckoutItem {
  productId: string;
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Deteksi environment
    const isProduction = process.env.NODE_ENV === "production";

    // ✅ Pilih key utama sesuai environment
    let secretKey = isProduction
      ? process.env.XENDIT_SECRET_KEY_LIVE
      : process.env.XENDIT_SECRET_KEY_SANDBOX;

    // ✅ Fallback otomatis ke sandbox jika key live belum valid
    if (
      isProduction &&
      (!secretKey || !secretKey.startsWith("xnd_production_"))
    ) {
      console.warn("⚠️ LIVE key belum valid, fallback ke SANDBOX mode");
      secretKey = process.env.XENDIT_SECRET_KEY_SANDBOX;
    }

    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing XENDIT_SECRET_KEY (sandbox/live)" },
        { status: 500 }
      );
    }

    console.log(
      `📦 Incoming checkout (${isProduction ? "LIVE" : "SANDBOX"} mode):`,
      body
    );

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

    // ✅ Endpoint API Xendit (sama untuk sandbox/live)
    const xenditEndpoint = "https://api.xendit.co/v2/invoices";

    // ✅ Kirim request ke Xendit
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
      mode: isProduction ? "LIVE" : "SANDBOX",
    });
  } catch (err: any) {
    console.error("❌ Checkout API error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
