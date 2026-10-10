# PRD — FCB Cake Wala Website

## Original Problem Statement
Build a premium, modern, highly converting local food business website for FCB Cake Wala (Bakery & Cake Shop), Shop No - 01, Mahesh Academy School, MG Rd, near Maheshwaram Temple, Aurangabad, Bihar 824101. Google rating 4.9/5. Menu: Royal special cake, pastry, pineapple cake, fresh fruit cake. Open 9 AM – 9 PM. LGBTQ+ friendly. Services: delivery, drive-through, in-store pick-up, in-store shopping, on-site services, takeaway, dine-in. Free street parking. Wheelchair-accessible car park, entrance, seating. Use the real photographs provided as primary visual assets.

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion, lucide-react, sonner toasts. Single-page landing at `/`.
- Backend: FastAPI (`/api` prefix), Motor async MongoDB. Endpoints: `GET /api/`, `POST /api/enquiries`, `GET /api/enquiries`.
- Real photos stored in `/app/frontend/public/assets/` (cake-pink, shop-front, display-counter, interior-shelves, shop-screenshot [cropped to remove phone UI]).

## User Personas
- Local customer (mobile-first) wanting to order a birthday/wedding cake quickly via call or enquiry form.
- Walk-in visitor checking hours, location, parking, accessibility.
- Gift buyer browsing the menu and gallery.

## Core Requirements (static)
- Premium dark-chocolate + gold + neon-pink design matching shop's neon signage.
- Real photos as primary visuals (no stock).
- Menu with prices, 4.9 Google rating prominence, hours 9–9, full address, Google Maps directions link.
- LGBTQ+ friendly badge, service options, free parking, wheelchair accessibility.
- Working order enquiry form saved to MongoDB.

## Implemented (2026-07)
- Hero with rating badge, dual CTAs, signature cake feature card (real pink two-tier cake photo).
- Menu section: Royal Special (₹650/lb onwards), Pineapple (₹300/lb), Fresh Fruit (₹450/lb), Pastries (₹60/pc) — prices inferred from counter photo, need owner confirmation.
- Services grid (7 options), LGBTQ+ badge, parking + wheelchair accessibility cards.
- Bento gallery with 4 real shop photos.
- Reviews section (4.9/5) with 3 SAMPLE review cards (placeholders — replace with real Google reviews).
- Enquiry form → FastAPI → MongoDB, toast confirmation; verified with real submission.
- Location section with address, hours, landmarks, Get Directions link; footer + sticky mobile Call/Order bar.

## Known Placeholders
- Menu prices are estimates from the counter photo — confirm with owner.

## Updates (2026-07, round 2)
- Real phone number added: +91 82522 44536 (08252244536) across all Call CTAs.
- WhatsApp ordering live: green WhatsApp buttons in navbar, hero, footer and mobile quick bar → wa.me/918252244536 with prefilled order message.
- Real Google reviews published: Alok Kumar, Rimjhim Kumari, Gauri Singh (replaced all sample reviews).

## Backlog
- P0: Real phone/WhatsApp number from owner.
- P1: Replace sample reviews with real Google reviews (or embed Google review widget).
- P1: Admin view for enquiries (currently only via API GET /api/enquiries).
- P2: Online payment for advance cake orders (Stripe/Razorpay).
- P2: Photo-cake upload flow (object storage).
- P2: SEO/schema (LocalBusiness JSON-LD) — farm-seo-setup skill available.
