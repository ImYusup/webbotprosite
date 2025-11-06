// src/utils/getBriToken.ts
import crypto from "crypto";

function getIsoTimestamp(): string {
  return new Date().toISOString();
}

function generateSignature(
  method: string,
  path: string,
  accessToken: string,
  body: string,
  timestamp: string,
  secret: string
): string {
  const bodyHash = crypto
    .createHash("sha256")
    .update(JSON.stringify(JSON.parse(body)))
    .digest("hex")
    .toLowerCase();

  const stringToSign = `${method}:${path}:${accessToken}:${bodyHash}:${timestamp}`;
  return crypto.createHmac("sha512", secret).update(stringToSign).digest("hex");
}

export async function getBriToken(): Promise<string> {
  const baseUrl =
    process.env.BRI_API_MODE === "production"
      ? process.env.BRI_API_BASE_PRODUCTION
      : process.env.BRI_API_BASE_SANDBOX;

  const clientId = process.env.BRI_CONSUMER_KEY!;
  const clientSecret = process.env.BRI_CONSUMER_SECRET!;
  const timestamp = getIsoTimestamp();
  const path = "/snap/v1.0/access-token/b2b";
  const url = `${baseUrl}${path}`;
  const payload = { grantType: "client_credentials" };

  const signature = generateSignature(
    "POST",
    path,
    "",
    JSON.stringify(payload),
    timestamp,
    clientSecret
  );

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-CLIENT-KEY": clientId,
      "X-TIMESTAMP": timestamp,
      "X-SIGNATURE": signature,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const raw = await res.text();
    throw new Error(`Response bukan JSON: ${raw}`);
  }

  const data = await res.json();
  if (!res.ok || !data?.accessToken) {
    throw new Error(`Gagal ambil token: ${JSON.stringify(data)}`);
  }

  return data.accessToken;
}