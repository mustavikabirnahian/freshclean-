import { ArrowRight, Phone, MapPin, Star, ShieldCheck, UserCheck, CalendarClock, BadgeCheck } from "lucide-react";
import { business, trustItems } from "@/content/site";
// Hero photo — swap this import to change the image.
import heroImage from "@/assets/hero-cleaner.jpg";

const trustIcons = { insured: ShieldCheck, checked: UserCheck, flexible: CalendarClock, guarantee: BadgeCheck };

export function Hero() {
  const { city, state, googleRating, reviewCount, heroAreas, primaryCTA, secondaryCTA } = business;
  return (
    <section id="top" className="relative overflow-hidden bg-surface pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div className="hero-in relative z-10">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-sky-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-sky min-[400px]:text-[11px] sm:text-xs sm:tracking-[0.12em]">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Professional Home Cleaning in {city}, {state}
          </p>
          <h1 className="mt-4 text-[2.6rem] font-medium leading-[1.05] text-navy sm:text-6xl lg:text-[4.25rem]">
            A Cleaner Space.<br /><span className="italic text-sky">A Healthier You.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Reliable residential and commercial cleaning services designed around your schedule. We take care of the mess so you can focus on what matters.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={primaryCTA.href} className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:bg-navy">
              {primaryCTA.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href={secondaryCTA.href} className="inline-flex items-center justify-center rounded-full border border-input bg-background px-7 py-4 font-semibold text-navy transition hover:border-navy">
              {secondaryCTA.label}
            </a>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2.5">
              <span className="flex gap-0.5 text-star" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </span>
              <span className="text-sm font-semibold text-navy">{googleRating}/5 on Google{reviewCount ? ` · ${reviewCount} reviews` : ""}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Trusted by local homeowners</p>
            <p className="mt-5 flex items-start gap-1.5 text-sm text-navy/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden />
              <span>Serving {heroAreas.join(" • ")}</span>
            </p>
          </div>
        </div>

        <div className="hero-img relative">
          <div className="absolute -right-6 -top-6 hidden h-full w-full rounded-[1.75rem] bg-sky-soft lg:block" aria-hidden />
          <div className="group relative overflow-hidden rounded-[1.5rem] shadow-float">
            <img
              src={heroImage}
              alt={`Professional cleaner wiping down a kitchen counter in a ${city} home`}
              width={1504}
              height={1312}
              fetchPriority="high"
              decoding="async"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-[4/3] w-full object-cover object-[40%_30%] transition-transform duration-700 group-hover:scale-[1.02] lg:aspect-[5/4.4]"
            />
          </div>
          {/* Demo claim — confirm with the business before launch. */}
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-background/95 px-3.5 py-2 text-sm font-medium text-navy shadow-soft">
            <ShieldCheck className="h-4 w-4 text-leaf" aria-hidden /> Fully insured
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section aria-label="Why customers trust us" className="border-y bg-brand-gray">
      <ul className="container-site grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
        {trustItems.map(({ key, title, text }, i) => {
          const I = trustIcons[key];
          return (
            <li
              key={key}
              className={`flex items-start gap-3.5 py-5 lg:px-6 lg:py-0 ${i > 0 ? "border-t sm:border-t-0" : ""} ${i > 1 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "sm:pl-6 lg:pl-6" : ""} ${i === 0 ? "lg:pl-0" : ""}`}
            >
              <I className="mt-0.5 h-6 w-6 shrink-0 text-brand-blue" strokeWidth={1.5} aria-hidden />
              <div>
                <p className="font-semibold text-brand-navy">{title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
