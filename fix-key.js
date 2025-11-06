// fix-key.js
const fs = require("fs");

const pem = fs.readFileSync("private_key.pem", "utf8");
const lines = pem.trim().split("\n");

// Hapus header & footer, gabung dengan \n
const key = "-----BEGIN PRIVATE KEY-----\\n" + 
            lines.slice(1, -1).join("\\n") + 
            "\\n-----END PRIVATE KEY-----";

console.log("BRI_PRIVATE_KEY=" + key);