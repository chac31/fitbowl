"use client";

import { BowlCard } from "@/components/BowlCard";
import content from "@/content/en.json";
import menuData from "@/data/menu.json";

export function SignatureBowls() {
  return (
    <section id="menu" className="py-20 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            {content.signatureBowls.title}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {content.signatureBowls.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData.map((bowl) => (
            <BowlCard key={bowl.id} {...bowl} />
          ))}
        </div>
      </div>
    </section>
  );
}

