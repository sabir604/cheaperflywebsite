"use client";

import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import {
  Armchair, Calendar, Check, ChevronDown, Loader2, Mail, MapPin, Minus, Phone, Plane, PlaneLanding,
  PlaneTakeoff, Plus, Search, User, Users,
} from "lucide-react";
import type { AirportResult } from "@/components/providers/DestinationModalProvider";

const countryCodes = [
  { code: "+44", country: "UK" },
  { code: "+1", country: "USA" },
  { code: "+971", country: "UAE" },
  { code: "+92", country: "PK" },
  { code: "+91", country: "IN" },
  { code: "+966", country: "SA" },
  { code: "+61", country: "AU" },
  { code: "+33", country: "FR" },
  { code: "+49", country: "DE" },
];

type Props = {
  defaultClass?: "Economy" | "Business" | "First";
};

export function FlightSearchFormAdvanced({ defaultClass = "Economy" }: Props) {
  const [tripType, setTripType] = useState<"return" | "oneway">("return");
  const [showPassengersPopup, setShowPassengersPopup] = useState(false);
  const [showClassPopup, setShowClassPopup] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedClass, setSelectedClass] = useState(defaultClass);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [toCode, setToCode] = useState("");
  const [fromResults, setFromResults] = useState<AirportResult[]>([]);
  const [toResults, setToResults] = useState<AirportResult[]>([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [isSearchingFrom, setIsSearchingFrom] = useState(false);
  const [isSearchingTo, setIsSearchingTo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const fpRef = useRef<flatpickr.Instance | null>(null);
  const debounceFrom = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debounceTo = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!dateInputRef.current) return;
    fpRef.current?.destroy();
    fpRef.current = flatpickr(dateInputRef.current, {
      dateFormat: "Y-m-d",
      minDate: "today",
      mode: tripType === "return" ? "range" : "single",
      onChange: (selectedDates) => {
        if (tripType === "return" && selectedDates.length === 2) {
          setDepartDate(selectedDates[0].toISOString().split("T")[0]);
          setReturnDate(selectedDates[1].toISOString().split("T")[0]);
        } else if (tripType === "oneway" && selectedDates.length === 1) {
          setDepartDate(selectedDates[0].toISOString().split("T")[0]);
          setReturnDate("");
        }
      },
    });
    return () => {
      fpRef.current?.destroy();
    };
  }, [tripType]);

  const searchAirports = async (query: string, setResults: (r: AirportResult[]) => void, setLoading: (v: boolean) => void, setShow: (v: boolean) => void) => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/airports/search?search=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
      setShow(true);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const submitSearch = async () => {
    if (isSubmitting) return;
    if (!fromCode || !toCode) {
      alert("Please select valid origin and destination from the list.");
      return;
    }
    if (!departDate) {
      alert("Please select departure date.");
      return;
    }
    setIsSubmitting(true);

    const inquiryPayload = {
      brand_id: 1,
      subject: "flight inquiry",
      customer_name: name || "Website Guest",
      customer_email: email || "guest@cheaperfly.com",
      customer_phone: phone && phone.length > 3 ? countryCode + phone : "0000000000",
      flight_from: fromQuery,
      flight_to: toQuery,
      ticket_type: tripType === "oneway" ? "one-way" : "return",
      ticket_class: selectedClass.toLowerCase(),
      departure_date: departDate,
      return_date: returnDate || null,
      adults,
      children,
      infant: infants,
    };

    const params = new URLSearchParams({
      departure_id: fromCode,
      arrival_id: toCode,
      outbound_date: departDate,
      return_date: returnDate || "",
      adults: String(adults),
      children: String(children),
      infants: String(infants),
      travel_class: selectedClass.toLowerCase(),
      type: tripType === "return" ? "1" : "2",
    });

    try {
      await fetch("/api/inquiries/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(inquiryPayload),
      });
    } catch (error) {
      console.error("Inquiry error:", error);
    } finally {
      window.location.href = `/flights/search?${params.toString()}`;
    }
  };

  const AirportDropdown = ({
    results,
    onSelect,
  }: {
    results: AirportResult[];
    onSelect: (item: AirportResult) => void;
  }) => (
    <ul>
      {results.map((item) => (
        <li
          key={`${item.code}-${item.label}`}
          onClick={() => onSelect(item)}
          className="cursor-pointer px-4 py-3 hover:bg-indigo-50 border-b border-gray-50 last:border-0 flex items-center justify-between group transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition">
              {item.type === "city" ? <MapPin className="w-4 h-4" /> : <Plane className="w-4 h-4" />}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">{item.label}</span>
              <span className="text-xs text-gray-500">{item.location}</span>
            </div>
          </div>
          <span className="text-xs font-bold text-gray-400 group-hover:text-indigo-500 px-2 py-1 rounded bg-gray-100 group-hover:bg-indigo-100 transition">
            {item.code}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative z-20 container mx-auto px-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-5 max-w-5xl mx-auto transform transition-all border border-white/20">
        <div className="flex gap-4 mb-4">
          {(["return", "oneway"] as const).map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="trip_type" value={type} checked={tripType === type} onChange={() => setTripType(type)} className="hidden" />
              <span className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-indigo-500 transition ${tripType === type ? "border-indigo-600 bg-indigo-600" : ""}`}>
                {tripType === type && <Check className="w-3 h-3 text-white" />}
              </span>
              <span className="font-medium text-white/90 group-hover:text-indigo-300 capitalize">{type === "oneway" ? "Oneway" : "Return"}</span>
            </label>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitSearch();
          }}
          className="space-y-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="relative">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">From</label>
              <div className="relative">
                <PlaneTakeoff className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Origin"
                  value={fromQuery}
                  onChange={(e) => {
                    setFromQuery(e.target.value);
                    if (debounceFrom.current) clearTimeout(debounceFrom.current);
                    debounceFrom.current = setTimeout(() => searchAirports(e.target.value, setFromResults, setIsSearchingFrom, setShowFromDropdown), 300);
                  }}
                  onFocus={() => fromResults.length > 0 && setShowFromDropdown(true)}
                  onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
                  required
                  className="w-full pl-10 pr-2 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium placeholder-gray-400 truncate text-sm"
                />
                {isSearchingFrom && <Loader2 className="absolute right-3 top-3 w-5 h-5 text-gray-400 animate-spin" />}
                {showFromDropdown && fromResults.length > 0 && (
                  <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border overflow-hidden max-h-80 overflow-y-auto w-[300px] md:w-[400px]">
                    <AirportDropdown results={fromResults} onSelect={(item) => { setFromQuery(item.label); setFromCode(item.code); setShowFromDropdown(false); }} />
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">To</label>
              <div className="relative">
                <PlaneLanding className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Dest"
                  value={toQuery}
                  onChange={(e) => {
                    setToQuery(e.target.value);
                    if (debounceTo.current) clearTimeout(debounceTo.current);
                    debounceTo.current = setTimeout(() => searchAirports(e.target.value, setToResults, setIsSearchingTo, setShowToDropdown), 300);
                  }}
                  onFocus={() => toResults.length > 0 && setShowToDropdown(true)}
                  onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
                  required
                  className="w-full pl-10 pr-2 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium placeholder-gray-400 truncate text-sm"
                />
                {isSearchingTo && <Loader2 className="absolute right-3 top-3 w-5 h-5 text-gray-400 animate-spin" />}
                {showToDropdown && toResults.length > 0 && (
                  <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border overflow-hidden max-h-80 overflow-y-auto w-[300px] md:w-[400px]">
                    <AirportDropdown results={toResults} onSelect={(item) => { setToQuery(item.label); setToCode(item.code); setShowToDropdown(false); }} />
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">
                {tripType === "return" ? "Depart - Return" : "Depart"}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  ref={dateInputRef}
                  type="text"
                  placeholder={tripType === "return" ? "Select date range" : "Select date"}
                  readOnly
                  required
                  className="w-full pl-10 pr-2 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium cursor-pointer placeholder-gray-400 truncate text-sm"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">
                Passengers ({adults + children + infants})
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  readOnly
                  onClick={() => setShowPassengersPopup(!showPassengersPopup)}
                  value={`Passengers (${adults + children + infants})`}
                  className="w-full pl-10 pr-2 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium cursor-pointer text-sm"
                />
                {showPassengersPopup && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border p-4 min-w-[250px] z-50">
                    {[
                      { label: "Adult", value: adults, set: setAdults },
                      { label: "Child", value: children, set: setChildren },
                      { label: "Infant", value: infants, set: setInfants },
                    ].map(({ label, value, set }) => (
                      <div key={label} className="flex items-center justify-between mb-4 last:mb-0">
                        <span className="text-sm font-medium text-gray-700">{label}</span>
                        <div className="flex items-center gap-3">
                          <button type="button" onClick={() => set(Math.max(0, value - 1))} className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">{value}</span>
                          <button type="button" onClick={() => set(Math.min(9, value + 1))} className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">Class</label>
              <div className="relative">
                <Armchair className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  readOnly
                  onClick={() => setShowClassPopup(!showClassPopup)}
                  value={selectedClass}
                  className="w-full pl-10 pr-2 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium cursor-pointer text-sm"
                />
                {showClassPopup && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border p-4 min-w-[200px] z-50 space-y-2">
                    {(["Economy", "Business", "First"] as const).map((cls) => (
                      <label key={cls} onClick={() => { setSelectedClass(cls); setShowClassPopup(false); }} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                        <input type="radio" checked={selectedClass === cls} readOnly className="text-indigo-600" />
                        <span className="text-sm">{cls}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/20 grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">Your Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full pl-10 pr-4 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium" />
              </div>
            </div>
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 pr-4 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium" />
              </div>
            </div>
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-white uppercase tracking-wide mb-1 drop-shadow-sm">Phone</label>
              <div className="relative flex">
                <div className="relative">
                  <div onClick={() => setShowCountryDropdown(!showCountryDropdown)} className="flex items-center gap-1 cursor-pointer bg-white/60 backdrop-blur-sm border border-white/20 border-r-0 rounded-l-lg py-2.5 px-2 w-[70px] hover:bg-white/70 transition h-full justify-center">
                    <span className="text-sm font-medium text-gray-700">{countryCode}</span>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                  </div>
                  {showCountryDropdown && (
                    <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-xl border z-50 max-h-48 overflow-y-auto w-32">
                      {countryCodes.map((c) => (
                        <div key={c.code} onClick={() => { setCountryCode(c.code); setShowCountryDropdown(false); }} className="px-3 py-2 cursor-pointer hover:bg-indigo-50 flex items-center justify-between text-sm text-gray-700">
                          <span>{c.code}</span>
                          <span className="text-xs text-gray-500">{c.country}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative w-full">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="tel" placeholder="123 456789" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full pl-10 pr-4 py-2.5 bg-white/60 backdrop-blur-sm border border-white/20 rounded-r-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 font-medium" />
                </div>
              </div>
            </div>
            <div className="md:col-span-3 w-full">
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition transform hover:scale-[1.02] shadow-xl shadow-indigo-600/30 disabled:opacity-75 disabled:cursor-not-allowed">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                <span>{isSubmitting ? "Submitting..." : "Search Flights"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
