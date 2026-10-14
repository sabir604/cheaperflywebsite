"use client";

import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/config";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setResult(null);

    const payload = {
      brand_id: 1,
      subject: "request callback",
      customer_name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      customer_email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      customer_phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      device: "web",
      status: "busy/call back later",
    };

    try {
      const res = await fetch("/api/inquiries/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ type: "success", message: "Thank you. Your message has been sent. We will get back to you soon." });
        form.reset();
      } else {
        const msg = data.errors ? Object.values(data.errors).flat().join(" ") : data.message || "Something went wrong. Please try again.";
        setResult({ type: "error", message: msg });
      }
    } catch {
      setResult({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Name</label>
            <input type="text" name="name" id="name" required placeholder="Your name" className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email</label>
            <input type="email" name="email" id="email" required placeholder="your@email.com" className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">Phone</label>
          <input type="tel" name="phone" id="phone" required placeholder="Your phone number" className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
          <textarea name="message" id="message" rows={5} required placeholder="How can we help you?" className="w-full px-4 py-3 border border-zinc-300 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow resize-none" />
        </div>
        <button type="submit" disabled={isSubmitting} className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center gap-2 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/30 disabled:opacity-75">
          {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          <span>{isSubmitting ? "Sending..." : "Send message"}</span>
        </button>
      </form>
      {result && (
        <p className={`mt-4 text-sm ${result.type === "success" ? "text-green-600" : "text-red-600"}`} role="alert">
          {result.message}
        </p>
      )}
    </>
  );
}

export function ContactDetails() {
  return (
    <div className="space-y-4">
      <a href={`tel:${SITE.phoneTel}`} className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-all duration-200 group">
        <span className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <Phone className="w-6 h-6" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-0.5">Phone</p>
          <p className="text-zinc-900 font-semibold group-hover:text-indigo-600 transition-colors">{SITE.phone}</p>
        </div>
      </a>
      <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-all duration-200 group">
        <span className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-0.5">Email</p>
          <p className="text-zinc-900 font-semibold group-hover:text-indigo-600 transition-colors break-all">{SITE.email}</p>
        </div>
      </a>
      <div className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200/80 bg-zinc-50/50">
        <span className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-0.5">Address</p>
          <p className="text-zinc-700 leading-relaxed">{SITE.address}</p>
        </div>
      </div>
    </div>
  );
}
