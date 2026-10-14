"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type DestinationModalContextValue = {
  openDestinationModal: (to: string) => void;
};

const DestinationModalContext = createContext<DestinationModalContextValue | null>(null);

export function useDestinationModal() {
  const ctx = useContext(DestinationModalContext);
  if (!ctx) throw new Error("useDestinationModal must be used within DestinationModalProvider");
  return ctx;
}

export function DestinationModalProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fromResults, setFromResults] = useState<AirportResult[]>([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [isSearchingFrom, setIsSearchingFrom] = useState(false);

  const openDestinationModal = useCallback((destination: string) => {
    setTo(destination);
    setFrom("");
    setName("");
    setEmail("");
    setPhone("");
    setError("");
    setFromResults([]);
    setShowFromDropdown(false);
    setShow(true);
  }, []);

  const close = () => setShow(false);

  const searchFrom = async (query: string) => {
    const q = query.trim();
    if (q.length < 2) {
      setFromResults([]);
      setShowFromDropdown(false);
      return;
    }
    setIsSearchingFrom(true);
    try {
      const res = await fetch(`/airports/search?search=${encodeURIComponent(q)}`);
      const data = await res.json();
      setFromResults(data || []);
      setShowFromDropdown(true);
    } catch {
      setFromResults([]);
    } finally {
      setIsSearchingFrom(false);
    }
  };

  const submit = async () => {
    setError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          brand_id: 1,
          subject: "flight inquiry",
          flight_from: from,
          flight_to: to,
          ticket_type: "one-way",
          ticket_class: "economy",
          adults: 1,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          message: "Destination deal inquiry from website",
          device: "web",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.errors ? Object.values(data.errors).flat().join(" ") : data.message || "Something went wrong.");
        setIsSubmitting(false);
        return;
      }
      window.location.href = "/flights/thank-you";
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <DestinationModalContext.Provider value={{ openDestinationModal }}>
      {children}
      {show && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50" onClick={close} />
            <div className="relative bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Flight inquiry</h3>
                <button type="button" onClick={close} className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition">
                  ✕
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <input
                      type="text"
                      value={from}
                      onChange={(e) => {
                        setFrom(e.target.value);
                        searchFrom(e.target.value);
                      }}
                      placeholder="Search city or airport"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                    />
                    {showFromDropdown && fromResults.length > 0 && (
                      <div className="absolute z-10 mt-1 w-full rounded-lg border bg-white shadow-lg max-h-48 overflow-y-auto">
                        {fromResults.map((item) => (
                          <button
                            key={`${item.code}-${item.label}`}
                            type="button"
                            onClick={() => {
                              setFrom(item.label);
                              setShowFromDropdown(false);
                              setFromResults([]);
                            }}
                            className="w-full text-left px-3 py-2.5 text-sm hover:bg-gray-100"
                          >
                            <span className="font-medium block">{item.label}</span>
                            <span className="text-xs text-gray-500">{item.location}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    {isSearchingFrom && <div className="absolute right-3 top-9 text-gray-400 text-xs">...</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <input
                      type="text"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder="e.g. Cape Town"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto py-2.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </DestinationModalContext.Provider>
  );
}

export type AirportResult = {
  label: string;
  code: string;
  location: string;
  type: string;
};
