"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import content from "@/content/en.json";
import reviewsData from "@/data/reviews.json";
import Image from "next/image";

export function SocialProof() {
  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-highlight text-highlight"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-text">
                {content.reviews.rating}
              </span>
            </div>
            <p className="text-muted">
              Based on {content.reviews.count} customer reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: typeof reviewsData[0] }) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onerror = () => setImgError(true);
    img.onload = () => setImgError(false);
    img.src = review.avatar;
  }, [review.avatar]);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-brand/10 flex items-center justify-center">
            {imgError ? (
              <span className="text-brand font-semibold text-sm">
                {review.name.charAt(0).toUpperCase()}
              </span>
            ) : (
              <Image
                src={review.avatar}
                alt={review.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            )}
          </div>
          <div>
            <p className="font-semibold text-text">{review.name}</p>
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-highlight text-highlight"
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted text-sm">{review.text}</p>
      </CardContent>
    </Card>
  );
}

