"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyFitBowl } from "@/components/WhyFitBowl";
import { SignatureBowls } from "@/components/SignatureBowls";
import { BuildYourBowl } from "@/components/BuildYourBowl";
import { NutritionSourcing } from "@/components/NutritionSourcing";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyFitBowl />
      <SignatureBowls />
      <BuildYourBowl />
      <NutritionSourcing />
      <SocialProof />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}

