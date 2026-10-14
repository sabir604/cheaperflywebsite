import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/faq-data";

export const metadata = { title: "FAQ | CheaperFly" };

export default function FaqPage() {
  return (
    <>
      <section className="relative bg-zinc-100 border-b border-zinc-200/80 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-10">
          <div className="max-w-6xl mx-auto">
            <img src="/banner/faq.jpeg" alt="FAQ" className="w-full h-auto rounded-3xl object-cover max-h-[320px]" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-zinc-200/80 bg-white shadow-sm overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 cursor-pointer list-none text-left font-semibold text-zinc-900 hover:bg-zinc-50/80 transition-colors [&::-webkit-details-marker]:hidden">
                      <span className="text-base md:text-lg">{item.question}</span>
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 pt-0 md:px-6 md:pb-6 md:pt-0 border-t border-zinc-100">
                      {item.answerHtml ? (
                        <div className="text-zinc-600 leading-relaxed pt-4 space-y-3" dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
                      ) : (
                        <p className="text-zinc-600 leading-relaxed pt-4">{item.answer}</p>
                      )}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
