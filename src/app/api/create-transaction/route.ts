// src/app/api/create-transaction/route.js
import { Snap } from "midtrans-client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const isProduction = process.env.NODE_ENV === "production";

    const snap = new Snap({
      isProduction,
      serverKey: isProduction
        ? process.env.MIDTRANS_SERVER_KEY!
        : process.env.MIDTRANS_SANDBOX_SERVER_KEY!,
      clientKey: isProduction
        ? process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
        : process.env.NEXT_PUBLIC_MIDTRANS_SANDBOX_CLIENT_KEY!,
    });

    const parameter: any = {
      transaction_details: {
        order_id: "ORDER-" + Date.now(),
        gross_amount: body.amount,
      },
      customer_details: {
        first_name: body.name,
        email: body.email,
      },
      item_details: [
        {
          id: "SKU-1",
          price: body.amount,
          quantity: 1,
          name: body.productName || "Sample Product",
        },
      ],
    };

    const transaction = await snap.createTransaction(parameter);

    return new Response(JSON.stringify({ token: transaction.token }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Something went wrong" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
