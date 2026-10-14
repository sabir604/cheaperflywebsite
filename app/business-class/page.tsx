import { FlightSearchFormAdvanced } from "@/components/website/FlightSearchFormAdvanced";
import { businessHighlights, businessIntro, globalIntro } from "@/lib/business-class-data";

export const metadata = { title: "Business Class | CheaperFly" };

export default function BusinessClassPage() {
  return (
    <>
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/business/bussiness_class.jpeg')" }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-4 md:px-30 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white mb-10 md:mb-14">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Book Business Class</h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Fly in comfort and style with tailored business class experiences from London to the world.
            </p>
          </div>
          <FlightSearchFormAdvanced defaultClass="Business" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">{businessIntro.title}</h2>
            <p className="text-base md:text-lg font-semibold text-indigo-600 mb-4 leading-snug">{businessIntro.heading}</p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">{businessIntro.text}</p>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Highlights of Our Package</h3>
            <p className="text-sm text-gray-500">Enjoy these features with our business‑class travel packages:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {businessHighlights.map((item, index) => (
              <div
                key={item.heading}
                className="bc-card bg-white rounded-2xl p-9 border border-gray-100 shadow-sm"
                style={{ "--card-accent": item.color, animation: `fadeUp .55s ${0.1 + index * 0.08}s ease both`, opacity: 0, animationFillMode: "both" } as React.CSSProperties}
              >
                <div className="bc-icon-wrap mb-6">
                  <div className="bc-icon-ring w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)` }}>
                    <img src={item.img} alt={item.heading} className="w-9 h-9 object-contain" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.heading}</h4>
                <p className="text-base text-gray-500 leading-relaxed">{item.desp}</p>
                <div className="mt-5 h-0.5 rounded-full opacity-20" style={{ background: item.color }} />
              </div>
            ))}
          </div>

          <div className="mt-20 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-violet-400 to-purple-400" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative px-8 py-12 md:py-14 md:px-16 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{globalIntro.heading}</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl whitespace-pre-line">{globalIntro.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
