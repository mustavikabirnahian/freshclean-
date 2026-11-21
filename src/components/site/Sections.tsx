
import type { ReactNode } from "react";
import "leaflet/dist/leaflet.css";
import recentBathroom from "@/assets/recent-bathroom.jpg.jpg";
import recentBedroom from "@/assets/recent-bedroom.jpg.jpg";
import recentKitchen from "@/assets/recent-kitchen.jpg.jpg";
import recentLivingRoom from "@/assets/recent-living-room.jpg.jpg";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight, Star, ShieldCheck, UserCheck, CalendarClock, BadgeCheck, Check, CheckCircle2,
  ClipboardList, CalendarDays, Sparkles, MapPin, Search, Clock, MousePointerClick, ChevronsLeftRight,
  Home, Truck, Building2, KeyRound, Store, Handshake, Leaf, ChevronLeft, ChevronRight,
} from "lucide-react";
import { business, reviewTrustBenefits, testimonials } from "@/content/site";
import hero from "@/assets/hero-home.jpg";
import about from "@/assets/about-cleaner.jpg";
import before from "@/assets/before-kitchen.jpg";
import after from "@/assets/after-kitchen.jpg";
import beforeBed from "@/assets/before-bedroom.jpg";
import afterBed from "@/assets/after-bedroom.jpg";
import sRes from "@/assets/svc-residential.jpg";
import sDeep from "@/assets/svc-deep.jpg";
import sMove from "@/assets/svc-move.jpg";
import sOffice from "@/assets/svc-office.jpg";
import sAir from "@/assets/svc-airbnb.jpg";
import sCom from "@/assets/svc-commercial.jpg";
import gBath from "@/assets/gal-bathroom.jpg";

function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <span className={`flex gap-0.5 text-star ${className}`} aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="relative inline-block h-4 w-4">
          <Star className="absolute inset-0 h-4 w-4" aria-hidden />
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${Math.min(100, Math.max(0, (n - i) * 100))}%` }}
          >
            <Star className="h-4 w-4 fill-current" aria-hidden />
          </span>
        </span>
      ))}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

export { Hero, TrustBar } from "./Hero";


/* ABOUT */
const aboutPoints = [
  {
    title: "Reliable, Consistent Service",
    text: "Know what to expect every time we visit.",
  },
  {
    title: "Careful, Detail-Focused Cleaning",
    text: "We don't rush the little things.",
  },
  {
    title: "Easy Scheduling",
    text: "Choose a cleaning schedule that works for you.",
  },
  {
    title: "Respect for Your Home",
    text: "Our team treats your space like it matters.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28"
    >
      <div className="container-site relative z-10">

        {/* TOP HEADING AND STORY */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">

          <div className="reveal">
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#067649]">
              <span className="h-[2px] w-10 bg-[#067649]" />
              Why FreshSpace
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#102441] sm:text-5xl md:text-6xl">
              More Than Cleaning We Care For{" "}
              <span className="text-[#067649]">
                Your Space.
              </span>
            </h2>
          </div>

          <div className="reveal flex flex-col items-start justify-center">
            <p className="text-[16px] leading-[1.9] text-[#344B68] md:text-[17px]">
              We started FreshSpace with a simple idea: cleaning your home
              shouldn't be something you have to worry about. Our team takes
              pride in doing the little things right, showing up when we say
              we will, and leaving every space feeling fresh, comfortable,
              and cared for.
            </p>

            <p className="mt-4 text-[16px] leading-[1.9] text-[#344B68] md:text-[17px]">
              Whether you need a recurring home cleaning, a deep clean, or
              help getting ready for a move, we're here to make your life
              a little easier.
            </p>

            <a
              href="#why-us"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#102441] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#067649] hover:shadow-xl"
            >
              Why Choose FreshSpace
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
          </div>
        </div>

        {/* BOTTOM IMAGE AND TRUST CARD */}
        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE WITH FLOATING CARD */}
          <div className="reveal relative mx-auto w-full max-w-xl lg:mx-0">

            <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(16,36,65,0.14)]">
              <img
                src={about}
                alt="FreshSpace cleaner wiping down a kitchen island"
                width={1104}
                height={1312}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102441]/20 via-transparent to-transparent" />
            </div>

            {/* FLOATING NAVY GLASS CARD */}
            <div className="absolute -bottom-6 right-3 flex max-w-[230px] items-center gap-4 rounded-[22px] border border-white/20 bg-[#102441]/95 p-5 text-white shadow-[0_18px_40px_rgba(16,36,65,0.28)] backdrop-blur-xl sm:-right-5 sm:p-6">

              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#D8F3E0] text-[#067649]">
                <CheckCircle2 className="h-6 w-6" strokeWidth={1.8} aria-hidden />
              </span>

              <div>
                <p className="text-base font-semibold">
                  Every Visit
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/75">
                  Carefully cleaned. Every visit.
                </p>
              </div>
            </div>
          </div>

          {/* MINT TRUST CARD */}
          <div className="reveal mt-5 rounded-[28px] border border-[#067649]/10 bg-gradient-to-br from-[#EAF7E9] to-[#DDF3EA] p-7 shadow-[0_15px_40px_rgba(16,36,65,0.06)] sm:p-9 lg:mt-0">

            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#067649]">
                The FreshSpace Difference
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#102441] sm:text-3xl">
                A Cleaner Space.
                <br />
                A More Comfortable Home.
              </h3>
            </div>

            <ul className="space-y-6">
              {aboutPoints.map((b) => (
                <li key={b.title} className="flex items-start gap-4">

                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/80 text-[#067649] shadow-sm">
                    <CheckCircle2
                      className="h-5 w-5"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>

                  <div>
                    <p className="font-semibold text-[#102441]">
                      {b.title}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-[#344B68]">
                      {b.text}
                    </p>
                  </div>

                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}








/* SERVICES */
const services = [
  {
    img: sRes,
    icon: Home,
    title: "Residential Cleaning",
    href: "/residential-cleaning",
    text: "Regular cleaning for houses and apartments — kitchens, baths, floors, dusting, and the details in between.",
    includes: [
      "Kitchen surface cleaning",
      "Bathroom fixture cleaning",
      "Floor vacuuming and mopping",
      "Dusting and general tidying",
    ],
  },
  {
    img: sDeep,
    icon: Sparkles,
    title: "Deep Cleaning",
    href: "/deep-cleaning",
    text: "A top-to-bottom clean for grout, baseboards, inside appliances, and the spots that build up over time.",
    includes: [
      "Detailed surface cleaning",
      "Baseboards and corners",
      "Kitchen and bathroom deep clean",
      "Inside appliance cleaning",
    ],
  },
  {
    img: sMove,
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    href: "/move-in-move-out",
    text: "Hand back the keys with confidence, or start fresh in a home that's actually clean.",
    includes: [
      "Detailed room cleaning",
      "Kitchen and bathroom cleaning",
      "Floor cleaning",
      "Final property touch-ups",
    ],
  },
  {
    img: sOffice,
    icon: Building2,
    title: "Office Cleaning",
    href: "/commercial-office-cleaning",
    text: "After-hours cleaning for desks, break rooms, and restrooms so your team walks into a clean office.",
    includes: [
      "Desk and workstation cleaning",
      "Break room cleaning",
      "Restroom cleaning",
      "After-hours cleaning options",
    ],
  },
  {
    img: sAir,
    icon: KeyRound,
    title: "Airbnb & Vacation Rental Cleaning",
    href: "/commercial-office-cleaning",
    text: "Fast turnovers between guests, with fresh linens, restocking, and photo-ready rooms.",
    includes: [
      "Guest-ready room cleaning",
      "Fresh linen arrangement",
      "Restocking essentials",
      "Between-guest turnovers",
    ],
  },
  {
    img: sCom,
    icon: Store,
    title: "Commercial Cleaning",
    href: "/commercial-office-cleaning",
    text: "Reliable cleaning for retail spaces, studios, and small businesses on a schedule that fits.",
    includes: [
      "Retail space cleaning",
      "Studio and workspace cleaning",
      "Floor and surface cleaning",
      "Scheduled cleaning visits",
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  const activeService = services[selectedService];
  const ActiveIcon = activeService.icon;

  // Keep the selected card in the center
  const cardOrder = [-2, -1, 0, 1, 2, 3].map((offset) => {
    const index =
      (selectedService + offset + services.length) % services.length;

    return {
      service: services[index],
      index,
      offset,
    };
  });

  // Navigate between services
  const navigateServices = (direction: number) => {
    setSelectedService((current) => {
      return (
        (current + direction + services.length) % services.length
      );
    });
  };

  // Mobile swipe interaction
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 45) {
      navigateServices(difference > 0 ? 1 : -1);
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div className="container-site">

        {/* SECTION HEADING */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-emerald/60 sm:w-20" />

            <span className="rounded-full border border-emerald/15 bg-[#E8F5EF] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald">
              Our Services
            </span>

            <span className="h-px w-12 bg-emerald/60 sm:w-20" />
          </div>

          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#102441] sm:text-5xl md:text-6xl">
            Cleaning{" "}
            <span className="text-[#067649]">Services</span>
            {" "}Built Around You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            From routine home cleaning to detailed commercial services, we make keeping your space clean simple.
          </p>
        </div>

        {/* OVERLAPPING SERVICE CAROUSEL */}
        <div className="relative mt-12 sm:mt-16">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={() => navigateServices(-1)}
            aria-label="Previous service"
            className="absolute left-0 top-1/2 z-50 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-emerald/15 bg-white/95 text-navy shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#E8F5EF] sm:-left-2 sm:h-12 sm:w-12"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>

          {/* CAROUSEL VIEWPORT */}
          <div
            className="h-[420px] overflow-hidden py-8 lg:h-[500px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="mx-auto flex w-max items-center justify-center">

              {cardOrder.map(({ service, index, offset }) => {
                const Icon = service.icon;
                const distance = Math.abs(offset);
                const isSelected = offset === 0;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setSelectedService(index)}
                    aria-pressed={isSelected}
                    className={`group relative isolate -ml-[65px] shrink-0 overflow-hidden rounded-[24px] border text-left transition-all duration-500 ease-out first:ml-0 sm:-ml-[85px] lg:-ml-[90px] ${
                      isSelected
                        ? "z-30 h-[390px] w-[270px] scale-100 border-emerald/70 shadow-[0_22px_55px_-15px_rgba(20,100,65,0.35)] sm:h-[420px] sm:w-[310px] lg:h-[440px] lg:w-[350px]"
                        : distance === 1
                          ? "z-20 h-[320px] w-[220px] translate-y-5 scale-[0.90] border-white/70 shadow-xl sm:h-[360px] sm:w-[250px] lg:h-[370px] lg:w-[260px]"
                          : distance === 2
                            ? "z-10 h-[285px] w-[190px] translate-y-8 scale-[0.80] border-white/60 shadow-lg sm:h-[320px] sm:w-[210px] lg:h-[330px] lg:w-[220px]"
                            : "z-0 h-[270px] w-[180px] translate-y-10 scale-[0.74] border-white/50 opacity-80 shadow-md sm:h-[300px] sm:w-[200px] lg:h-[310px] lg:w-[210px]"
                    }`}
                  >

                    {/* SERVICE IMAGE */}
                    <img
                      src={service.img}
                      alt={service.title}
                      width={928}
                      height={720}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061F19] via-[#061F19]/30 to-transparent" />

                    {/* SERVICE ICON */}
                    <span
                      className={`absolute right-4 top-4 z-10 grid place-items-center rounded-full bg-white text-emerald shadow-lg transition-all duration-300 ${
                        isSelected
                          ? "h-12 w-12 sm:h-14 sm:w-14"
                          : "h-10 w-10"
                      }`}
                    >
                      <Icon
                        className={isSelected ? "h-6 w-6" : "h-5 w-5"}
                        strokeWidth={1.8}
                      />
                    </span>

                    {/* SERVICE CONTENT */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">

                      <h3
                        className={`font-serif font-semibold leading-tight text-white ${
                          isSelected
                            ? "text-2xl sm:text-3xl"
                            : "text-lg sm:text-xl"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* SHOW DESCRIPTION ON SELECTED CARD */}
                      {isSelected && (
                        <p className="mt-3 text-sm leading-6 text-white/90">
                          {service.text}
                        </p>
                      )}

                      {/* EXPLORE SERVICE */}
                      <div
                        onClick={(event) => {
                          event.stopPropagation();
                          window.location.assign(service.href);
                        }}
                        className={`mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full font-semibold transition-all duration-300 ${
                          isSelected
                            ? "bg-[#E8F5EF] px-5 py-3 text-emerald"
                            : "bg-emerald/80 px-3 py-2 text-white"
                        }`}
                      >
                        <span className="text-sm">
                          Explore Service
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </div>

                    </div>
                  </button>
                );
              })}

            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={() => navigateServices(1)}
            aria-label="Next service"
            className="absolute right-0 top-1/2 z-50 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-emerald/15 bg-white/95 text-navy shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#E8F5EF] sm:-right-2 sm:h-12 sm:w-12"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

        </div>

        {/* CAROUSEL PAGINATION */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setSelectedService(index)}
              aria-label={`Go to ${service.title}`}
              aria-current={selectedService === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedService === index
                  ? "w-7 bg-emerald"
                  : "w-2.5 bg-emerald/25 hover:bg-emerald/50"
              }`}
            />
          ))}
        </div>

        {/* MOBILE SELECTED SERVICE DETAILS */}
        <div
          key={activeService.title}
          className="relative mt-8 overflow-hidden rounded-[26px] border border-navy/10 bg-card shadow-[0_18px_45px_-20px_rgba(20,40,30,0.22)] md:hidden"
        >

          {/* DETAIL IMAGE */}
          <div className="relative h-[230px] overflow-hidden p-3 pb-0">
            <div className="h-full overflow-hidden rounded-2xl">
              <img
                src={activeService.img}
                alt={activeService.title}
                width={928}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* DETAIL CONTENT */}
          <div className="relative p-5 sm:p-7">

            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#E8F5EF] px-4 py-2 text-sm font-semibold text-emerald">
              <ActiveIcon className="h-4 w-4" />
              Selected Service
            </span>

            <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
              {activeService.title}
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-navy/85">
              {activeService.text}
            </p>

            {/* INCLUDED SERVICES */}
            <div className="mt-6">
              <h4 className="mb-4 text-base font-bold text-navy">
                What's Included:
              </h4>

              <div className="grid gap-3">
                {activeService.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-emerald text-white">
                      <span className="text-xs font-bold">✓</span>
                    </span>

                    <span className="text-sm leading-relaxed text-navy/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* QUOTE BUTTON */}
            <a
              href="#quote"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}






/* BEFORE / AFTER + RECENT WORK */
export function BeforeAfter({
  discount,
  onDiscountWon,
}: {
  discount: number | null;
  onDiscountWon: (discount: number) => void;
}) {
  const [progress, setProgress] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  const [brush, setBrush] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragging = useRef(false);
  const rewardGenerated = useRef(false);

  // RECENT WORK PROJECTS
  const recentProjects = [
    {
      title: "Kitchen Refresh",
      service: "Residential Cleaning",
      location: "Austin, TX",
      tasks: [
        "Countertops & backsplash cleaned",
        "Cabinet fronts wiped down",
        "Appliances & floors cleaned",
      ],
      image: recentKitchen,
    },
    {
      title: "Bathroom Deep Clean",
      service: "Deep Cleaning",
      location: "Round Rock, TX",
      tasks: [
        "Shower & bathtub scrubbed",
        "Tile and grout cleaned",
        "Fixtures sanitized",
      ],
      image: recentBathroom,
    },
    {
      title: "Bedroom Reset",
      service: "Move-In / Move-Out",
      location: "Cedar Park, TX",
      tasks: [
        "Furniture surfaces dusted",
        "Bed area refreshed",
        "Floors vacuumed",
      ],
      image: recentBedroom,
    },
    {
      title: "Living Room Cleaning",
      service: "Residential Cleaning",
      location: "Pflugerville, TX",
      tasks: [
        "Furniture surfaces cleaned",
        "Dust removed",
        "Floors vacuumed",
      ],
      image: recentLivingRoom,
    },
  ];

  const featuredProject = recentProjects[activeProject];
  const otherProjects = recentProjects.filter(
    (_, index) => index !== activeProject
  );

  // DRAW THE DIRTY IMAGE OVER THE CLEAN IMAGE
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = ref.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dirtyImage = new Image();

    const drawDirtyImage = () => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, rect.width, rect.height);

      const scale = Math.max(
        rect.width / dirtyImage.width,
        rect.height / dirtyImage.height
      );

      const width = dirtyImage.width * scale;
      const height = dirtyImage.height * scale;

      const x = (rect.width - width) / 2;
      const y = (rect.height - height) / 2;

      ctx.drawImage(dirtyImage, x, y, width, height);
    };

    dirtyImage.onload = drawDirtyImage;
    dirtyImage.src = beforeBed;

    const resizeObserver = new ResizeObserver(drawDirtyImage);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      dirtyImage.onload = null;
    };
  }, [resetKey]);

  // CLEANING BRUSH
  const cleanArea = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const container = ref.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = container.getBoundingClientRect();

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const radius = 43;

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";

    const gradient = ctx.createRadialGradient(
      x, y, radius * 0.15,
      x, y, radius
    );

    gradient.addColorStop(0, "rgba(0,0,0,1)");
    gradient.addColorStop(0.7, "rgba(0,0,0,0.95)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    setBrush({
      x,
      y,
      visible: true,
    });
  }, []);

  // UPDATE CLEANING PROGRESS + GENERATE DISCOUNT
  const updateProgress = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixels = ctx.getImageData(
      0, 0, canvas.width, canvas.height
    ).data;

    let total = 0;
    let cleared = 0;
    const step = 20;

    for (let i = 3; i < pixels.length; i += 4 * step) {
      total++;
      if (pixels[i] < 30) cleared++;
    }

    const nextProgress = total
      ? Math.min(100, Math.round((cleared / total) * 100))
      : 0;

    setProgress(nextProgress);

    // GENERATE ONE DISCOUNT AFTER 100% CLEANING
    if (
      nextProgress >= 100 &&
      discount === null &&
      !rewardGenerated.current
    ) {
      rewardGenerated.current = true;

      // 60% chance of 5–10%; 40% chance of 15–20%.
      const lowerDiscountGroup = Math.random() < 0.6;

      const generatedDiscount = lowerDiscountGroup
        ? Math.floor(Math.random() * 6) + 5
        : Math.floor(Math.random() * 6) + 15;

      // Keep the reward in the current page session only.
      onDiscountWon(generatedDiscount);
    }
  }, [discount, onDiscountWon]);

  const handlePointerDown = (
    e: React.PointerEvent<HTMLCanvasElement>
  ) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    cleanArea(e.clientX, e.clientY);
  };

  const handlePointerMove = (
    e: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!dragging.current) return;
    cleanArea(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    if (!dragging.current) return;

    dragging.current = false;
    updateProgress();
  };

  const handleReset = () => {
    dragging.current = false;
    setProgress(0);
    setBrush({ x: 0, y: 0, visible: false });
    setResetKey((key) => key + 1);
  };

  return (
    <section className="bg-[#FAF9F6] py-20 md:py-28">
      <div className="container-site">

        {/* TRY YOURSELF */}
        <SectionHead
          eyebrow="Try it yourself"
          title={
            <span className="block max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#102441] sm:text-5xl md:text-6xl">
              <span className="text-[#067649]">Scratch.</span>
              {" "}Clean. Reveal.
            </span>
          }
          sub="Don't just look at the transformation. Experience it yourself."
        />

        <div className="reveal relative mx-auto mt-12 max-w-6xl pt-0 lg:pt-48">

          {/* BRUSH INSTRUCTION */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block">
            <p
              className="max-w-[310px] -rotate-6 text-[29px] font-bold italic leading-tight text-[#067649]"
              style={{ fontFamily: "'Segoe Print', 'Comic Sans MS', cursive" }}
            >
              Grab the brush
              <br />
              and get your{" "}
              <span className="text-[68px] font-black leading-none">
                offer!
              </span>
            </p>

            {/* CURVED ARROW */}
            <svg
              viewBox="0 0 150 100"
              className="absolute -bottom-24 -right-36 h-24 w-36 overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 8 C45 0, 75 15, 105 48"
                stroke="#07845E"
                strokeWidth="4"
                strokeLinecap="round"
                className="brush-arrow-line"
              />
              <path
                d="M84 43 L108 52 L104 26"
                stroke="#07845E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="brush-arrow-line"
              />
            </svg>
          </div>

          {/* MOBILE BRUSH INSTRUCTION */}
          <div className="mb-5 flex flex-col items-center justify-center text-center text-[#067649] lg:hidden">
            <p
              className="text-lg font-bold italic leading-tight"
              style={{ fontFamily: "'Segoe Print', 'Comic Sans MS', cursive" }}
            >
              Grab the brush
              <br />
              and get your{" "}
              <span className="text-3xl font-black not-italic">
                offer!
              </span>
            </p>

            <ArrowRight className="mt-2 h-5 w-5 rotate-90" />
          </div>

          {/* INTERACTIVE CLEANING AREA */}
          <div
            ref={ref}
            className="relative aspect-[4/3] touch-none select-none overflow-hidden rounded-[1.5rem] border border-emerald/20 shadow-float sm:aspect-[16/9]"
          >
            {/* CLEAN ROOM */}
            <img
              src={afterBed}
              alt="The same bedroom after professional cleaning"
              width={1600}
              height={1008}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            {/* DIRTY ROOM */}
            <canvas
              ref={canvasRef}
              aria-label="Scratch the dirty bedroom image to reveal the clean bedroom underneath"
              className="absolute inset-0 h-full w-full cursor-none touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={() => {
                if (!dragging.current) {
                  setBrush((b) => ({ ...b, visible: false }));
                }
              }}
            />

            {/* BEFORE LABEL */}
            <span className="absolute left-4 top-4 z-10 rounded-full bg-navy/85 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
              Before
            </span>

            {/* AFTER LABEL */}
            <span className="absolute right-4 top-4 z-10 rounded-full bg-emerald px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
              After
            </span>

            {/* CUSTOM BRUSH CURSOR */}
            {brush.visible && (
              <div
                className="pointer-events-none absolute z-20 grid h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/30 shadow-lg backdrop-blur-sm"
                style={{
                  left: brush.x,
                  top: brush.y,
                }}
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-11 w-11 drop-shadow-md"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M29 5L40 16L23 33L12 22L29 5Z"
                    fill="#0B7651"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22L23 33L18 40L7 29L12 22Z"
                    fill="#E8F5EF"
                    stroke="#0B7651"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 29L18 40L15 44L4 33L7 29Z"
                    fill="#0B7651"
                  />
                  <path
                    d="M28 9L36 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}

            {/* INITIAL INSTRUCTION */}
            {progress === 0 && (
              <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-5 py-3 text-center text-sm font-semibold text-navy shadow-lg">
                Click and drag to clean
              </div>
            )}

            {/* COMPLETION + DISCOUNT REVEAL */}
            {progress >= 100 && discount !== null && (
              <div className="absolute inset-0 z-10 grid place-items-center bg-emerald/15 p-4">
                <div className="rounded-3xl border border-emerald/20 bg-white/95 px-8 py-7 text-center shadow-2xl backdrop-blur-sm sm:px-12 sm:py-9">
                  <div className="text-4xl">🎉</div>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald">
                    Scratch & Win
                  </p>

                  <p className="mt-2 text-xl font-bold text-navy sm:text-2xl">
                    Freshness revealed!
                  </p>

                  <div className="mt-4">
                    <span className="text-6xl font-black leading-none text-emerald sm:text-7xl">
                      {discount}%
                    </span>
                    <p className="mt-2 text-base font-bold text-navy">
                      OFF YOUR CLEANING SERVICE
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    You've unlocked a special discount on your cleaning service!
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById("quote")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-navy"
                  >
                    Claim My Discount
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* PROGRESS AND RESET */}
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-emerald/10 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div className="flex-1">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-navy">
                  Your cleaning progress
                </span>
                <span className="font-bold text-emerald">
                  {progress}% Cleaned
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-[#E8F5EF]">
                <div
                  className="h-full rounded-full bg-emerald transition-[width] duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald px-6 py-3 text-sm font-semibold text-emerald transition-colors hover:bg-emerald hover:text-white"
            >
              <span aria-hidden="true">↻</span>
              Try Again
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Move your mouse or finger across the room to reveal its clean transformation.
          </p>
        </div>

        {/* EXPLORE RECENT WORK */}
        <div className="mx-auto mt-24 max-w-6xl md:mt-32">

          <SectionHead
            eyebrow="Our recent work"
            title="Explore Recent Work"
            sub="Real homes. Beautifully refreshed."
          />

          <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-5">

            {/* FEATURED PROJECT */}
            <button
              type="button"
              onClick={() => setActiveProject(activeProject)}
              aria-label={`Featured project: ${featuredProject.title}`}
              className="group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-emerald/20 bg-[#E8F5EF] text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-float md:col-span-3 md:min-h-[470px]"
            >
              <img
                key={featuredProject.image}
                src={featuredProject.image}
                alt={featuredProject.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                <div className="max-w-md">
                  <span className="mb-2 inline-block rounded-full bg-[#E8F5EF] px-3 py-1 text-xs font-semibold text-emerald">
                    Featured Project
                  </span>

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/85">
                    {featuredProject.service}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-white">
                    📍 {featuredProject.location}
                  </p>

                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-white/90">
                    Work Completed
                  </p>

                  <ul className="mt-1 space-y-1">
                    {featuredProject.tasks.map((task) => (
                      <li key={task} className="text-xs text-white/85">
                        ✓ {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald text-2xl text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
                  →
                </span>
              </div>
            </button>

            {/* OTHER PROJECT CARDS */}
            <div className="flex flex-col gap-4 md:col-span-2">
              {otherProjects.map((project) => {
                const originalIndex = recentProjects.findIndex(
                  (item) => item.title === project.title
                );

                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveProject(originalIndex)}
                    className="group flex min-h-[170px] flex-1 items-stretch gap-3 overflow-hidden rounded-[1.4rem] border border-[#D5E0EC] bg-white p-2 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-float sm:min-h-[180px] sm:gap-3 sm:p-3"
                  >
                    <div className="min-h-[150px] w-[34%] shrink-0 self-stretch overflow-hidden rounded-[1rem] sm:w-[36%]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0 flex-1 self-center py-2">
                      <h3 className="text-sm font-bold leading-snug text-[#102441] sm:text-base">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-[11px] text-[#52677F] sm:text-xs">
                        {project.service}
                      </p>

                      <p className="mt-2 text-[11px] font-semibold text-[#067649]">
                        📍 {project.location}
                      </p>

                      <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-[#102441] sm:text-[10px]">
                        Work Completed
                      </p>

                      <ul className="mt-1 space-y-0.5">
                        {project.tasks.slice(0, 2).map((task) => (
                          <li
                            key={task}
                            className="text-[10px] leading-snug text-[#52677F] sm:text-[11px]"
                          >
                            • {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="mr-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-lg text-emerald transition-all duration-300 group-hover:bg-emerald group-hover:text-white sm:mr-2 sm:h-11 sm:w-11">
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* VIEW MORE PROJECTS */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                // Connect this to your projects page when available.
              }}
              className="inline-flex items-center gap-3 rounded-full border border-emerald bg-[#E8F5EF] px-8 py-3.5 text-sm font-semibold text-emerald transition-all duration-300 hover:bg-emerald hover:text-white"
            >
              View More Projects
              <span className="text-lg">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}


/* HOW IT WORKS */
const steps = [
  { n: "01", icon: ClipboardList, title: "Choose Your Service", text: "Tell us about your space and what kind of cleaning you need." },
  { n: "02", icon: CalendarDays, title: "Pick a Convenient Time", text: "Choose a day and time that works. We'll confirm your quote and booking." },
  { n: "03", icon: Sparkles, title: "Enjoy a Cleaner Space", text: "Our team arrives on time, fully equipped, and leaves your space spotless." },
];
export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy py-20 text-navy-foreground md:py-28">
      <div className="container-site">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-3 text-3xl font-medium sm:text-4xl md:text-[2.75rem]">Booking takes just a few minutes</h2>
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="absolute left-[16.6%] right-[16.6%] top-8 hidden border-t border-dashed border-navy-foreground/25 md:block" aria-hidden />
          {steps.map(({ n, icon: I, title, text }) => (
            <li key={n} className="reveal relative text-center">
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-navy-soft shadow-lift ring-1 ring-navy-foreground/10">
                <I className="h-6 w-6 text-emerald-soft" strokeWidth={1.6} />
              </span>
              <p className="mt-6 font-display text-sm text-emerald-soft/70">{n}</p>
              <h3 className="mt-1 text-xl font-medium">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-[15px] text-navy-foreground/70">{text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 font-semibold text-navy transition hover:bg-emerald hover:text-primary-foreground">
            Book Your Cleaning <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}




/* SERVICE AREA MAP */
const serviceLocations = [
  { name: "Austin", lat: 30.2672, lng: -97.7431 },
  { name: "Round Rock", lat: 30.5083, lng: -97.6789 },
  { name: "Cedar Park", lat: 30.5052, lng: -97.8203 },
  { name: "Pflugerville", lat: 30.4394, lng: -97.6200 },
  { name: "Bee Cave", lat: 30.3080, lng: -97.9450 },
  { name: "Lakeway", lat: 30.3638, lng: -97.9790 },
];

const coverageBoundary: [number, number][] = [
  [30.57, -97.91],
  [30.60, -97.79],
  [30.59, -97.68],
  [30.55, -97.59],
  [30.48, -97.56],
  [30.43, -97.58],
  [30.38, -97.62],
  [30.31, -97.63],
  [30.24, -97.69],
  [30.19, -97.77],
  [30.22, -97.86],
  [30.26, -97.96],
  [30.34, -98.00],
  [30.43, -97.97],
  [30.51, -97.94],
];

function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    let map: import("leaflet").Map | null = null;

    async function initializeMap() {
      const L = await import("leaflet");

      if (cancelled || !mapRef.current) return;

      map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const coverage = L.polygon(coverageBoundary, {
        color: "#067649",
        weight: 2.5,
        opacity: 0.95,
        fillColor: "#16A765",
        fillOpacity: 0.23,
        lineJoin: "round",
      }).addTo(map);

      serviceLocations.forEach((location) => {
        const isAustin = location.name === "Austin";

        L.circleMarker([location.lat, location.lng], {
          radius: isAustin ? 10 : 7,
          color: "#FFFFFF",
          weight: 3,
          fillColor: "#067649",
          fillOpacity: 1,
        })
          .addTo(map!)
          .bindTooltip(location.name, {
            permanent: true,
            direction: "top",
            offset: [0, -8],
            className: "service-area-tooltip",
          });
      });

      map.fitBounds(coverage.getBounds(), {
        padding: [20, 20],
      });
    }

    initializeMap();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="absolute inset-0 h-full w-full"
      aria-label="Interactive map showing FreshSpace service coverage around Austin, Texas"
    />
  );
}

/* SERVICE AREA */
export function ServiceArea() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="Service Area"
            title={
  <>
    Serving {business.city} &amp; Surrounding{" "}
    <span className="text-[#067649]">Areas</span>
  </>
}
            center={false}
          />

          <p className="reveal mt-4 text-muted-foreground">
            Not sure if we cover your neighborhood? Add your ZIP code to the quote form and we'll let you know.
          </p>

          <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {business.areas.map((a) => (
              <li
                key={a}
                className="flex items-center gap-2 rounded-xl border border-white/90 bg-[#067649]/[0.08] px-4 py-3 text-sm font-medium text-[#102441] shadow-[0_8px_24px_rgba(16,36,65,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#067649]/30 hover:bg-[#067649]/[0.12] hover:shadow-[0_12px_28px_rgba(16,36,65,0.12)]"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#067649]" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border bg-surface shadow-lift">
          <ServiceAreaMap />
        </div>
      </div>
    </section>
  );
}



/* TESTIMONIALS */
const serviceIcons: Record<string, typeof Home> = {
  "Deep Cleaning": Sparkles,
  "Residential Cleaning": Home,
  "Move-In / Move-Out": Truck,
  "Office Cleaning": Building2,
};

const trustIconMap = { shield: ShieldCheck, handshake: Handshake, clock: Clock, leaf: Leaf };
const arrowBtnClass = "grid h-12 w-12 place-items-center rounded-full border bg-card text-navy shadow-lift transition-colors duration-300 hover:bg-navy hover:text-navy-foreground disabled:pointer-events-none disabled:opacity-35";

function GoogleWordmark() {
  const letters: Array<[string, string]> = [
    ["G", "#4285F4"], ["o", "#EA4335"], ["o", "#FBBC05"], ["g", "#4285F4"], ["l", "#34A853"], ["e", "#EA4335"],
  ];

  return (
    <span className="select-none font-sans text-xl font-bold tracking-tight sm:text-2xl" aria-label="Google">
      {letters.map(([ch, color], i) => <span key={i} style={{ color }}>{ch}</span>)}
    </span>
  );
}

function DecoLines({ flip = false }: { flip?: boolean }) {
  return (
    <span className={`rating-lines hidden sm:flex ${flip ? "rating-lines-flip" : ""}`} aria-hidden>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ transitionDelay: `${(flip ? 2 - i : i) * 100}ms` }} />
      ))}
    </span>
  );
}

export function Testimonials() {
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveReview = useCallback(() => {
    const marker = window.scrollY + window.innerHeight * 0.42;
    let currentIndex = 0;

    reviewRefs.current.forEach((element, index) => {
      if (!element) return;

      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      if (elementTop <= marker) {
        currentIndex = index;
      }
    });

    setActiveIndex(currentIndex);
  }, []);

  useEffect(() => {
    updateActiveReview();

    window.addEventListener("scroll", updateActiveReview, { passive: true });
    window.addEventListener("resize", updateActiveReview);

    return () => {
      window.removeEventListener("scroll", updateActiveReview);
      window.removeEventListener("resize", updateActiveReview);
    };
  }, [updateActiveReview]);

  const goToReview = useCallback((index: number) => {
    const element = reviewRefs.current[index];
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.16;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="reviews" className="relative isolate overflow-clip bg-surface py-20 md:py-28">

      {/* Soft decorative background shapes */}
      <div className="pointer-events-none absolute -left-32 -top-36 -z-10 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" aria-hidden />

      <div className="container-site relative">

        {/* Heading */}
        <div className="reveal relative z-10 mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-4 text-emerald">
            <span className="h-px w-12 bg-emerald" aria-hidden />
            Real Clients. Real Results.
            <span className="h-px w-12 bg-emerald" aria-hidden />
          </p>

          <h2 className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl md:text-6xl">
            <span>What Our</span>
            <span className="inline-block -rotate-1 rounded-2xl bg-emerald px-4 py-1.5 text-white shadow-soft sm:px-6">
              Customers Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Don't just take our word for it — hear from homeowners who trust us to keep their spaces clean.
          </p>
        </div>

        {/* Large blurred FreshSpace background text */}
        <div
          className="pointer-events-none absolute left-1/2 top-[280px] -z-10 w-full -translate-x-1/2 select-none overflow-hidden text-center"
          aria-hidden
        >
          <span className="block whitespace-nowrap text-[4rem] font-bold tracking-tight text-emerald/25 blur-[7px] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
            FreshSpace
          </span>
        </div>

        {/* Scroll-stacking review cards */}
        <div className="relative mx-auto mt-14 max-w-lg pb-[18vh] sm:mt-16">

          {testimonials.map((t, i) => {
            const Icon = serviceIcons[t.service] ?? Sparkles;
            const isActive = activeIndex === i;
            const isPrevious = i < activeIndex;

            return (
              <div
                key={i}
                ref={(element) => {
                  reviewRefs.current[i] = element;
                }}
                className="sticky top-[16vh] mb-[18vh] last:mb-0"
                style={{ zIndex: i + 1 }}
              >
                <article
                  className={`grid w-full grid-cols-1 items-center gap-3 rounded-[1.5rem] border border-white/80 bg-card/95 p-4 shadow-[0_12px_35px_rgba(15,45,65,0.13)] backdrop-blur-xl transition-all duration-700 ease-out sm:gap-4 sm:p-5 md:grid-cols-[0.9fr_1.1fr] md:gap-4 md:rounded-[1.75rem] ${
                    isActive
                      ? "scale-100 opacity-100"
                      : isPrevious
                        ? "scale-[0.96] opacity-75"
                        : "scale-[0.98] opacity-95"
                  }`}
                  style={{
                    transform: isPrevious
                      ? `translateY(${Math.min((activeIndex - i) * 20, 65)}px) scale(0.96)`
                      : "translateY(0) scale(1)",
                  }}
                >

                  {/* Customer information */}
                  <div className="flex min-w-0 flex-row items-center gap-3">
                    <img
                      src={t.image}
                      alt={`Illustrative portrait of ${t.name}`}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-full border-2 border-emerald/40 object-cover shadow-soft sm:h-16 sm:w-16"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate font-display text-lg font-semibold text-navy sm:text-xl">
                        {t.name}
                      </h3>

                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                        <MapPin className="h-3.5 w-3.5 shrink-0 fill-emerald text-emerald" aria-hidden />
                        {t.location}
                      </p>

                      <Stars n={t.rating} className="mt-2 gap-0.5 text-base [&_svg]:h-4 [&_svg]:w-4" />
                    </div>
                  </div>

                  {/* Review text */}
                  <div className="border-t border-emerald/20 pt-3 md:border-l md:border-t-0 md:pl-4 md:pt-0">
                    <blockquote className="text-xs leading-relaxed text-navy sm:text-sm">
                      “{t.text}”
                    </blockquote>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-emerald/15 pt-3">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald">
                        <Icon className="h-4 w-4 shrink-0" strokeWidth={1.8} aria-hidden />
                        {t.service}
                      </span>

                      <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />

                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0" aria-hidden />
                        {t.date}
                      </span>
                    </div>
                  </div>

                </article>
              </div>
            );
          })}

        </div>

        {/* Review pagination dots */}
        <div className="mt-2 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToReview(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={activeIndex === i ? "step" : undefined}
              className={`h-3 rounded-full transition-all duration-500 ${
                activeIndex === i
                  ? "w-3 bg-emerald shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
                  : "w-3 bg-navy/15 hover:bg-emerald/50"
              }`}
            />
          ))}
        </div>

        {/* Trust benefits strip */}
        <ul className="reveal mt-16 grid grid-cols-2 gap-x-6 gap-y-7 sm:flex sm:items-center sm:justify-center sm:divide-x sm:divide-emerald/20">
          {reviewTrustBenefits.map(({ key, text }, i) => {
            const I = trustIconMap[key];
            return (
              <li key={key} className={`flex items-center gap-3 sm:px-7 ${i === 0 ? "sm:pl-0" : ""} ${i === reviewTrustBenefits.length - 1 ? "sm:pr-0" : ""}`}>
                <I className="h-6 w-6 shrink-0 text-emerald" strokeWidth={1.6} aria-hidden />
                <span className="text-[15px] font-medium leading-snug text-navy">{text}</span>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Sample reviews, names and Google rating shown for demo purposes. Replace with verified customer reviews before launch.
        </p>

      </div>
    </section>
  );
}



/* GALLERY */
const gallery = [
  { src: after, alt: "Clean white kitchen with island", w: 1600, h: 1008, cls: "md:col-span-2 md:row-span-2" },
  { src: gBath, alt: "Spotless marble bathroom with glass shower", w: 800, h: 1104, cls: "md:row-span-2" },
  { src: sOffice, alt: "Clean open-plan office", w: 928, h: 720, cls: "" },
  { src: hero, alt: "Tidy living room", w: 1600, h: 1104, cls: "" },
  { src: sDeep, alt: "Cleaner scrubbing tile grout", w: 928, h: 720, cls: "" },
  { src: about, alt: "Professional cleaner at work", w: 1104, h: 1312, cls: "md:col-span-2" },
  { src: before, alt: "Kitchen before cleaning", w: 1600, h: 1008, cls: "" },
];
export function Gallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHead eyebrow="Gallery" title="Spaces We've Freshened Up" />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <div key={i} className={`group overflow-hidden rounded-2xl shadow-soft ${g.cls} ${i === 0 ? "col-span-2" : ""}`}>
              <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* WHY CHOOSE US */
const why = [
  {
    icon: Clock,
    title: "Reliable Service",
    text: "We arrive on time, every time, and keep you updated if anything changes.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    text: "Weekly, biweekly, monthly, or one-time. Early mornings and weekends too.",
  },
  {
    icon: Search,
    title: "Attention to Detail",
    text: "A room-by-room checklist so nothing gets skipped — including the corners.",
  },
  {
    icon: MousePointerClick,
    title: "Easy Booking",
    text: "Request a quote online in about two minutes. No long phone calls.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-surface py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* Left content */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            eyebrow="Why Choose Us"
            title="The little things are the whole job."
            center={false}
            sub="Our team is trained, background-checked, and treats your home or office like it matters — because it does."
          />
        </div>

        {/* Glass cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {why.map(({ icon: I, title, text }, index) => (
            <div
              key={title}
              className="reveal group relative flex min-h-[260px] flex-col overflow-hidden rounded-[2rem] border border-white/90 bg-[#FDFDFD]/80 p-7 shadow-[0_15px_35px_rgba(16,36,65,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald/40 hover:shadow-[0_22px_45px_rgba(16,36,65,0.16)] sm:p-8"
            >
              {/* Navy and emerald glass glow */}
              <div
                className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#067649]/80 via-[#0A9672]/60 to-[#102441]/70 opacity-70 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-90"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -top-24 -right-20 h-52 w-52 rounded-full bg-gradient-to-br from-[#D8F3E0] to-[#B7E8D0] opacity-60 blur-3xl"
                aria-hidden="true"
              />

              {/* Card content */}
              <div className="relative z-10 flex h-full flex-1 flex-col">

                {/* Icon */}
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/80 bg-[#D8F3E0]/90 text-[#067649] shadow-[0_5px_15px_rgba(6,118,73,0.12)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#067649] group-hover:text-white">
                  <I className="h-6 w-6" strokeWidth={1.7} />
                </span>

                {/* Title */}
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-[#102441] sm:text-[22px]">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#344B68]">
                  {text}
                </p>

                {/* Number */}
                <div className="mt-auto flex justify-end pt-6">
                  <span className="font-display text-3xl font-bold tracking-wide text-[#067649]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Glass highlight */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* FAQ */
const homepageFaqs = [
  {
    question: "How much does cleaning cost?",
    answer: "Cleaning costs depend on the size of your space, its current condition, and the type of service you need. Contact us with a few details about your home or office and we'll provide a quote.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes. Our cleaning team arrives with the equipment and cleaning supplies needed for your service. If you have a preferred product or a specific request, let us know before your appointment.",
  },
  {
    question: "Do you offer recurring cleaning?",
    answer: "Yes. You can ask about weekly, biweekly, or monthly cleaning schedules. We'll help you find a schedule that suits your space and routine.",
  },
  {
    question: "Can I book a one-time deep clean?",
    answer: "Absolutely. A one-time deep cleaning is a good option when your space needs extra attention, whether you're preparing for a special occasion or catching up on built-up dirt and grime.",
  },
  {
    question: "Do you clean offices?",
    answer: "Yes. We offer office cleaning for workspaces, including desks, shared areas, break rooms, and restrooms. Contact us to discuss your office and cleaning requirements.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend contacting us a few days before your preferred cleaning date so we can check the schedule. Availability can vary, so reach out as early as possible for the best choice of times.",
  },
  {
    question: "What areas do you serve?",
    answer: `We serve ${business.city} and surrounding communities, including ${business.areas.join(", ")}. If you're unsure whether your address is covered, contact us and we'll be happy to check.`,
  },
  {
    question: "What happens if I need to reschedule?",
    answer: "If your plans change, contact us as soon as possible. We'll work with you to find another available date and time for your cleaning appointment.",
  },
];

export function FAQ() {
  const faqSectionRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleFaqs, setVisibleFaqs] = useState<number[]>([]);

  useEffect(() => {
    const section = faqSectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-faq-card]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.faqCard);
            setVisibleFaqs((current) =>
              current.includes(index) ? current : [...current, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
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
        <div className="mx-auto max-w-[820px]">
          <div className="reveal text-center">
            <p className="mx-auto inline-flex rounded-full bg-[#E8F5EF] px-5 py-2 text-sm font-semibold tracking-wide text-emerald">
              Frequently Asked Questions
            </p>

            <h2 className="mt-6 flex flex-wrap items-center justify-center gap-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem]">
              <span className="inline-block -rotate-2 rounded-xl bg-emerald px-4 py-2 text-white shadow-lg">
                Frequently
              </span>
              <span className="inline-block rotate-2 rounded-xl bg-white px-4 py-2 text-navy shadow-lg">
                Asked Questions
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have questions about our cleaning services? Find answers to some of the things customers ask us most.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-5">
            {homepageFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const isVisible = visibleFaqs.includes(index);

              return (
                <div
                  key={faq.question}
                  data-faq-card={index}
                  className={`mx-auto w-full max-w-[506px] overflow-hidden rounded-[2rem] border border-emerald/25 bg-gradient-to-br from-white to-[#F0F8F3] shadow-[0_8px_30px_rgba(20,83,45,0.06)] transition-all duration-700 ${
                    index % 2 === 0 ? "sm:mr-auto sm:ml-0" : "sm:ml-auto sm:mr-0"
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-[15px] px-5 text-left sm:px-6 sm:py-[18px]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald text-sm font-bold text-white shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-base font-semibold leading-snug text-navy sm:text-lg">
                      {faq.question}
                    </span>

                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-emerald/20 bg-white text-xl font-medium text-emerald">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[4.75rem] text-[15px] leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}