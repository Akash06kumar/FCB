import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { IMAGES } from "../siteData";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const BACKEND = process.env.REACT_APP_BACKEND_URL;

const ITEMS = [
  { src: IMAGES.pinkCake, alt: "Two-tier pink floral Royal Special cake", cls: "md:col-span-5 md:row-span-2 h-[420px] md:h-full" },
  { src: IMAGES.displayCounter, alt: "Fresh cakes on display at FCB Cake Wala counter", cls: "md:col-span-7 h-[280px]" },
  { src: IMAGES.interior, alt: "Party supplies and gifting shelves inside the shop", cls: "md:col-span-4 h-[260px]" },
  { src: IMAGES.shopNight, alt: "FCB Cake Wala glowing neon signboard", cls: "md:col-span-3 h-[260px]" },
];

export const GallerySection = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get(`${API}/gallery`).then((r) => setFeatured(r.data)).catch(() => {});
  }, []);

  return (
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

        {featured.length > 0 && (
          <>
            <h3 data-testid="gallery-featured-heading" className="font-serif-display text-2xl sm:text-3xl font-bold text-amber-50 mt-16 mb-8">
              Fresh from our kitchen — <span className="italic text-[#EC4899]">customer celebrations</span>
            </h3>
            <div data-testid="gallery-featured-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((f, i) => (
                <motion.figure
                  key={f.id}
                  data-testid={`gallery-featured-${i}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="group relative rounded-2xl overflow-hidden border border-[rgba(236,72,153,0.3)] h-[240px] sm:h-[280px]"
                >
                  <img src={`${BACKEND}${f.url}`} alt={`${f.cake_type} made by FCB Cake Wala`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#F472B6]">Customer Creation</span>
                    <p className="text-sm text-amber-50 font-semibold">{f.cake_type}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
