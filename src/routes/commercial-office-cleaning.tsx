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
    image: kitchenImage,
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
    image: bathroomImage,
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
    image: residentialHero,
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
    image: deepCleaningImage,
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

// ADD-ON SERVICES DATA
const addOns = [
  "Interior glass and window cleaning",
  "High-touch surface detailing",
  "Extra floor and carpet care",
  "Detailed appliance cleaning",
  "Additional restroom servicing",
  "Customized cleaning checklist",
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
        <section className="bg-surface py-20 md:py-28">
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

        {/* SECTION: WORKPLACE AREA CHECKLIST */}
        <section className="py-16 md:py-24">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Area by Area</p>
              <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
                What Gets Cleaned at Your Workplace?
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Here's a closer look at the everyday tasks that can be part
                of your commercial cleaning checklist.
              </p>
            </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roomChecklist.map((room) => (
                <article
                  key={room.title}
                  className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft"
                >
                  <img
                    src={room.image}
                    alt={`${room.title} cleaning`}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-emerald">
                      {room.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {room.tasks.map((task) => (
                        <li
                          key={task}
                          className="flex items-start gap-2 text-sm font-medium leading-5 text-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 text-center text-xs leading-6 text-muted-foreground">
              Final tasks depend on the selected service, property condition
              and agreed workplace cleaning checklist.
            </p>
          </div>
        </section>

        {/* SECTION: ADD-ONS */}
        <section className="bg-navy py-16 text-navy-foreground md:py-20">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Extra Attention</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
                Want a Little More?
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-navy-foreground/75">
                Add extra cleaning tasks to your plan when your workplace needs
                more attention. These options can be discussed while preparing
                your quote.
              </p>
              <a
                href="#quote"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 font-semibold text-primary-foreground transition hover:bg-emerald-dark"
              >
                Customize My Cleaning Plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {addOns.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald/15 text-emerald-bright">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CLEANING FREQUENCY */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Your Schedule</p>
              <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
                How Often Does Your Workplace Need Cleaning?
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Choose a cleaning schedule that works for your business.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {frequencies.map((frequency, index) => (
                <div
                  key={frequency.title}
                  className="rounded-2xl border border-border bg-background p-6 text-center transition hover:border-emerald/50 hover:shadow-soft"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-soft text-emerald">
                    {index === 0 ? (
                      <Clock3 className="h-5 w-5" />
                    ) : index === 1 ? (
                      <CalendarDays className="h-5 w-5" />
                    ) : index === 2 ? (
                      <Home className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {frequency.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {frequency.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: HOW IT WORKS */}
        <section id="how-it-works" className="py-16 md:py-20">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Simple Process</p>
              <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
                Getting Started Is Easy
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Tell Us About Your Workplace",
                  text: "Share your business details and the cleaning help you need.",
                },
                {
                  number: "02",
                  title: "Receive Your Estimate",
                  text: "Get a personalized estimate based on your requirements.",
                },
                {
                  number: "03",
                  title: "Choose a Schedule",
                  text: "Discuss an available date and a convenient time.",
                },
                {
                  number: "04",
                  title: "Enjoy a Fresh Workplace",
                  text: "Your agreed cleaning checklist guides the visit.",
                },
              ].map((step) => (
                <div key={step.number} className="relative text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-soft font-display text-xl font-semibold text-emerald">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-medium text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: WHY FRESHSPACE */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">The FreshSpace Approach</p>
              <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">
                Thoughtful Cleaning, Made Simple
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                A good cleaning experience starts with understanding what
                matters most in your workplace.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Home,
                  title: "Made for Your Workplace",
                  text: "Cleaning tasks can be discussed and tailored to your facility and priorities.",
                },
                {
                  icon: CalendarDays,
                  title: "Flexible Scheduling",
                  text: "Explore recurring or one-time cleaning options around your operating schedule.",
                },
                {
                  icon: ShieldCheck,
                  title: "Clear Expectations",
                  text: "Know which tasks are included in your agreed workplace cleaning checklist.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/70 bg-background p-7 text-center"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-soft text-emerald">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {text}
                  </p>
                </div>
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