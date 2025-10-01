import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate and Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-serif leading-relaxed">
            Join hundreds of businesses that have transformed their operations with our automation, digital marketing,
            and business intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/6281289066999?text=Halo%20WebBotPro%2C%20saya%20tertarik%20untuk%20melihat%20bagaimana%20solusi%20automasi%20dan%20digital%20marketing%20Anda%20dapat%20membantu%20mengembangkan%20bisnis%20saya.%20Bisakah%20Anda%20mengatur%20demo%20untuk%20menjelaskan%20lebih%20lanjut%3F%20Terima%20kasih!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Contact Us for a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/6281289066999?text=Halo%20WebBotPro%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20solusi%20automasi%2C%20digital%20marketing%2C%20dan%20business%20intelligence%20yang%20Anda%20tawarkan.%20Bisakah%20Anda%20berbagi%20informasi%20lebih%20detail%3F%20Terima%20kasih!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
          <p className="text-sm mt-6 opacity-75">Free consultation • Custom solutions • Proven results</p>
        </div>
      </div>
    </section>
  );
}