const ITEMS = [
  "Fresh cakes baked daily",
  "Bulk festive sweet orders open",
  "4.9 rated on Google",
  "Custom wedding & birthday cakes",
  "Open 9 AM – 9 PM, all 7 days",
  "Eggless options available",
];

export const Marquee = () => (
  <div data-testid="top-marquee" className="mt-16 bg-[#0D0A09] border-y border-[rgba(212,175,55,0.2)] overflow-hidden py-2.5" aria-hidden="true">
    <div className="marquee-track flex whitespace-nowrap w-max">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center text-[11px] uppercase tracking-[0.3em] text-neutral-400">
          <span className="px-6">{item}</span>
          <span className="text-[#D4AF37]">✦</span>
        </span>
      ))}
    </div>
  </div>
);
