import { BookOpenCheck, MapPin, PhoneCall, Wallet } from "lucide-react";

const items = [
  { icon: BookOpenCheck, title: "Expert Guidance", text: "Our team provides complete guidance on Umrah rituals and travel requirements, ensuring you are well-prepared." },
  { icon: MapPin, title: "Close to Haram", text: "We partner with top-rated hotels within walking distance of Haram in Makkah and Masjid an-Nabawi in Madinah." },
  { icon: Wallet, title: "Best Value", text: "Our customized packages offer the best value for money without compromising on quality or comfort." },
  { icon: PhoneCall, title: "24/7 Support", text: "Dedicated ground support team available 24/7 in Saudi Arabia to assist you with any needs during your stay." },
];

export function UmrahGuarantees() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose CheaperFly for Umrah?</h2>
          <p className="text-gray-600">We understand the importance of your spiritual journey and are dedicated to making it comfortable and hassle-free.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
