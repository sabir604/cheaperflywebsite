"use client";

import { useEffect, useRef } from "react";
import { flightDeals } from "@/lib/destinations";
import { useDestinationModal } from "@/components/providers/DestinationModalProvider";

function DealCard({ city, price, img, onClick }: { city: string; price: string; img: string; onClick: () => void }) {
  return (
    <div className="flex-shrink-0 w-96 group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl h-72">
        <img src={img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt={city} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white mb-0.5">{city}</h3>
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-xs">Per Person</span>
            <span className="text-white font-bold text-sm">£ {price}</span>
          </div>
        </div>
        <span className="absolute top-3 right-3 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition">Book Now</span>
      </div>
    </div>
  );
}

export function PopularDestinationsAdvanced() {
  const { openDestinationModal } = useDestinationModal();
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let paused = false;
    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    let raf: number;
    const step = () => {
      if (!paused && el) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const open = (city: string) => () => openDestinationModal(city);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-30">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Popular Flight Destinations</h2>
        <p className="text-sm text-gray-500 text-center mb-8">Explore our best deals to top destinations worldwide</p>
      </div>

      <div className="relative px-4 md:px-30">
        <div ref={sliderRef} className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth">
          {[...flightDeals, ...flightDeals].map((deal, i) => (
            <DealCard key={`${deal.city}-${i}`} {...deal} onClick={open(deal.city)} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-30 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flightDeals.map((deal) => (
            <div key={deal.city} className="group cursor-pointer" onClick={open(deal.city)}>
              <div className="relative overflow-hidden rounded-2xl h-64">
                <img src={deal.img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt={deal.city} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">{deal.city} Flight Deal</h3>
                  <p className="text-white/80 text-sm mb-2">Per Person</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-lg">£ {deal.price}</span>
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition">Book Now</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
