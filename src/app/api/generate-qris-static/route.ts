// src/pages/api/generate-qris-static.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createQrisStatic } from "@/utils/createQrisStatic";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = await createQrisStatic();
    res.status(200).json(result);
  } catch (error: any) {
    console.error("QRIS Static Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}