import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Phone, Star, Truck } from "lucide-react";
import { IMAGES, SITE } from "../siteData";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
    <div className="absolute inset-0">
      <img src={IMAGES.shopFront} alt="FCB Cake Wala neon storefront at night" className="w-full h-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#140F0E]/70 via-[#140F0E]/80 to-[#140F0E]" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
      <div className="lg:col-span-7">
        <motion.div {...fadeUp(0)} data-testid="hero-rating-badge" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(212,175,55,0.35)] bg-[#1E1614]/80 mb-7">
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </span>
          <span className="text-sm text-amber-100 font-semibold">{SITE.rating}/5 on Google</span>
          <span className="text-xs text-neutral-400">· {SITE.reviewCount} reviews</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} data-testid="hero-title" className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-amber-50">
          Aurangabad's most loved
          <span className="block gold-text italic">bakery & cake studio</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} data-testid="hero-subtitle" className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
          From our iconic <span className="text-[#F472B6] font-medium neon-pink-glow">Royal Special Cake</span> to fresh-fruit classics — every cake is baked
          in-house on MG Road and customised for your celebration. <span className="text-amber-100 font-medium">{SITE.tagline}.</span>
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#order"
            data-testid="hero-btn-custom-order"
            className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#F472B6] text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-[0_0_35px_rgba(236,72,153,0.35)]"
          >
            Order a Custom Cake
          </a>
          <a
            href="#menu"
            data-testid="hero-btn-view-menu"
            className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.5)] hover:border-[#D4AF37] text-amber-100 font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
          >
            View Menu & Prices
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-btn-whatsapp"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#3ee07a] text-[#140F0E] font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Order
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.4)} data-testid="hero-info-pills" className="mt-10 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-[#1E1614]/80 border border-white/10 px-3.5 py-2 rounded-full">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Open Daily · {SITE.hours}
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-[#1E1614]/80 border border-white/10 px-3.5 py-2 rounded-full">
            <Truck className="w-3.5 h-3.5 text-[#D4AF37]" /> Delivery · Takeaway · Dine-in
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-[#1E1614]/80 border border-white/10 px-3.5 py-2 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> MG Rd, Aurangabad
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        className="lg:col-span-5 relative"
      >
        <div className="relative rounded-[2rem] overflow-hidden border border-[rgba(212,175,55,0.3)] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <img src={IMAGES.pinkCake} alt="Royal Special two-tier pink floral cake by FCB Cake Wala" className="w-full h-[440px] sm:h-[520px] object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#140F0E] to-transparent p-6 pt-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[#EC4899] font-semibold">Signature</p>
            <p className="font-serif-display text-2xl text-amber-50 font-bold">Royal Special Cake</p>
          </div>
        </div>
        <a
          href={`tel:${SITE.phone}`}
          data-testid="hero-call-fab"
          className="absolute -bottom-5 left-6 inline-flex items-center gap-2 bg-[#D4AF37] text-[#140F0E] font-semibold text-sm px-5 py-3 rounded-full shadow-xl hover:bg-[#E5B869] transition-colors"
        >
          <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
        </a>
      </motion.div>
    </div>
  </section>
);
