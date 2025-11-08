"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ORDER_URL, trackCTAClick } from "@/config/order";
import content from "@/content/en.json";
import { Leaf, Heart, Truck } from "lucide-react";

export function Hero() {
  const handleOrderClick = () => {
    trackCTAClick("hero_order");
    window.open(ORDER_URL, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 scale-110">
          <Image
            src="/images/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-highlight/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        {/* Mobile Layout - Vertical Stack */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-12 items-center min-h-[80vh] lg:min-h-0">
          
          {/* Top Section - Text Content (Mobile) / Left Side (Desktop) */}
          <div className="lg:col-span-1 text-center lg:text-left order-1 lg:order-1 w-full">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 lg:p-8 shadow-card mb-4 lg:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-brand leading-tight">
                {content.hero.title}
              </h1>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 lg:p-6 shadow-card mb-4 lg:mb-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text">
                {content.hero.subtitle}
              </p>
            </div>
            <Button
              onClick={handleOrderClick}
              size="lg"
              className="w-full sm:w-auto bg-success text-white hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl2 shadow-card"
              aria-label="Order Now"
            >
              {content.hero.primaryCTA}
            </Button>
          </div>

          {/* Center - Bowl Image (Hidden on mobile, shown on desktop) */}
          <div className="lg:col-span-1 hidden lg:flex justify-center items-center relative order-2 lg:order-2">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Floating ingredients - decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-sm animate-pulse" />
              <div className="absolute -top-4 -right-12 w-12 h-12 bg-highlight/20 rounded-full blur-sm animate-pulse delay-300" />
              <div className="absolute -bottom-8 -left-12 w-14 h-14 bg-success/20 rounded-full blur-sm animate-pulse delay-700" />
              <div className="absolute -bottom-4 -right-8 w-10 h-10 bg-accent/20 rounded-full blur-sm animate-pulse delay-500" />
              
              {/* Main bowl image placeholder */}
              <div className="relative w-full h-full bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl">
                <div className="text-text text-center p-8">
                  <div className="text-7xl mb-4">🥣</div>
                  <p className="text-base font-semibold">Smoothie Bowl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Value Cards (Mobile) / Right Side (Desktop) */}
          <div className="lg:col-span-1 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 order-3 lg:order-3 w-full">
            <div className="bg-white/90 backdrop-blur-md rounded-full p-4 sm:p-5 lg:p-6 shadow-card flex items-center gap-3 sm:gap-4 hover:scale-105 transition-transform flex-1 sm:flex-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-success/25 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-success" />
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="font-semibold text-text text-sm sm:text-base lg:text-lg">Fresh Ingredients</h3>
                <p className="text-xs sm:text-sm text-muted">Daily sourced</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-full p-4 sm:p-5 lg:p-6 shadow-card flex items-center gap-3 sm:gap-4 hover:scale-105 transition-transform flex-1 sm:flex-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/25 flex items-center justify-center flex-shrink-0">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="font-semibold text-text text-sm sm:text-base lg:text-lg">Healthy Choice</h3>
                <p className="text-xs sm:text-sm text-muted">Nutritious & delicious</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-full p-4 sm:p-5 lg:p-6 shadow-card flex items-center gap-3 sm:gap-4 hover:scale-105 transition-transform flex-1 sm:flex-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand/25 flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="font-semibold text-text text-sm sm:text-base lg:text-lg">Fast Delivery</h3>
                <p className="text-xs sm:text-sm text-muted">Quick & fresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
