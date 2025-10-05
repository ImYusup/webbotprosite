// src/app/api/create-transaction/route.js
import { Snap } from "midtrans-client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const snap = new Snap({
      isProduction: true, // 🚀 selalu true (production)
      serverKey: process.env.MIDTRANS_SERVER_KEY!,
      clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!,
    });

    const parameter: any = {
      transaction_details: {
        order_id: "ORDER-" + Date.now(),
        gross_amount: body.amount,
      },
      customer_details: {
        first_name: body.name || "Guest",
        email: body.email || "guest@example.com",
      },
      item_details: [
        {
          id: "SKU-1",
          price: body.amount,
          quantity: 1,
          name: body.productName || "Sample Product",
        },
      ],
      callbacks: {
        finish: "https://webbotpro.site/payment/finish",
      },
    };

    const transaction = await snap.createTransaction(parameter);

    return new Response(JSON.stringify({ token: transaction.token }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("❌ Midtrans error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Something went wrong" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
