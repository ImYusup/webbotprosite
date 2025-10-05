// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  if (!serverKey) {
    return NextResponse.json({ error: "Missing MIDTRANS_SERVER_KEY" }, { status: 500 });
  }

  const baseUrl = "https://app.midtrans.com/snap/v1/transactions";

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(serverKey + ":").toString("base64"),
    },
    body: JSON.stringify({
      transaction_details: {
        order_id: "ORDER-" + Date.now(),
        gross_amount: body.items.reduce(
          (sum: number, i: any) => sum + i.price * i.quantity,
          0
        ),
      },
      item_details: body.items.map((i: any) => ({
        id: i.variantId || "SKU-" + Date.now(),
        price: i.price,
        quantity: i.quantity,
        name: i.title,
      })),
      customer_details: {
        first_name: body.customer?.name || "Guest",
        email: body.customer?.email || "guest@example.com",
      },
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

