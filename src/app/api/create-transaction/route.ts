// src/app/api/create-transaction/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const secretKey = process.env.XENDIT_SECRET_KEY_LIVE;
    if (!secretKey) {
      return NextResponse.json({ error: "Missing Xendit Secret Key" }, { status: 500 });
    }

    const res = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(secretKey + ":").toString("base64"),
      },
      body: JSON.stringify({
        external_id: "ORDER-" + Date.now(),
        amount: body.amount,
        payer_email: body.email || "guest@example.com",
        description: body.productName || "Produk WebBotPro",
        success_redirect_url: "https://webbotpro.site/payment/success",
        failure_redirect_url: "https://webbotpro.site/payment/failed",
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Xendit API Error:", errorText);
      return NextResponse.json({ error: errorText }, { status: 400 });
    }

    const data = await res.json();
    console.log("✅ Xendit Invoice Created:", data);

    return NextResponse.json({ success: true, invoice_url: data.invoice_url });
  } catch (err: any) {
    console.error("❌ Error creating invoice:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
