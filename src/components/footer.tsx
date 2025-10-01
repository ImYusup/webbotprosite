import { Facebook, Linkedin, Instagram, Bot, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-8 w-full border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-16 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4 mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">WebBotPro</span>
            </div>
            <p className="text-muted-foreground font-serif max-w-sm mx-auto md:mx-0">
              Empowering businesses with intelligent automation and digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/webbotpro-automation-and-digital-solutions-9b180a380/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground font-bold text-lg hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61579787555945"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground font-bold text-lg hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/webbotpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground font-bold text-lg hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:webbotproo@gmail.com?subject=Application%20Request%20WhatsApp%20Commerce%20Automation%20%7C%20Digital%20Presence%20%26%20Marketing%20%7C%20Data%20%26%20Business%20Intelligence"
                className="text-muted-foreground font-bold text-lg hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li>
                <Link href="/pricing/whatsapp" className="font-bold text-lg hover:text-primary transition-colors">
                  WhatsApp Commerce Automation
                </Link>
              </li>
              <li>
                <Link href="/pricing/marketing" className="font-bold text-lg hover:text-primary transition-colors">
                  Digital Presence & Marketing
                </Link>
              </li>
              <li>
                <Link href="/pricing/data" className="font-bold text-lg hover:text-primary transition-colors">
                  Data & Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/custom-solutions" className="font-bold text-lg hover:text-primary transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li>
                <Link href="/about-us" className="font-bold text-lg hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://imyusupblogs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link href="/privacy" className="font-bold text-lg hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="/#contact" className="font-bold text-lg hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-muted-foreground font-serif">
          <p className="font-bold text-lg">&copy; 2025 WebBotPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
