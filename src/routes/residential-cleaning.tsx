
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
  ChevronDown,
  Truck,
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

import residentialHero from "@/assets/residential-cleaning-hero.jpg";
import deepCleaningImage from "@/assets/svc-deep.jpg";
import moveCleaningImage from "@/assets/svc-move.jpg";
import kitchenImage from "@/assets/after-kitchen.jpg";
import bathroomImage from "@/assets/gal-bathroom.jpg";

// ROUTE CONFIGURATION
export const Route = createFileRoute("/residential-cleaning")({
  head: () => ({
    meta: [
      { title: "Residential Cleaning | FreshSpace Cleaning Co." },
      {
        name: "description",
        content:
          "Explore residential cleaning services from FreshSpace Cleaning Co. Discover regular, deep, move-in and move-out cleaning.",
      },
    ],
  }),
  component: ResidentialCleaningPage,
});

// RESIDENTIAL SERVICES DATA
const services = [
  {
    number: "01",
    title: "Regular Home Cleaning",
    subtitle: "A consistently fresh home",
    description:
      "Keep your home comfortable and tidy with routine cleaning tailored to your schedule.",
    image: kitchenImage,
    tasks: [
      "Dust furniture, shelves and accessible surfaces",
      "Vacuum rugs and carpets",
      "Sweep and mop hard floors",
      "Clean kitchen countertops and sinks",
      "Clean bathroom toilets, showers and sinks",
      "Make beds and tidy common areas",
      "Empty household trash bins",
    ],
  },
  {
    number: "02",
    title: "Deep Home Cleaning",
    subtitle: "Extra attention to the details",
    description:
      "A more detailed clean for areas that need extra attention, built-up dirt and overlooked surfaces.",
    image: deepCleaningImage,
    tasks: [
      "Everything included in regular home cleaning",
      "Detailed bathroom fixture and surface cleaning",
      "Scrub kitchen surfaces and backsplash",
      "Clean accessible baseboards and door frames",
      "Detailed dusting of accessible areas",
      "Clean light switches and door handles",
      "Extra attention to built-up dirt",
    ],
  },
  {
    number: "03",
    title: "Move-In & Move-Out Cleaning",
    subtitle: "A fresh start for every space",
    description:
      "Prepare a home, apartment or rental property for its next chapter with a detailed cleaning plan.",
    image: moveCleaningImage,
    tasks: [
      "Clean empty rooms and accessible surfaces",
      "Clean kitchen countertops and sink",
      "Clean exterior appliance surfaces",
      "Clean bathroom fixtures and surfaces",
      "Clean inside cabinets and drawers when included in the quote",
      "Wipe accessible baseboards and door frames",
      "Clean closets and accessible storage areas",
    ],
  },
  {
    number: "04",
    title: "One-Time & Custom Cleaning",
    subtitle: "Cleaning that fits your needs",
    description:
      "Need help with selected rooms, a special occasion or a specific cleaning task? Build a plan around your priorities.",
    image: bathroomImage,
    tasks: [
      "One-time home cleaning",
      "Pre-event and post-event cleaning",
      "Selected-room cleaning",
      "Customized cleaning checklists",
      "Special requests agreed before the visit",
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
      "Sink and faucet",
      "Exterior appliance surfaces",
      "Stovetop surface",
      "Cabinet exteriors",
      "Sweep and mop floors",
      "Empty trash",
    ],
  },
  {
    title: "Bathrooms",
    image: bathroomImage,
    tasks: [
      "Toilet and surrounding area",
      "Shower and bathtub",
      "Sink and countertop",
      "Mirrors and fixtures",
      "Accessible surfaces",
      "Sweep and mop floors",
      "Empty trash",
    ],
  },
  {
    title: "Bedrooms",
    image: residentialHero,
    tasks: [
      "Dust furniture and surfaces",
      "Make beds",
      "Clean mirrors",
      "Vacuum carpets or mop floors",
      "Empty trash",
      "Tidy accessible surfaces",
    ],
  },
  {
    title: "Living Areas",
    image: deepCleaningImage,
    tasks: [
      "Dust furniture and shelves",
      "Wipe accessible surfaces",
      "Vacuum rugs and carpets",
      "Sweep and mop hard floors",
      "Clean mirrors and accessible glass",
      "Tidy common areas",
    ],
  },
];

// ADD-ON SERVICES DATA
const addOns = [
  "Inside oven cleaning",
  "Inside refrigerator cleaning",
  "Interior window cleaning",
  "Inside cabinets and drawers",
  "Laundry and folding",
  "Extra baseboard detailing",
];

// CLEANING FREQUENCY DATA
const frequencies = [
  {
    title: "Weekly",
    text: "For busy homes that benefit from regular upkeep.",
  },
  {
    title: "Every Two Weeks",
    text: "A convenient balance for maintaining a clean home.",
  },
  {
    title: "Monthly",
    text: "A scheduled refresh for your living space.",
  },
  {
    title: "One-Time",
    text: "A single visit for a specific cleaning need.",
  },
];

// FAQ DATA
const faqs = [
  {
    question: "What is included in regular home cleaning?",
    answer:
      "Regular cleaning generally covers dusting, vacuuming, floor cleaning, kitchen surfaces, bathroom cleaning, bed making and household trash. Your final checklist can be adjusted to your home.",
  },
  {
    question: "What is the difference between regular and deep cleaning?",
    answer:
      "Regular cleaning focuses on routine home maintenance. Deep cleaning includes those tasks plus more detailed attention to areas such as baseboards, bathroom fixtures, kitchen surfaces and accumulated dirt.",
  },
  {
    question: "Can I request specific cleaning tasks?",
    answer:
      "Yes. You can share your priorities when requesting a quote. We'll discuss which tasks can be included in your cleaning plan.",
  },
  {
    question: "Do you offer weekly or monthly cleaning?",
    answer:
      "Weekly, every-other-week and monthly scheduling options can be discussed when requesting your quote.",
  },
  {
    question: "Are additional services included in the regular price?",
    answer:
      "Some tasks, such as inside oven or refrigerator cleaning and interior windows, may require additional time and pricing. Please mention them when requesting your quote.",
  },
  {
    question: "How do I get a cleaning estimate?",
    answer:
      "Use the quote form below and share your property details, preferred service and scheduling needs. The estimate can then be prepared around your requirements.",
  },
];

// SAMPLE REVIEW CONTENT
/* Sample review content for this demo. Replace with verified customer reviews before publishing. */
const customerReviews = [
  {
    name: "Emily R.",
    location: "Austin, TX",
    service: "Regular Home Cleaning",
    rating: 4.8,
    date: "Recent customer feedback",
    review:
      "The team did a really thorough job in the kitchen and bathrooms. Everything felt fresh when I got home, and the booking process was straightforward. I would happily schedule another visit.",
    rotation: "-3deg",
    background: "bg-white",
  },
  {
    name: "Sarah M.",
    location: "Round Rock, TX",
    service: "Deep Home Cleaning",
    rating: 4.5,
    date: "Recent customer feedback",
    review:
      "I appreciated the attention to the little details, especially around the counters and floors. Communication was clear, and the house looked noticeably better after the clean.",
    rotation: "2deg",
    background: "bg-emerald-50",
  },
  {
    name: "James T.",
    location: "Cedar Park, TX",
    service: "Move-In Cleaning",
    rating: 5,
    date: "Recent customer feedback",
    review:
      "We needed the place cleaned before moving our things in. The rooms, kitchen and bathrooms were left looking neat and ready for move-in. It made a busy week a little easier.",
    rotation: "-1.5deg",
    background: "bg-white",
  },
  {
    name: "Olivia K.",
    location: "Pflugerville, TX",
    service: "Recurring Home Cleaning",
    rating: 4.7,
    date: "Recent customer feedback",
    review:
      "It was easy to explain what mattered most to us, and the cleaning checklist helped set clear expectations. The overall experience was smooth and professional.",
    rotation: "2.5deg",
    background: "bg-emerald-50",
  },
];

// RESIDENTIAL CLEANING PAGE
function ResidentialCleaningPage() {
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

            // Stop observing this card after it appears.
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
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <p className="eyebrow">Residential Cleaning</p>

              <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.12] text-navy sm:text-5xl md:text-6xl">
                A Cleaner Home.
                <span className="block text-emerald">A Happier You.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
                Professional residential cleaning services to keep your home
                fresh, comfortable and welcoming. From routine upkeep to
                detailed deep cleaning, discover a plan that works for your
                space.
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
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-emerald hover:text-emerald"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald" />
                  Personalized cleaning plans
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald" />
                  Flexible scheduling
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={residentialHero}
                  alt="Bright, clean and welcoming residential interior"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                />
              </div>

              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-float sm:left-[-24px]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-soft text-emerald">
                  <Home className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Your home, refreshed
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Cleaning around your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


{/* SECTION: RESIDENTIAL SERVICE CARDS */}
<section className="bg-surface py-20 md:py-28">
  <div className="container-site">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Our Residential Services</p>
      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        The Right Clean for Every Home
      </h2>
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        From everyday home care to detailed deep cleaning, discover
        the right cleaning service for your space.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.number}
          className="service-shadow group relative transition-transform duration-300 hover:-translate-y-1.5"
        >
          <article className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/90 bg-[linear-gradient(rgba(6,118,73,0.20),rgba(6,118,73,0.20)),#FDFDFD] shadow-[0_12px_35px_rgba(16,36,65,0.10)] backdrop-blur-2xl transition-all duration-500 hover:border-emerald/40 hover:bg-white/90 hover:shadow-[0_20px_45px_rgba(16,36,65,0.15)]">

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
              <span className="w-fit rounded-full border border-emerald/20 bg-[#067649] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm sm:text-xs">
                Service {service.number}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-[#102441]">
                {service.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#067649]">
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
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#067649]" />
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

          <span className="absolute bottom-0 right-0 grid h-14 w-14 translate-x-[30%] translate-y-[30%] place-items-center rounded-full bg-navy text-emerald-soft shadow-lift ring-4 ring-surface transition-transform duration-300 group-hover:scale-110">
            {service.number === "01" ? (
              <Home className="h-6 w-6" strokeWidth={1.6} />
            ) : service.number === "02" ? (
              <Sparkles className="h-6 w-6" strokeWidth={1.6} />
            ) : service.number === "03" ? (
              <Truck className="h-6 w-6" strokeWidth={1.6} />
            ) : (
              <CalendarDays className="h-6 w-6" strokeWidth={1.6} />
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
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Room by Room</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        What Gets Cleaned in Your Home?
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        Here's a closer look at the everyday tasks that can be part
        of your residential cleaning checklist.
      </p>
    </div>

    {/* Room cards */}
    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {roomChecklist.map((room) => (
        <article
          key={room.title}
          className="group relative min-h-[330px] overflow-hidden rounded-[1.8rem] border-[3px] border-white/90 bg-[#075B3D] shadow-[0_14px_35px_rgba(16,36,65,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(16,36,65,0.20)]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,65,43,0.96) 0%, rgba(0,77,49,0.88) 43%, rgba(0,77,49,0.48) 72%, rgba(0,77,49,0.12) 100%), url("${room.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-white/5 backdrop-blur-[1px]" />

          {/* Card content */}
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
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <a
              href="#quote"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-white/90 bg-white px-6 py-3 text-sm font-semibold text-[#064B34] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-50"
            >
              Check Availability
            </a>
          </div>

          {/* Glass border highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/20" />
        </article>
      ))}
    </div>

    {/* Footer note */}
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
    className="pointer-events-none absolute -left-8 top-0 -z-10 h-[420px] w-[650px] max-w-[65%] text-emerald/10"
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
  <div className="pointer-events-none absolute left-[45%] top-12 -z-10 text-emerald/10">
    <Sparkles className="h-14 w-14" />
  </div>
  <div className="pointer-events-none absolute left-[49%] top-28 -z-10 text-emerald/10">
    <Sparkles className="h-9 w-9" />
  </div>

  <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
    {/* Left content */}
    <div>
      <p className="flex items-center gap-3 text-sm font-bold tracking-wide text-emerald">
        <span className="h-[2px] w-12 rounded-full bg-emerald" />
        Extra Attention
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-navy sm:text-5xl md:text-6xl md:leading-[1.1]">
        Want a Little More?
      </h2>

      <p className="mt-6 max-w-lg text-base leading-8 text-navy/80 sm:text-lg">
        Add extra cleaning tasks to your plan when your home needs
        more attention. These options can be discussed while preparing
        your quote.
      </p>

      <a
        href="#quote"
        className="group mt-8 inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#00875B] to-[#16B981] px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(5,150,105,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(5,150,105,0.30)]"
      >
        Customize My Cleaning
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>

    {/* Right glass cards */}
    <div className="grid gap-4 sm:grid-cols-2">
      {addOns.map((item, index) => (
        <div
          key={item}
          className="group relative flex min-h-[88px] items-center gap-4 overflow-hidden rounded-[1.5rem] border border-emerald-700/10 bg-white/55 px-4 py-4 shadow-[0_8px_25px_rgba(16,36,65,0.045)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(5,150,105,0.10)] sm:px-5"
        >
          {/* Soft glass highlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-emerald-100/20" />

          {/* Green icon circle */}
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-emerald-100 bg-gradient-to-br from-emerald-50 to-emerald-100/80 text-emerald shadow-[0_4px_14px_rgba(5,150,105,0.08)] transition-transform duration-300 group-hover:scale-110">
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
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald-100 bg-emerald-50/80 text-emerald transition-all duration-300 group-hover:border-emerald group-hover:bg-emerald group-hover:text-white"
          >
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

        
{/* SECTION: CLEANING FREQUENCY */}
<section className="relative overflow-hidden bg-[#F8F6F0] py-16 md:py-24">
  {/* Soft background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald/15 blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-300/20 blur-[110px]" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Your Schedule</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        How Often Would You Like Us to Clean?
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        Choose a cleaning frequency that works for your household.
      </p>
    </div>

    {/* Frequency glass cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {frequencies.map((frequency, index) => (
        <article
          key={frequency.title}
          className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.8rem] border p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
            index === 1
              ? "border-emerald-300/70 bg-gradient-to-br from-[#13A875]/90 via-[#07966B]/95 to-[#04734F]/95 text-white shadow-[0_20px_45px_rgba(4,115,79,0.25)] hover:shadow-[0_25px_50px_rgba(4,115,79,0.32)]"
              : "border-white/80 bg-white/45 text-navy shadow-[0_12px_35px_rgba(16,36,65,0.08)] hover:border-emerald-300/80 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(16,36,65,0.12)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/35 via-transparent to-emerald-100/10" />

          {/* Icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
              index === 1
                ? "border-white/80 bg-white text-[#07966B]"
                : "border-white/90 bg-white/65 text-emerald"
            }`}
          >
            {index === 0 ? (
              <Clock3 className="h-6 w-6" />
            ) : index === 1 ? (
              <CalendarDays className="h-6 w-6" />
            ) : index === 2 ? (
              <Home className="h-6 w-6" />
            ) : (
              <Sparkles className="h-6 w-6" />
            )}
          </div>

          {/* Card content */}
          <div className="relative mt-8">
            <h3
              className={`text-xl font-bold tracking-tight ${
                index === 1 ? "text-white" : "text-[#102441]"
              }`}
            >
              {frequency.title}
            </h3>

            <p
              className={`mt-3 text-sm font-bold leading-6 ${
                index === 1 ? "text-white/90" : "text-[#52677F]"
              }`}
            >
              {frequency.text}
            </p>
          </div>

          {/* Bottom label and arrow */}
          <div className="relative mt-auto flex items-center justify-between gap-3 pt-8">
            <span
              className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                index === 1 ? "text-white/75" : "text-emerald/75"
              }`}
            >
              0{index + 1} / {frequency.title}
            </span>

            <span
              aria-hidden="true"
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${
                index === 1
                  ? "border-white/40 bg-white/10 text-white group-hover:bg-white group-hover:text-emerald"
                  : "border-emerald/20 bg-white/50 text-emerald group-hover:border-emerald group-hover:bg-emerald group-hover:text-white"
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
  {/* Soft decorative green shapes */}
  <div className="pointer-events-none absolute -left-28 top-0 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
        <span className="h-px w-12 bg-emerald-600" />
        Simple Process
        <span className="h-px w-12 bg-emerald-600" />
      </p>

      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl md:text-6xl">
        Getting Started Is Easy
      </h2>

      <p className="mt-5 text-base leading-7 text-[#52677F] sm:text-lg">
        Follow these simple steps to book your residential cleaning service.
      </p>
    </div>

    {/* Cards and connecting path */}
    <div className="relative mt-16">
      {/* Dashed connecting line */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-1/2 hidden h-24 w-[84%] -translate-y-1/2 md:block"
        viewBox="0 0 1000 100"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 25 C100 25 100 75 200 75 S300 25 400 25 S500 75 600 75 S700 25 800 25 S900 75 1000 75"
          stroke="#69B99A"
          strokeWidth="3"
          strokeDasharray="10 12"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {[
          {
            number: "01",
            title: "Tell Us About Your Home",
            text: "Share your property details and the cleaning help you need.",
            icon: Home,
            rotate: "lg:-rotate-3",
          },
          {
            number: "02",
            title: "Receive Your Estimate",
            text: "Get a personalized estimate based on your requirements.",
            icon: Calculator,
            rotate: "lg:rotate-2 lg:translate-y-8",
          },
          {
            number: "03",
            title: "Choose a Schedule",
            text: "Discuss an available date and a convenient time.",
            icon: CalendarDays,
            rotate: "lg:-rotate-2",
          },
          {
            number: "04",
            title: "Enjoy Your Fresh Space",
            text: "Your agreed cleaning checklist guides the visit.",
            icon: Sparkles,
            rotate: "lg:rotate-3 lg:translate-y-8",
          },
        ].map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.number}
              className={`group relative mx-auto w-full max-w-[191px] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 ${step.rotate}`}
            >
              {/* Pin */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <div className="relative h-9 w-9">
                  <span className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full bg-[#075B3D] shadow-md" />
                  <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border border-emerald-300/60 bg-gradient-to-br from-[#38A879] via-[#087B50] to-[#064B34] shadow-[0_5px_10px_rgba(4,90,58,0.35)]" />
                  <span className="absolute left-[9px] top-[5px] h-2 w-2 rounded-full bg-white/60" />
                </div>
              </div>

              {/* Main card */}
              <div className="relative min-h-[285px] overflow-hidden rounded-[1.5rem] border-[5px] border-white bg-gradient-to-br from-[#F1FBF5] via-[#E7F7ED] to-[#D4F0DF] p-5 pt-10 shadow-[0_16px_35px_rgba(16,36,65,0.13)] transition-all duration-500 group-hover:shadow-[0_22px_42px_rgba(4,115,79,0.20)]">
                {/* Inner border */}
                <div className="pointer-events-none absolute inset-1 rounded-[1.1rem] border border-emerald-200/80" />

                {/* Number and icon */}
                <div className="relative flex items-center justify-between gap-2">
                  <span className="font-display text-4xl font-bold tracking-tight text-[#17865A]">
                    {step.number}
                  </span>

                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-100 bg-white/90 text-[#075B3D] shadow-[0_4px_12px_rgba(4,115,79,0.10)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </div>

                {/* Card content */}
                <h3 className="relative mt-5 text-lg font-bold leading-6 text-[#073F2D]">
                  {step.title}
                </h3>

                <p className="relative mt-4 text-sm leading-6 text-[#426B59]">
                  {step.text}
                </p>

                {/* Bottom detail */}
                <div className="relative mt-7 h-[3px] w-10 rounded-full bg-[#168657] transition-all duration-300 group-hover:w-16" />
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
  {/* Soft green background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald/15 blur-[110px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-300/20 blur-[120px]" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">The FreshSpace Approach</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
        Thoughtful Cleaning, Made Simple
      </h2>

      <p className="mt-4 leading-7 text-muted-foreground">
        A good cleaning experience starts with understanding what
        matters most in your home.
      </p>
    </div>

    {/* Glass cards */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {[
        {
          icon: Home,
          title: "Made for Your Home",
          text: "Cleaning tasks can be discussed and tailored to your space and priorities.",
        },
        {
          icon: CalendarDays,
          title: "Flexible Scheduling",
          text: "Explore recurring or one-time cleaning options around your routine.",
        },
        {
          icon: ShieldCheck,
          title: "Clear Expectations",
          text: "Know which tasks are included in your agreed cleaning checklist.",
        },
      ].map(({ icon: Icon, title, text }, index) => (
        <article
          key={title}
          className={`group relative flex min-h-[290px] flex-col overflow-hidden rounded-[1.8rem] border p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
            index === 1
              ? "border-emerald-300/70 bg-gradient-to-br from-[#13A875]/90 via-[#07966B]/95 to-[#04734F]/95 text-white shadow-[0_20px_45px_rgba(4,115,79,0.22)] hover:shadow-[0_25px_50px_rgba(4,115,79,0.30)]"
              : "border-white/90 bg-white/45 text-navy shadow-[0_14px_35px_rgba(16,36,65,0.09)] hover:border-emerald-300/80 hover:bg-white/65 hover:shadow-[0_22px_45px_rgba(16,36,65,0.13)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/40 via-transparent to-emerald-100/10" />

          {/* Icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
              index === 1
                ? "border-white/80 bg-white text-[#07966B]"
                : "border-white/90 bg-emerald-100/70 text-emerald"
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
                index === 1 ? "bg-white/90" : "bg-emerald/70"
              }`}
            />

            <span
              aria-hidden="true"
              className={`grid h-10 w-10 place-items-center rounded-full border text-xl transition-all duration-300 group-hover:translate-x-1 ${
                index === 1
                  ? "border-white/50 bg-white/10 text-white group-hover:bg-white group-hover:text-emerald"
                  : "border-emerald/25 bg-white/50 text-emerald group-hover:bg-emerald group-hover:text-white"
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
                The Little Details Make the Difference
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                A closer look at the kind of experience homeowners want from a
                dependable cleaning service.
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
              Demo content: these are illustrative review examples, not verified
              customer testimonials. Replace them with genuine customer
              feedback and permission before publishing.
            </p>
          </div>
        </section>


{/* SECTION: RESIDENTIAL FAQ */}
<section
  ref={faqSectionRef}
  id="faq"
  className="relative isolate overflow-hidden bg-[#FAF9F6] py-20 md:py-28"
>
  {/* Centered blurred question mark background */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[18rem] font-black leading-none text-emerald/[0.50] blur-[12px] sm:text-[26rem] lg:text-[32rem]">
    ?
  </div>

  <div className="container-site relative z-10">

    {/* FAQ CONTENT — ALL CONTENT INSIDE 820PX */}
    <div className="mx-auto w-full max-w-[820px]">

      {/* FAQ HEADING */}
      <div className="mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="relative -rotate-2 rounded-md bg-[#E8F5EF] px-4 py-3 text-2xl font-bold text-navy shadow-[0_8px_18px_rgba(30,50,30,0.12)] sm:px-6 sm:text-4xl">
            Frequently
          </span>

          <span className="relative rotate-1 rounded-md bg-emerald px-4 py-3 text-2xl font-bold text-white shadow-[0_8px_18px_rgba(30,50,30,0.16)] sm:px-6 sm:text-4xl">
            Asked Questions
          </span>
        </div>

        <p className="mx-auto mt-7 rounded-full bg-[#E8F5EF] px-5 py-3 text-sm leading-6 text-navy shadow-[0_5px_15px_rgba(30,50,30,0.08)] sm:text-base">
          Find helpful answers about our residential cleaning services
          and what to expect when booking with FreshSpace.
        </p>
      </div>

      {/* FAQ CARDS */}
      <div className="mx-auto mt-16 flex w-full flex-col gap-5">

        {[
          {
            question: "What is included in regular home cleaning?",
            answer:
              "Regular home cleaning focuses on keeping your living spaces fresh and tidy. It typically includes dusting surfaces, vacuuming and mopping floors, cleaning kitchen surfaces, wiping bathroom fixtures, and general tidying of commonly used areas.",
          },
          {
            question:
              "What is the difference between regular and deep cleaning?",
            answer:
              "Regular cleaning maintains the cleanliness of your home through routine tasks. Deep cleaning is more detailed and focuses on areas that need extra attention, such as built-up dirt, hard-to-reach spots, and detailed kitchen and bathroom cleaning.",
          },
          {
            question: "Can I request specific cleaning tasks?",
            answer:
              "Absolutely. You can let us know which areas or tasks matter most to you when requesting your cleaning service. We can discuss your priorities and confirm what can be included in your cleaning plan.",
          },
          {
            question: "Do you offer weekly or monthly cleaning?",
            answer:
              "You can ask about recurring cleaning arrangements, including weekly, biweekly, or monthly visits. Scheduling depends on availability, so contact us to discuss a routine that works for your home.",
          },
          {
            question:
              "Are additional services included in the regular price?",
            answer:
              "Some extra tasks may not be included in a standard cleaning visit and could require an additional charge. We recommend discussing your requested services in advance so the scope and price are clear before booking.",
          },
          {
            question: "How do I get a cleaning estimate?",
            answer:
              "Getting an estimate is simple. Share your home size, the type of cleaning you need, and any special requests through our quote form. Our team can then discuss your requirements and provide an estimate.",
          },
        ].map((faq, index) => {
          const isOpen = openFaq === index;
          const isRight = index % 2 !== 0;

          return (
            <div
              key={faq.question}
              data-faq-card={index}
              className={`relative w-[405px] max-w-full transition-all duration-700 ease-out ${
                visibleFaqs.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } ${
                isRight ? "self-end" : "self-start"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                aria-expanded={isOpen}
                className={`group flex min-h-[82px] w-full items-center gap-3 rounded-[40px] border border-emerald/20 p-3 text-left shadow-[0_8px_20px_-12px_rgba(35,45,25,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(35,45,25,0.30)] sm:gap-4 sm:p-3 ${
                  isRight
                    ? "flex-row-reverse bg-gradient-to-l from-[#E8F5EF] via-white to-white"
                    : "bg-gradient-to-r from-[#E8F5EF] via-white to-white"
                }`}
              >
                {/* NUMBER BADGE */}
                <span className="relative grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-white to-[#F0F0EB] text-lg font-bold text-navy shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(40,50,30,0.08),0_5px_12px_rgba(35,45,25,0.12)] sm:h-[54px] sm:w-[54px] sm:text-xl">
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
                      className={`text-[14px] font-semibold leading-[1.4] text-navy sm:text-[15px] md:text-[16px] ${
                        isRight ? "text-right" : "text-left"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS ICON */}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/80 text-lg font-medium text-emerald shadow-sm transition-transform duration-300 group-hover:scale-105">
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
                        className={`block border-t border-emerald/20 pt-3 text-[13px] leading-[1.6] text-[#4B5968] sm:text-[14px] ${
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
        <span className="h-px w-10 bg-[#A9B47A] sm:w-20" />

        <p className="text-base font-semibold text-navy sm:text-lg">
          Still Have Questions?
          <a
            href="#quote"
            className="ml-2 text-emerald transition-colors hover:text-navy"
          >
            Get in Touch →
          </a>
        </p>

        <span className="h-px w-10 bg-[#A9B47A] sm:w-20" />
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
