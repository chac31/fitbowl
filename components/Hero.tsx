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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-card mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand mb-4 leading-tight">
                {content.hero.title}
              </h1>
            </div>
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-card mb-6">
              <p className="text-base sm:text-lg md:text-xl text-text max-w-xl">
                {content.hero.subtitle}
              </p>
            </div>
            <Button
              onClick={handleOrderClick}
              size="lg"
              className="bg-success text-white hover:opacity-90 text-lg px-8 py-6 rounded-xl2 shadow-card"
              aria-label="Order Now"
            >
              {content.hero.primaryCTA}
            </Button>
          </div>

          {/* Center - Bowl Image */}
          <div className="lg:col-span-1 flex justify-center items-center relative">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Floating ingredients - decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-sm animate-pulse" />
              <div className="absolute -top-4 -right-12 w-12 h-12 bg-highlight/20 rounded-full blur-sm animate-pulse delay-300" />
              <div className="absolute -bottom-8 -left-12 w-14 h-14 bg-success/20 rounded-full blur-sm animate-pulse delay-700" />
              <div className="absolute -bottom-4 -right-8 w-10 h-10 bg-accent/20 rounded-full blur-sm animate-pulse delay-500" />
              
              {/* Main bowl image placeholder - you can add actual bowl image here */}
              <div className="relative w-full h-full bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl">
                <div className="text-text text-center p-8">
                  <div className="text-7xl mb-4">🥣</div>
                  <p className="text-base font-semibold">Smoothie Bowl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Value Cards */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="bg-white/90 backdrop-blur-md rounded-full p-5 lg:p-6 shadow-card flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-success/25 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-text text-base lg:text-lg">Fresh Ingredients</h3>
                <p className="text-xs lg:text-sm text-muted">Daily sourced</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-full p-5 lg:p-6 shadow-card flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-accent/25 flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-text text-base lg:text-lg">Healthy Choice</h3>
                <p className="text-xs lg:text-sm text-muted">Nutritious & delicious</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-full p-5 lg:p-6 shadow-card flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-brand/25 flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text text-base lg:text-lg">Fast Delivery</h3>
                <p className="text-xs lg:text-sm text-muted">Quick & fresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
