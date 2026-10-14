"use client";

import { useEffect, useState } from "react";
import { Landmark } from "lucide-react";
import { SITE } from "@/lib/config";
import { umrahHeroSlides } from "@/lib/destinations";

export function UmrahHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === umrahHeroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {umrahHeroSlides.map((slide, index) => (
          <div key={slide} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSlide === index ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-cover bg-bottom" style={{ backgroundImage: `url('${slide}')` }} />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>
      <div className="relative z-10 text-center text-white px-4 md:px-0 mt-0 mb-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-lg">{SITE.name}</h1>
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="block w-10 h-0.5 bg-white/50 rounded-full" />
          <Landmark className="w-5 h-5 text-white/70" />
          <span className="block w-10 h-0.5 bg-white/50 rounded-full" />
        </div>
        <p className="text-lg md:text-2xl font-light italic text-white/90 mb-3 max-w-2xl mx-auto drop-shadow-md">
          Spiritual Journeys to <span className="font-semibold not-italic text-white">Makkah</span> &{" "}
          <span className="font-semibold not-italic text-[#2F9E41]">Madinah</span>
        </p>
      </div>
    </>
  );
}
