"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type CarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
};

export default function FadeCarousel({
  images,
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 500);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setTimeout(nextSlide, interval);
    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, interval, nextSlide]);

  return (
    <div className="relative w-full h-[500px]">
      {" "}
      {/* Fixed height */}
      {/* Slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex && fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover" // Changed from object-contain
              priority={index === 0}
              onError={(e) => {
                console.error(`Failed to load image: ${image.src}`);
                // You could set a fallback image here if needed
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
