"use client";

import { Plane } from "lucide-react";
import { footerDestinations } from "@/lib/destinations";
import { useDestinationModal } from "@/components/providers/DestinationModalProvider";

const colors = ["indigo", "green", "amber", "red"] as const;
const colorClasses = {
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hover: "hover:border-indigo-300" },
  green: { bg: "bg-green-50", text: "text-green-600", hover: "hover:border-green-300" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", hover: "hover:border-amber-300" },
  red: { bg: "bg-red-50", text: "text-red-600", hover: "hover:border-red-300" },
};

export function PopularDestinationsFooter() {
  const { openDestinationModal } = useDestinationModal();

  return (
    <section className="py-10 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-30">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">Popular Destinations</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Find great deals on flights to these destinations</p>
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {footerDestinations.map((city, i) => {
            const color = colors[i % 4];
            const cls = colorClasses[color];
            return (
              <button
                key={city}
                type="button"
                onClick={() => openDestinationModal(city)}
                className={`flex flex-col items-center gap-2 py-4 px-2 rounded-xl bg-white border border-gray-200 hover:shadow-md ${cls.hover} transition-all duration-200 cursor-pointer group`}
              >
                <span className={`w-10 h-10 rounded-full ${cls.bg} flex items-center justify-center group-hover:scale-110 transition`}>
                  <Plane className={`w-5 h-5 ${cls.text}`} />
                </span>
                <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{city}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
