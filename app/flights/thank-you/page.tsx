import Link from "next/link";

export const metadata = { title: "Flights Thank You | CheaperFly" };

export default function FlightsThankYouPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank you!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your inquiry has been received. Our travel experts will contact you shortly with the best available options.
        </p>
        <Link href="/" className="inline-flex px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
