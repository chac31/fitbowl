"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ORDER_URL, trackCTAClick } from "@/config/order";
import content from "@/content/en.json";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrderClick = () => {
    trackCTAClick("header_order");
    window.open(ORDER_URL, "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all ${
        isScrolled ? "bg-bg/95 backdrop-blur-sm shadow-card" : "bg-bg"
      } border-border`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-brand"
            aria-label="Fit Bowl Home"
          >
            {content.header.logo}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              {content.header.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              {content.header.nav.menu}
            </button>
            <button
              onClick={() => scrollToSection("nutrition")}
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              {content.header.nav.nutrition}
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              {content.header.nav.reviews}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              {content.header.nav.faq}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-text hover:text-brand transition-colors"
            >
              {content.header.nav.contact}
            </button>
          </div>
          <Button
            onClick={handleOrderClick}
            className="ml-4"
            aria-label="Order Now"
          >
            {content.header.cta}
          </Button>
        </div>
      </nav>
    </header>
  );
}

