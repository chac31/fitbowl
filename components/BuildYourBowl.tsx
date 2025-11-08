"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ORDER_URL, trackCTAClick } from "@/config/order";
import content from "@/content/en.json";

export function BuildYourBowl() {
  const handleOrderClick = () => {
    trackCTAClick("build_your_bowl_order");
    window.open(ORDER_URL, "_blank");
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              {content.buildYourBowl.title}
            </h2>
            <p className="text-lg text-muted">
              {content.buildYourBowl.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {content.buildYourBowl.steps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-highlight/20 text-brand flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <p className="text-sm text-text">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              onClick={handleOrderClick}
              size="lg"
              className="text-lg"
              aria-label="Start Your Order"
            >
              {content.buildYourBowl.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

