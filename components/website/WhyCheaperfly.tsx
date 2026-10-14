import { BadgePoundSterling, ListChecks, ShieldCheck } from "lucide-react";

export function WhyCheaperfly() {
  const benefits = [
    { icon: ListChecks, title: "Several Plans to Choose", text: "We offer a diverse selection of travel plans that include airfare and hotel packages.", iconBg: "bg-indigo-100 group-hover:bg-indigo-200", iconColor: "text-indigo-600" },
    { icon: BadgePoundSterling, title: "Lowest Prices", text: "We ensure you the best quality at the lowest prices.", iconBg: "bg-green-100 group-hover:bg-green-200", iconColor: "text-green-600" },
    { icon: ShieldCheck, title: "Trusted and Safe", text: "You make the final payment only after you get a confirmation of the flight.", iconBg: "bg-amber-100 group-hover:bg-amber-200", iconColor: "text-amber-600" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-30">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Why Book with <span className="text-indigo-600">CheaperFly</span>
            </h2>
            <div className="space-y-6">
              {benefits.map(({ icon: Icon, title, text, iconBg, iconColor }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition ${iconBg}`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/vgsNQHiwQNA?autoplay=0&loop=0&mute=0&rel=0&playlist=vgsNQHiwQNA&controls=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                title="CheaperFly video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
