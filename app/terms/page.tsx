import Link from "next/link";

export const metadata = { title: "Terms of Service | CheaperFly" };

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-zinc-100 border-b border-zinc-200/80 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-10">
          <div className="max-w-6xl mx-auto">
            <img src="/banner/terms.jpeg" alt="Terms of Service" className="w-full h-auto rounded-3xl object-cover max-h-[320px]" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-6xl mx-auto prose prose-zinc max-w-none">
            <p className="text-zinc-600 leading-relaxed">
              Welcome to <strong><Link href="/" className="text-indigo-600 hover:underline">Cheaper Fly</Link></strong>, your one-stop shop for finding and booking affordable flights worldwide. We&apos;re thrilled you&apos;ve chosen us for your travel journey! These Terms of Service (&quot;Terms&quot;) outline the agreement between you and <strong><Link href="/" className="text-indigo-600 hover:underline">Cheaper Fly</Link></strong> regarding your use of our website, mobile app, and other services (collectively referred to as the &quot;Platform&quot;).
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">1. Scope of Services</h2>
            <p className="text-zinc-600 leading-relaxed"><strong>1.1</strong> We act as a facilitator, connecting you with airlines and other travel service providers (&quot;Airline&quot;) to search for and book flight tickets. We do not own or operate any airlines or flights listed on our Platform.</p>
            <p className="text-zinc-600 leading-relaxed"><strong>1.2</strong> All bookings made through the Platform are governed by the terms and conditions of the respective Supplier, including cancellation and refund policies.</p>
            <p className="text-zinc-600 leading-relaxed"><strong>1.3</strong> We assume no responsibility for any issues arising from your flight, such as cancellations, delays, or missed connections. In such cases, you must contact the Supplier directly for assistance.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">3. Check Your Details</h2>
            <p className="text-zinc-600 leading-relaxed">It is your responsibility to check all the details are correct i.e., Passenger names (are same as appearing on passport/travel docs), Travelling dates, Transit Time, Origin and destination, Stop Over, Baggage Allowance, and other flight information. Once the ticket is issued then no changes can be made.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">5. Cancellations and Refunds</h2>
            <p className="text-zinc-600 leading-relaxed"><strong>5.1</strong> All cancellations and refund requests are subject to the Airline cancellation and refund policy. We have no authority to make changes or exceptions to these policies.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">6. Fees and Payments</h2>
            <p className="text-zinc-600 leading-relaxed"><strong>6.1</strong> The price you pay for your flight will be displayed on the Platform before you confirm your booking. This price includes all the taxes and Basic Fare as per Airline policy.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">7. User Conduct</h2>
            <p className="text-zinc-600 leading-relaxed"><strong>7.1</strong> You agree to use the Platform by these Terms and applicable laws and regulations.</p>
            <div className="mt-10 pt-6 border-t border-zinc-200">
              <p className="text-zinc-600 leading-relaxed">For questions about these terms, please <Link href="/contact" className="text-indigo-600 font-medium hover:underline">contact us</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
