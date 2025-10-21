// src/app/page.tsx
"use client";

import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FeaturedProductsSection } from "@/components/FeaturedProductsSection";
import { AboutContactSection } from "@/components/about-contact-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProductsSection /> 
        <WhyChooseSection />
        <AboutContactSection/>
        <TestimonialsSection />
      </main>
    </div>
  );
}
