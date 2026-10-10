import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { IMAGES, SITE } from "../siteData";

export const LocationSection = () => (
  <section id="visit" data-testid="location-section" className="py-16 md:py-24 bg-[#FAF6F0] text-[#1E1614]">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B45309] mb-3">Find Us</p>
      <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        Right on MG Road, <span className="italic text-[#EC4899]">near Maheshwaram Temple</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E8DED2] shadow-md h-72 lg:h-auto">
          <img src={IMAGES.shopFront} alt="FCB Cake Wala storefront on MG Road" className="w-full h-full object-cover" />
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div data-testid="location-address-card" className="bg-white rounded-2xl border border-[#E8DED2] p-6">
            <MapPin className="w-6 h-6 text-[#EC4899] mb-4" />
            <h3 className="font-serif-display text-lg font-bold mb-2">Address</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{SITE.address}</p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="location-maps-button"
              className="mt-5 inline-flex items-center gap-2 bg-[#140F0E] text-amber-50 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#261D1A] transition-colors"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>

          <div data-testid="location-hours-card" className="bg-white rounded-2xl border border-[#E8DED2] p-6">
            <Clock className="w-6 h-6 text-[#EC4899] mb-4" />
            <h3 className="font-serif-display text-lg font-bold mb-2">Opening Hours</h3>
            <p className="text-sm text-neutral-600">Monday – Sunday</p>
            <p className="font-serif-display text-2xl font-bold mt-1">{SITE.hours}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> {SITE.hoursNote}
            </span>
          </div>

          <div data-testid="location-landmark-info" className="bg-[#140F0E] rounded-2xl p-6 sm:col-span-2 text-neutral-300">
            <h3 className="font-serif-display text-lg font-bold text-amber-50 mb-2">Landmarks & Access</h3>
            <p className="text-sm leading-relaxed">
              Next to Mahesh Academy School, a short walk from Maheshwaram Temple. Free street parking outside, wheelchair-accessible
              entrance, parking and seating. Call ahead and we'll have your order packed for pick-up or drive-through.
            </p>
            <a href={`tel:${SITE.phone}`} data-testid="location-call-button" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-[#E5B869] transition-colors">
              <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-3xl overflow-hidden border border-[#E8DED2] shadow-md">
        <iframe
          title="FCB Cake Wala on Google Maps"
          data-testid="location-map-embed"
          src="https://maps.google.com/maps?q=FCB%20Cake%20Wala%20MG%20Road%20near%20Maheshwaram%20Temple%20Aurangabad%20Bihar%20824101&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-80 md:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);
