"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import content from "@/content/en.json";

export function NutritionSourcing() {
  return (
    <section id="nutrition" className="py-20 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center mb-12">
            {content.nutrition.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {content.nutrition.bullets.map((bullet, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <p className="text-text">{bullet}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="nutrition-info">
              <AccordionTrigger className="text-left">
                {content.nutrition.accordionTitle}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted">
                  <p>
                    All our bowls are made fresh daily with organic fruits and
                    natural ingredients. We provide detailed nutrition
                    information for each bowl, including macronutrients,
                    vitamins, and allergens.
                  </p>
                  <p>
                    Our ingredients are sourced from local farms when possible,
                    and we prioritize organic and non-GMO options. All bowls
                    can be customized to meet dietary restrictions and
                    preferences.
                  </p>
                  <p>
                    For specific nutritional questions or allergen concerns,
                    please contact us directly. We're happy to provide detailed
                    ingredient lists and nutritional breakdowns for any bowl.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

