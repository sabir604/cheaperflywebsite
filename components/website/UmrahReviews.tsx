import { Star } from "lucide-react";

const reviews = [
  { name: "Ahmed K.", location: "London, UK", text: "Alhamdulillah, an amazing experience. The hotels were exactly as described, very close to the Haram. The ground team was very helpful.", initial: "A" },
  { name: "Sarah M.", location: "Manchester, UK", text: "Everything was organized perfectly from flights to visa and transport. Highly recommend CheaperFly for anyone planning Umrah.", initial: "S" },
  { name: "Mohammed Y.", location: "Birmingham, UK", text: "Great service and excellent communication throughout the booking process. Will definitely book again for my parents.", initial: "M" },
];

export function UmrahReviews() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4 md:px-30">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Hajis Say</h2>
          <p className="text-gray-600">Read experiences from pilgrims who trusted us with their sacred journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">{review.initial}</div>
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
