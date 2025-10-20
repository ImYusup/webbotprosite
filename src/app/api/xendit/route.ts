import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const XENDIT_API_KEY =
      process.env.XENDIT_SB_API ||
      "xnd_development_YourSandboxKeyHere"; // fallback kalau env belum diisi

    const apiUrl = "https://api.xendit.co/v2/invoices";

    const payload = {
      external_id: "ORDER-" + Date.now(),
      amount: Number(body.amount),
      payer_email: body.email || "guest@example.com",
      description: `Pembelian ${body.productName || "Produk WebBotPro"}`,
      success_redirect_url: "https://webbotpro.site/payment/success",
      failure_redirect_url: "https://webbotpro.site/payment/failed",
      currency: "IDR",
    };

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(XENDIT_API_KEY + ":").toString("base64"),
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Xendit API error:", data);
      return NextResponse.json(
        { error: data.message || "Xendit API Error", data },
        { status: res.status }
      );
    }

    console.log("✅ Xendit invoice created:", data);

    return NextResponse.json({
      success: true,
      invoice_url: data.invoice_url,
      id: data.id,
    });
  } catch (err: any) {
    console.error("❌ Xendit route error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
