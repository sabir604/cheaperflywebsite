import { Globe, Headphones, Monitor, PoundSterling, ShieldAlert, ShieldCheck, Tag, Users } from "lucide-react";

const topItems = [
  { icon: Globe, title: "Established since 1986", bg: "bg-orange-100", color: "text-orange-600" },
  { icon: ShieldCheck, title: "ATOL & ABTA Protected", bg: "bg-indigo-100", color: "text-indigo-600" },
  { icon: Users, title: <>Trusted by over <strong>2.5 million</strong> happy travellers</>, bg: "bg-yellow-100", color: "text-yellow-600" },
  { icon: ShieldAlert, title: "Online Safety Notice", bg: "bg-red-100", color: "text-red-600" },
  { icon: Tag, title: "Best price guarantee", bg: "bg-gray-100", color: "text-gray-600" },
  { icon: Headphones, title: "24x7 customer support", bg: "bg-blue-100", color: "text-blue-600" },
];

export function GuaranteeCards() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topItems.map(({ icon: Icon, title, bg, color }) => (
            <div key={String(title)} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
              <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center ${color} shrink-0`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: PoundSterling, title: "Best Price Guarantee", text: "Find our lowest price to destinations worldwide, guaranteed", bg: "bg-indigo-100", color: "text-indigo-600" },
            { icon: Monitor, title: "Easy Booking", text: "Search, select and save - the fastest way to book your trip", bg: "bg-green-100", color: "text-green-600" },
            { icon: Headphones, title: "24/7 Customer Care", text: <>Receive free support from our friendly and reliable team by calling <strong>0208 819 1111</strong></>, bg: "bg-amber-100", color: "text-amber-600" },
          ].map(({ icon: Icon, title, text, bg, color }) => (
            <div key={title} className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 hover:shadow-lg transition group">
              <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition`}>
                <Icon className={`w-8 h-8 ${color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
