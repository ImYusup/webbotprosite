// /api/webhook.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const VERIFY_TOKEN = "yusup-bot-verification";
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.status(403).send("Verification failed");
    }
  }

  if (req.method === "POST") {
    console.log("📩 Incoming webhook:", JSON.stringify(req.body, null, 2));
    res.status(200).send("OK");
  }
}