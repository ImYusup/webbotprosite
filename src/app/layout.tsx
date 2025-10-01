import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "WebBotPro - WhatsApp Automation, Digital Marketing & Business Intelligence",
  description:
    "WebBotPro membantu bisnis dengan WhatsApp Commerce Automation, Digital Presence & Marketing, serta Data & Business Intelligence untuk UMKM & perusahaan.",
  keywords: [
    // WhatsApp
    "WhatsApp Commerce Automation",
    "WhatsApp Automation",
    "Bisnis Online",
    "WhatsApp Business",
    "AutoReply",
    "Chatbot",
    "UMKM Go Digital",
    "Online Shop",
    "Ecommerce",
    "Google Sheets Integration",
    "Invoice Automation",

    // Digital Marketing
    "Digital Marketing",
    "Jasa Website",
    "Sosial Media Management",
    "SEO",
    "Iklan Digital",
    "Brand Awareness",
    "Social Media Growth",
    "Online Business",
    "Jasa Digital Marketing",
    "Grow Your Business",

    // Data & BI
    "Business Intelligence",
    "Data Driven",
    "Power BI",
    "Dashboard Interaktif",
    "Data Analytics",
    "Data Visualization",
    "Digitalisasi Bisnis",
    "Otomasi Bisnis",
    "WebBotPro",
    "Grow With Data",
  ],
  generator: "WebBotPro Platform",
  metadataBase: new URL("https://webbotpro.com"),
  openGraph: {
    title: "WebBotPro - Automation & Digital Solutions",
    description:
      "Solusi WhatsApp Automation, Digital Marketing, dan Data Intelligence untuk meningkatkan bisnis Anda.",
    url: "https://webbotpro.com",
    siteName: "WebBotPro",
    images: [
      {
        url: "https://webbotpro.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebBotPro Automation Solutions",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@webbotpro",
    title: "WebBotPro - Automation & Digital Solutions",
    description:
      "Bangun kehadiran digital bisnis dengan WhatsApp Automation, Digital Marketing, dan Data Intelligence.",
    images: ["https://webbotpro.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
