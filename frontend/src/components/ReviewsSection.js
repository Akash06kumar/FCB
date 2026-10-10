import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { REVIEWS, SITE } from "../siteData";

export const ReviewsSection = () => (
  <section id="reviews" data-testid="reviews-section" className="py-16 md:py-24 bg-[#1E1614]">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div data-testid="reviews-google-rating-hero" className="lg:col-span-4 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#EC4899] mb-3">Loved Locally</p>
          <div className="font-serif-display text-7xl sm:text-8xl font-bold gold-text leading-none">{SITE.rating}</div>
          <div className="flex justify-center lg:justify-start gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <p className="mt-3 text-sm text-neutral-400">Google Rating · {SITE.reviewCount} verified reviews</p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.blockquote
              key={r.name}
              data-testid={`review-card-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#261D1A] rounded-2xl p-6 border border-[rgba(212,175,55,0.15)] flex flex-col"
            >
              <Quote className="w-6 h-6 text-[#EC4899] mb-4" />
              <p className="text-sm text-neutral-300 leading-relaxed flex-1">"{r.text}"</p>
              <footer className="mt-5">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(r.stars)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-amber-100">{r.name}</p>
                <p className="text-xs text-neutral-500">Google review</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </div>
  </section>
);
