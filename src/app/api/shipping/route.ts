// app/api/shipping/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { origin, destination, weight } = body;

    if (!origin || !destination || !weight) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const API_KEY = "p26fMbua8cec38f853fecb50BTmJIFKj";

    const formData = new URLSearchParams();
    formData.append("origin", origin.toString());
    formData.append("destination", destination.toString());
    formData.append("weight", weight.toString());
    formData.append("courier", "jne");

    const response = await fetch("https://rajaongkir.komerce.id/api/v1/calculate/domestic-cost", {
      method: "POST",
      headers: {
        key: API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("JNE Error:", err);
      return NextResponse.json({ success: false, error: "API error" }, { status: 500 });
    }

    const data = await response.json();
    if (data.meta?.code !== 200 || !data.data) {
      return NextResponse.json({ success: false, error: "No data" }, { status: 400 });
    }

    const costs = data.data.map((item: any) => ({
      courier: "JNE",
      service: item.service,
      description: item.description,
      cost: item.cost,
      etd: item.etd.replace(" day", ""),
    }));

    return NextResponse.json({ success: true, costs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}