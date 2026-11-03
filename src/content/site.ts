// Edit business details here. Everything on the site reads from this file.
export const business = {
  name: "FreshSpace Cleaning Co.",
  tagline: "Professional Cleaning. A Space You'll Love.",
  phone: "01306247135", // supplied demo number — replace with the real business number before launch
  phoneHref: "tel:01306247135",
  email: "adnestbd@gmail.com", // supplied demo email — replace before launch
  // Official profiles only. Leave a URL empty ("") to hide that social icon.
  socialLinks: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
  state: "TX",
  // Demo rating — replace with your real Google rating (set reviewCount only if verified).
  googleRating: "4.9",
  reviewCount: null as number | null,
  heroAreas: ["Austin", "Round Rock", "Cedar Park", "Pflugerville"],
  primaryCTA: { label: "Get a Free Quote", href: "#quote" },
  secondaryCTA: { label: "Explore Services", href: "#services" },
  city: "Austin",
  region: "TX",
  serviceAreaLabel: "Austin & Surrounding Areas",
  hours: "Mon–Sat, 8am–6pm",
  // Demo locations — replace with the areas you actually serve.
  areas: ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Bee Cave", "Lakeway"],
};

// Demo trust claims shown below the hero. Confirm each with the business before launch.
export const trustItems = [
  { key: "insured", title: "Licensed & Insured", text: "Your peace of mind matters." },
  { key: "checked", title: "Background-Checked Team", text: "We hire trustworthy professionals." },
  { key: "flexible", title: "Flexible Scheduling", text: "We work around your life." },
  { key: "guarantee", title: "Satisfaction Guarantee", text: "We're not happy until you are." },
] as const;

// Sample reviews for the demo — fictional names, clearly marked. Replace with verified customer reviews before launch.
export const testimonials = [
  {
    name: "Dana R.",
    initials: "DR",
    location: "Austin, TX",
    rating: 5,
    service: "Deep Cleaning",
    date: "3 weeks ago",
    text: "We booked a cleaning before family came to visit. The team arrived on time, worked through the whole house, and did a really nice job with the kitchen and bathrooms.",
  },
  {
    name: "Marcus T.",
    initials: "MT",
    location: "Round Rock, TX",
    rating: 5,
    service: "Residential Cleaning",
    date: "1 month ago",
    text: "I've been using their recurring cleaning service for a while now. Scheduling is straightforward, and it's nice coming home to a clean space after work.",
  },
  {
    name: "Priya S.",
    initials: "PS",
    location: "Cedar Park, TX",
    rating: 5,
    service: "Move-In / Move-Out",
    date: "2 months ago",
    text: "Needed help getting my apartment ready for a move. They took care of the floors, kitchen, and bathrooms. Made the whole process a lot easier.",
  },
];

// Demo trust benefits shown under the reviews. Keep only the claims the business can genuinely stand behind.
export const reviewTrustBenefits = [
  { key: "shield", text: "Trusted & Insured Professionals" },
  { key: "handshake", text: "Satisfaction Guarantee" },
  { key: "clock", text: "On-Time Service" },
  { key: "leaf", text: "Eco-Friendly Cleaning Products" },
] as const;

export const faqs = [
  { q: "How much does cleaning cost?", a: "Pricing depends on the size of your space, the type of cleaning, and how often you'd like service. Send a quote request and we'll get back to you with a clear price — no surprises." },
  { q: "Do you bring your own cleaning supplies?", a: "Yes. Our team arrives with all the supplies and equipment needed. If you prefer we use specific products, just let us know." },
  { q: "Do you offer recurring cleaning?", a: "We do. Weekly, every other week, and monthly plans are available, and you can adjust or pause anytime." },
  { q: "Can I book a one-time deep clean?", a: "Absolutely. One-time deep cleans are great before a holiday, after a renovation, or when you just want a fresh start." },
  { q: "Do you clean offices?", a: "Yes. We clean offices and small commercial spaces, including after-hours visits so we don't interrupt your work day." },
  { q: "How far in advance should I book?", a: "A few days' notice is usually enough. For move-out cleans or weekends, booking a week ahead is a good idea." },
  { q: "What areas do you serve?", a: "We serve Austin and nearby communities. Enter your ZIP code in the quote form and we'll confirm availability." },
  { q: "What happens if I need to reschedule?", a: "Just give us a call or email at least 24 hours before your appointment and we'll find a new time that works." },
];
