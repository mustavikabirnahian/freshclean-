
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
        <section className="py-16 md:py-24">
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

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roomChecklist.map((room) => (
                <article
                  key={room.title}
                  className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft"
                >
                  <img
                    src={room.image}
                    alt={`${room.title} deep cleaning`}
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
              and agreed cleaning checklist.
            </p>
          </div>
        </section>

        {/* SECTION: ADD-ONS */}
        <section className="bg-navy py-16 text-navy-foreground md:py-20">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Additional Details</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">
                Need a Little Extra Attention?
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-navy-foreground/75">
                Some areas need more time and specialized attention. Ask
                about these additional tasks when preparing your deep
                cleaning quote.
              </p>
              <a
                href="#quote"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 font-semibold text-primary-foreground transition hover:bg-emerald-dark"
              >
                Add to My Cleaning Plan
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

        

{/* SECTION: CLEANING OCCASIONS */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-site">
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cleaningOccasions.map((occasion, index) => (
                <div
                  key={occasion.title}
                  className="rounded-2xl border border-border bg-background p-6 text-center transition hover:border-emerald/50 hover:shadow-soft"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#102441] text-[#B8D2C5]">
                    {index === 0 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : index === 1 ? (
                      <CalendarDays className="h-5 w-5" />
                    ) : index === 2 ? (
                      <Home className="h-5 w-5" />
                    ) : (
                      <Clock3 className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {occasion.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {occasion.text}
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
                  title: "Tell Us What Needs Attention",
                  text: "Share your home details and the areas you want deep cleaned.",
                },
                {
                  number: "02",
                  title: "Receive Your Estimate",
                  text: "Get an estimate based on your home's needs and requested tasks.",
                },
                {
                  number: "03",
                  title: "Choose a Date",
                  text: "Discuss an available date and a convenient time for your visit.",
                },
                {
                  number: "04",
                  title: "Enjoy a Detailed Clean",
                  text: "Your agreed cleaning checklist guides the cleaning visit.",
                },
              ].map((step) => (
                <div key={step.number} className="relative text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#102441] font-display text-xl font-semibold text-[#B8D2C5]">
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
                More Attention to Every Detail
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                A thoughtful deep cleaning experience starts with a clear
                plan and an understanding of what matters in your home.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
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
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/70 bg-background p-7 text-center"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#102441] text-[#B8D2C5]">
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
