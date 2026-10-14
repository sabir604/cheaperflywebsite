import Link from "next/link";

const packages = [
  { name: "Five Star Package", price: "879", img: "/banner/umrah/3.jpg" },
  { name: "4 Star Package", price: "779", img: "/banner/umrah/4.jpg" },
  { name: "3 Star Package", price: "679", img: "/banner/umrah/5.jpg" },
  { name: "Economy Package", price: "679", img: "/banner/umrah/1.jpg" },
  { name: "Five Star Package", price: "879", img: "/banner/umrah/2.jpg" },
];

export function HomeSeasonalPackages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-30">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-1">
          Seasonal <span className="text-indigo-600">Packages</span>
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">
          Plan, book, and embark on your dream adventure with our expert guidance and tailored experiences.
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[420px]">
          <Link href="/umrah" className="row-span-1 group cursor-pointer relative overflow-hidden rounded-2xl">
            <img src={packages[0].img} alt={packages[0].name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{packages[0].name}</h3>
              <span className="text-white/80 text-sm">From £{packages[0].price}/person</span>
            </div>
          </Link>
          <Link href="/umrah" className="row-span-2 group cursor-pointer relative overflow-hidden rounded-2xl">
            <img src={packages[1].img} alt={packages[1].name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">{packages[1].name}</h3>
              <span className="text-white/80 text-sm">From £{packages[1].price}/person</span>
            </div>
          </Link>
          <Link href="/umrah" className="row-span-1 group cursor-pointer relative overflow-hidden rounded-2xl">
            <img src={packages[2].img} alt={packages[2].name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{packages[2].name}</h3>
              <span className="text-white/80 text-sm">From £{packages[2].price}/person</span>
            </div>
          </Link>
          <Link href="/umrah" className="row-span-1 group cursor-pointer relative overflow-hidden rounded-2xl">
            <img src={packages[3].img} alt={packages[3].name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{packages[3].name}</h3>
              <span className="text-white/80 text-sm">From £{packages[3].price}/person</span>
            </div>
          </Link>
          <Link href="/umrah" className="row-span-1 group cursor-pointer relative overflow-hidden rounded-2xl">
            <img src={packages[4].img} alt={packages[4].name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{packages[4].name}</h3>
              <span className="text-white/80 text-sm">From £{packages[4].price}/person</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
