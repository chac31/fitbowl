import { ValueCard } from "@/components/ValueCard";
import content from "@/content/en.json";

export function WhyFitBowl() {
  return (
    <section className="py-20 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text text-center mb-12">
          {content.why.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.why.cards.map((card, index) => (
            <ValueCard
              key={index}
              title={card.title}
              description={card.description}
              badge={index === 0 ? "Premium" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

