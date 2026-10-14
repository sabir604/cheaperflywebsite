"use client";

import { useState } from "react";
import { ArrowRight, Bed, Calendar, CheckCircle, Hotel } from "lucide-react";
import type { UmrahPackage } from "@/lib/umrah-packages";

export function UmrahPackages({ packages }: { packages: UmrahPackage[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-30">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Umrah Packages</h2>
            <p className="text-gray-600 mt-2">All-inclusive packages designed for your comfort.</p>
          </div>
          <span className="hidden md:inline-flex items-center gap-2 text-indigo-600 font-medium">
            View All Packages <ArrowRight className="w-4 h-4" />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <UmrahPackageCard key={pkg.package_name + index} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UmrahPackageCard({ pkg, index }: { pkg: UmrahPackage; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const includesMore = pkg.includes.length > 3 ? pkg.includes.length - 3 : 0;
  const priceDisplay = `£${pkg.price.amount}`;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative h-[250px] overflow-hidden">
        {index === 1 && <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />}
        <img src={`/${pkg.image}`} alt={pkg.package_name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {pkg.duration_days} Days
        </div>
        {index === 1 && (
          <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">Most Popular</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.package_name}</h3>
        <div className="mb-3 text-xs text-gray-500 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" /> {pkg.dates}
        </div>
        <div className="border-t border-b border-gray-100 py-3 mb-4 space-y-1.5 text-sm text-gray-600">
          <p className="flex items-start gap-2"><Hotel className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" /> Makkah: {pkg.hotels.makkah.hotel_name} ({pkg.hotels.makkah.rating})</p>
          <p className="flex items-start gap-2"><Hotel className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" /> Madinah: {pkg.hotels.madinah.hotel_name} ({pkg.hotels.madinah.rating})</p>
          <p className="flex items-center gap-2"><Bed className="w-4 h-4 text-indigo-500 flex-shrink-0" /> {pkg.hotels.makkah.room_type}</p>
        </div>
        <ul className="space-y-2 mb-6">
          {pkg.includes.slice(0, 3).map((inc) => (
            <li key={inc} className="flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" /> {inc}
            </li>
          ))}
          {includesMore > 0 && expanded && pkg.includes.slice(3).map((inc) => (
            <li key={inc} className="flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" /> {inc}
            </li>
          ))}
          {includesMore > 0 && (
            <li className="mt-1">
              <button type="button" onClick={() => setExpanded(!expanded)} className="text-xs text-indigo-600 font-medium hover:underline focus:outline-none">
                {expanded ? "Show less" : `+${includesMore} more`}
              </button>
            </li>
          )}
        </ul>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500 block">From</span>
            <span className="text-2xl font-bold text-gray-900">{priceDisplay}</span>
            <small className="text-xs text-gray-500">/{pkg.price.per}</small>
          </div>
          <a
            href="#umrah-booking-form"
            className={`${index === 1 ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20" : "bg-gray-900 text-white hover:bg-gray-800"} px-5 py-2.5 rounded-xl text-sm font-semibold transition`}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
