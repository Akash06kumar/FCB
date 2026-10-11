import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Flame, Heart, MessageCircle, Sparkles, Sunrise } from "lucide-react";
import { FESTIVALS, SITE } from "../siteData";

const ICONS = { Sparkles, Flame, Sunrise, Heart };
const ROTATE_MS = 5000;

export const FestiveBanner = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setActive((a) => (a + 1) % FESTIVALS.length), ROTATE_MS);
    return () => clearInterval(timer.current);
  }, [paused, active]);

  const fest = FESTIVALS[active];
  const Icon = ICONS[fest.icon];
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(fest.waText)}`;

  return (
    <section
      data-testid="festive-banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={`relative overflow-hidden border-b border-[rgba(212,175,55,0.15)] transition-colors duration-700 ${fest.theme.bg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-10">
        <div data-testid="festival-tabs" className="flex flex-wrap gap-2 mb-6">
          {FESTIVALS.map((f, i) => {
            const TabIcon = ICONS[f.icon];
            const isActive = i === active;
            return (
              <button
                key={f.id}
                data-testid={`festival-tab-${f.id}`}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                  isActive
                    ? "bg-amber-50 text-[#140F0E] border-amber-50"
                    : "border-white/15 text-neutral-300 hover:border-[#D4AF37]/60 hover:text-amber-100"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                {f.name}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={fest.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${fest.theme.accent}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${fest.theme.accent}`}>Bulk Orders Open</span>
              </div>
              <h3 data-testid="festive-headline" className="font-serif-display text-2xl sm:text-3xl font-bold text-amber-50 leading-snug max-w-2xl">
                {fest.headline}
              </h3>
              <p className="mt-2 text-sm text-neutral-300 max-w-xl">{fest.sub}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {fest.chips.map((c) => (
                  <span key={c} className={`text-[11px] font-medium border rounded-full px-3 py-1.5 ${fest.theme.chip}`}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="festive-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#3ee07a] text-[#140F0E] font-semibold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Bulk Enquiry
              </a>
              <a
                href="#order"
                data-testid="festive-cta-enquiry"
                className="inline-flex items-center justify-center gap-2 border border-[rgba(212,175,55,0.5)] hover:border-[#D4AF37] text-amber-100 font-semibold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                Book via Order Form <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex gap-1.5 lg:justify-end pt-1">
                {FESTIVALS.map((f, i) => (
                  <span key={f.id} data-testid={`festival-dot-${f.id}`} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? `w-6 ${fest.theme.dot}` : "w-1.5 bg-white/20"}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
