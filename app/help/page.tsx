import Link from "next/link";
import { HelpCircle, RefreshCw, Search } from "lucide-react";

export const metadata = { title: "Help Center | CheaperFly" };

const helpItems = [
  { icon: Search, title: "How do I book a flight?", text: "Use the search form on our homepage to enter your departure city, destination, and dates. We'll show you the best available fares from our partners. Select your preferred option and complete the booking with your details." },
  { icon: RefreshCw, title: "Can I change or cancel my booking?", text: "Changes and cancellations depend on the fare rules of your ticket. Contact us with your booking reference and we'll check your options and assist you with any changes or refunds where applicable." },
];

export default function HelpPage() {
  return (
    <>
      <section className="relative bg-zinc-100 border-b border-zinc-200/80 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-10">
          <div className="max-w-6xl mx-auto">
            <img src="/banner/policy.jpeg" alt="Help Center" className="w-full h-auto rounded-3xl object-cover max-h-[320px]" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8">Find answers to common questions</h2>
            <div className="space-y-3">
              {helpItems.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-zinc-200/80 bg-white shadow-sm overflow-hidden hover:border-indigo-200/80 transition-colors">
                  <div className="p-6 md:px-6 md:py-5 flex gap-4">
                    <span className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1 text-base md:text-lg">{title}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-sm overflow-hidden hover:border-indigo-200/80 transition-colors">
                <div className="p-6 md:px-6 md:py-5 flex gap-4">
                  <span className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1 text-base md:text-lg">Need more help?</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Our support team is here for you. <Link href="/contact" className="text-indigo-600 font-medium hover:underline">Contact us</Link> and we&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
