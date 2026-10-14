import Link from "next/link";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-50 border-t border-zinc-200/80 pt-16 pb-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-5 group">
              <img src="/images/cheaperfly-logo.png" alt="CheaperFly" className="h-12 w-auto max-w-[280px] object-contain group-hover:opacity-90 transition-opacity duration-200" />
            </Link>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
              Making the world accessible to everyone. We find the best flight deals so you can explore more for less.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/cheaperflyuk" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-white border border-zinc-100 shadow-sm text-[#1877F2] hover:bg-blue-50 hover:border-blue-100 transition-all duration-200">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-lg bg-white border border-zinc-100 shadow-sm text-black hover:bg-gray-50 hover:border-gray-200 transition-all duration-200">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/cheaper.fly/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-white border border-zinc-100 shadow-sm text-[#E4405F] hover:bg-pink-50 hover:border-pink-100 transition-all duration-200">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/privacy" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/blog" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/help" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors duration-200">Help Center</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors duration-200">Contact Us</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>

          <div id="newsletter" className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Newsletter</h4>
            <p className="text-zinc-600 text-sm mb-4">Get the latest deals and offers directly to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-2" action="#" method="post">
              <input type="email" name="email" placeholder="Your email" required className="flex-1 min-w-0 px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200" />
              <button type="submit" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-200/80 pt-8 flex justify-center items-center gap-4">
          <p className="text-center text-sm text-zinc-500">&copy; {year} CheaperFly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
