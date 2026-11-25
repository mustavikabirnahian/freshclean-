import garageCleaning from "@/assets/garage-cleaning.jpg";
import shiftingRelocation from "@/assets/shifting-relocation.jpg";
import outdoorGroundCleaning from "@/assets/outdoor-ground-cleaning.jpg";
import balconyTerraceCleaning from "@/assets/balcony-terrace-cleaning.png";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  Home,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  Phone,
  Star,
  StarHalf,
  Truck,
  Waves,
  Trees,
  KeyRound,
  PanelsTopLeft,
PanelTop,
Archive,
Ruler,
Lightbulb,
DoorOpen,
  
  Armchair,
  Layers,
  Wind,
  Refrigerator,
  DoorClosed,
 
  
  
  Calculator,
 

} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Closing";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business } from "@/content/site";

import moveCleaningImage from "@/assets/svc-move.jpg";
import kitchenImage from "@/assets/after-kitchen.jpg";
import bathroomImage from "@/assets/gal-bathroom.jpg";
import residentialHero from "@/assets/residential-cleaning-hero.jpg";
import deepCleaningImage from "@/assets/svc-deep.jpg";

// ROUTE CONFIGURATION
export const Route = createFileRoute("/move-in-move-out")({
  head: () => ({
    meta: [
      {
        title:
          "Move-In, Move-Out & Rental Cleaning | FreshSpace Cleaning Co.",
      },
      {
        name: "description",
        content:
          "Prepare your property for its next chapter with move-in, move-out, rental turnover, outdoor and pool area cleaning from FreshSpace Cleaning Co.",
      },
    ],
  }),
  component: MoveInMoveOutPage,
});

// MAIN SERVICE DATA
const services = [
  {
    number: "01",
    title: "Move-In Cleaning",
    subtitle: "A fresh start in your new home",
    description:
      "Get your new property ready before moving day with detailed cleaning of kitchens, bathrooms, bedrooms and living spaces.",
    image: moveCleaningImage,
    tasks: [
      "Clean kitchen countertops and surfaces",
      "Wipe accessible cabinets and drawers",
      "Clean bathroom fixtures and surfaces",
      "Dust shelves, doors and accessible trim",
      "Clean reachable window sills",
      "Vacuum carpets and rugs",
      "Sweep and mop hard floors",
    ],
  },
  {
    number: "02",
    title: "Move-Out Cleaning",
    subtitle: "Leave your property looking its best",
    description:
      "Prepare an empty property after moving out with a thorough cleaning focused on the spaces and details that matter.",
    image: kitchenImage,
    tasks: [
      "Clean empty rooms and accessible surfaces",
      "Wipe kitchen cabinets and countertops",
      "Clean sinks, faucets and fixtures",
      "Scrub showers, tubs and toilets",
      "Wipe doors, handles and light switches",
      "Vacuum carpets and rugs",
      "Sweep and mop hard floors",
    ],
  },
  {
    number: "03",
    title: "Rental Turnover Cleaning",
    subtitle: "Ready for the next occupant",
    description:
      "Refresh rental properties between tenants with a practical cleaning checklist covering the main living spaces and frequently used areas.",
    image: residentialHero,
    tasks: [
      "Refresh bedrooms and living areas",
      "Clean kitchen surfaces and sinks",
      "Clean bathrooms and fixtures",
      "Wipe accessible cabinets and shelves",
      "Dust reachable surfaces and trim",
      "Vacuum and mop floors",
      "Clean frequently touched surfaces",
    ],
  },
  {
    number: "04",
    title: "Outdoor & Pool Area Cleaning",
    subtitle: "A cleaner welcome outside",
    description:
      "Give accessible outdoor spaces extra attention with cleaning for patios, walkways and poolside areas.",
    image: deepCleaningImage,
    tasks: [
      "Sweep patios and accessible walkways",
      "Remove visible leaves and loose debris",
      "Wipe accessible outdoor furniture",
      "Clean accessible poolside surfaces",
      "Sweep around outdoor entry areas",
      "Wipe accessible exterior touchpoints",
      "Tidy the agreed outdoor cleaning areas",
    ],
  },
];

// PROPERTY CHECKLIST DATA
const propertyChecklist = [
  {
    title: "Garage Cleaning",
    image: garageCleaning,
    tasks: [
      "Sweep and mop garage floors",
      "Remove visible dust and cobwebs",
      "Wipe accessible shelves and surfaces",
      "Clean garage doors and handles",
      "Dust accessible storage areas",
      "Clean reachable baseboards",
      "Collect agreed loose debris",
    ],
  },
  {
    title: "Shifting & Relocation",
    image: shiftingRelocation,
    tasks: [
      "Clean empty rooms before moving",
      "Wipe cabinets and storage spaces",
      "Clean kitchen and bathroom surfaces",
      "Wipe doors, frames and handles",
      "Clean reachable window sills",
      "Vacuum carpets and rugs",
      "Sweep and mop hard floors",
    ],
  },
  {
    title: "Outdoor Ground Cleaning",
    image: outdoorGroundCleaning,
    tasks: [
      "Sweep driveways and walkways",
      "Remove loose leaves and debris",
      "Clean accessible patio surfaces",
      "Sweep outdoor steps and entryways",
      "Wipe accessible outdoor furniture",
      "Tidy agreed outdoor areas",
      "Collect agreed outdoor debris",
    ],
  },
  {
    title: "Balcony & Terrace Cleaning",
    image: balconyTerraceCleaning,
    tasks: [
      "Sweep and mop balcony floors",
      "Wipe accessible railings",
      "Clean balcony doors and glass",
      "Remove visible dust and cobwebs",
      "Clear loose leaves and debris",
      "Wipe accessible outdoor surfaces",
      "Clean agreed terrace areas",
    ],
  },
];

// OPTIONAL ADD-ON SERVICES
const addOns = [
  "Inside Cabinet & Drawer Cleaning",
  "Window Tracks & Sills Cleaning",
  "Closet & Storage Cleaning",
  "Detailed Baseboard Cleaning",
  "Light Fixture & Ceiling Fan Cleaning",
  "Door, Frame & Handle Cleaning",
];
// CLEANING OCCASIONS
const cleaningOccasions = [
  {
    title: "Before Moving In",
    text: "Prepare your new property with a fresh clean before furniture and belongings arrive.",
  },
  {
    title: "After Moving Out",
    text: "Leave your previous property clean and presentable after your move.",
  },
  {
    title: "Between Tenants",
    text: "Refresh rental properties before welcoming the next occupants.",
  },
  {
    title: "Outdoor Refresh",
    text: "Give patios, walkways and accessible poolside areas extra attention.",
  },
];

// FAQ DATA
const faqs = [
  {
    question: "What is included in move-in cleaning?",
    answer:
      "Move-in cleaning can include kitchen and bathroom cleaning, dusting accessible surfaces, wiping cabinets and drawers, cleaning floors and giving bedrooms and living spaces a fresh start. The final checklist depends on your property and the tasks agreed before the visit.",
  },
  {
    question: "What is the difference between move-in and move-out cleaning?",
    answer:
      "Move-in cleaning prepares a property before new occupants arrive. Move-out cleaning focuses on cleaning a property after the previous occupants have moved out. Both services can include kitchens, bathrooms, floors and accessible surfaces.",
  },
  {
    question: "Do you provide rental turnover cleaning?",
    answer:
      "Yes. Rental turnover cleaning is designed to refresh a property between tenants. We can discuss the rooms, surfaces and additional tasks that should be included in your cleaning checklist.",
  },
  {
    question: "Do you clean outdoor areas?",
    answer:
      "Outdoor cleaning can include agreed areas such as patios, accessible walkways, entry areas and outdoor furniture. Please mention the areas you want cleaned when requesting your estimate.",
  },
  {
    question: "Do you provide pool cleaning?",
    answer:
      "This page covers poolside area cleaning, such as accessible surrounding surfaces and outdoor furniture. Pool water treatment, chemical balancing and specialized pool maintenance are not included.",
  },
  {
    question: "Can I request cleaning for both my old and new home?",
    answer:
      "Yes. You can discuss cleaning for both properties when arranging your service. Let us know the addresses, property sizes, preferred dates and the areas that need attention so we can discuss the arrangements.",
  },
  {
    question: "Can I add oven or refrigerator cleaning?",
    answer:
      "Yes. Inside oven, refrigerator and cabinet cleaning can be discussed as additional services. Please mention these requests when asking for your estimate.",
  },
  {
    question: "How do I get a move-in or move-out cleaning estimate?",
    answer:
      "Use the quote form below to share your property details, the type of cleaning you need, the areas you want cleaned and your preferred date. Your estimate can then be prepared around your requirements.",
  },
];

// SAMPLE REVIEW CONTENT
/* Sample review content for this demo. Replace with verified customer reviews before publishing. */
const customerReviews = [
  {
    name: "Emily R.",
    location: "Austin, TX",
    service: "Move-In Cleaning",
    rating: 5,
    date: "Sample customer feedback",
    review:
      "Having the property cleaned before moving day made getting settled much easier. The kitchen and bathrooms were the areas we especially wanted taken care of.",
    rotation: "-3deg",
    background: "bg-white",
  },
  {
    name: "Sarah M.",
    location: "Round Rock, TX",
    service: "Rental Turnover Cleaning",
    rating: 4.5,
    date: "Sample customer feedback",
    review:
      "We wanted the rental property refreshed before the next occupants arrived. Having a clear checklist helped us understand what would be covered.",
    rotation: "2deg",
    background: "bg-[#EDF4FB]",
  },
  {
    name: "James T.",
    location: "Cedar Park, TX",
    service: "Move-Out Cleaning",
    rating: 5,
    date: "Sample customer feedback",
    review:
      "The cleaning covered the main areas we needed after moving out. It was helpful to discuss the requested tasks before the appointment.",
    rotation: "-1.5deg",
    background: "bg-white",
  },
  {
    name: "Olivia K.",
    location: "Pflugerville, TX",
    service: "Outdoor Area Cleaning",
    rating: 4.5,
    date: "Sample customer feedback",
    review:
      "We also needed the patio and entry area refreshed. It was useful to include those spaces in the cleaning plan.",
    rotation: "2.5deg",
    background: "bg-[#EDF4FB]",
  },
];

// MOVE-IN / MOVE-OUT PAGE
function MoveInMoveOutPage() {
  const reviewsSectionRef = useRef<HTMLElement | null>(null);
  const faqSectionRef = useRef<HTMLElement | null>(null);

  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleFaqs, setVisibleFaqs] = useState<Set<number>>(new Set());

  // CUSTOMER REVIEWS SCROLL ANIMATION
  useEffect(() => {
    const section = reviewsSectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReviewsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // FAQ INDIVIDUAL SCROLL-DOWN REVEAL ANIMATION
  useEffect(() => {
    const section = faqSectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-faq-card]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.faqCard,
            );

            setVisibleFaqs((previous) => {
              const updated = new Set(previous);
              updated.add(index);
              return updated;
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main id="main">
        {/* SECTION: HERO */}
        <section className="relative overflow-hidden bg-[#102441] py-16 md:py-24">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <p className="eyebrow">
                Move-In, Move-Out & Rental Cleaning
              </p>

              <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.12] text-[#F8F6F0] sm:text-5xl md:text-6xl">
                A Fresh Start.
                <span className="block text-emerald">
                  A Cleaner Space.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#CFD3D9] md:text-lg">
                Moving to a new place or preparing a property for its next
                occupants? FreshSpace provides detailed move-in, move-out
                and rental cleaning, with extra attention to the spaces
                that matter.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-1 hover:bg-emerald-dark hover:shadow-lift"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/80 px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-emerald hover:text-emerald"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#CFD3D9]">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald" />
                  Property-focused checklists
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald" />
                  Flexible cleaning options
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={moveCleaningImage}
                  alt="Professional move-in and move-out property cleaning"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                />
              </div>

              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-float sm:left-[-24px]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-soft text-emerald">
                  <KeyRound className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Ready for what's next
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    A fresh property transition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



{/* SECTION: MAIN SERVICE CARDS */}
<section className="bg-[linear-gradient(180deg,#EAF0F6_0%,#F8FAFC_45%,#EAF0F6_100%)] py-20 md:py-28">
  <div className="container-site">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Our Property Cleaning Services</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        A Cleaner Property for Every Transition
      </h2>

      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        From preparing a new home to refreshing a rental property,
        choose the cleaning service that fits your next step.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.number}
          className="service-shadow group relative transition-transform duration-300 hover:-translate-y-1.5"
        >
          <article className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/90 bg-[linear-gradient(rgba(16,36,65,0.13),rgba(16,36,65,0.13)),#FDFDFD] shadow-[0_12px_35px_rgba(16,36,65,0.10)] backdrop-blur-2xl transition-all duration-500 hover:border-navy/30 hover:bg-white/90 hover:shadow-[0_20px_45px_rgba(16,36,65,0.16)]">

            {/* IMAGE */}
            <div className="p-3 pb-0">
              <div className="overflow-hidden rounded-[1.1rem] border border-white/80 shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-6 pb-8">
              <span className="w-fit rounded-full border border-navy/20 bg-[#102441] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm sm:text-xs">
                Service {service.number}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-[#102441]">
                {service.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#102441]">
                {service.subtitle}
              </p>

              <p className="mt-3 text-[15px] leading-relaxed text-[#52677F]">
                {service.description}
              </p>

              {/* INCLUDED TASKS */}
              <div className="mt-6 border-t border-[#DCE5E8]/90 pt-5">
                <h4 className="mb-4 text-sm font-extrabold text-[#102441]">
                  What's included
                </h4>

                <ul className="space-y-3">
                  {service.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#52677F]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#102441]" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FOLDED CORNER */}
            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-16 w-16 bg-surface [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
          </article>

          {/* FLOATING ICON */}
          <span className="absolute bottom-0 right-0 grid h-14 w-14 translate-x-[30%] translate-y-[30%] place-items-center rounded-full bg-navy text-blue-100 shadow-lift ring-4 ring-surface transition-transform duration-300 group-hover:scale-110">
            {service.number === "01" ? (
              <Home className="h-6 w-6" strokeWidth={1.6} />
            ) : service.number === "02" ? (
              <Truck className="h-6 w-6" strokeWidth={1.6} />
            ) : service.number === "03" ? (
              <KeyRound className="h-6 w-6" strokeWidth={1.6} />
            ) : (
              <Waves className="h-6 w-6" strokeWidth={1.6} />
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>



{/* SECTION: PROPERTY CHECKLIST */}
<section className="relative overflow-hidden bg-[#F2F3F5] py-16 md:py-24">
  <div className="container-site">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Additional Property Cleaning Services</p>
      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        More Ways We Help Keep Your Property Clean
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">
        From garages and relocation cleaning to outdoor spaces and
        terraces, explore additional cleaning services for your property.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {propertyChecklist.map((room) => (
        <article
          key={room.title}
          className="group relative min-h-[330px] overflow-hidden rounded-[1.8rem] border-[3px] border-white/90 bg-[#DCEAF7] shadow-[0_14px_35px_rgba(16,36,65,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(16,36,65,0.20)]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(220,234,247,0.96) 0%, rgba(220,234,247,0.88) 43%, rgba(220,234,247,0.48) 72%, rgba(220,234,247,0.12) 100%), url("${room.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-200/10 backdrop-blur-[1px]" />

          <div className="relative z-10 flex min-h-[330px] max-w-[75%] flex-col p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-[#102441] sm:text-3xl">
              {room.title}
            </h3>

            <ul className="mt-5 space-y-3">
              {room.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-3 text-sm font-medium leading-5 text-[#263F5B] sm:text-base"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#102441]" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <a
              href="#quote"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-[#102441]/20 bg-[#102441] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1D4265]"
            >
              Check Availability
            </a>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/40" />
        </article>
      ))}
    </div>

    <p className="mt-7 text-center text-xs leading-6 text-[#52647A]">
      Service availability depends on property condition, accessibility
      and the agreed cleaning checklist. Additional work may require
      separate pricing.
    </p>
  </div>
</section>


{/* SECTION: ADD-ONS */}
<section className="relative isolate overflow-hidden bg-[#F2F3F5] py-20 md:py-28">
  {/* Decorative house watermark */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-8 top-0 -z-10 h-[420px] w-[650px] max-w-[65%] text-[#102441]/10"
  >
    <svg
      viewBox="0 0 600 420"
      fill="none"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55 210L290 25L525 210"
        stroke="currentColor"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M115 165V370H465V165"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinejoin="round"
      />
      <rect x="260" y="215" width="30" height="30" rx="5" fill="currentColor" />
      <rect x="300" y="215" width="30" height="30" rx="5" fill="currentColor" />
      <rect x="260" y="255" width="30" height="30" rx="5" fill="currentColor" />
      <rect x="300" y="255" width="30" height="30" rx="5" fill="currentColor" />
    </svg>
  </div>

  {/* Decorative sparkles */}
  <div className="pointer-events-none absolute left-[45%] top-12 -z-10 text-[#102441]/10">
    <Sparkles className="h-14 w-14" />
  </div>
  <div className="pointer-events-none absolute left-[49%] top-28 -z-10 text-[#102441]/10">
    <Sparkles className="h-9 w-9" />
  </div>

  <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
    {/* Left content */}
    <div>
      <p className="flex items-center gap-3 text-sm font-bold tracking-wide text-[#102441]">
        <span className="h-[2px] w-12 rounded-full bg-[#102441]" />
        Additional Details
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-navy sm:text-5xl md:text-6xl md:leading-[1.1]">
        Need a Little Extra Attention?
      </h2>

      <p className="mt-6 max-w-lg text-base leading-8 text-navy/80 sm:text-lg">
        Some areas need more time and specialized attention. Ask
        about these additional tasks when preparing your move-in
        or move-out cleaning quote.
      </p>

      <a
        href="#quote"
        className="group mt-8 inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#102441] to-[#24466F] px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(16,36,65,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,36,65,0.30)]"
      >
        Add to My Cleaning Plan
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>

    {/* Right glass cards */}
    <div className="grid gap-4 sm:grid-cols-2">
      {addOns.map((item, index) => (
        <div
          key={item}
          className="group relative flex min-h-[88px] items-center gap-4 overflow-hidden rounded-[1.5rem] border border-[#102441]/10 bg-white/55 px-4 py-4 shadow-[0_8px_25px_rgba(16,36,65,0.045)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#102441]/30 hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(16,36,65,0.12)] sm:px-5"
        >
          {/* Soft glass highlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-blue-100/30" />

          {/* Navy icon circle */}
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/80 text-[#102441] shadow-[0_4px_14px_rgba(16,36,65,0.08)] transition-transform duration-300 group-hover:scale-110">
            {index === 0 ? (
              <PanelsTopLeft className="h-6 w-6" />
            ) : index === 1 ? (
              <PanelTop className="h-6 w-6" />
            ) : index === 2 ? (
              <Archive className="h-6 w-6" />
            ) : index === 3 ? (
              <Ruler className="h-6 w-6" />
            ) : index === 4 ? (
              <Lightbulb className="h-6 w-6" />
            ) : (
              <DoorOpen className="h-6 w-6" />
            )}
          </span>

          {/* Add-on title */}
          <span className="relative flex-1 text-sm font-bold leading-5 text-navy sm:text-[15px]">
            {item}
          </span>

          {/* Arrow circle */}
          <span
            aria-hidden="true"
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50/80 text-[#102441] transition-all duration-300 group-hover:border-[#102441] group-hover:bg-[#102441] group-hover:text-white"
          >
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      ))}
    </div>
  </div>
</section>





{/* SECTION: CLEANING OCCASIONS */}
<section className="relative overflow-hidden bg-[#F2F3F5] py-16 md:py-24">
  {/* Soft background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#24466F]/15 blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[110px]" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">When You Need It</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        When Is Property Transition Cleaning a Good Fit?
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        Whether you're moving, preparing a rental or refreshing
        outdoor areas, we can discuss a cleaning plan for your
        property.
      </p>
    </div>

    {/* Cleaning occasion glass cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cleaningOccasions.map((occasion, index) => (
        <article
          key={occasion.title}
          className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.8rem] border p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
            index === 3
              ? "border-white bg-[#F7F8FA] text-navy shadow-[0_12px_35px_rgba(16,36,65,0.08)] hover:border-blue-300/80 hover:shadow-[0_20px_40px_rgba(16,36,65,0.12)]"
              : "border-blue-300/50 bg-gradient-to-br from-[#24466F] via-[#18375D] to-[#102441] text-white shadow-[0_20px_45px_rgba(16,36,65,0.22)] hover:shadow-[0_25px_50px_rgba(16,36,65,0.32)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/20 via-transparent to-blue-100/10" />

          {/* Icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
              index === 3
                ? "border-white bg-white/80 text-[#102441]"
                : "border-white/70 bg-white text-[#102441]"
            }`}
          >
            {index === 0 ? (
              <KeyRound className="h-6 w-6" />
            ) : index === 1 ? (
              <Truck className="h-6 w-6" />
            ) : index === 2 ? (
              <Home className="h-6 w-6" />
            ) : (
              <Trees className="h-6 w-6" />
            )}
          </div>

          {/* Card content */}
          <div className="relative mt-8">
            <h3
              className={`text-xl font-bold tracking-tight ${
                index === 3 ? "text-[#102441]" : "text-white"
              }`}
            >
              {occasion.title}
            </h3>

            <p
              className={`mt-3 text-sm font-medium leading-6 ${
                index === 3 ? "text-[#52677F]" : "text-white/85"
              }`}
            >
              {occasion.text}
            </p>
          </div>

          {/* Bottom label and arrow */}
          <div className="relative mt-auto flex items-center justify-between gap-3 pt-8">
            <span
              className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                index === 3 ? "text-[#52677F]/75" : "text-white/70"
              }`}
            >
              0{index + 1} / {occasion.title}
            </span>

            <span
              aria-hidden="true"
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${
                index === 3
                  ? "border-[#102441]/20 bg-white text-[#102441] group-hover:border-[#102441] group-hover:bg-[#102441] group-hover:text-white"
                  : "border-white/40 bg-white/10 text-white group-hover:bg-white group-hover:text-[#102441]"
              }`}
            >
              <span className="text-xl leading-none">↗</span>
            </span>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>




{/* SECTION: HOW IT WORKS */}
<section id="how-it-works" className="relative overflow-hidden bg-white py-16 md:py-24">
  <div className="container-site relative">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#102441]">
        <span className="h-px w-12 bg-[#102441]" />
        Simple Process
        <span className="h-px w-12 bg-[#102441]" />
      </p>

      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#102441] sm:text-5xl md:text-6xl">
        Getting Started Is Easy
      </h2>

      <p className="mt-5 text-base leading-7 text-[#52677F] sm:text-lg">
        Follow these simple steps to book your deep cleaning service.
      </p>
    </div>

    {/* Cards and connecting line */}
    <div className="relative mt-16 md:mt-20">
      {/* Dashed connecting path */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-8 z-0 hidden h-40 w-full overflow-visible xl:block"
        viewBox="0 0 1200 160"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M70 35 C180 -20 210 120 330 85 S510 5 620 75 S810 135 920 55 S1080 5 1140 65"
          stroke="#A9C8E8"
          strokeWidth="3"
          strokeDasharray="10 10"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">
        {[
          {
            number: "01",
            title: "Tell Us What Needs Attention",
            text: "Share your home details and the areas you want deep cleaned.",
            icon: Home,
            rotate: "xl:-rotate-2",
          },
          {
            number: "02",
            title: "Receive Your Estimate",
            text: "Get an estimate based on your home's needs and requested tasks.",
            icon: Calculator,
            rotate: "xl:rotate-2 xl:translate-y-8",
          },
          {
            number: "03",
            title: "Choose a Date",
            text: "Discuss an available date and a convenient time for your visit.",
            icon: CalendarDays,
            rotate: "xl:-rotate-2 xl:translate-y-2",
          },
          {
            number: "04",
            title: "Enjoy a Detailed Clean",
            text: "Your agreed cleaning checklist guides the cleaning visit.",
            icon: Sparkles,
            rotate: "xl:rotate-2 xl:translate-y-5",
          },
        ].map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.number}
              className={`group relative mx-auto w-full max-w-[191px] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 ${step.rotate}`}
            >
              {/* Pin */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2 scale-75">
                <div className="relative mx-auto h-11 w-9">
                  <span className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#102441] shadow-[0_5px_8px_rgba(16,36,65,0.30)]" />
                  <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border border-[#A9C8E8] bg-gradient-to-br from-[#A9C8E8] via-[#24466F] to-[#102441] shadow-[0_5px_10px_rgba(16,36,65,0.35)]" />
                  <span className="absolute left-[9px] top-[5px] h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
                </div>
              </div>

              {/* Note card */}
              <div className="relative min-h-[233px] overflow-hidden rounded-[1.7rem] border-[5px] border-white bg-gradient-to-br from-white via-[#F7FAFD] to-[#EAF0F7] p-5 pt-9 shadow-[0_18px_35px_rgba(16,36,65,0.12)] ring-1 ring-[#DCE5EF] transition-all duration-500 group-hover:shadow-[0_24px_45px_rgba(16,36,65,0.18)]">
                {/* Inner border */}
                <div className="pointer-events-none absolute inset-2 rounded-[1.3rem] border border-[#DCE5EF]" />

                {/* Card icon */}
                <span className="absolute right-5 top-6 grid h-10 w-10 place-items-center rounded-xl border border-[#DCE5EF] bg-white text-[#102441] shadow-[0_5px_15px_rgba(16,36,65,0.10)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>

                {/* Number */}
                <span className="relative block font-display text-4xl font-bold tracking-tight text-[#24466F]">
                  {step.number}
                </span>

                {/* Text */}
                <h3 className="relative mt-4 max-w-[175px] text-base font-bold leading-snug text-[#102441]">
                  {step.title}
                </h3>

                <p className="relative mt-3 text-xs font-medium leading-6 text-[#52677F]">
                  {step.text}
                </p>

                {/* Bottom accent */}
                <span className="absolute bottom-5 left-5 h-[3px] w-11 rounded-full bg-gradient-to-r from-[#102441] to-[#A9C8E8]" />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </div>
</section>


        
{/* SECTION: WHY FRESHSPACE */}
<section className="relative overflow-hidden bg-[#F8F6F0] py-16 md:py-24">
  {/* Soft navy-blue background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#24466F]/15 blur-[110px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px]" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">The FreshSpace Approach</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        More Attention to Every Detail
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        A thoughtful deep cleaning experience starts with a clear
        plan and an understanding of what matters in your home.
      </p>
    </div>

    {/* Glass cards */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {[
        {
          icon: Home,
          title: "Focused on Your Space",
          text: "Choose the rooms and areas that need the most attention.",
        },
        {
          icon: Sparkles,
          title: "Detailed Cleaning Tasks",
          text: "Give commonly overlooked surfaces and built-up dirt extra attention.",
        },
        {
          icon: ShieldCheck,
          title: "Clear Expectations",
          text: "Understand which tasks are included in your agreed cleaning checklist.",
        },
      ].map(({ icon: Icon, title, text }, index) => (
        <article
          key={title}
          className={`group relative flex min-h-[290px] flex-col overflow-hidden rounded-[1.8rem] border p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
            index === 0
              ? "border-white bg-white text-[#102441] shadow-[0_14px_35px_rgba(16,36,65,0.09)] hover:border-blue-300/80 hover:shadow-[0_22px_45px_rgba(16,36,65,0.13)]"
              : "border-blue-300/70 bg-gradient-to-br from-[#24466F] via-[#18375D] to-[#102441] text-white shadow-[0_20px_45px_rgba(16,36,65,0.22)] hover:shadow-[0_25px_50px_rgba(16,36,65,0.30)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/20 via-transparent to-blue-100/10" />

          {/* Icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
              index === 0
                ? "border-blue-100 bg-blue-100/70 text-[#102441]"
                : "border-white/80 bg-white text-[#102441]"
            }`}
          >
            <Icon className="h-6 w-6" />
          </div>

          {/* Content */}
          <div className="relative mt-8">
            <h3
              className={`text-xl font-bold tracking-tight ${
                index === 0 ? "text-[#102441]" : "text-white"
              }`}
            >
              {title}
            </h3>

            <p
              className={`mt-3 text-sm font-semibold leading-7 ${
                index === 0 ? "text-[#52677F]" : "text-white/90"
              }`}
            >
              {text}
            </p>
          </div>

          {/* Bottom decorative detail */}
          <div className="relative mt-auto flex items-center justify-between pt-7">
            <span
              className={`h-[3px] w-12 rounded-full ${
                index === 0 ? "bg-[#24466F]/70" : "bg-white/90"
              }`}
            />

            <span
              aria-hidden="true"
              className={`grid h-10 w-10 place-items-center rounded-full border text-xl transition-all duration-300 group-hover:translate-x-1 ${
                index === 0
                  ? "border-[#102441]/25 bg-blue-50 text-[#102441] group-hover:bg-[#102441] group-hover:text-white"
                  : "border-white/50 bg-white/10 text-white group-hover:bg-white group-hover:text-[#102441]"
              }`}
            >
              ↗
            </span>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

        {/* SECTION: CUSTOMER REVIEWS */}
        <section
          ref={reviewsSectionRef}
          id="reviews"
          className="overflow-hidden bg-surface py-20 md:py-28"
        >
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Homeowner Feedback</p>
              <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem]">
                A Fresh Start Makes a Difference
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                A closer look at the kind of property cleaning experience
                homeowners and renters look for.
              </p>
            </div>

            <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-0 px-2 sm:px-6">
              {customerReviews.map((review, index) => (
                <article
                  key={review.name}
                  className={`relative w-[94%] rounded-2xl border border-navy/10 p-5 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.35)] sm:w-[88%] sm:p-6 ${
                    index % 2 === 0 ? "self-start" : "self-end"
                  } ${index > 0 ? "-mt-5 sm:-mt-8" : ""} ${review.background}`}
                  style={{
                    zIndex: index + 1,
                    opacity: reviewsVisible ? 1 : 0,
                    transform: reviewsVisible
                      ? `translateY(0) rotate(${review.rotation})`
                      : "translateY(38px) rotate(0deg)",
                    transition: "opacity 700ms ease, transform 700ms ease",
                    transitionDelay: `${index * 220}ms`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-sm font-semibold text-white">
                        {review.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-navy">
                          {review.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div
                        className="flex items-center justify-end gap-0.5 text-amber-500"
                        aria-label={`${review.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }, (_, starIndex) => {
                          const fullStars = Math.floor(review.rating);
                          const hasHalfStar =
                            review.rating % 1 >= 0.5 &&
                            starIndex === fullStars;

                          if (starIndex < fullStars) {
                            return (
                              <Star
                                key={starIndex}
                                className="h-3.5 w-3.5"
                                fill="currentColor"
                                strokeWidth={1.5}
                              />
                            );
                          }

                          if (hasHalfStar) {
                            return (
                              <StarHalf
                                key={starIndex}
                                className="h-3.5 w-3.5"
                                fill="currentColor"
                                strokeWidth={1.5}
                              />
                            );
                          }

                          return (
                            <Star
                              key={starIndex}
                              className="h-3.5 w-3.5"
                              strokeWidth={1.5}
                            />
                          );
                        })}
                      </div>
                      <p className="mt-1 text-xs font-semibold text-navy">
                        {review.rating.toFixed(1)} / 5
                      </p>
                    </div>
                  </div>

                  <div className="my-4 h-px bg-navy/10" />

                  <p className="min-h-[64px] text-sm leading-6 text-navy/80">
                    “{review.review}”
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-navy/10 pt-4">
                    <span className="text-xs font-semibold text-emerald">
                      {review.service}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-9 max-w-2xl text-center text-xs leading-6 text-muted-foreground">
              Demo content: these are illustrative review examples, not
              verified customer testimonials. Replace them with genuine
              customer feedback and permission before publishing.
            </p>
          </div>
        </section>

        {/* SECTION: FAQ */}
<section
  ref={faqSectionRef}
  id="faq"
  className="relative isolate overflow-hidden bg-[#FAF9F6] py-20 md:py-28"
>
  {/* Centered blurred question mark background */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[18rem] font-black leading-none text-[#173B63]/[0.50] blur-[12px] sm:text-[26rem] lg:text-[32rem]">
    ?
  </div>

  <div className="container-site relative z-10">
    <div className="mx-auto w-full max-w-[820px]">
      {/* FAQ HEADING */}
      <div className="mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="relative -rotate-2 rounded-md bg-[#DCEAF7] px-4 py-3 text-2xl font-bold text-[#173B63] shadow-[0_8px_18px_rgba(23,59,99,0.12)] sm:px-6 sm:text-4xl">
            Frequently
          </span>

          <span className="relative rotate-1 rounded-md bg-[#173B63] px-4 py-3 text-2xl font-bold text-white shadow-[0_8px_18px_rgba(23,59,99,0.16)] sm:px-6 sm:text-4xl">
            Asked Questions
          </span>
        </div>

        <p className="mx-auto mt-7 rounded-full bg-[#DCEAF7] px-5 py-3 text-sm leading-6 text-[#173B63] shadow-[0_5px_15px_rgba(23,59,99,0.08)] sm:text-base">
          Find helpful answers about our move-in, move-out and
          rental cleaning services.
        </p>
      </div>

      {/* FAQ CARDS */}
      <div className="mx-auto mt-16 flex w-full flex-col gap-5">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          const isRight = index % 2 !== 0;

          return (
            <div
              key={faq.question}
              data-faq-card={index}
              className={`relative w-[540px] max-w-full transition-all duration-700 ease-out ${
                visibleFaqs.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } ${isRight ? "self-end" : "self-start"}`}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                aria-expanded={isOpen}
                className={`group flex min-h-[82px] w-full items-center gap-3 rounded-[40px] border border-[#B8D0E8] p-3 text-left shadow-[0_8px_20px_-12px_rgba(23,45,75,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(23,45,75,0.30)] sm:gap-4 sm:p-3 ${
                  isRight
                    ? "flex-row-reverse bg-gradient-to-l from-[#DCEAF7] via-white to-white"
                    : "bg-gradient-to-r from-[#DCEAF7] via-white to-white"
                }`}
              >
                {/* NUMBER BADGE */}
                <span className="relative grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-white to-[#DCEAF7] text-lg font-bold text-[#173B63] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(23,59,99,0.08),0_5px_12px_rgba(23,59,99,0.12)] sm:h-[54px] sm:w-[54px] sm:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* QUESTION AND ANSWER */}
                <span className="min-w-0 flex-1 py-1">
                  <span
                    className={`flex items-center justify-between gap-2 ${
                      isRight ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className={`text-[14px] font-semibold leading-[1.4] text-[#173B63] sm:text-[15px] md:text-[16px] ${
                        isRight ? "text-right" : "text-left"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS ICON */}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#DCEAF7] text-lg font-medium text-[#173B63] shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>

                  {/* SMOOTH ANSWER REVEAL */}
                  <span
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span
                        className={`block border-t border-[#B8D0E8] pt-3 text-[13px] leading-[1.6] text-[#526477] sm:text-[14px] ${
                          isRight ? "text-right" : "text-left"
                        }`}
                      >
                        {faq.answer}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* BOTTOM CONTACT CTA */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="h-px w-10 bg-[#8CAAC8] sm:w-20" />

        <p className="text-base font-semibold text-[#173B63] sm:text-lg">
          Still Have Questions?
          <a
            href="#quote"
            className="ml-2 text-[#173B63] transition-colors hover:text-[#102D4F]"
          >
            Get in Touch →
          </a>
        </p>

        <span className="h-px w-10 bg-[#8CAAC8] sm:w-20" />
      </div>
    </div>
  </div>
</section>

        {/* SECTION: QUOTE FORM */}
        <QuoteForm animate={false} />
      </main>

      {/* SECTION: FOOTER */}
      <Footer />
    </>
  );
}
