import { Plane } from "lucide-react";
import { aboutBlocks } from "@/lib/about-blocks";

export const metadata = { title: "About Us | CheaperFly" };

export default function AboutPage() {
  const firstBlock = aboutBlocks[0];
  const heroBgUrl = firstBlock.image ? `/${firstBlock.image}` : "https://picsum.photos/seed/about-hero/1920/700";

  return (
    <>
      <section className="relative min-h-[420px] md:min-h-[500px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBgUrl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-900/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">We Love Travel</h1>
              {firstBlock.message && (
                <div className="mt-6 p-6 md:p-8 bg-white/95 backdrop-blur rounded-2xl shadow-xl max-w-2xl">
                  <div className="about-prose" dangerouslySetInnerHTML={{ __html: firstBlock.message }} />
                </div>
              )}
            </div>
            <div className="hidden md:flex md:col-span-5 justify-center">
              <div className="w-48 h-48 rounded-full bg-indigo-500/30 backdrop-blur flex items-center justify-center border-2 border-white/30">
                <Plane className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {aboutBlocks.slice(1).map((block, index) => {
        const imageUrl = block.image ? `/${block.image}` : `https://picsum.photos/seed/about${index + 2}/800/500`;
        const textLeft = index % 2 === 0;

        return (
          <section key={block.sort_order} className={`py-14 md:py-20 ${index % 2 === 1 ? "bg-zinc-50/90" : "bg-white"}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {block.image ? (
                  <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {textLeft ? (
                      <>
                        <div className="about-prose prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: block.message }} />
                        <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-zinc-200/80">
                          <img src={imageUrl} alt="" className="w-full h-auto aspect-[4/3] object-cover" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-zinc-200/80">
                          <img src={imageUrl} alt="" className="w-full h-auto aspect-[4/3] object-cover" />
                        </div>
                        <div className="order-1 md:order-2 md:pl-4 about-prose prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: block.message }} />
                      </>
                    )}
                  </div>
                ) : (
                  <div className="max-w-3xl mx-auto">
                    <div className="about-prose prose prose-lg max-w-none bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-zinc-200/80" dangerouslySetInnerHTML={{ __html: block.message }} />
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
