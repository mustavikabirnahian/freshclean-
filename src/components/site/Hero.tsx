import { ArrowRight, Phone, MapPin, Star, ShieldCheck, UserCheck, CalendarClock, BadgeCheck } from "lucide-react";
import { business, trustItems } from "@/content/site";
import heroImage from "@/assets/about-cleaner.jpg";

const trustIcons = { insured: ShieldCheck, checked: UserCheck, flexible: CalendarClock, guarantee: BadgeCheck };

export function Hero() {
  const { city, state, googleRating, reviewCount, heroAreas, primaryCTA } = business;
  return (
    <section id="top" className="bg-background pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-16">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
        <div className="hero-in">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-brand-navy sm:text-xs">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Professional Home Cleaning in {city}, {state}
          </p>
          <h1 className="mt-5 text-[2.5rem] font-medium leading-[1.06] text-brand-navy sm:text-[3.25rem] lg:text-[3.6rem] xl:text-[4rem]">
            A Cleaner Home.<br />
            <span className="text-brand-blue">More Time for You.</span>
          </h1>
          <p className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-muted-foreground">
            Reliable residential cleaning services for busy homeowners in {city} and surrounding areas. From recurring cleanings to deep cleans, we make it easy to come home to a space you love.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={primaryCTA.href} className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-blue px-7 font-semibold text-primary-foreground transition-colors hover:bg-brand-navy">
              {primaryCTA.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href={business.phoneHref} className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-[1.5px] border-brand-blue bg-background px-7 font-semibold text-brand-navy transition-colors hover:bg-brand-soft">
              <Phone className="h-4 w-4 text-brand-blue" aria-hidden />
              Call {business.phone}
            </a>
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="flex items-center gap-2.5">
              <span className="flex gap-0.5 text-star" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </span>
              <span className="text-sm font-semibold text-brand-navy">
                {googleRating}/5 on Google{reviewCount ? ` · ${reviewCount} reviews` : ""}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Trusted by local homeowners</p>
            <p className="mt-4 flex items-start gap-1.5 text-sm text-brand-navy/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
              <span>Serving {heroAreas.join(" • ")}</span>
            </p>
          </div>
        </div>

        <div className="hero-img relative">
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={heroImage}
              alt="FreshSpace cleaner wiping down a kitchen counter in an Austin home"
              width={1104}
              height={1312}
              fetchPriority="high"
              decoding="async"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-[4/3] w-full object-cover object-[50%_30%] sm:aspect-[16/11] lg:aspect-[5/5.2]"
            />
          </div>
          {/* Demo claim — replace with a verified business claim before launch. */}
          <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-background/95 px-4 py-3 shadow-soft sm:bottom-6 sm:right-6">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-blue">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            </span>
            <p className="text-sm font-semibold leading-snug text-brand-navy">
              Background-Checked<br />& Trained Cleaners
            </p>
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
