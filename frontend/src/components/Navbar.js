import { useState } from "react";
import { CakeSlice, Menu as MenuIcon, MessageCircle, Phone, Star, X } from "lucide-react";
import { SITE } from "../siteData";

const LINKS = [
  { href: "#menu", label: "Menu", testid: "nav-link-menu" },
  { href: "#services", label: "Services", testid: "nav-link-services" },
  { href: "#gallery", label: "Gallery", testid: "nav-link-gallery" },
  { href: "#reviews", label: "Reviews", testid: "nav-link-reviews" },
  { href: "#visit", label: "Visit Us", testid: "nav-link-location" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header data-testid="navbar" className="fixed top-0 inset-x-0 z-50 glass border-b border-[rgba(212,175,55,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/40 flex items-center justify-center">
            <CakeSlice className="w-5 h-5 text-[#EC4899]" />
          </span>
          <span className="font-serif-display font-bold text-lg text-amber-50 leading-none">
            FCB <span className="text-[#EC4899]">Cake Wala</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} data-testid={l.testid} className="text-sm text-neutral-300 hover:text-[#D4AF37] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgba(212,175,55,0.3)] text-xs">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="text-amber-100 font-semibold">{SITE.rating}</span>
            <span className="text-neutral-400">Google</span>
          </div>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-cta-whatsapp"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#3ee07a] text-[#140F0E] text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={`tel:${SITE.phone}`}
            data-testid="nav-cta-call"
            className="hidden sm:inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5B869] text-[#140F0E] text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-amber-50 p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-[rgba(212,175,55,0.15)] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} data-testid={`${l.testid}-mobile`} onClick={() => setOpen(false)} className="text-neutral-200 text-sm">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3">
            <a href={`tel:${SITE.phone}`} data-testid="nav-cta-call-mobile" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#140F0E] text-sm font-semibold px-4 py-2.5 rounded-full w-fit">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="nav-cta-whatsapp-mobile" className="inline-flex items-center gap-2 bg-[#25D366] text-[#140F0E] text-sm font-semibold px-4 py-2.5 rounded-full w-fit">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
