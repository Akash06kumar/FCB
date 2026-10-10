import { Accessibility, CakeSlice, Heart, MapPin, Phone } from "lucide-react";
import { SITE } from "../siteData";

export const Footer = () => (
  <>
    <footer data-testid="footer-section" className="bg-[#0D0A09] border-t border-[rgba(212,175,55,0.15)] pt-16 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/40 flex items-center justify-center">
                <CakeSlice className="w-5 h-5 text-[#EC4899]" />
              </span>
              <span className="font-serif-display font-bold text-xl text-amber-50">
                FCB <span className="text-[#EC4899]">Cake Wala</span>
              </span>
            </div>
            <p className="font-serif-display italic text-2xl gold-text mb-4">"{SITE.tagline}"</p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Bakery & cake shop on MG Road, Aurangabad. Rated {SITE.rating}/5 on Google. Custom cakes, pastries and celebration
              essentials — baked fresh, every day from 9 AM to 9 PM.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 border border-white/10 px-3 py-1.5 rounded-full">
                <Heart className="w-3.5 h-3.5 text-[#EC4899]" /> LGBTQ+ friendly
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 border border-white/10 px-3 py-1.5 rounded-full">
                <Accessibility className="w-3.5 h-3.5 text-emerald-400" /> Wheelchair accessible
              </span>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-4">Visit Us</h4>
            <p className="text-sm text-neutral-400 leading-relaxed flex gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#EC4899]" /> {SITE.address}
            </p>
            <p className="text-sm text-neutral-400 mt-3">Open daily · {SITE.hours}</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-4">Order Now</h4>
            <a href={`tel:${SITE.phone}`} data-testid="footer-call-btn" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-[#D4AF37] transition-colors mb-3">
              <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
            </a>
            <nav className="flex flex-col gap-2 text-sm text-neutral-400">
              <a href="#menu" className="hover:text-amber-100 transition-colors">Menu</a>
              <a href="#order" className="hover:text-amber-100 transition-colors">Custom Orders</a>
              <a href="#visit" className="hover:text-amber-100 transition-colors">Directions</a>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} FCB Cake Wala, Aurangabad, Bihar. All rights reserved.</p>
          <p>FSSAI-registered bakery · Pure veg options available</p>
        </div>
      </div>
    </footer>

    <div data-testid="mobile-quick-bar" className="md:hidden fixed bottom-0 inset-x-0 z-50 glass border-t border-[rgba(212,175,55,0.2)] px-4 py-3 flex gap-3">
      <a href={`tel:${SITE.phone}`} data-testid="footer-call-btn-mobile" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#140F0E] font-semibold text-sm py-3 rounded-full">
        <Phone className="w-4 h-4" /> Call Shop
      </a>
      <a href="#order" data-testid="footer-order-btn-mobile" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#EC4899] text-white font-semibold text-sm py-3 rounded-full">
        <CakeSlice className="w-4 h-4" /> Order Cake
      </a>
    </div>
  </>
);
