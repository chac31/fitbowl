import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fit Bowl - Fresh Smoothie Bowls, Built Your Way",
  description: "Real fruit, clean toppings, protein options. Pick a signature bowl or build your own—ready in minutes.",
  keywords: ["smoothie bowls", "healthy food", "acai bowls", "protein bowls", "vegan smoothie bowls"],
  authors: [{ name: "Fit Bowl" }],
  openGraph: {
    title: "Fit Bowl - Fresh Smoothie Bowls, Built Your Way",
    description: "Real fruit, clean toppings, protein options. Pick a signature bowl or build your own—ready in minutes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit Bowl - Fresh Smoothie Bowls, Built Your Way",
    description: "Real fruit, clean toppings, protein options. Pick a signature bowl or build your own—ready in minutes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fit Bowl",
              "description": "Fresh smoothie bowls made with real fruit, clean toppings, and protein options",
              "url": "https://fitbowl.com",
              "telephone": "+1-555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Health Street",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94102",
                "addressCountry": "US",
              },
              "openingHours": "Mo-Sa 08:00-20:00",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Product",
                  "name": "Berry Boost",
                  "description": "A vibrant blend of açai, strawberry, blueberry, and banana with almond milk",
                  "offers": {
                    "@type": "Offer",
                    "price": "12.99",
                    "priceCurrency": "USD",
                  },
                },
                {
                  "@type": "Product",
                  "name": "Tropical Glow",
                  "description": "Tropical paradise with mango, pineapple, banana, and coconut milk",
                  "offers": {
                    "@type": "Offer",
                    "price": "13.99",
                    "priceCurrency": "USD",
                  },
                },
                {
                  "@type": "Product",
                  "name": "Green Power",
                  "description": "Nutrient-packed with spinach, avocado, apple, and banana in oat milk",
                  "offers": {
                    "@type": "Offer",
                    "price": "11.99",
                    "priceCurrency": "USD",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

