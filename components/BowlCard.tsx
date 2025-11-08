"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ORDER_URL, trackCTAClick } from "@/config/order";

interface BowlCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  protein_g: number;
  sugar_g: number;
  tags: string[];
  image: string;
}

export function BowlCard({
  name,
  description,
  price,
  calories,
  protein_g,
  sugar_g,
  tags,
  image,
}: BowlCardProps) {
  const [imgError, setImgError] = useState(false);

  const handleOrderClick = () => {
    trackCTAClick(`bowl_order_${name}`);
    window.open(ORDER_URL, "_blank");
  };

  // Check if image exists
  useEffect(() => {
    const img = new window.Image();
    img.onerror = () => setImgError(true);
    img.onload = () => setImgError(false);
    img.src = image;
  }, [image]);

  return (
    <Card className="h-full flex flex-col">
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl2 bg-bg">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-brand/10">
            <span className="text-brand font-semibold text-lg">{name}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-2xl mb-2">{name}</CardTitle>
        <CardDescription className="text-base text-text mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={tag.includes("High-Protein") || tag.includes("Vegan") ? "success" : "default"}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-muted">Calories</p>
            <p className="font-semibold text-text">{calories}</p>
          </div>
          <div>
            <p className="text-muted">Protein</p>
            <p className="font-semibold text-text">{protein_g}g</p>
          </div>
          <div>
            <p className="text-muted">Sugar</p>
            <p className="font-semibold text-text">{sugar_g}g</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
        <p className="text-2xl font-bold text-brand">${price.toFixed(2)}</p>
        <Button onClick={handleOrderClick} aria-label={`Order ${name}`}>
          Order
        </Button>
      </CardFooter>
    </Card>
  );
}

