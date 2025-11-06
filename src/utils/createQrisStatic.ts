// src/utils/createQrisStatic.ts
import { getAccessToken } from "./briAuth";

const getIsoTimestamp = () => new Date().toISOString().replace(/\.\d+Z$/, "Z");

export async function createQrisStatic() {
  const baseUrl = process.env.BRI_API_BASE_SANDBOX!;
  const partnerId = process.env.BRI_CONSUMER_KEY!;
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/admin/qris-static/callback`;

  const accessToken = await getAccessToken();

  const path = "/simulator/qr/qr-mpm-generate-url";
  const timestamp = getIsoTimestamp();
  const externalId = Date.now().toString();

  const payload = {
    redirectUri,
    state: `solidbrand_${Date.now()}`,
  };

  console.log("=== QRIS STATIS DEBUG ===");
  console.log("Partner ID:", partnerId);
  console.log("Redirect URI:", redirectUri);
  console.log("Access Token:", accessToken.slice(0, 20) + "...");
  console.log("==========================");

  const res = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-TIMESTAMP": timestamp,
      "X-PARTNER-ID": partnerId,
      "X-EXTERNAL-ID": externalId,
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  console.log("RESPONSE:", text);

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`QRIS Statis bukan JSON: ${text}`);
  }

  if (data.responseCode === "2004700" && data.url) {
    return {
      success: true,
      loginUrl: data.url,
    };
  } else {
    throw new Error(`QRIS Statis Gagal: ${JSON.stringify(data)}`);
  }
}