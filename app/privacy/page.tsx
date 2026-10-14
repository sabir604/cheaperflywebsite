import Link from "next/link";

export const metadata = { title: "Privacy Policy | CheaperFly" };

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-zinc-100 border-b border-zinc-200/80 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-10">
          <div className="max-w-6xl mx-auto">
            <img src="/banner/policy.jpeg" alt="Privacy Policy" className="w-full h-auto rounded-3xl object-cover max-h-[320px]" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-6xl mx-auto prose prose-zinc max-w-none">
            <p className="text-zinc-600 leading-relaxed">
              <strong><Link href="/" className="text-indigo-600 hover:underline">Cheaper Fly</Link></strong> is committed to protecting our customers&apos; privacy. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your data.
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Information We Collect</h2>
            <p className="text-zinc-600 leading-relaxed"><strong>Personal Information:</strong> We collect information that identifies you, such as your name, email address, phone number, mailing address, date of birth, passport information, and travel preferences (e.g., dietary restrictions, preferred seat). This information is collected when you book a flight, sign up for an account, or contact us.</p>
            <p className="text-zinc-600 leading-relaxed"><strong>Payment Information:</strong> We collect payment information, such as your credit card number, expiration date, and billing address, when you purchase a flight. This information is processed securely by a third-party payment processor and is not stored by <strong><Link href="/" className="text-indigo-600 hover:underline">Cheaper Fly</Link></strong>.</p>
            <p className="text-zinc-600 leading-relaxed"><strong>Device Information:</strong> We automatically collect information about your device, such as your IP address, browser type, operating system, and browsing activity on our website and mobile app. This information is used to improve our services and personalize your experience.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">How We Use Your Information</h2>
            <p className="text-zinc-600 leading-relaxed">We use your information to process and manage your flight bookings, send you booking confirmations and updates, provide customer support, and personalize your experience on our website and mobile app.</p>
            <p className="text-zinc-600 leading-relaxed">We may also use your information to send you marketing emails and promotions about our services and partners. You can opt out of receiving marketing communications at any time by clicking the &quot;unsubscribe&quot; link in our emails or contacting us.</p>
            <p className="text-zinc-600 leading-relaxed">We may use your information for fraud prevention and security purposes.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Information Sharing</h2>
            <p className="text-zinc-600 leading-relaxed">We will not share your personal information with third parties except in the following circumstances:</p>
            <p className="text-zinc-600 leading-relaxed"><strong>To fulfill your booking:</strong> We will share your information with airlines and other service providers to complete your flight booking.</p>
            <p className="text-zinc-600 leading-relaxed"><strong>For legal reasons:</strong> We may disclose your information if required by law, such as in response to a court order or subpoena.</p>
            <p className="text-zinc-600 leading-relaxed"><strong>For service providers:</strong> We may share your information with third-party service providers, such as data analytics and customer support providers, who help us operate our websites and mobile apps. These service providers are bound by contractual obligations to keep your information confidential.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Data Retention</h2>
            <p className="text-zinc-600 leading-relaxed">We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for legal, accounting, or reporting purposes. We will then securely delete your information.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Your Choices</h2>
            <p className="text-zinc-600 leading-relaxed">You have the right to access, correct, delete, restrict the processing of, and receive a copy of your personal information. You can also object to the processing of your personal information and withdraw your consent at any time. To exercise these rights, please <Link href="/contact" className="text-indigo-600 hover:underline">contact us</Link>.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Security</h2>
            <p className="text-zinc-600 leading-relaxed">We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no Internet transmission is completely secure, and we cannot guarantee the security of your information.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Changes to this Policy</h2>
            <p className="text-zinc-600 leading-relaxed">We may update this Privacy Policy from time to time. We will post any changes on our website and mobile app. We encourage you to review this Policy periodically for the latest information.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Contact Us</h2>
            <p className="text-zinc-600 leading-relaxed">If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-indigo-600 hover:underline">contact us</Link>.</p>
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-2">Thank you for choosing <Link href="/" className="text-indigo-600 hover:underline">Cheaper Fly</Link>!</h2>
            <p className="text-zinc-600 leading-relaxed">This is a general template for a privacy policy for an airline ticket booking agency. You may need to modify it to fit your needs and comply with applicable laws and regulations.</p>
          </div>
        </div>
      </section>
    </>
  );
}
