
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
    Microwave,
  Refrigerator,
  PanelsTopLeft,
  PanelTop,
  WashingMachine,
  Ruler,
  
  Calculator,
  
  
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Closing";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business } from "@/content/site";

import deepCleaningImage from "@/assets/svc-deep.jpg";
import kitchenImage from "@/assets/after-kitchen.jpg";
import bathroomImage from "@/assets/gal-bathroom.jpg";
import residentialHero from "@/assets/residential-cleaning-hero.jpg";
import moveCleaningImage from "@/assets/svc-move.jpg";

// ROUTE CONFIGURATION
export const Route = createFileRoute("/deep-cleaning")({
  head: () => ({
    meta: [
      { title: "Deep & Detailed Cleaning | FreshSpace Cleaning Co." },
      {
        name: "description",
        content:
          "Discover detailed deep cleaning services for kitchens, bathrooms, bedrooms and living spaces from FreshSpace Cleaning Co.",
      },
    ],
  }),
  component: DeepCleaningPage,
});

// DEEP CLEANING SERVICES DATA
const services = [
  {
    number: "01",
    title: "Whole-Home Deep Cleaning",
    subtitle: "A detailed refresh from room to room",
    description:
      "Give your home extra attention with a thorough cleaning of everyday surfaces and areas that are often missed during routine cleaning.",
    image: deepCleaningImage,
    tasks: [
      "Detailed dusting of accessible surfaces",
      "Wipe baseboards and door frames",
      "Clean reachable light switches and door handles",
      "Vacuum carpets, rugs and upholstery surfaces",
      "Sweep and mop hard floors",
      "Clean mirrors and accessible glass",
      "Remove visible dust from accessible corners",
    ],
  },
  {
    number: "02",
    title: "Kitchen Deep Cleaning",
    subtitle: "Extra care for your kitchen",
    description:
      "Focus on the areas where grease, food residue and everyday buildup can collect, leaving your kitchen feeling fresher and more comfortable.",
    image: kitchenImage,
    tasks: [
      "Scrub countertops and backsplash",
      "Clean stovetop surface and exterior",
      "Clean sink and faucet in detail",
      "Wipe cabinet doors and handles",
      "Clean exterior appliance surfaces",
      "Remove visible grease and food residue",
      "Sweep and mop kitchen floors",
    ],
  },
  {
    number: "03",
    title: "Bathroom Deep Cleaning",
    subtitle: "A more thorough bathroom clean",
    description:
      "Give bathroom fixtures and frequently used surfaces extra attention with detailed cleaning focused on soap residue, water spots and everyday buildup.",
    image: bathroomImage,
    tasks: [
      "Scrub shower walls and bathtub",
      "Clean shower doors and accessible glass",
      "Detail-clean toilets and surrounding areas",
      "Scrub sinks and countertops",
      "Clean faucets and bathroom fixtures",
      "Wipe mirrors and accessible surfaces",
      "Sweep and mop bathroom floors",
    ],
  },
  {
    number: "04",
    title: "Detailed Surface Cleaning",
    subtitle: "Attention to the little things",
    description:
      "Focus on commonly overlooked details throughout your home, from reachable fixtures and trim to frequently touched surfaces.",
    image: moveCleaningImage,
    tasks: [
      "Wipe accessible baseboards and trim",
      "Clean door frames and handles",
      "Wipe reachable light switches",
      "Dust accessible shelves and décor",
      "Clean reachable window sills",
      "Wipe cabinet exteriors",
      "Detail-clean frequently touched surfaces",
    ],
  },
];

// ROOM-BY-ROOM CHECKLIST DATA
const roomChecklist = [
  {
    title: "Kitchen",
    image: kitchenImage,
    tasks: [
      "Countertops and backsplash",
      "Stovetop and exterior surfaces",
      "Sink and faucet detailing",
      "Cabinet doors and handles",
      "Exterior appliance surfaces",
      "Accessible corners and edges",
      "Floor scrubbing and mopping",
    ],
  },
  {
    title: "Bathrooms",
    image: bathroomImage,
    tasks: [
      "Shower walls and bathtub",
      "Toilet and surrounding area",
      "Sink and countertop",
      "Faucets and fixtures",
      "Mirrors and accessible glass",
      "Tile and reachable surfaces",
      "Floor scrubbing and mopping",
    ],
  },
  {
    title: "Bedrooms",
    image: residentialHero,
    tasks: [
      "Detailed dusting of furniture",
      "Wipe accessible baseboards",
      "Clean reachable window sills",
      "Dust shelves and décor",
      "Clean mirrors",
      "Vacuum carpets and rugs",
      "Clean accessible surfaces",
    ],
  },
  {
    title: "Living Areas",
    image: deepCleaningImage,
    tasks: [
      "Dust furniture and shelves",
      "Wipe door frames and handles",
      "Clean reachable light switches",
      "Dust accessible fixtures",
      "Vacuum rugs and carpets",
      "Clean mirrors and glass",
      "Sweep and mop hard floors",
    ],
  },
];

// OPTIONAL ADD-ON SERVICES
const addOns = [
  "Inside oven cleaning",
  "Inside refrigerator cleaning",
  "Interior window cleaning",
  "Inside cabinets and drawers",
  "Extra baseboard detailing",
  "Blinds and reachable fixtures",
];

// DEEP CLEANING OCCASIONS
const cleaningOccasions = [
  {
    title: "One-Time Deep Clean",
    text: "Give your home a thorough refresh whenever it needs extra attention.",
  },
  {
    title: "Seasonal Cleaning",
    text: "A detailed clean to refresh your space as the seasons change.",
  },
  {
    title: "Before Guests Arrive",
    text: "Prepare your home for visitors, family gatherings and special occasions.",
  },
  {
    title: "As Needed",
    text: "Arrange a detailed cleaning when certain rooms or areas need it most.",
  },
];

// FAQ DATA
const faqs = [
  {
    question: "What is included in a deep cleaning service?",
    answer:
      "Deep cleaning includes detailed attention to kitchens, bathrooms, floors, accessible baseboards, door frames, fixtures and other commonly overlooked surfaces. The exact checklist depends on your home and the service agreed before the visit.",
  },
  {
    question: "What is the difference between regular and deep cleaning?",
    answer:
      "Regular cleaning focuses on routine home maintenance, such as dusting, vacuuming and cleaning everyday surfaces. Deep cleaning gives more attention to built-up dirt, detailed kitchen and bathroom cleaning, baseboards, fixtures and other areas that may be missed during routine visits.",
  },
  {
    question: "How long does a deep cleaning take?",
    answer:
      "The time depends on your home's size, condition, number of rooms and requested tasks. Once we understand your requirements, we can discuss a suitable time estimate.",
  },
  {
    question: "Do I need to prepare my home before the cleaning?",
    answer:
      "We recommend putting away personal belongings and clearing important surfaces where possible. This helps the cleaning team focus on the areas that need attention.",
  },
  {
    question: "Can I add inside oven or refrigerator cleaning?",
    answer:
      "Yes. Inside oven, refrigerator and cabinet cleaning can be discussed as additional services. Please mention these requests when asking for your estimate so they can be included in the agreed checklist.",
  },
  {
    question: "How do I get a deep cleaning estimate?",
    answer:
      "Use the quote form below to share your property details, the areas you want cleaned and your preferred date. The estimate can then be prepared around your home's requirements.",
  },
];

// SAMPLE REVIEW CONTENT
/* Sample review content for this demo. Replace with verified customer reviews before publishing. */
const customerReviews = [
  {
    name: "Emily R.",
    location: "Austin, TX",
    service: "Whole-Home Deep Cleaning",
    rating: 4.8,
    date: "Sample customer feedback",
    review:
      "The extra attention to the kitchen and bathrooms made a noticeable difference. The team also took care of details around the home that we usually miss during our regular cleaning.",
    rotation: "-3deg",
    background: "bg-white",
  },
  {
    name: "Sarah M.",
    location: "Round Rock, TX",
    service: "Kitchen Deep Cleaning",
    rating: 4.5,
    date: "Sample customer feedback",
    review:
      "The kitchen surfaces and stovetop looked much fresher afterward. I appreciated having a clear idea of which tasks were included before the cleaning started.",
    rotation: "2deg",
    background: "bg-[#EDF4FB]",
  },
  {
    name: "James T.",
    location: "Cedar Park, TX",
    service: "Bathroom Deep Cleaning",
    rating: 5,
    date: "Sample customer feedback",
    review:
      "The bathroom needed more than a quick clean, and the detailed attention to the shower, fixtures and floors was exactly what we were looking for.",
    rotation: "-1.5deg",
    background: "bg-white",
  },
  {
    name: "Olivia K.",
    location: "Pflugerville, TX",
    service: "Detailed Surface Cleaning",
    rating: 4.7,
    date: "Sample customer feedback",
    review:
      "I liked being able to explain which areas needed extra attention. The cleaning checklist helped make the expectations clear from the beginning.",
    rotation: "2.5deg",
    background: "bg-[#EDF4FB]",
  },
];

// DEEP CLEANING PAGE
function DeepCleaningPage() {
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
        <section className="relative overflow-hidden bg-[#0F233F] py-16 md:py-24">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <p className="eyebrow">Deep & Detailed Cleaning</p>

              <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.12] text-[#F8F6F0] sm:text-5xl md:text-6xl">
                A Deeper Clean.
                <span className="block text-emerald">
                  A Fresher Home.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#CFD3D9] md:text-lg">
                Give your home the extra attention it deserves. Our deep
                cleaning service focuses on built-up dirt, detailed kitchen
                and bathroom cleaning, and the everyday details that are
                easy to overlook.
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
                  Detailed cleaning checklists
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald" />
                  Extra attention to details
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={deepCleaningImage}
                  alt="Professional cleaner performing a detailed home cleaning"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                />
              </div>

              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-float sm:left-[-24px]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-soft text-emerald">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Every detail matters
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    A more thorough home refresh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
{/* SECTION: DEEP CLEANING SERVICE CARDS */}
<section className="bg-surface py-20 md:py-28">
  <div className="container-site">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Our Deep Cleaning Services</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        A More Detailed Clean for Every Space
      </h2>

      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        From kitchen and bathroom detailing to a complete home
        refresh, choose the areas that need extra attention.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.number}
          className="service-shadow group relative transition-transform duration-300 hover:-translate-y-1.5"
        >
          <article className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/90 bg-[linear-gradient(rgba(16,36,65,0.13),rgba(16,36,65,0.13)),#FDFDFD] shadow-[0_12px_35px_rgba(16,36,65,0.10)] backdrop-blur-2xl transition-all duration-500 hover:border-navy/30 hover:bg-white/90 hover:shadow-[0_20px_45px_rgba(16,36,65,0.16)]">

            <div className="p-3 pb-0">
              <div className="overflow-hidden rounded-[1.1rem] border border-white/80 shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

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

              <div className="mt-6 border-t border-[#DCE5E8]/90 pt-5">
                <h4 className="mb-4 text-sm font-extrabold text-[#102441]">
                  What's included in our service
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

            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-16 w-16 bg-surface [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
          </article>

          <span className="absolute bottom-0 right-0 grid h-14 w-14 translate-x-[30%] translate-y-[30%] place-items-center rounded-full bg-navy text-blue-100 shadow-lift ring-4 ring-surface transition-transform duration-300 group-hover:scale-110">
            {service.number === "01" ? (
              <Home className="h-6 w-6" strokeWidth={1.6} />
            ) : service.number === "02" ? (
              <Sparkles className="h-6 w-6" strokeWidth={1.6} />
            ) : service.number === "03" ? (
              <ShieldCheck className="h-6 w-6" strokeWidth={1.6} />
            ) : (
              <Check className="h-6 w-6" strokeWidth={1.6} />
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>


        
{/* SECTION: ROOM-BY-ROOM CHECKLIST */}
<section className="relative overflow-hidden bg-surface py-16 md:py-24">
  <div className="container-site">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Room by Room</p>
      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        What Gets Detailed in Each Room?
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">
        Take a closer look at the areas and surfaces that can receive
        extra attention during a deep cleaning visit.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {roomChecklist.map((room) => (
        <article
          key={room.title}
          className="group relative min-h-[330px] overflow-hidden rounded-[1.8rem] border-[3px] border-white/90 bg-[#102441] shadow-[0_14px_35px_rgba(16,36,65,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(16,36,65,0.20)]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(16,36,65,0.96) 0%, rgba(16,36,65,0.88) 43%, rgba(16,36,65,0.48) 72%, rgba(16,36,65,0.12) 100%), url("${room.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 via-transparent to-white/5 backdrop-blur-[1px]" />

          <div className="relative z-10 flex min-h-[330px] max-w-[75%] flex-col p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {room.title}
            </h3>

            <ul className="mt-5 space-y-3">
              {room.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-3 text-sm font-medium leading-5 text-white sm:text-base"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <a
              href="#quote"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-white/90 bg-white px-6 py-3 text-sm font-semibold text-[#102441] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              Check Availability
            </a>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/20" />
        </article>
      ))}
    </div>

    <p className="mt-7 text-center text-xs leading-6 text-muted-foreground">
      Final tasks depend on the selected service, property condition
      and agreed cleaning checklist.
    </p>
  </div>
</section>



{/* SECTION: ADD-ONS */}
<section className="relative isolate overflow-hidden bg-[#F8F6F0] py-20 md:py-28">
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
        about these additional tasks when preparing your deep
        cleaning quote.
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
  <Microwave className="h-6 w-6" />
) : index === 1 ? (
  <Refrigerator className="h-6 w-6" />
) : index === 2 ? (
  <PanelsTopLeft className="h-6 w-6" />
) : index === 3 ? (
  <PanelTop className="h-6 w-6" />
) : index === 4 ? (
  <WashingMachine className="h-6 w-6" />
) : (
  <Ruler className="h-6 w-6" />
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
<section className="relative overflow-hidden bg-[#F8F6F0] py-16 md:py-24">
  {/* Soft background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#24466F]/15 blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[110px]" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">When You Need It</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        When Is Deep Cleaning a Good Fit?
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        A detailed cleaning can be useful at different times
        throughout the year and whenever your home needs a reset.
      </p>
    </div>

    {/* Cleaning occasion glass cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cleaningOccasions.map((occasion, index) => (
        <article
          key={occasion.title}
          className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.8rem] border p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
            index === 1
              ? "border-blue-300/70 bg-gradient-to-br from-[#24466F]/95 via-[#18375D]/95 to-[#102441] text-white shadow-[0_20px_45px_rgba(16,36,65,0.25)] hover:shadow-[0_25px_50px_rgba(16,36,65,0.32)]"
              : "border-white/80 bg-white/45 text-navy shadow-[0_12px_35px_rgba(16,36,65,0.08)] hover:border-blue-300/80 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(16,36,65,0.12)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/35 via-transparent to-blue-100/20" />

          {/* Icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
              index === 1
                ? "border-white/80 bg-white text-[#102441]"
                : "border-white/90 bg-white/65 text-[#102441]"
            }`}
          >
            {index === 0 ? (
              <Sparkles className="h-6 w-6" />
            ) : index === 1 ? (
              <CalendarDays className="h-6 w-6" />
            ) : index === 2 ? (
              <Home className="h-6 w-6" />
            ) : (
              <Clock3 className="h-6 w-6" />
            )}
          </div>

          {/* Card content */}
          <div className="relative mt-8">
            <h3
              className={`text-xl font-bold tracking-tight ${
                index === 1 ? "text-white" : "text-[#102441]"
              }`}
            >
              {occasion.title}
            </h3>

            <p
              className={`mt-3 text-sm font-bold leading-6 ${
                index === 1 ? "text-white/90" : "text-[#52677F]"
              }`}
            >
              {occasion.text}
            </p>
          </div>

          {/* Bottom label and arrow */}
          <div className="relative mt-auto flex items-center justify-between gap-3 pt-8">
            <span
              className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                index === 1 ? "text-white/75" : "text-[#52677F]/75"
              }`}
            >
              0{index + 1} / {occasion.title}
            </span>

            <span
              aria-hidden="true"
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${
                index === 1
                  ? "border-white/40 bg-white/10 text-white group-hover:bg-white group-hover:text-[#102441]"
                  : "border-[#102441]/20 bg-white/50 text-[#102441] group-hover:border-[#102441] group-hover:bg-[#102441] group-hover:text-white"
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
<section id="how-it-works" className="relative overflow-hidden py-16 md:py-24">
  <div className="container-site relative">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#244F83]">
        <span className="h-px w-12 bg-[#6C9ED8]" />
        Simple Process
        <span className="h-px w-12 bg-[#6C9ED8]" />
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
          stroke="#8CB5E5"
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
                  <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border border-blue-300/70 bg-gradient-to-br from-[#6FA6E5] via-[#24558E] to-[#102441] shadow-[0_5px_10px_rgba(16,36,65,0.35)]" />
                  <span className="absolute left-[9px] top-[5px] h-2 w-2 rounded-full bg-white/50 blur-[1px]" />
                </div>
              </div>

              {/* Note card */}
              <div className="relative min-h-[233px] overflow-hidden rounded-[1.7rem] border-[5px] border-white bg-gradient-to-br from-[#F9FCFF] via-[#EDF4FF] to-[#DCEAFF] p-5 pt-9 shadow-[0_18px_35px_rgba(16,36,65,0.14)] ring-1 ring-[#BBD5F5]/70 transition-all duration-500 group-hover:shadow-[0_24px_45px_rgba(16,36,65,0.20)]">
                {/* Inner border */}
                <div className="pointer-events-none absolute inset-2 rounded-[1.3rem] border border-blue-200/70" />

                {/* Card icon */}
                <span className="absolute right-5 top-6 grid h-10 w-10 place-items-center rounded-xl border border-white bg-white/85 text-[#102441] shadow-[0_5px_15px_rgba(16,36,65,0.10)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>

                {/* Number */}
                <span className="relative block font-display text-4xl font-bold tracking-tight text-[#5C91CE]">
                  {step.number}
                </span>

                {/* Text */}
                <h3 className="relative mt-4 max-w-[175px] text-base font-bold leading-snug text-[#102441]">
                  {step.title}
                </h3>

                <p className="relative mt-3 text-xs font-medium leading-6 text-[#405B7D]">
                  {step.text}
                </p>

                {/* Bottom accent */}
                <span className="absolute bottom-5 left-5 h-[3px] w-11 rounded-full bg-gradient-to-r from-[#102441] to-[#6FA6E5]" />
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
            index === 1
              ? "border-blue-300/70 bg-gradient-to-br from-[#24466F]/95 via-[#18375D]/95 to-[#102441] text-white shadow-[0_20px_45px_rgba(16,36,65,0.22)] hover:shadow-[0_25px_50px_rgba(16,36,65,0.30)]"
              : "border-white/90 bg-white/45 text-navy shadow-[0_14px_35px_rgba(16,36,65,0.09)] hover:border-blue-300/80 hover:bg-white/65 hover:shadow-[0_22px_45px_rgba(16,36,65,0.13)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/40 via-transparent to-blue-100/20" />

          {/* Icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
              index === 1
                ? "border-white/80 bg-white text-[#102441]"
                : "border-white/90 bg-blue-100/70 text-[#102441]"
            }`}
          >
            <Icon className="h-6 w-6" />
          </div>

          {/* Content */}
          <div className="relative mt-8">
            <h3
              className={`text-xl font-bold tracking-tight ${
                index === 1 ? "text-white" : "text-[#102441]"
              }`}
            >
              {title}
            </h3>

            <p
              className={`mt-3 text-sm font-semibold leading-7 ${
                index === 1 ? "text-white/90" : "text-[#52677F]"
              }`}
            >
              {text}
            </p>
          </div>

          {/* Bottom decorative detail */}
          <div className="relative mt-auto flex items-center justify-between pt-7">
            <span
              className={`h-[3px] w-12 rounded-full ${
                index === 1 ? "bg-white/90" : "bg-[#24466F]/70"
              }`}
            />

            <span
              aria-hidden="true"
              className={`grid h-10 w-10 place-items-center rounded-full border text-xl transition-all duration-300 group-hover:translate-x-1 ${
                index === 1
                  ? "border-white/50 bg-white/10 text-white group-hover:bg-white group-hover:text-[#102441]"
                  : "border-[#102441]/25 bg-white/50 text-[#102441] group-hover:bg-[#102441] group-hover:text-white"
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
                The Difference Is in the Details
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                A closer look at the kind of detailed cleaning experience
                homeowners look for.
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

       
{/* SECTION: DEEP CLEANING FAQ */}
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
          Find helpful answers about our deep cleaning services
          and what to expect when booking with FreshSpace.
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
