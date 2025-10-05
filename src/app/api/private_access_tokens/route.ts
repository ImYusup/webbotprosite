// src/app/api/private_access_tokens/route.ts
import { NextRequest } from "next/server";

const INTERNAL_ACCESS_TOKEN = process.env.INTERNAL_ACCESS_TOKEN || "dev-test";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const auth = req.headers.get("Authorization");

  console.log("🔍 Request Headers:", { id, auth, internalToken: INTERNAL_ACCESS_TOKEN });

  if (!id) {
    return new Response(JSON.stringify({ error: "missing_id" }), {
      status: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  if (!auth || auth !== `Bearer ${INTERNAL_ACCESS_TOKEN}`) {
    console.warn("🚫 Unauthorized:", { expected: `Bearer ${INTERNAL_ACCESS_TOKEN}`, received: auth });
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  return new Response(JSON.stringify({
    ok: true,
    id,
    token: `private_token_for_${id}`,
  }), {
    status: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
    },
  });
}