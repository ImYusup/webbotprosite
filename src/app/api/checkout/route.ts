// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const isSandbox = process.env.MIDTRANS_ENV === "sandbox";
  const serverKey = isSandbox
    ? process.env.MIDTRANS_SERVER_KEY_SANDBOX
    : process.env.MIDTRANS_SERVER_KEY_PRODUCTION;

  const baseUrl = isSandbox
    ? "https://app.sandbox.midtrans.com/snap/v1/transactions"
    : "https://app.midtrans.com/snap/v1/transactions";

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(serverKey + ":").toString("base64"),
    },
    body: JSON.stringify({
      transaction_details: {
        order_id: "order-" + Date.now(),
        gross_amount: body.items.reduce(
          (sum: number, i: any) => sum + i.price * i.quantity,
          0
        ),
      },
      item_details: body.items.map((i: any) => ({
        id: i.variantId,
        price: i.price,
        quantity: i.quantity,
        name: i.title,
      })),
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
