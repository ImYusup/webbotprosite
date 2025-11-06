// src/components/InvoiceTemplate.tsx
import React from "react";

interface InvoiceProps {
  order: any;
}

export default function InvoiceTemplate({ order }: InvoiceProps) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "14px", width: "210mm", backgroundColor: "white" }}>
      <h2 style={{ textAlign: "center", color: "#1f2937", margin: "0 0 8px 0" }}>INVOICE</h2>
      <p style={{ textAlign: "center", color: "#6b7280", margin: "0 0 16px 0" }}>Solid Brand</p>
      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "16px 0" }} />

      <table style={{ width: "100%", marginBottom: "16px", borderCollapse: "collapse" }}>
        <tbody>
          <tr><td style={{ padding: "4px 0", fontWeight: "bold" }}>Order ID:</td><td style={{ padding: "4px 0" }}>{order.orderId}</td></tr>
          <tr><td style={{ padding: "4px 0", fontWeight: "bold" }}>Tanggal:</td><td style={{ padding: "4px 0" }}>{order.date}</td></tr>
          <tr><td style={{ padding: "4px 0", fontWeight: "bold" }}>Nama:</td><td style={{ padding: "4px 0" }}>{order.billing.firstName} {order.billing.lastName}</td></tr>
          <tr><td style={{ padding: "4px 0", fontWeight: "bold" }}>HP:</td><td style={{ padding: "4px 0" }}>{order.billing.phone}</td></tr>
        </tbody>
      </table>

      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f3f4f6" }}>
            <th style={{ textAlign: "left", padding: "8px", border: "1px solid #e5e7eb", fontSize: "12px" }}>Item</th>
            <th style={{ textAlign: "right", padding: "8px", border: "1px solid #e5e7eb", fontSize: "12px" }}>Harga</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>{order.product.name}</td>
            <td style={{ textAlign: "right", padding: "8px", border: "1px solid #e5e7eb" }}>
              Rp {order.price.toLocaleString()}
            </td>
          </tr>
          {order.shipping.cost > 0 && (
            <tr>
              <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>
                Ongkir ({order.shipping.method})
              </td>
              <td style={{ textAlign: "right", padding: "8px", border: "1px solid #e5e7eb" }}>
                Rp {order.shipping.cost.toLocaleString()}
              </td>
            </tr>
          )}
          <tr style={{ backgroundColor: "#f3f4f6", fontWeight: "bold" }}>
            <td style={{ padding: "8px", border: "1px solid #e5e7eb" }}>TOTAL</td>
            <td style={{ textAlign: "right", padding: "8px", border: "1px solid #e5e7eb" }}>
              Rp {order.total.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: "16px", fontSize: "11px", color: "#6b7280" }}>
        Transfer ke: {order.bank ? `${order.bank.bank} - ${order.bank.account} a.n. ${order.bank.name}` : "QRIS/VA"}
      </p>
    </div>
  );
}