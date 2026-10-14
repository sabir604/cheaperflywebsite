import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

export const metadata = { title: "Blog | CheaperFly" };

export default function BlogPage() {
  return (
    <>
      <section className="bg-zinc-100 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Blog</h1>
            <p className="mt-2 text-zinc-600 text-lg">Travel tips, destination guides, and the latest flight deals.</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200/80 p-10 md:p-14">
              <span className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mx-auto mb-6">
                <Newspaper className="w-8 h-8" />
              </span>
              <h2 className="text-xl font-semibold text-zinc-900 mb-2">Coming soon</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We&apos;re preparing travel tips, destination guides, and deal roundups. Check back soon or subscribe to our newsletter to be the first to know.
              </p>
              <Link href="/#newsletter" className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                Subscribe to newsletter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
