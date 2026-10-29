import { useState, type FormEvent } from "react";
import { ArrowRight, MapPin, Phone, Search, Star } from "lucide-react";
import { business } from "@/content/site";
import { ZIP_PATTERN, checkZipCoverage } from "./zip-coverage";
// Hero photo — swap this import to change the image.
import heroImage from "@/assets/hero-cleaner.jpg";

/* Full-bleed hero: documentary photo, headline left, location-finder card right. */
export function Hero() {
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
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[38%_30%] sm:object-center"
      />
      {/* Navy gradient: left dark enough for white text, photo stays clear on the right. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/85 via-navy/60 to-navy/85 lg:bg-gradient-to-r lg:from-navy/90 lg:via-navy/60 lg:to-navy/25" aria-hidden />

      <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div className="hero-in">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-blue/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-bright sm:text-xs">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Professional Home Cleaning in Austin, TX
          </p>
          <h1 className="mt-5 max-w-xl text-[2.7rem] font-medium leading-[1.04] text-navy-foreground sm:text-6xl lg:text-[4.25rem]">
            A Cleaner Space.<br />
            <span className="text-blue-bright">A Healthier You.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-foreground/85">
            Reliable home cleaning that fits your schedule. Tell us where you need help, and we&rsquo;ll help you take the next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-px hover:bg-emerald-dark hover:shadow-float focus-visible:outline-2">
              Get a Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/35 px-7 py-4 font-semibold text-navy-foreground transition hover:border-navy-foreground/70 hover:bg-navy-foreground/5">
              Explore Services
            </a>
          </div>

          <div className="mt-8 space-y-2.5 text-sm text-navy-foreground/85">
            <p className="flex items-center gap-2">
              <span className="flex gap-0.5" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-star text-star" />)}
              </span>
              <span><span className="font-semibold text-navy-foreground">{business.googleRating}/5</span> on Google</span>
            </p>
            <p className="font-medium text-navy-foreground/75">Trusted by local homeowners</p>
            <p className="flex items-start gap-1.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-bright" aria-hidden />
              <span>Serving {business.heroAreas.join(" • ")}</span>
            </p>
          </div>
        </div>

        <LocationFinderCard />
      </div>
    </section>
  );
}

type ZipState =
  | { kind: "idle" }
  | { kind: "error"; message: string }
  | { kind: "result"; message: string; tone: "good" | "warn" };

/* White location-finder card — the main hero feature. Checks the ZIP against
   configured coverage data (zip-coverage.ts); no fake lookup is ever shown. */
function LocationFinderCard() {
  const [zip, setZip] = useState("");
  const [state, setState] = useState<ZipState>({ kind: "idle" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = zip.trim();
    if (!ZIP_PATTERN.test(value)) {
      setState({ kind: "error", message: "Please enter a valid 5-digit ZIP code." });
      return;
    }
    const check = checkZipCoverage(value);
    setState({ kind: "result", message: check.message, tone: check.status === "covered" ? "good" : "warn" });
  };

  return (
    <div className="hero-img relative">
      <div className="rounded-[1.375rem] bg-card p-6 shadow-float sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-soft text-blue">
            <MapPin className="h-6 w-6" strokeWidth={1.8} aria-hidden />
          </span>
          <div>
            <h2 className="text-[1.55rem] font-medium leading-snug text-navy">Find Cleaning Services Near You</h2>
            <p className="mt-1.5 text-[15px] text-muted-foreground">Enter your ZIP code to check whether we serve your area.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="mt-6">
          <label htmlFor="hero-zip" className="text-sm font-semibold text-navy">ZIP Code</label>
          <input
            id="hero-zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder="Enter your ZIP code"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
              if (state.kind !== "idle") setState({ kind: "idle" });
            }}
            aria-invalid={state.kind === "error"}
            aria-describedby={state.kind !== "idle" ? "hero-zip-result" : undefined}
            className="mt-2 block w-full rounded-lg border border-input bg-card px-4 py-3.5 text-[15px] text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-blue focus:ring-4 focus:ring-blue/20 aria-[invalid=true]:border-destructive"
          />
          {state.kind === "error" && (
            <p id="hero-zip-result" role="alert" className="mt-2 text-sm text-destructive">{state.message}</p>
          )}
          {state.kind === "result" && (
            <p
              id="hero-zip-result"
              role="status"
              className={`mt-3 rounded-lg px-4 py-3 text-sm leading-relaxed ${state.tone === "good" ? "bg-emerald-soft text-navy" : "bg-blue-soft text-navy"}`}
            >
              {state.message}
            </p>
          )}
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-px hover:bg-emerald-dark hover:shadow-float focus-visible:outline-2"
          >
            <Search className="h-4 w-4" aria-hidden /> Find Local Cleaning
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3" aria-hidden>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <a
          href={business.phoneHref}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-input bg-card px-7 py-4 font-semibold text-navy transition hover:border-navy/40 hover:bg-muted/60 focus-visible:outline-2"
        >
          <Phone className="h-4 w-4 text-emerald" aria-hidden /> Call for a Free Quote
        </a>
        <p className="mt-3 text-center text-xs text-muted-foreground">No obligation. We&rsquo;re happy to help.</p>
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section aria-label="Why customers trust us" className="border-y bg-card">
      <ul className="container-site grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
        <li className="flex items-start gap-3.5 py-5 lg:px-6 lg:py-0 lg:pl-0">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald" strokeWidth={1.5} aria-hidden />
          <div>
            <p className="font-semibold text-navy">Licensed &amp; Insured</p>
            <p className="mt-0.5 text-sm text-muted-foreground">Your peace of mind matters.</p>
          </div>
        </li>
        <li className="flex items-start gap-3.5 border-t py-5 sm:border-t-0 sm:pl-6 lg:px-6 lg:py-0 lg:border-l">
          <UserCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald" strokeWidth={1.5} aria-hidden />
          <div>
            <p className="font-semibold text-navy">Background-Checked Team</p>
            <p className="mt-0.5 text-sm text-muted-foreground">We hire trustworthy professionals.</p>
          </div>
        </li>
        <li className="flex items-start gap-3.5 border-t py-5 sm:border-t lg:border-t-0 sm:pl-6 lg:px-6 lg:py-0 lg:border-l">
          <CalendarClock className="mt-0.5 h-6 w-6 shrink-0 text-emerald" strokeWidth={1.5} aria-hidden />
          <div>
            <p className="font-semibold text-navy">Flexible Scheduling</p>
            <p className="mt-0.5 text-sm text-muted-foreground">We work around your life.</p>
          </div>
        </li>
        <li className="flex items-start gap-3.5 border-t py-5 sm:border-t lg:border-t-0 sm:pl-6 lg:px-6 lg:py-0 lg:border-l">
          <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald" strokeWidth={1.5} aria-hidden />
          <div>
            <p className="font-semibold text-navy">Satisfaction Guarantee</p>
            <p className="mt-0.5 text-sm text-muted-foreground">We&rsquo;re not happy until you are.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

import { ShieldCheck, UserCheck, CalendarClock, BadgeCheck } from "lucide-react";
