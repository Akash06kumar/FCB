import { motion } from "framer-motion";
import { IMAGES } from "../siteData";

const ITEMS = [
  { src: IMAGES.pinkCake, alt: "Two-tier pink floral Royal Special cake", cls: "md:col-span-5 md:row-span-2 h-[420px] md:h-full" },
  { src: IMAGES.displayCounter, alt: "Fresh cakes on display at FCB Cake Wala counter", cls: "md:col-span-7 h-[280px]" },
  { src: IMAGES.interior, alt: "Party supplies and gifting shelves inside the shop", cls: "md:col-span-4 h-[260px]" },
  { src: IMAGES.shopNight, alt: "FCB Cake Wala glowing neon signboard", cls: "md:col-span-3 h-[260px]" },
];

export const GallerySection = () => (
  <section id="gallery" data-testid="gallery-section" className="py-16 md:py-24 bg-[#140F0E] grain-overlay relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#EC4899] mb-3">Real Photos, Real Shop</p>
      <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-50 mb-12">
        Step inside <span className="gold-text italic">FCB Cake Wala</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {ITEMS.map((item, i) => (
          <motion.figure
            key={i}
            data-testid={`gallery-item-${i}`}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className={`group relative rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.15)] ${item.cls}`}
          >
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-xs text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
