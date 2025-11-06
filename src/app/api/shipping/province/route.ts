// app/api/shipping/province/route.ts
import { NextResponse } from "next/server";

const API_KEY = "p26fMbua8cec38f853fecb50BTmJIFKj";

export async function GET() {
  try {
    const response = await fetch("https://rajaongkir.komerce.id/api/v1/destination/province", {
      headers: { key: API_KEY },
    });

    if (!response.ok) throw new Error("Failed to fetch provinces");

    const data = await response.json();
    if (data.meta?.code !== 200 || !data.data) {
      return NextResponse.json({ success: false, error: "No provinces" });
    }

    const provinces = data.data.map((p: any) => ({
      id: p.id,
      name: p.name,
    }));

    return NextResponse.json({ success: true, provinces });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}