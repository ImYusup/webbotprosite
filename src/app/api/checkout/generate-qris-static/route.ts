// src/app/api/generate-qris-static/route.ts
import { createQrisStatic } from "@/utils/createQrisStatic";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const result = await createQrisStatic();
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}