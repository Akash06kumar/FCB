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

## Updates (2026-07, round 3)
- Photo Cake Upload: enquiry form now accepts an optional reference photo (jpg/png ≤ 8 MB). Stored in Emergent object storage via POST /api/uploads, served via GET /api/files/{path}, path saved on the enquiry (`photo_path`).
- WhatsApp Enquiry Alerts (no-Twilio variant): after submit, success panel shows "Send Details on WhatsApp" which opens wa.me/918252244536 with the full enquiry pre-filled. Note: wa.me links cannot attach the photo; the reference photo stays linked to the enquiry in the database.
- Google Map Embed: live interactive map iframe in the Visit section (FCB Cake Wala pin, MG Rd).
- Twilio-based fully automatic alerts remain possible later if the owner provides Twilio Account SID + Auth Token + WhatsApp sender.

## Updates (2026-07, round 4)
- Admin area at /admin (JWT auth, env-seeded admin: admin@fcbcakewala.in / FCBCake@2026): lists all enquiries with photos and contact details.
- Photo Cake Gallery: one tap on "Feature in Gallery" publishes the enquiry's photo to the public gallery under "Fresh from our kitchen — customer celebrations" (GET /api/gallery). Customer name/phone never shown publicly. Toggle again to remove.
- GET /api/enquiries is now admin-protected (401 without token); brute-force lockout on login (5 tries / 15 min).

## Updates (2026-07, round 5)
- Editorial marquee ticker at the very top of the page (bulk orders, 4.9 rating, hours — slow scroll, pauses on hover).
- Festive Banner directly under the marquee: tabs for Durga Puja / Diwali / Chhath / Wedding Season, auto-rotating every 5s (pauses on hover), each with its own colour restyle, sweet chips, WhatsApp bulk-enquiry CTA (festival-specific prefilled message to 918252244536) and order-form CTA. Festival content lives in FESTIVALS in src/siteData.js.
- REVERTED (round 6): FestiveBanner removed from the page per owner request ("last update was pretty good" = pre-banner state). Component file and FESTIVALS data kept but unused; marquee ticker retained.
- REVERTED (round 7): Marquee ticker also removed per owner request — header is now clean, hero starts directly under the navbar.

## Backlog
- P0: Real phone/WhatsApp number from owner.
- P1: Replace sample reviews with real Google reviews (or embed Google review widget).
- P1: Admin view for enquiries (currently only via API GET /api/enquiries).
- P2: Online payment for advance cake orders (Stripe/Razorpay).
- P2: Photo-cake upload flow (object storage).
- P2: SEO/schema (LocalBusiness JSON-LD) — farm-seo-setup skill available.
