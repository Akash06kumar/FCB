import { motion } from "framer-motion";
import { Car, Heart, Package, ParkingCircle, ShoppingBag, Sparkles, Store, Truck, UtensilsCrossed, Accessibility } from "lucide-react";
import { SERVICES } from "../siteData";

const ICONS = { Truck, Car, ShoppingBag, Store, Sparkles, Package, UtensilsCrossed };

export const ServicesSection = () => (
  <section id="services" data-testid="services-section" className="py-16 md:py-24 bg-[#FAF6F0] text-[#1E1614]">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B45309] mb-3">However You Like It</p>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold leading-tight">
            Every way to enjoy your cake, <span className="italic text-[#EC4899]">covered</span>
          </h2>
          <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
            Walk in, drive through, dine in or get it delivered to your door — we make celebrations easy.
          </p>
          <div data-testid="service-badge-lgbtq" className="mt-8 inline-flex items-center gap-3 rounded-2xl px-5 py-4 bg-gradient-to-r from-[#FF597B] via-[#FF8E9E] to-[#FFC0D9] text-white shadow-lg">
            <Heart className="w-6 h-6 fill-white" />
            <div>
              <p className="font-bold text-sm">LGBTQ+ Friendly Space</p>
              <p className="text-xs opacity-90">Everyone is welcome at our counter, always.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.div
                  key={s.id}
                  data-testid={`service-badge-${s.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-[#E8DED2] p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#140F0E] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#D4AF37]" />
                  </span>
                  <p className="font-semibold text-sm">{s.label}</p>
                </motion.div>
              );
            })}
            <motion.div
              data-testid="service-badge-parking"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="bg-white rounded-2xl border border-[#E8DED2] p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="w-10 h-10 rounded-xl bg-[#140F0E] flex items-center justify-center">
                <ParkingCircle className="w-5 h-5 text-[#D4AF37]" />
              </span>
              <p className="font-semibold text-sm">Free Street Parking</p>
            </motion.div>
            <motion.div
              data-testid="service-badge-wheelchair"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-2xl border border-[#E8DED2] p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all sm:col-span-2"
            >
              <span className="w-10 h-10 rounded-xl bg-[#10B981] flex items-center justify-center">
                <Accessibility className="w-5 h-5 text-white" />
              </span>
              <p className="font-semibold text-sm">Wheelchair Accessible</p>
              <p className="text-xs text-neutral-500 -mt-2">Accessible car park, entrance & seating</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
