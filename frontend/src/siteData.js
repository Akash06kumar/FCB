export const SITE = {
  name: "FCB Cake Wala",
  tagline: "We Bake Memories",
  rating: "4.9",
  reviewCount: "120+",
  address: "Shop No - 01, Mahesh Academy School, MG Rd, near Maheshwaram Temple, Aurangabad, Bihar 824101",
  shortAddress: "MG Rd, near Maheshwaram Temple, Aurangabad, Bihar",
  hours: "9:00 AM – 9:00 PM",
  hoursNote: "Open all 7 days",
  phone: "+918252244536",
  phoneDisplay: "+91 82522 44536",
  whatsapp: "918252244536",
  whatsappUrl:
    "https://wa.me/918252244536?text=Hi%20FCB%20Cake%20Wala!%20I%27d%20like%20to%20order%20a%20cake.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=FCB+Cake+Wala+MG+Rd+Maheshwaram+Temple+Aurangabad+Bihar+824101",
};

export const IMAGES = {
  pinkCake: "/assets/cake-pink.jpeg",
  shopFront: "/assets/shop-front.jpeg",
  displayCounter: "/assets/display-counter.jpeg",
  interior: "/assets/interior-shelves.jpeg",
  shopNight: "/assets/shop-screenshot.jpeg",
};

export const MENU = [
  {
    id: "royal-special",
    name: "Royal Special Cake",
    desc: "Our signature two-tier showstopper — hand-piped florals, gold pearls and a personalised topper. Made to order for weddings & milestone birthdays.",
    price: "₹650",
    unit: "per pound onwards",
    tag: "Signature",
    image: IMAGES.pinkCake,
  },
  {
    id: "pineapple",
    name: "Pineapple Cake",
    desc: "Light vanilla sponge layered with whipped cream and juicy pineapple — the classic everyone asks for by name.",
    price: "₹300",
    unit: "per pound",
    tag: "Bestseller",
    image: IMAGES.displayCounter,
  },
  {
    id: "fresh-fruit",
    name: "Fresh Fruit Cake",
    desc: "Cloud-soft cream cake crowned with seasonal fresh fruit. Eggless option available on request.",
    price: "₹450",
    unit: "per pound",
    tag: "Fresh Daily",
    image: IMAGES.interior,
  },
  {
    id: "pastry",
    name: "Pastries",
    desc: "Chocolate truffle, butterscotch, white forest, strawberry and more — single-serve indulgence, always stocked at the counter.",
    price: "₹60",
    unit: "per piece onwards",
    tag: "Counter Favourite",
    image: IMAGES.displayCounter,
  },
];

export const SERVICES = [
  { icon: "Truck", label: "Delivery", id: "delivery" },
  { icon: "Car", label: "Drive-through", id: "drivethrough" },
  { icon: "ShoppingBag", label: "In-store pick-up", id: "pickup" },
  { icon: "Store", label: "In-store shopping", id: "shopping" },
  { icon: "Sparkles", label: "On-site services", id: "onsite" },
  { icon: "Package", label: "Takeaway", id: "takeaway" },
  { icon: "UtensilsCrossed", label: "Dine-in", id: "dinein" },
];

export const REVIEWS = [
  {
    name: "Alok Kumar",
    meta: "7 photos · 4 years ago",
    text: "A place to have authentic cakes, pastries and cookies. Delicious stuff, not too costly, affordable prices and a neat & clean shop. Staff are also good. Every cake is special here — I have always relied on this place for cake. They maintain good quality and hygiene every time. Thank you!!",
    stars: 5,
  },
  {
    name: "Rimjhim Kumari",
    meta: "3 years ago",
    text: "Being a hotelier with Taj, I had never ordered a cake from any other bakery in 5 years. Celebrating my birthday in my hometown Aurangabad, I was very particular about taste, flavour & presentation — and it was one of the best experiences. They listen to your requests patiently and give the best. Worth the money. Highly, highly recommend.",
    stars: 5,
  },
  {
    name: "Gauri Singh",
    meta: "a year ago",
    text: "The cake was absolutely perfect — just what we wanted and really tasty too. We received so many compliments on its deliciousness and appearance. Even guests who don't usually like cake raved about it. It was a huge hit and a major part of our celebration. We're still reminiscing about it!",
    stars: 5,
  },
];

export const FESTIVALS = [
  {
    id: "durga-puja",
    name: "Durga Puja",
    icon: "Sparkles",
    headline: "Pujo Special — bulk sweets for pandals & family gatherings",
    sub: "Laddoo, sandesh, kaju katli and more, made fresh for your pandal, guests and bhog. Book early — slots fill fast.",
    chips: ["Motichoor Laddoo", "Sandesh", "Kaju Katli", "Gulab Jamun"],
    waText: "Hi FCB Cake Wala! Durga Puja bulk sweet order enquiry — please share rates and slots.",
    theme: {
      bg: "bg-gradient-to-r from-[#2A0E0E] via-[#3B1414] to-[#1E1614]",
      accent: "text-[#FF6B5E]",
      chip: "border-[#FF6B5E]/40 text-[#FFB4A8]",
      dot: "bg-[#FF6B5E]",
    },
  },
  {
    id: "diwali",
    name: "Diwali",
    icon: "Flame",
    headline: "Diwali gift hampers & bulk sweet boxes, ready to light up your gifting",
    sub: "Custom-branded gift boxes, kaju katli by the kilo and soan papdi packs for offices, shops and families.",
    chips: ["Kaju Katli", "Soan Papdi", "Gift Hampers", "Dry Fruit Sweets"],
    waText: "Hi FCB Cake Wala! Diwali bulk sweet / gift hamper enquiry — please share your catalogue and prices.",
    theme: {
      bg: "bg-gradient-to-r from-[#241030] via-[#33164a] to-[#1E1614]",
      accent: "text-[#F5B942]",
      chip: "border-[#F5B942]/40 text-[#F7D68A]",
      dot: "bg-[#F5B942]",
    },
  },
  {
    id: "chhath",
    name: "Chhath",
    icon: "Sunrise",
    headline: "Chhath Puja specials — thekua & prasad made the traditional way",
    sub: "Fresh thekua, rice kheer and prasad packs for arghya — hygienic, pure-ghee, made in bulk for your ghat and family.",
    chips: ["Thekua", "Prasad Packs", "Rice Kheer", "Pure Ghee Sweets"],
    waText: "Hi FCB Cake Wala! Chhath Puja bulk order enquiry (thekua / prasad) — please share rates.",
    theme: {
      bg: "bg-gradient-to-r from-[#2E1708] via-[#42240d] to-[#1E1614]",
      accent: "text-[#FF9E45]",
      chip: "border-[#FF9E45]/40 text-[#FFC48F]",
      dot: "bg-[#FF9E45]",
    },
  },
  {
    id: "wedding-season",
    name: "Wedding Season",
    icon: "Heart",
    headline: "Wedding season — bulk sweets, dessert counters & showstopper cakes",
    sub: "From engagement to reception: tiered cakes, sweet platters per plate, and full dessert tables for your big day.",
    chips: ["Tiered Cakes", "Sweet Platters", "Dessert Counters", "Bulk Laddoo"],
    waText: "Hi FCB Cake Wala! Wedding bulk order enquiry (sweets / cake / dessert counter) — please share packages.",
    theme: {
      bg: "bg-gradient-to-r from-[#33101f] via-[#47182c] to-[#1E1614]",
      accent: "text-[#F472B6]",
      chip: "border-[#F472B6]/40 text-[#F9A8D4]",
      dot: "bg-[#F472B6]",
    },
  },
];
