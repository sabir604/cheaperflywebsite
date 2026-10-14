"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/umrah", label: "Umrah", match: (p: string) => p.startsWith("/umrah") },
  { href: "/business-class", label: "Business Class", match: (p: string) => p === "/business-class" },
  { href: "/about", label: "About us", match: (p: string) => p === "/about" },
  { href: "/contact", label: "Contact us", match: (p: string) => p === "/contact" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-indigo-600 text-white text-xs md:text-sm py-2 px-4 text-center font-medium relative z-50">
      <p>
        🎉 Special Offer: Get 50% Off on your first booking to Dubai!{" "}
        <a href="#" className="underline hover:text-indigo-100 ml-2">Book Now</a>
      </p>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (match: (p: string) => boolean) =>
    `text-gray-600 hover:text-indigo-600 transition ${
      match(pathname) ? "text-indigo-600 border-b-2 border-indigo-600 pb-0.5" : ""
    }`;

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/cheaperfly-logo.png" alt="CheaperFly Logo" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.match)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>{SITE.phone}</span>
            </a>
            <div className="h-[52px] w-[180px] flex items-center justify-center overflow-hidden">
              <div
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="652bdaa63170abca9863e26e"
                data-style-height="52px"
                data-style-width="100%"
                data-token="527a49aa-a136-43b1-983d-431108825b7a"
              >
                <a href="https://www.trustpilot.com/review/cheaperfly.co.uk" target="_blank" rel="noopener noreferrer">
                  Trustpilot
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white p-4 space-y-4 shadow-lg">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block font-medium" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 font-medium text-indigo-600">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
