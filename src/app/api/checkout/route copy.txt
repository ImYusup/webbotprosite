// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { products } from "@/data/products"; // ✅ ambil harga resmi dari backend

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    if (!serverKey) {
      return NextResponse.json(
        { error: "Missing MIDTRANS_SERVER_KEY" },
        { status: 500 }
      );
    }

    // ✅ Validasi & ambil harga dari backend
    const validItems = body.items.map((i: any) => {
      const product = products.find((p) => p.id === i.productId);
      if (!product) throw new Error(`Product not found: ${i.productId}`);

      const realPrice = product.discountPrice ?? product.price;
      return {
        id: i.productId,
        price: realPrice,
        quantity: i.quantity,
        name: product.name,
      };
    });

    // ✅ Hitung total harga dengan tipe number
    const grossAmount: number = validItems.reduce(
      (sum: number, i: { price: number; quantity: number; }) => sum + i.price * i.quantity,
      0
    );

    const baseUrl = "https://app.midtrans.com/snap/v1/transactions";

    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(serverKey + ":").toString("base64"),
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: "ORDER-" + Date.now(),
          gross_amount: grossAmount,
        },
        item_details: validItems,
        customer_details: {
          first_name: body.customer?.name || "Guest",
          email: body.customer?.email || "guest@example.com",
        },
        callbacks: {
          finish: "https://webbotpro.com/payment/finish",
        },
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("❌ Checkout API error:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
