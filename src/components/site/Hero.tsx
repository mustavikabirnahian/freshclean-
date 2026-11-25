
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowRight, MapPin, Phone, Search, Star, LoaderCircle,
  ShieldCheck, UserCheck, CalendarClock, BadgeCheck,
} from "lucide-react";
import { business } from "@/content/site";
import { ZIP_PATTERN } from "@/lib/service-area";
import { lookupZip, type ZipLookupResult } from "@/lib/zip-lookup.functions";
// Hero photo — swap this import to change the image.
import heroImage from "@/assets/freshspace-hero3.png";

/* Full-bleed bright hero: realistic photo (no dark overlay), headline left,
   location-finder card with a working ZIP checker on the right. */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-blue-soft">
      <img
        src={heroImage}
        alt="A FreshSpace cleaner in a navy uniform wiping a bright kitchen countertop"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[64%_30%] md:object-center"
      />

      <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div className="hero-in rounded-3xl bg-white/75 p-5 backdrop-blur-sm sm:bg-white/65 sm:p-7">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-[#B9DCC6] bg-[#EAF4ED]/95 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#087A4B] sm:text-xs">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Professional Home Cleaning in Austin, TX
          </p>

          <h1 className="mt-5 max-w-xl text-[2.7rem] font-medium leading-[1.04] text-navy drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] sm:text-6xl lg:text-[4.25rem]">
            A Cleaner Space.<br />
            <span className="hero-text-reveal text-[#087A4B]">
              A Healthier You.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#46545B]">
            Reliable home cleaning that fits your schedule. Tell us where you need help, and we&rsquo;ll help you take the next step.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-px hover:bg-emerald-dark hover:shadow-float focus-visible:outline-2">
              Get a Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/25 bg-white/60 px-7 py-4 font-semibold text-navy transition hover:border-navy/50 hover:bg-white/85">
              Explore Services
            </a>
          </div>

          <div className="mt-8 space-y-2.5 text-sm text-navy/85">
            <p className="flex items-center gap-2">
              <span className="flex gap-0.5" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-star text-star" />)}
              </span>
              <span><span className="font-semibold text-navy">{business.googleRating}/5</span> on Google</span>
            </p>
            <p className="font-medium text-navy/75">Trusted by local homeowners</p>
            <p className="flex items-start gap-1.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#087A4B]" aria-hidden />
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
  | { kind: "invalid"; message: string }
  | { kind: "covered"; message: string; detail?: string | undefined }
  | { kind: "outside"; message: string; detail: string }
  | { kind: "unavailable"; message: string };

const CALL_BUTTON =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-input bg-card px-7 py-4 font-semibold text-navy transition hover:border-navy/40 hover:bg-muted/60 focus-visible:outline-2";

/* White location-finder card — the main hero feature. The ZIP check runs
   server-side against a live ZIP database + the verified service-area config. */
function LocationFinderCard() {
  const lookup = useServerFn(lookupZip);
  const [zip, setZip] = useState("");
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<ZipState>({ kind: "idle" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (pending) return;
    const value = zip.trim();
    if (!ZIP_PATTERN.test(value)) {
      setState({ kind: "invalid", message: "Please enter a valid five-digit ZIP code." });
      return;
    }
    setPending(true);
    try {
      const result = await lookup({ data: value });
      setState(toState(result));
    } catch {
      setState({
        kind: "unavailable",
        message: "We couldn't verify your ZIP code right now. Please try again or contact us directly.",
      });
    } finally {
      setPending(false);
    }
  };

  const toState = (r: ZipLookupResult): ZipState => {
    switch (r.status) {
      case "covered":
        return {
          kind: "covered",
          message: "Great news! We serve your area.",
          detail: r.city ? `Verified: ${r.city}${r.state ? `, ${r.state}` : ""}` : undefined,
        };
      case "outside":
      case "unknown":
        return {
          kind: "outside",
          message: "Sorry, we're not currently serving this ZIP code.",
          detail: "Contact us to check whether we can help with your location.",
        };
      default:
        return {
          kind: "unavailable",
          message: "We couldn't verify your ZIP code right now. Please try again or contact us directly.",
        };
    }
  };

  return (
    <div className="hero-img relative w-full max-w-[300px] justify-self-center lg:justify-self-end">
      <div className="rounded-[1.375rem] bg-white/95 px-4 py-2.5 shadow-float backdrop-blur-md sm:px-4 sm:py-2.5">
        <div className="flex items-start gap-3">
          <span className="pin-in pin-hover grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EAF4ED] text-[#087A4B]">
            <MapPin className="h-4 w-4" strokeWidth={1.8} aria-hidden />
          </span>
          <div>
            <h2 className="text-base font-medium leading-tight text-navy">Find Cleaning Services Near You</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">Enter your ZIP code to check whether we serve your area.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="mt-2.5">
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
            aria-invalid={state.kind === "invalid"}
            aria-describedby={state.kind !== "idle" ? "hero-zip-result" : undefined}
            className="mt-2 block w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-[#087A4B] focus:ring-4 focus:ring-[#087A4B]/20 aria-[invalid=true]:border-destructive"
          />
          <div aria-live="polite">
            {state.kind === "invalid" && (
              <p id="hero-zip-result" role="alert" className="mt-2 text-sm text-destructive">{state.message}</p>
            )}
            {state.kind === "covered" && (
              <div id="hero-zip-result" role="status" className="mt-3 rounded-lg bg-emerald-soft px-4 py-3.5 text-sm leading-relaxed text-navy">
                <p className="font-semibold">{state.message}</p>
                {state.detail && <p className="mt-0.5">{state.detail}</p>}
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <a href="#quote" className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-emerald-dark">Request a Free Quote</a>
                  <a href={business.phoneHref} className="inline-flex flex-1 items-center justify-center rounded-full border border-navy/25 px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy/50">Call for a Free Quote</a>
                </div>
              </div>
            )}
            {state.kind === "outside" && (
              <div id="hero-zip-result" role="status" className="mt-3 rounded-lg bg-blue-soft px-4 py-3.5 text-sm leading-relaxed text-navy">
                <p className="font-semibold">{state.message}</p>
                <p className="mt-0.5">{state.detail}</p>
                <a href={business.phoneHref} className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-navy/25 px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy/50">
                  <Phone className="h-3.5 w-3.5 text-emerald" aria-hidden /> Call for a Free Quote
                </a>
              </div>
            )}
            {state.kind === "unavailable" && (
              <div id="hero-zip-result" role="status" className="mt-3 rounded-lg bg-blue-soft px-4 py-3.5 text-sm leading-relaxed text-navy">
                <p>{state.message}</p>
                <a href={business.phoneHref} className="mt-2 inline-flex items-center gap-1.5 font-semibold text-emerald underline-offset-2 hover:underline">
                  <Phone className="h-3.5 w-3.5" aria-hidden /> Call {business.phone}
                </a>
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={pending}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-5 py-2.5 font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-px hover:bg-emerald-dark hover:shadow-float focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {pending
              ? (<><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> Checking…</>)
              : (<><Search className="h-4 w-4" aria-hidden /> Find Local Cleaning</>)}
          </button>
        </form>

        <div className="mt-4 flex items-center gap-3" aria-hidden>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <a href={business.phoneHref} className={`${CALL_BUTTON} mt-5`}>
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
