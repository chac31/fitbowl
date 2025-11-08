"use client";

import Link from "next/link";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import content from "@/content/en.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-text mb-4">Location</h3>
            <p className="text-muted">{content.footer.address}</p>
            <p className="text-muted mt-2">{content.footer.hours}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+15550123456"
                className="flex items-center gap-2 text-muted hover:text-brand transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
                {content.footer.phone}
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted hover:text-brand transition-colors"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/fitbowl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-brand transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://tiktok.com/@fitbowl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-brand transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            {content.footer.copyright.replace("{year}", currentYear.toString())}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted hover:text-brand transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted hover:text-brand transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

