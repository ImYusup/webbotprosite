// src/components/footer.tsx
"use client";

import { Facebook, Linkedin, Instagram, Bot, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-16 w-full border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-16 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4 mb-10 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">WebBotPro</span>
            </div>
            <p className="text-muted-foreground font-serif max-w-sm mx-auto md:mx-0">
              Memberdayakan bisnis dengan otomasi cerdas dan solusi digital.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/webbotpro-automation-and-digital-solutions-9b180a380/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61579787555945"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/webbotpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:webbotproo@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div id="contact" className="mb-10 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-primary">Hubungi Kami</h3>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-primary" />
                <a
                  href="https://wa.me/6281289066999?text=Halo%20WebBotPro%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20solusi%20otomatisasi%20digital."
                  className="hover:text-primary transition-colors"
                  target="_blank"
                >
                  0812-8906-6999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-primary" />
                <a
                  href="mailto:webbotproo@gmail.com?subject=Permintaan%20Informasi%20Layanan%20WebBotPro"
                  className="hover:text-primary transition-colors"
                >
                  webbotproo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <span>Cibangkong, Bandung – Jawa Barat, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-10 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li>
                <Link href="/pricing/whatsapp" className="hover:text-primary transition-colors">
                  Automasi WhatsApp Commerce
                </Link>
              </li>
              <li>
                <Link href="/pricing/marketing" className="hover:text-primary transition-colors">
                  Digital Presence & Marketing
                </Link>
              </li>
              <li>
                <Link href="/pricing/data" className="hover:text-primary transition-colors">
                  Data & Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/custom-solutions" className="hover:text-primary transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="mb-10 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-primary">Company</h3>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li>
                <Link href="/about-us" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://imyusupblogs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-muted-foreground font-serif">
          <p className="font-bold text-lg">&copy; 2025 WebBotPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
