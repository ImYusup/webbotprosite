// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { createQris } from "@/utils/createQris";

export async function POST(req: Request) {
  try {
    const { amount = "10000.00" } = await req.json();

    const result = await createQris({ amount });

    return NextResponse.json({
      success: true,
      qr_string: result.qrContent,
      referenceNo: result.referenceNo,
    });
  } catch (err: any) {
    console.error("Checkout error:", err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}