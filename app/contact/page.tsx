import { ContactDetails, ContactForm } from "@/components/website/ContactForm";

export const metadata = { title: "Contact Us | CheaperFly" };

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-zinc-100 border-b border-zinc-200/80 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img src="/banner/contact.jpeg" alt="Contact us" className="w-full h-auto object-cover max-h-[280px] md:max-h-[320px]" />
              <div className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-sm">Get in touch with us</h1>
                  <p className="mt-3 text-white/90 text-lg max-w-2xl mx-auto">We&apos;re here to help. Reach out by phone, email, or send us a message.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <ContactDetails />
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-lg shadow-zinc-200/50 p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-2">Send us a message</h2>
                  <p className="text-zinc-600 mb-6">Fill in the form below and we&apos;ll get back to you as soon as we can.</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-zinc-50/80 border-t border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Find us</h2>
            <div className="rounded-2xl overflow-hidden border border-zinc-200/80 shadow-lg bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.590666384004!2d-0.12461267378186867!3d51.520725309730345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b36a3a24b4b%3A0x567fc1f6dfb81353!2sBritish%20Monomarks!5e0!3m2!1sen!2sin!4v1692854187099!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
