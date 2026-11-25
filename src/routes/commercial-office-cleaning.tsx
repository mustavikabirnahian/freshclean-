import officeWorkspace from "@/assets/office-workspace.jpg";
import commercialKitchen from "@/assets/commercial-kitchen.jpg";
import commercialRestroom from "@/assets/commercial-restroom.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";
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
    PanelsTopLeft,
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

import residentialHero from "@/assets/residential-cleaning-hero.jpg";
import deepCleaningImage from "@/assets/svc-deep.jpg";
import moveCleaningImage from "@/assets/svc-move.jpg";
import kitchenImage from "@/assets/after-kitchen.jpg";
import bathroomImage from "@/assets/gal-bathroom.jpg";

// ROUTE CONFIGURATION
export const Route = createFileRoute("/commercial-office-cleaning")({
  head: () => ({
    meta: [
      { title: "Commercial & Office Cleaning | FreshSpace Cleaning Co." },
      {
        name: "description",
        content:
          "Explore commercial and office cleaning services from FreshSpace Cleaning Co. Discover office, janitorial, restroom, breakroom, floor and common-area cleaning.",
      },
    ],
  }),
  component: CommercialOfficeCleaningPage,
});

// COMMERCIAL & OFFICE SERVICES DATA
const services = [
  {
    number: "01",
    title: "Office Cleaning",
    subtitle: "A clean, professional workspace",
    description:
      "Keep work areas neat and welcoming with routine cleaning for offices, desks and meeting rooms.",
    image: kitchenImage,
    tasks: [
      "Dust desks, shelves and accessible surfaces",
      "Wipe meeting tables and shared work surfaces",
      "Vacuum rugs and carpets",
      "Sweep and mop hard floors",
      "Clean interior glass partitions when included",
      "Empty office waste bins",
    ],
  },
  {
    number: "02",
    title: "Janitorial Services",
    subtitle: "Reliable day-to-day upkeep",
    description:
      "Maintain a tidy workplace with a cleaning routine shaped around your building and operating schedule.",
    image: deepCleaningImage,
    tasks: [
      "Clean and maintain shared areas",
      "Wipe high-touch points and door handles",
      "Refresh waste and recycling stations",
      "Spot-clean visible marks on surfaces",
      "Maintain floors in regularly used areas",
      "Follow an agreed cleaning checklist",
    ],
  },
  {
    number: "03",
    title: "Restroom Cleaning",
    subtitle: "Fresh, hygienic facilities",
    description:
      "Give staff and visitors clean, well-maintained restrooms with attention to frequently used fixtures and surfaces.",
    image: bathroomImage,
    tasks: [
      "Clean and sanitize toilets and urinals",
      "Clean sinks, faucets and countertops",
      "Polish mirrors and accessible fixtures",
      "Wipe dispensers and high-touch surfaces",
      "Sweep and mop restroom floors",
      "Empty trash and check supplies",
    ],
  },
  {
    number: "04",
    title: "Breakroom Cleaning",
    subtitle: "A tidier shared kitchen",
    description:
      "Keep staff kitchens and break areas ready for everyday use with practical surface and floor cleaning.",
    image: kitchenImage,
    tasks: [
      "Wipe counters, tables and accessible surfaces",
      "Clean sinks and faucets",
      "Wipe exterior appliance surfaces",
      "Clean cabinet exteriors",
      "Sweep and mop floors",
      "Empty bins and tidy the area",
    ],
  },
  {
    number: "05",
    title: "Floor & Carpet Care",
    subtitle: "Care for high-traffic floors",
    description:
      "Help maintain the appearance of workplace flooring with routine vacuuming, mopping and agreed floor-care tasks.",
    image: moveCleaningImage,
    tasks: [
      "Vacuum office carpets and rugs",
      "Sweep and mop hard floors",
      "Spot-clean accessible floor marks",
      "Clean entryway flooring",
      "Pay attention to high-traffic areas",
      "Discuss specialist floor care in advance",
    ],
  },
  {
    number: "06",
    title: "Common Area Cleaning",
    subtitle: "Welcoming shared spaces",
    description:
      "Keep reception areas, lobbies and hallways looking neat for employees, clients and visitors.",
    image: residentialHero,
    tasks: [
      "Dust reception desks and accessible surfaces",
      "Wipe tables and shared furniture",
      "Clean accessible glass and mirrors",
      "Vacuum rugs and sweep or mop floors",
      "Wipe high-touch door handles",
      "Empty common-area waste bins",
    ],
  },
];


// WORKPLACE AREA CHECKLIST DATA
const roomChecklist = [
  {
    title: "Workstations & Offices",
    image: officeWorkspace,
    tasks: [
      "Desks and accessible surfaces",
      "Meeting tables and shared counters",
      "Shelves and reachable fixtures",
      "Vacuum carpets and rugs",
      "Sweep and mop hard floors",
      "Empty office waste bins",
    ],
  },
  {
    title: "Restrooms",
    image: commercialRestroom,
    tasks: [
      "Toilets and urinals",
      "Sinks, faucets and countertops",
      "Mirrors and accessible fixtures",
      "High-touch surfaces",
      "Sweep and mop floors",
      "Empty trash bins",
    ],
  },
  {
    title: "Breakrooms & Kitchens",
    image: commercialKitchen,
    tasks: [
      "Counters and tables",
      "Sinks and faucets",
      "Exterior appliance surfaces",
      "Cabinet exteriors",
      "Sweep and mop floors",
      "Empty trash bins",
    ],
  },
  {
    title: "Reception & Common Areas",
    image: conferenceRoom,
    tasks: [
      "Reception desks and furniture",
      "Lobbies and hallways",
      "Accessible glass and mirrors",
      "High-touch door handles",
      "Vacuum rugs and mop floors",
      "Empty shared waste bins",
    ],
  },
];


// COMMERCIAL CLEANING ADD-ONS DATA
const addOns = [
  {
    title: "Interior Glass & Partitions",
    description:
      "Cleaning interior glass walls, office partitions, and glass doors for a clearer, more polished workspace.",
    icon: PanelsTopLeft,
  },
  {
    title: "Upholstery & Office Chairs",
    description:
      "Extra attention for fabric office chairs, reception seating, and waiting-area furniture.",
    icon: Armchair,
  },
  {
    title: "Carpet & Spot Treatment",
    description:
      "Targeted treatment for visible carpet stains and heavily used floor areas.",
    icon: Layers,
  },
  {
    title: "High Dusting & Vent Cleaning",
    description:
      "Removing accessible dust from vents, ceiling fixtures, and elevated surfaces.",
    icon: Wind,
  },
  {
    title: "Breakroom Appliance Cleaning",
    description:
      "Detailed exterior cleaning of microwaves, refrigerators, and other shared appliances.",
    icon: Refrigerator,
  },
  {
    title: "Detailed Doors & Baseboards",
    description:
      "Cleaning door frames, handles, baseboards, and other frequently overlooked details.",
    icon: DoorClosed,
  },
];

// COMMERCIAL CLEANING SCHEDULE DATA
const frequencies = [
  {
    title: "Daily",
    text: "For busy workplaces that need consistent day-to-day upkeep.",
  },
  {
    title: "Multiple Times a Week",
    text: "A routine for offices and facilities with regular foot traffic.",
  },
  {
    title: "Weekly",
    text: "A scheduled refresh for smaller or lower-traffic workspaces.",
  },
  {
    title: "One-Time",
    text: "A single visit for a specific cleaning requirement.",
  },
];

// FAQ DATA
const faqs = [
  {
    question: "What is included in commercial cleaning?",
    answer:
      "Commercial cleaning can include office and workstation cleaning, restroom and breakroom care, floor cleaning, common-area upkeep and waste removal. The final checklist is agreed around your property.",
  },
  {
    question: "Can cleaning be scheduled outside business hours?",
    answer:
      "You can share your preferred cleaning times when requesting a quote. Scheduling options can be discussed based on availability and your workplace requirements.",
  },
  {
    question: "Can I request a customized cleaning plan?",
    answer:
      "Yes. Share the areas that need attention and the tasks you want included. The cleaning scope can be discussed before a schedule is confirmed.",
  },
  {
    question: "Do you offer recurring office cleaning?",
    answer:
      "Daily, multiple-times-per-week and weekly arrangements can be discussed when requesting your quote. The schedule depends on your needs and availability.",
  },
  {
    question: "Are floor and window cleaning included?",
    answer:
      "Routine floor cleaning may be included in the agreed checklist. Interior glass, window cleaning and specialist floor care can be discussed as additional services.",
  },
  {
    question: "How do I get a commercial cleaning estimate?",
    answer:
      "Use the quote form below and share your business type, approximate space, requested services and preferred schedule. The estimate can then be prepared around your requirements.",
  },
];

// SAMPLE REVIEW CONTENT
/* Sample review content for this demo. Replace with verified customer reviews before publishing. */
const customerReviews = [
  {
    name: "Emily R.",
    location: "Austin, TX",
    service: "Office Cleaning",
    rating: 4.8,
    date: "Recent customer feedback",
    review:
      "The office areas, meeting tables and floors were left looking neat. Communication was clear, and the agreed cleaning checklist made expectations easy to understand.",
    rotation: "-3deg",
    background: "bg-white",
  },
  {
    name: "Sarah M.",
    location: "Round Rock, TX",
    service: "Janitorial Services",
    rating: 4.5,
    date: "Recent customer feedback",
    review:
      "The shared work areas and high-touch surfaces received careful attention. The cleaning plan was straightforward and suited the needs of the workplace.",
    rotation: "2deg",
    background: "bg-emerald-50",
  },
  {
    name: "James T.",
    location: "Cedar Park, TX",
    service: "Restroom Cleaning",
    rating: 5,
    date: "Recent customer feedback",
    review:
      "The restroom and common areas looked refreshed after the visit. It was helpful to have the requested tasks clearly outlined in advance.",
    rotation: "-1.5deg",
    background: "bg-white",
  },
  {
    name: "Olivia K.",
    location: "Pflugerville, TX",
    service: "Recurring Office Cleaning",
    rating: 4.7,
    date: "Recent customer feedback",
    review:
      "It was easy to explain which areas needed regular attention. The agreed checklist helped keep the service organized and consistent.",
    rotation: "2.5deg",
    background: "bg-emerald-50",
  },
];

// COMMERCIAL & OFFICE CLEANING PAGE
function CommercialOfficeCleaningPage() {
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
              <p className="eyebrow">Commercial & Office Cleaning</p>

              <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.12] text-navy sm:text-5xl md:text-6xl">
                A Cleaner Workplace.
                <span className="block text-emerald">A Better Workday.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
                Professional commercial cleaning services to keep your workplace
                clean, comfortable and welcoming. From office and restroom care
                to shared-area upkeep, discover a plan that works for your
                business.
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
                  alt="Bright, clean and professional office interior"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                />
              </div>

              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-float sm:left-[-24px]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-soft text-emerald">
                  <Home className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Your workplace, refreshed
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Cleaning around your schedule
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


{/* SECTION: COMMERCIAL SERVICE CARDS */}
<section className="bg-[#F2F6F2] py-20 md:py-28">
  <div className="container-site">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Our Commercial Services</p>

      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        The Right Clean for Your Workplace
      </h2>

      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        From office and janitorial care to restrooms, breakrooms and shared spaces, discover
        the right cleaning service for your workplace.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.number}
          className="service-shadow group relative transition-transform duration-300 hover:-translate-y-1.5"
        >
          <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-card shadow-[inset_0_1px_0_oklch(1_0_0/0.65)] transition-colors duration-300 hover:bg-card/80">
            <div className="p-3 pb-0">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 pb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
                Service {service.number}
              </span>

              <h3 className="mt-2 text-xl font-medium text-navy">
                {service.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-emerald">
                {service.subtitle}
              </p>

              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 border-t border-navy/10 pt-5">
                <h4 className="mb-4 text-sm font-semibold text-navy">
                  What's included
                </h4>

                <ul className="space-y-3">
                  {service.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-16 w-16 bg-[#F2F6F2] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
          </article>

          <span className="absolute bottom-0 right-0 grid h-14 w-14 translate-x-[30%] translate-y-[30%] place-items-center rounded-full bg-[#176B3A] text-white shadow-lift ring-4 ring-[#F2F6F2] transition-transform duration-300 group-hover:scale-110">
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



{/* SECTION: WORKPLACE AREA CHECKLIST */}
<section className="relative overflow-hidden bg-[#F2F6F2] py-16 md:py-24">
  <div className="container-site">
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Area by Area</p>

      <h2 className="mt-3 text-3xl font-medium text-[#17452F] sm:text-4xl">
        What Gets Cleaned at Your Workplace?
      </h2>

      <p className="mt-4 leading-7 text-[#52675B]">
        Here's a closer look at the everyday tasks that can be part
        of your commercial cleaning checklist.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {roomChecklist.map((room) => (
        <article
          key={room.title}
          className="group relative min-h-[330px] overflow-hidden rounded-[1.8rem] border-[3px] border-white/90 bg-[#DDEFE3] shadow-[0_14px_35px_rgba(20,65,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(20,65,42,0.20)]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(221,239,227,0.97) 0%, rgba(221,239,227,0.89) 43%, rgba(221,239,227,0.50) 72%, rgba(221,239,227,0.12) 100%), url("${room.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-emerald-200/10 backdrop-blur-[1px]" />

          <div className="relative z-10 flex min-h-[330px] max-w-[75%] flex-col p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-[#17452F] sm:text-3xl">
              {room.title}
            </h3>

            <ul className="mt-5 space-y-3">
              {room.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-3 text-sm font-medium leading-5 text-[#294B38] sm:text-base"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#176B3A]" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <a
              href="#quote"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-[#17452F]/20 bg-[#176B3A] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#12552D]"
            >
              Check Availability
            </a>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/40" />
        </article>
      ))}
    </div>

    <p className="mt-7 text-center text-xs leading-6 text-[#52675B]">
      Final tasks depend on the selected service, property condition
      and agreed workplace cleaning checklist.
    </p>
  </div>
</section>


{/* SECTION: ADD-ONS */}
<section className="relative isolate overflow-hidden bg-[#F2F6F2] py-20 md:py-28">
  {/* Decorative house watermark */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-8 top-0 -z-10 h-[420px] w-[650px] max-w-[65%] text-[#176B3A]/10"
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
  <div className="pointer-events-none absolute left-[45%] top-12 -z-10 text-[#176B3A]/10">
    <Sparkles className="h-14 w-14" />
  </div>
  <div className="pointer-events-none absolute left-[49%] top-28 -z-10 text-[#176B3A]/10">
    <Sparkles className="h-9 w-9" />
  </div>

  <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
    {/* Left content */}
    <div>
      <p className="flex items-center gap-3 text-sm font-bold tracking-wide text-[#176B3A]">
        <span className="h-[2px] w-12 rounded-full bg-[#176B3A]" />
        Additional Details
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#17452F] sm:text-5xl md:text-6xl md:leading-[1.1]">
        Need a Little Extra Attention?
      </h2>

      <p className="mt-6 max-w-lg text-base leading-8 text-[#52675B] sm:text-lg">
        Some workplace areas need more time and specialized attention.
        Ask about these additional tasks when preparing your commercial
        cleaning quote.
      </p>

      <a
        href="#quote"
        className="group mt-8 inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#176B3A] to-[#17452F] px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(23,107,58,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(23,107,58,0.30)]"
      >
        Add to My Cleaning Plan
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>

    {/* Right glass cards */}
    <div className="grid gap-4 sm:grid-cols-2">
      {addOns.map((item, index) => (
        <div
          key={item.title}
          className="group relative flex min-h-[88px] items-center gap-4 overflow-hidden rounded-[1.5rem] border border-[#176B3A]/10 bg-white/55 px-4 py-4 shadow-[0_8px_25px_rgba(23,69,47,0.045)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#176B3A]/30 hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(23,69,47,0.12)] sm:px-5"
        >
          {/* Soft glass highlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-green-100/30" />

          {/* Green icon circle */}
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#DDEFE3] bg-gradient-to-br from-[#F2F8F3] to-[#DDEFE3] text-[#176B3A] shadow-[0_4px_14px_rgba(23,107,58,0.08)] transition-transform duration-300 group-hover:scale-110">
            {index === 0 ? (
              <PanelsTopLeft className="h-6 w-6" />
            ) : index === 1 ? (
              <Armchair className="h-6 w-6" />
            ) : index === 2 ? (
              <Layers className="h-6 w-6" />
            ) : index === 3 ? (
              <Wind className="h-6 w-6" />
            ) : index === 4 ? (
              <Refrigerator className="h-6 w-6" />
            ) : (
              <DoorClosed className="h-6 w-6" />
            )}
          </span>

          {/* Add-on title */}
          <span className="relative flex-1 text-sm font-bold leading-5 text-[#17452F] sm:text-[15px]">
            {item.title}
          </span>

          {/* Arrow circle */}
          <span
            aria-hidden="true"
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#DDEFE3] bg-[#DDEFE3]/80 text-[#176B3A] transition-all duration-300 group-hover:border-[#176B3A] group-hover:bg-[#176B3A] group-hover:text-white"
          >
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION: CLEANING FREQUENCY */}
<section className="relative overflow-hidden bg-[#F2F6F2] py-16 md:py-24">
  {/* Soft background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#176B3A]/15 blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#B8DCC3]/30 blur-[110px]" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">Your Schedule</p>

      <h2 className="mt-3 text-3xl font-medium text-[#17452F] sm:text-4xl">
        How Often Does Your Workplace Need Cleaning?
      </h2>

      <p className="mt-4 leading-7 text-[#52675B]">
        Choose a cleaning schedule that works for your business.
      </p>
    </div>

    {/* Cleaning frequency cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {frequencies.map((frequency, index) => {
        const isWeekly = frequency.title.toLowerCase().includes("weekly");
        const isOneTime = frequency.title.toLowerCase().includes("one-time");

        return (
          <article
            key={frequency.title}
            className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.8rem] border p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
              isWeekly
                ? "border-[#DDEFE3] bg-white text-[#17452F] shadow-[0_12px_35px_rgba(23,69,47,0.08)] hover:border-[#176B3A]/30 hover:shadow-[0_20px_40px_rgba(23,69,47,0.12)]"
                : isOneTime
                  ? "border-[#B8DCC3]/60 bg-gradient-to-br from-[#176B3A] via-[#185B38] to-[#17452F] text-white shadow-[0_20px_45px_rgba(23,69,47,0.20)] hover:shadow-[0_25px_50px_rgba(23,69,47,0.30)]"
                  : index === 3
                    ? "border-white bg-white text-[#17452F] shadow-[0_12px_35px_rgba(23,69,47,0.08)] hover:border-[#176B3A]/30 hover:shadow-[0_20px_40px_rgba(23,69,47,0.12)]"
                    : "border-[#B8DCC3]/60 bg-gradient-to-br from-[#176B3A] via-[#185B38] to-[#17452F] text-white shadow-[0_20px_45px_rgba(23,69,47,0.20)] hover:shadow-[0_25px_50px_rgba(23,69,47,0.30)]"
            }`}
          >
            {/* Glass highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/20 via-transparent to-green-100/10" />

            {/* Icon */}
            <div
              className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
                isWeekly || (!isOneTime && index === 3)
                  ? "border-[#DDEFE3] bg-[#DDEFE3] text-[#176B3A]"
                  : "border-white/70 bg-white text-[#176B3A]"
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
                  isWeekly || (!isOneTime && index === 3)
                    ? "text-[#17452F]"
                    : "text-white"
                }`}
              >
                {frequency.title}
              </h3>

              <p
                className={`mt-3 text-sm font-medium leading-6 ${
                  isWeekly || (!isOneTime && index === 3)
                    ? "text-[#52675B]"
                    : "text-white/85"
                }`}
              >
                {frequency.text}
              </p>
            </div>

            {/* Bottom label and arrow */}
            <div className="relative mt-auto flex items-center justify-between gap-3 pt-8">
              <span
                className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                  isWeekly || (!isOneTime && index === 3)
                    ? "text-[#52675B]/75"
                    : "text-white/70"
                }`}
              >
                0{index + 1} / {frequency.title}
              </span>

              <span
                aria-hidden="true"
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${
                  isWeekly || (!isOneTime && index === 3)
                    ? "border-[#176B3A]/20 bg-[#DDEFE3] text-[#176B3A] group-hover:border-[#176B3A] group-hover:bg-[#176B3A] group-hover:text-white"
                    : "border-white/40 bg-white/10 text-white group-hover:bg-white group-hover:text-[#176B3A]"
                }`}
              >
                <span className="text-xl leading-none">↗</span>
              </span>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>

{/* SECTION: HOW IT WORKS */}
<section id="how-it-works" className="relative overflow-hidden bg-white py-16 md:py-24">
  <div className="container-site relative">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#176B3A]">
        <span className="h-px w-12 bg-[#176B3A]" />
        Simple Process
        <span className="h-px w-12 bg-[#176B3A]" />
      </p>

      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#17452F] sm:text-5xl md:text-6xl">
        Getting Started Is Easy
      </h2>

      <p className="mt-5 text-base leading-7 text-[#52675B] sm:text-lg">
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
          stroke="#A8CDB3"
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
                  <span className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#17452F] shadow-[0_5px_8px_rgba(23,69,47,0.30)]" />
                  <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border border-[#A8CDB3] bg-gradient-to-br from-[#A8CDB3] via-[#176B3A] to-[#17452F] shadow-[0_5px_10px_rgba(23,69,47,0.35)]" />
                  <span className="absolute left-[9px] top-[5px] h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
                </div>
              </div>

              {/* Note card */}
              <div className="relative min-h-[233px] overflow-hidden rounded-[1.7rem] border-[5px] border-white bg-gradient-to-br from-white via-[#F7FAF7] to-[#EAF3EC] p-5 pt-9 shadow-[0_18px_35px_rgba(23,69,47,0.12)] ring-1 ring-[#DCE9DE] transition-all duration-500 group-hover:shadow-[0_24px_45px_rgba(23,69,47,0.18)]">
                {/* Inner border */}
                <div className="pointer-events-none absolute inset-2 rounded-[1.3rem] border border-[#DCE9DE]" />

                {/* Card icon */}
                <span className="absolute right-5 top-6 grid h-10 w-10 place-items-center rounded-xl border border-[#DCE9DE] bg-white text-[#176B3A] shadow-[0_5px_15px_rgba(23,69,47,0.10)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>

                {/* Number */}
                <span className="relative block font-display text-4xl font-bold tracking-tight text-[#176B3A]">
                  {step.number}
                </span>

                {/* Text */}
                <h3 className="relative mt-4 max-w-[175px] text-base font-bold leading-snug text-[#17452F]">
                  {step.title}
                </h3>

                <p className="relative mt-3 text-xs font-medium leading-6 text-[#52675B]">
                  {step.text}
                </p>

                {/* Bottom accent */}
                <span className="absolute bottom-5 left-5 h-[3px] w-11 rounded-full bg-gradient-to-r from-[#176B3A] to-[#A8CDB3]" />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </div>
</section>

{/* SECTION: WHY FRESHSPACE */}
<section className="relative overflow-hidden bg-[#F2F6F2] py-16 md:py-24">
  {/* Soft green background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#176B3A]/15 blur-[110px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#B8DCC3]/30 blur-[120px]" />

  <div className="container-site relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">The FreshSpace Approach</p>

      <h2 className="mt-3 text-3xl font-medium text-[#17452F] sm:text-4xl">
        More Attention to Every Detail
      </h2>

      <p className="mt-4 leading-7 text-[#52675B]">
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
              ? "border-white bg-white text-[#17452F] shadow-[0_14px_35px_rgba(23,69,47,0.09)] hover:border-[#B8DCC3] hover:shadow-[0_22px_45px_rgba(23,69,47,0.13)]"
              : "border-[#B8DCC3]/70 bg-gradient-to-br from-[#176B3A] via-[#185B38] to-[#17452F] text-white shadow-[0_20px_45px_rgba(23,69,47,0.22)] hover:shadow-[0_25px_50px_rgba(23,69,47,0.30)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-white/20 via-transparent to-green-100/10" />

          {/* Icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-full border shadow-sm transition-transform duration-500 group-hover:scale-110 ${
              index === 0
                ? "border-[#DDEFE3] bg-[#DDEFE3] text-[#176B3A]"
                : "border-white/80 bg-white text-[#176B3A]"
            }`}
          >
            <Icon className="h-6 w-6" />
          </div>

          {/* Content */}
          <div className="relative mt-8">
            <h3
              className={`text-xl font-bold tracking-tight ${
                index === 0 ? "text-[#17452F]" : "text-white"
              }`}
            >
              {title}
            </h3>

            <p
              className={`mt-3 text-sm font-semibold leading-7 ${
                index === 0 ? "text-[#52675B]" : "text-white/90"
              }`}
            >
              {text}
            </p>
          </div>

          {/* Bottom decorative detail */}
          <div className="relative mt-auto flex items-center justify-between pt-7">
            <span
              className={`h-[3px] w-12 rounded-full ${
                index === 0 ? "bg-[#176B3A]/70" : "bg-white/90"
              }`}
            />

            <span
              aria-hidden="true"
              className={`grid h-10 w-10 place-items-center rounded-full border text-xl transition-all duration-300 group-hover:translate-x-1 ${
                index === 0
                  ? "border-[#176B3A]/25 bg-[#DDEFE3] text-[#176B3A] group-hover:bg-[#176B3A] group-hover:text-white"
                  : "border-white/50 bg-white/10 text-white group-hover:bg-white group-hover:text-[#176B3A]"
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
              <p className="eyebrow">Workplace Cleaning Experience</p>
              <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem]">
                The Little Details Make the Difference
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                A closer look at the kind of experience businesses expect from a
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

{/* SECTION: COMMERCIAL FAQ */}
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
          Find helpful answers about our commercial cleaning services
          and what to expect when booking with FreshSpace.
        </p>
      </div>

      {/* FAQ CARDS */}
      <div className="mx-auto mt-16 flex w-full flex-col gap-5">
        {[
          {
            question: "What is included in commercial cleaning?",
            answer:
              "Commercial cleaning can cover workstations, meeting rooms, restrooms, breakrooms, floors and shared spaces. The final checklist depends on your property and the services agreed before the visit.",
          },
          {
            question:
              "Can the cleaning plan be customized for my business?",
            answer:
              "Yes. You can share your facility type, priority areas and requested tasks. The cleaning scope can be discussed and confirmed before scheduling.",
          },
          {
            question: "Can I request specific cleaning tasks?",
            answer:
              "Absolutely. You can let us know which work areas and tasks matter most when requesting your service. We can discuss your priorities and confirm what can be included in the cleaning plan.",
          },
          {
            question: "Do you offer recurring commercial cleaning?",
            answer:
              "You can ask about recurring arrangements, including daily, multiple-times-per-week or weekly visits. Scheduling depends on availability, so contact us to discuss a routine that works for your workplace.",
          },
          {
            question:
              "Are additional services included in the quote?",
            answer:
              "Some extra tasks, such as interior glass cleaning or specialist floor care, may require additional time and pricing. Discuss requested services in advance so the scope and price are clear before booking.",
          },
          {
            question: "How do I get a cleaning estimate?",
            answer:
              "Getting an estimate is simple. Share your business type, approximate space, requested cleaning services and preferred schedule through our quote form. Our team can then discuss your requirements and provide an estimate.",
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