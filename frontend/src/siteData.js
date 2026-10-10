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
