"use client";

import { useEffect, useState } from "react";
import { Plane } from "lucide-react";
import { SITE } from "@/lib/config";
import { heroSlides } from "@/lib/destinations";

export function HeroSlider({ slides = heroSlides, interval = 5000 }: { slides?: string[]; interval?: number }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide} className="w-full h-full object-cover" alt="Travel Destination" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      ))}
    </div>
  );
}

export function HeroContent({
  brand = SITE.name,
  tagline = SITE.tagline,
}: {
  brand?: string;
  tagline?: string;
}) {
  return (
    <div className="relative z-10 container mx-auto px-4 text-center mt-0 mb-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2">{brand}</h1>
      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="block w-8 h-[2px] bg-white/50 rounded-full" />
        <Plane className="w-5 h-5 text-white/70" />
        <span className="block w-8 h-[2px] bg-white/50 rounded-full" />
      </div>
      <p className="text-lg md:text-2xl font-light italic text-white/90 tracking-wide drop-shadow-md max-w-2xl mx-auto">
        {tagline}
      </p>
    </div>
  );
}
