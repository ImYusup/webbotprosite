// src/utils/briAuth.ts
import crypto from "crypto";
import fs from "fs";
import path from "path";

const getIsoTimestamp = () => new Date().toISOString().replace(/\.\d+Z$/, "Z");

function signRsa(privateKey: string, data: string): string {
  // BRI BUTUH PKCS1 (BEGIN RSA PRIVATE KEY)
  if (!privateKey.includes("-----BEGIN RSA PRIVATE KEY-----")) {
    throw new Error("Private key harus format RSA PRIVATE KEY (PKCS1)!\n\nGunakan: openssl genrsa -out private_key.pem 2048");
  }

  const sign = crypto.createSign("SHA256");
  sign.update(data);
  sign.end();
  return sign.sign(privateKey, "base64");
}

export async function getAccessToken() {
  const baseUrl = process.env.BRI_API_BASE_SANDBOX!;
  const clientId = process.env.BRI_CONSUMER_KEY!;

  const privateKeyPath = path.join(process.cwd(), "private_key.pem");
  if (!fs.existsSync(privateKeyPath)) throw new Error(`File tidak ada: ${privateKeyPath}`);

  const privateKey = fs.readFileSync(privateKeyPath, "utf8").trim();

  const timestamp = getIsoTimestamp();
  const tokenPath = "/snap/v1.0/access-token/b2b";

  const payload = { grantType: "client_credentials" };
  const bodyStr = JSON.stringify(payload);

  const stringToSign = `${clientId}|${timestamp}`;
  const signature = signRsa(privateKey, stringToSign);

  console.log("=== GET TOKEN DEBUG ===");
  console.log("File:", privateKeyPath);
  console.log("Format: PKCS1 (RSA PRIVATE KEY)");
  console.log("Client ID:", clientId);
  console.log("Timestamp:", timestamp);
  console.log("Signature Length:", signature.length);
  console.log("URL:", `${baseUrl}${tokenPath}`);
  console.log("======================");

  const res = await fetch(`${baseUrl}${tokenPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CLIENT-KEY": clientId,
      "X-TIMESTAMP": timestamp,
      "X-SIGNATURE": signature,
    },
    body: bodyStr,
  });

  const text = await res.text();
  console.log("STATUS:", res.status);
  console.log("RESPONSE:", text);

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Token bukan JSON: ${text}`);
  }

  if (!res.ok) throw new Error(`Get Token Gagal: ${JSON.stringify(data)}`);
  if (!data.accessToken) throw new Error(`Token kosong: ${JSON.stringify(data)}`);

  return data.accessToken;
}