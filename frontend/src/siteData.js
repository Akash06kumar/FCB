export const SITE = {
  name: "FCB Cake Wala",
  tagline: "We Bake Memories",
  rating: "4.9",
  reviewCount: "120+",
  address: "Shop No - 01, Mahesh Academy School, MG Rd, near Maheshwaram Temple, Aurangabad, Bihar 824101",
  shortAddress: "MG Rd, near Maheshwaram Temple, Aurangabad, Bihar",
  hours: "9:00 AM – 9:00 PM",
  hoursNote: "Open all 7 days",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
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
    name: "Ved Prakash",
    text: "Best cake shop in Aurangabad. The Royal Special cake for my daughter's birthday was stunning and tasted even better.",
    stars: 5,
  },
  {
    name: "Priya Kumari",
    text: "Ordered a pineapple cake on short notice — fresh, soft and delivered on time. Staff is very warm and welcoming.",
    stars: 5,
  },
  {
    name: "Aman Raj",
    text: "Beautiful shop on MG Road. Great pastries, fair prices and they customised our anniversary cake exactly as we wanted.",
    stars: 5,
  },
];
