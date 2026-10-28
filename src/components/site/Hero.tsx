import { ArrowRight, CheckCircle2, Phone, MapPin } from "lucide-react";
import { business, trustItems } from "@/content/site";
import { fieldClass, labelClass, useQuoteSubmit, type QuoteErrors } from "./QuoteForm";
// Hero photo — swap this import to change the image.
import heroImage from "@/assets/hero-cleaner.jpg";

/* Full-bleed hero: documentary photo, headline left, quick-quote form right. */
export function Hero() {
  const { city, state, heroAreas, phone, phoneHref } = business;
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt=""
        aria-hidden
        width={1504}
        height={1312}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[38%_30%]"
      />
      {/* Subtle overlay for text contrast — the photo stays visible. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 via-navy/55 to-navy/80 lg:bg-gradient-to-r lg:from-navy/85 lg:via-navy/55 lg:to-navy/20" aria-hidden />

      <div className="container-site grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-28">
        <div className="hero-in">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-bright sm:text-xs">
            Residential &amp; Commercial Cleaning — {city}, {state}
          </p>
          <h1 className="mt-4 max-w-xl text-[2.7rem] font-medium leading-[1.04] text-navy-foreground sm:text-6xl lg:text-[4.25rem]">
            A Cleaner Space.<br />
            <span className="italic text-emerald-bright">A Healthier You.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-foreground/80">
            Dependable home and office cleaning, scheduled around you. Our team arrives on time, works room by room, and leaves your space ready to enjoy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:bg-navy">
              Get a Free Cleaning Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/30 px-7 py-4 font-semibold text-navy-foreground transition hover:border-navy-foreground/70">
              <Phone className="h-4 w-4" aria-hidden /> Call {phone}
            </a>
          </div>
          <p className="mt-8 flex items-start gap-1.5 text-sm text-navy-foreground/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright" aria-hidden />
            <span>Serving {heroAreas.join(" • ")}</span>
          </p>
        </div>

        <HeroQuoteCard />
      </div>
    </section>
  );
}

function HeroQuoteCard() {
  const q = useQuoteSubmit(["name", "phone", "service"]);
  const err = (k: keyof QuoteErrors) =>
    q.errors[k] ? <p id={`hero-${k}-err`} className="mt-1.5 text-sm text-destructive">{q.errors[k]}</p> : null;
  const a = (k: keyof QuoteErrors) => ({ "aria-invalid": !!q.errors[k], "aria-describedby": q.errors[k] ? `hero-${k}-err` : undefined });

  return (
    <div className="hero-img relative">
      <div className="rounded-2xl bg-card p-6 shadow-float sm:p-8">
        {q.sent ? (
          <div className="py-6 text-center" role="status">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald" strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-medium text-navy">Thanks — your request is in.</h2>
            <p className="mx-auto mt-2 max-w-xs text-[15px] text-muted-foreground">
              We'll call or email to confirm the details. In a hurry?{" "}
              <a href={business.phoneHref} className="font-semibold text-emerald">Call {business.phone}</a>.
            </p>
            <button onClick={q.restart} className="mt-6 rounded-full border px-5 py-2.5 text-sm font-semibold text-navy hover:border-navy">Send another request</button>
          </div>
        ) : (
          <form onSubmit={q.onSubmit} noValidate>
            <div className="absolute -left-[9999px]" aria-hidden>
              <label>Website<input name="company_website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <h2 className="text-2xl font-medium text-navy">Get a Free Cleaning Quote</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">Tell us about your space — we'll reply with a clear price.</p>
            <div className="mt-5 grid gap-4">
              <div>
                <label htmlFor="hero-name" className={labelClass}>Full Name *</label>
                <input id="hero-name" name="name" autoComplete="name" className={fieldClass} {...a("name")} />{err("name")}
              </div>
              <div>
                <label htmlFor="hero-phone" className={labelClass}>Phone *</label>
                <input id="hero-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={fieldClass} {...a("phone")} />{err("phone")}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hero-service" className={labelClass}>Service *</label>
                  <select id="hero-service" name="service" defaultValue="" className={fieldClass} {...a("service")}>
                    <option value="" disabled>Select…</option>
                    <option>Residential Cleaning</option><option>Deep Cleaning</option><option>Move-In / Move-Out</option><option>Office Cleaning</option><option>Airbnb / Vacation Rental</option>
                  </select>{err("service")}
                </div>
                <div>
                  <label htmlFor="hero-bedrooms" className={labelClass}>Bedrooms</label>
                  <select id="hero-bedrooms" name="bedrooms" defaultValue="" className={fieldClass}>
                    <option value="">—</option>{["Studio", "1", "2", "3", "4", "5+"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" disabled={q.busy} className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:bg-navy disabled:opacity-60">
              {q.busy ? "Sending…" : "Request My Free Quote"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">Free, no obligation. We confirm every detail with you before booking.</p>
          </form>
        )}
      </div>
    </div>
  );
}

const trustIcons = { insured: ShieldCheck, checked: UserCheck, flexible: CalendarClock, guarantee: BadgeCheck } as const;

import { ShieldCheck, UserCheck, CalendarClock, BadgeCheck } from "lucide-react";

export function TrustBar() {
  return (
    <section aria-label="Why customers trust us" className="border-y bg-card">
      <ul className="container-site grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
        {trustItems.map(({ key, title, text }, i) => {
          const I = trustIcons[key];
          return (
            <li
              key={key}
              className={`flex items-start gap-3.5 py-5 lg:px-6 lg:py-0 ${i > 0 ? "border-t sm:border-t-0" : ""} ${i > 1 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "sm:pl-6 lg:pl-6" : ""} ${i === 0 ? "lg:pl-0" : ""}`}
            >
              <I className="mt-0.5 h-6 w-6 shrink-0 text-emerald" strokeWidth={1.5} aria-hidden />
              <div>
                <p className="font-semibold text-navy">{title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
