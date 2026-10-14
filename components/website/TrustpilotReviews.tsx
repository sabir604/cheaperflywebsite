import { Star, User } from "lucide-react";

const reviews = [
  { name: "Sarah J.", text: "Saved £200 on my flight to NY! basics simple and fast.", date: "2 days ago" },
  { name: "Mike T.", text: "Customer support was amazing when I needed to change my date.", date: "1 week ago" },
  { name: "Emma W.", text: "Best booking experience I have had in years.", date: "3 days ago" },
  { name: "David B.", text: "CheaperFly really lives up to its name.", date: "Just now" },
  { name: "Sarah J.", text: "Saved £200 on my flight to NY! basics simple and fast.", date: "2 days ago" },
  { name: "Mike T.", text: "Customer support was amazing when I needed to change my date.", date: "1 week ago" },
];

export function TrustpilotReviews() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-30">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">What Our Customers Say</h2>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="flex text-green-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.8/5 on Trustpilot</span>
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 mb-1 w-max min-w-full">
            {reviews.map((review, index) => (
              <div key={index} className="w-80 flex-shrink-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 snap-start">
                <p className="text-gray-700 text-sm mb-3">&ldquo;{review.text}&rdquo;</p>
                <div className="flex text-green-500 gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 flex-shrink-0 fill-current" />
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="font-bold flex items-center gap-1">
                    <User className="w-3 h-3" /> {review.name}
                  </span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
