import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MENU } from "../siteData";

export const MenuSection = () => (
  <section id="menu" data-testid="menu-section" className="py-16 md:py-24 bg-[#1E1614] relative grain-overlay">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#EC4899] mb-3">Baked Fresh Daily</p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-50">
            The menu Aurangabad <span className="gold-text italic">keeps coming back for</span>
          </h2>
        </div>
        <p className="text-sm text-neutral-400 max-w-sm">
          Every cake made to order in our own kitchen. Eggless variants, custom messages and photo cakes available on request.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MENU.map((item, i) => (
          <motion.article
            key={item.id}
            data-testid={`menu-card-${item.id}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group bg-[#261D1A] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.45)] transition-all hover:-translate-y-2"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#140F0E]/85 backdrop-blur px-3 py-1.5 rounded-full text-[#F472B6]">
                {item.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif-display text-xl font-semibold text-amber-50">{item.name}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-3">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold gold-text">{item.price}</span>
                  <span className="block text-[11px] text-neutral-500">{item.unit}</span>
                </div>
                <a
                  href="#order"
                  data-testid={`menu-btn-order-${item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#140F0E] bg-[#D4AF37] hover:bg-[#E5B869] px-4 py-2.5 rounded-full transition-colors"
                >
                  Order <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
