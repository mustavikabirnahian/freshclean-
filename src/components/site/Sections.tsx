import { useCallback, useRef, useState } from "react";
import {
  ArrowRight, Star, ShieldCheck, UserCheck, CalendarClock, BadgeCheck, Check, CheckCircle2,
  ClipboardList, CalendarDays, Sparkles, MapPin, Search, Clock, MousePointerClick, ChevronsLeftRight,
} from "lucide-react";
import { business, testimonials } from "@/content/site";
import hero from "@/assets/hero-home.jpg";
import about from "@/assets/about-cleaner.jpg";
import before from "@/assets/before-kitchen.jpg";
import after from "@/assets/after-kitchen.jpg";
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
      {Array.from({ length: n }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" aria-hidden />)}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) {
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
  { title: "Reliable, Consistent Service", text: "Know what to expect every time we visit." },
  { title: "Careful, Detail-Focused Cleaning", text: "We don't rush the little things." },
  { title: "Easy Scheduling", text: "Choose a cleaning schedule that works for you." },
  { title: "Respect for Your Home", text: "Our team treats your space like it matters." },
];
export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-[1.5rem] shadow-float">
            <img src={about} alt="FreshSpace cleaner wiping down a kitchen island" width={1104} height={1312} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <p className="absolute bottom-4 left-4 rounded-lg bg-background/95 px-3.5 py-2 text-sm font-medium text-navy shadow-soft">
            Carefully cleaned. Every visit.
          </p>
        </div>
        <div>
          <div className="reveal">
            <p className="eyebrow">Why FreshSpace</p>
            <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              A Better <span className="text-emerald">Kind of Clean.</span>
            </h2>
          </div>
          <div className="reveal mt-6 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
            <p>We started FreshSpace with a simple idea: cleaning your home shouldn't be something you have to worry about. Our team takes pride in doing the little things right, showing up when we say we will, and leaving every space feeling fresh, comfortable, and cared for.</p>
            <p>Whether you need a recurring home cleaning, a deep clean, or help getting ready for a move, we're here to make your life a little easier.</p>
          </div>
          <ul className="reveal mt-9 space-y-5">
            {aboutPoints.map((b) => (
              <li key={b.title} className="flex items-start gap-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" strokeWidth={2} aria-hidden />
                <div>
                  <p className="font-semibold text-navy">{b.title}</p>
                  <p className="mt-0.5 text-[15px] text-muted-foreground">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#why-us" className="group mt-10 inline-flex items-center gap-2 rounded font-semibold text-emerald hover:text-navy">
            Why Choose FreshSpace <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

/* SERVICES */
const services = [
  { img: sRes, title: "Residential Cleaning", text: "Regular cleaning for houses and apartments — kitchens, baths, floors, dusting, and the details in between." },
  { img: sDeep, title: "Deep Cleaning", text: "A top-to-bottom clean for grout, baseboards, inside appliances, and the spots that build up over time." },
  { img: sMove, title: "Move-In / Move-Out Cleaning", text: "Hand back the keys with confidence, or start fresh in a home that's actually clean." },
  { img: sOffice, title: "Office Cleaning", text: "After-hours cleaning for desks, break rooms, and restrooms so your team walks into a clean office." },
  { img: sAir, title: "Airbnb & Vacation Rental Cleaning", text: "Fast turnovers between guests, with fresh linens, restocking, and photo-ready rooms." },
  { img: sCom, title: "Commercial Cleaning", text: "Reliable cleaning for retail spaces, studios, and small businesses on a schedule that fits." },
];
export function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHead eyebrow="Our Services" title="Cleaning Services Built Around You" sub="From routine home cleaning to detailed commercial services, we make keeping your space clean simple." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="reveal lift group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-soft">
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} width={928} height={720} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-medium text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
                <a href="#quote" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-navy" aria-label={`Learn more about ${s.title}`}>
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* BEFORE / AFTER */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const update = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHead eyebrow="Real results" title="See The Difference" sub="Professional cleaning that makes your space feel new again." />
        <div className="reveal mx-auto mt-12 max-w-5xl">
          <div
            ref={ref}
            className="relative aspect-[4/3] touch-none select-none overflow-hidden rounded-[1.5rem] shadow-float sm:aspect-[16/10]"
            onPointerDown={(e) => { dragging.current = true; (e.target as Element).setPointerCapture?.(e.pointerId); update(e.clientX); }}
            onPointerMove={(e) => dragging.current && update(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <img src={after} alt="Kitchen after cleaning" width={1600} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img src={before} alt="Kitchen before cleaning" width={1600} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-foreground">Before</span>
            <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">After</span>
            <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-background" style={{ left: `${pos}%` }}>
              <div
                role="slider"
                tabIndex={0}
                aria-label="Before and after comparison"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
                  if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
                }}
                className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-background text-navy shadow-float"
              >
                <ChevronsLeftRight className="h-5 w-5" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">Drag the handle to compare. Sample photos for illustration.</p>
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

/* SERVICE AREA */
const pins = [
  { x: 48, y: 58 }, { x: 56, y: 26 }, { x: 34, y: 30 }, { x: 70, y: 40 }, { x: 22, y: 62 }, { x: 14, y: 48 },
];
export function ServiceArea() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Service Area" title={`Serving ${business.city} & Surrounding Areas`} center={false} />
          <p className="reveal mt-4 text-muted-foreground">Not sure if we cover your neighborhood? Add your ZIP code to the quote form and we'll let you know.</p>
          <ul className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {business.areas.map((a) => (
              <li key={a} className="flex items-center gap-2 rounded-xl border bg-card px-4 py-3 text-sm font-medium text-navy shadow-soft">
                <MapPin className="h-4 w-4 shrink-0 text-emerald" />{a}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border bg-surface shadow-lift" aria-hidden>
          <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M6 0H0V6" fill="none" stroke="var(--border)" strokeWidth="0.3" /></pattern>
            </defs>
            <rect width="100" height="75" fill="url(#grid)" />
            <path d="M-5 50 C 20 44, 30 60, 50 52 S 80 30, 105 38" fill="none" stroke="var(--emerald-soft)" strokeWidth="4" />
            <path d="M52 -5 L 50 40 L 46 80" fill="none" stroke="var(--background)" strokeWidth="2" />
            <path d="M-5 30 L 40 34 L 105 22" fill="none" stroke="var(--background)" strokeWidth="1.5" />
            <path d="M10 80 L 30 45 L 60 10" fill="none" stroke="var(--background)" strokeWidth="1.2" />
            <circle cx="48" cy="45" r="22" fill="var(--emerald)" fillOpacity="0.07" stroke="var(--emerald)" strokeOpacity="0.3" strokeWidth="0.3" strokeDasharray="1 1" />
          </svg>
          {pins.map((p, i) => (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-full" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
              <div className="whitespace-nowrap rounded-full bg-background px-2.5 py-1 text-[11px] font-semibold text-navy shadow-lift sm:text-xs">
                {business.areas[i]}
              </div>
              <div className="mx-auto mt-1 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald shadow-soft" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TESTIMONIALS */
export function Testimonials() {
  return (
    <section id="reviews" className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHead eyebrow="Reviews" title="What Our Customers Say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="reveal lift flex flex-col rounded-2xl border bg-card p-7 shadow-soft">
              <Stars n={t.rating} />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/85">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-soft font-semibold text-navy">{t.initials}</span>
                <span>
                  <span className="block font-semibold text-navy">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">Sample placeholder reviews shown for design purposes. Replace with verified customer reviews.</p>
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
  { icon: Clock, title: "Reliable Service", text: "We arrive on time, every time, and keep you updated if anything changes." },
  { icon: CalendarDays, title: "Flexible Scheduling", text: "Weekly, biweekly, monthly, or one-time. Early mornings and weekends too." },
  { icon: Search, title: "Attention to Detail", text: "A room-by-room checklist so nothing gets skipped — including the corners." },
  { icon: MousePointerClick, title: "Easy Booking", text: "Request a quote online in about two minutes. No long phone calls." },
];
export function WhyUs() {
  return (
    <section id="why-us" className="bg-surface py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Why Choose Us" title="The little things are the whole job." center={false} sub="Our team is trained, background-checked, and treats your home or office like it matters — because it does." />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {why.map(({ icon: I, title, text }) => (
            <div key={title} className="reveal lift rounded-2xl border bg-card p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-soft text-emerald"><I className="h-5 w-5" strokeWidth={1.7} /></span>
              <h3 className="mt-5 text-xl font-medium text-navy">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
