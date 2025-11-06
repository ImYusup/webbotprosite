// src/utils/createQris.ts
import crypto from "crypto";
import { getAccessToken } from "./briAuth";

const getIsoTimestamp = () => new Date().toISOString().replace(/\.\d+Z$/, "Z");

function minifyJson(obj: any): string {
  return JSON.stringify(obj).replace(/\s+/g, "");
}

function sha256(str: string): string {
  return crypto.createHash("sha256").update(str).digest("hex").toLowerCase();
}

function hmacSha512(key: string, data: string): string {
  return crypto.createHmac("sha512", key).update(data).digest("hex");
}

export async function createQris({
  amount,
  merchantId = "00007100010926",
  terminalId = "213141251124",
}: {
  amount: string;
  merchantId?: string;
  terminalId?: string;
}) {
  const baseUrl = process.env.BRI_API_BASE_SANDBOX!;
  const clientSecret = process.env.BRI_CONSUMER_SECRET!;
  const channelId = process.env.BRI_CHANNEL_ID || "95211";
  const partnerId = process.env.BRI_CONSUMER_KEY!; // PAKAI CONSUMER KEY SENDIRI!

  const accessToken = await getAccessToken();

  const qrisPath = "/v1.1/qr-dynamic-mpm/qr-mpm-generate-qr";
  const timestamp = getIsoTimestamp();
  const partnerReferenceNo = "T" + Date.now();
  const externalId = Date.now().toString().padStart(36, "0").slice(0, 36);

  const payload = {
    partnerReferenceNo,
    amount: { value: amount, currency: "IDR" },
    merchantId,
    terminalId,
  };

  const bodyStr = minifyJson(payload);
  const bodyHash = sha256(bodyStr);
  const stringToSign = `POST:${qrisPath}:${accessToken}:${bodyHash}:${timestamp}`;
  const signature = hmacSha512(clientSecret, stringToSign);

  console.log("=== QRIS DEBUG ===");
  console.log("X-PARTNER-ID:", partnerId);
  console.log("Access Token:", accessToken);
  console.log("String to Sign:", stringToSign);
  console.log("HMAC Signature:", signature);
  console.log("==================");

  const res = await fetch(`${baseUrl}${qrisPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-TIMESTAMP": timestamp,
      "X-SIGNATURE": signature,
      "CHANNEL-ID": channelId,
      "X-EXTERNAL-ID": externalId,
      "X-PARTNER-ID": partnerId, // TAMBAH INI!
    },
    body: bodyStr,
  });

  const text = await res.text();
  console.log("QRIS RESPONSE:", text);

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`QRIS bukan JSON: ${text}`);
  }

  if (data.responseCode === "2004700" && data.qrContent) {
    return {
      success: true,
      qrContent: data.qrContent,
      referenceNo: data.referenceNo,
      partnerReferenceNo,
    };
  } else {
    throw new Error(`QRIS Gagal: ${JSON.stringify(data)}`);
  }
}