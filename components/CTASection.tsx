"use client";

import { Button } from "@/components/ui/button";
import { ORDER_URL, trackCTAClick } from "@/config/order";
import content from "@/content/en.json";

export function CTASection() {
  const handleOrderClick = () => {
    trackCTAClick("final_cta_order");
    window.open(ORDER_URL, "_blank");
  };

  return (
    <section className="py-20 bg-brand text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {content.finalCTA.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            {content.finalCTA.subtitle}
          </p>
          <Button
            onClick={handleOrderClick}
            size="lg"
            className="bg-accent text-white hover:opacity-90 text-lg"
            aria-label="Order Now"
          >
            {content.finalCTA.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

