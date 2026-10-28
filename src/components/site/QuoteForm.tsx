import { z } from "zod";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { business } from "@/content/site";
import { useQuoteSubmit, type QuoteErrors } from "./use-quote";
import bookingPhoto from "@/assets/booking-cleaner.jpg";

export { useQuoteSubmit, quoteSchema, type QuoteErrors } from "./use-quote";

export const fieldClass =
  "mt-2 block w-full rounded-lg border border-input bg-card px-4 py-3.5 text-[15px] text-foreground outline-none transition focus:border-emerald focus:ring-4 focus:ring-emerald/15 aria-[invalid=true]:border-destructive";
export const labelClass = "text-sm font-semibold text-navy";

const REQUIRED = ["name", "email", "phone", "zip", "propertyType", "service"] as const satisfies (keyof z.infer<typeof quoteSchema>)[];

/* Full booking section: form left, photo and reassurance right. */
export function QuoteForm() {
  const q = useQuoteSubmit([...REQUIRED]);
  const err = (k: keyof QuoteErrors) =>
    q.errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-destructive">{q.errors[k]}</p> : null;
  const a = (k: keyof QuoteErrors) => ({ "aria-invalid": !!q.errors[k], "aria-describedby": q.errors[k] ? `${k}-err` : undefined });

  return (
    <section id="quote" className="py-20 md:py-28">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <div className="reveal">
            <p className="eyebrow">Free Quote</p>
            <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem]">Book Your Cleaning</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us a little about your space and what you need cleaned. We'll reply with a clear, no-obligation quote — usually within one business day.
            </p>
          </div>

          <div className="reveal mt-8 rounded-2xl border bg-surface p-6 shadow-soft sm:p-8">
            {q.sent ? (
              <div className="py-10 text-center" role="status">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald" strokeWidth={1.5} />
                <h3 className="mt-4 text-2xl font-medium text-navy">Thanks — your request is in.</h3>
                <p className="mx-auto mt-3 max-w-md text-[15px] text-muted-foreground">
                  We'll review your request and reply with a quote, usually within one business day. Need us sooner?{" "}
                  <a className="font-semibold text-emerald" href={business.phoneHref}>Call {business.phone}</a>.
                </p>
                <button onClick={q.restart} className="mt-8 rounded-full border px-6 py-3 font-semibold text-navy hover:border-navy">Send another request</button>
              </div>
            ) : (
              <form onSubmit={q.onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div className="absolute -left-[9999px]" aria-hidden>
                  <label>Website<input name="company_website" tabIndex={-1} autoComplete="off" /></label>
                </div>
                <div><label htmlFor="name" className={labelClass}>Full Name *</label><input id="name" name="name" autoComplete="name" className={fieldClass} {...a("name")} />{err("name")}</div>
                <div><label htmlFor="email" className={labelClass}>Email *</label><input id="email" name="email" type="email" autoComplete="email" className={fieldClass} {...a("email")} />{err("email")}</div>
                <div><label htmlFor="phone" className={labelClass}>Phone *</label><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={fieldClass} {...a("phone")} />{err("phone")}</div>
                <div><label htmlFor="zip" className={labelClass}>ZIP Code *</label><input id="zip" name="zip" inputMode="numeric" maxLength={5} autoComplete="postal-code" className={fieldClass} {...a("zip")} />{err("zip")}</div>
                <div>
                  <label htmlFor="propertyType" className={labelClass}>Property Type *</label>
                  <select id="propertyType" name="propertyType" defaultValue="" className={fieldClass} {...a("propertyType")}>
                    <option value="" disabled>Select…</option>
                    <option>House</option><option>Apartment / Condo</option><option>Townhome</option><option>Office</option><option>Vacation Rental</option><option>Commercial Space</option>
                  </select>{err("propertyType")}
                </div>
                <div>
                  <label htmlFor="service" className={labelClass}>Cleaning Service *</label>
                  <select id="service" name="service" defaultValue="" className={fieldClass} {...a("service")}>
                    <option value="" disabled>Select…</option>
                    <option>Residential Cleaning</option><option>Deep Cleaning</option><option>Move-In / Move-Out</option><option>Office Cleaning</option><option>Airbnb / Vacation Rental</option><option>Commercial Cleaning</option>
                  </select>{err("service")}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label htmlFor="bedrooms" className={labelClass}>Bedrooms</label>
                    <select id="bedrooms" name="bedrooms" defaultValue="" className={fieldClass}><option value="">—</option>{["Studio", "1", "2", "3", "4", "5+"].map((o) => <option key={o}>{o}</option>)}</select></div>
                  <div><label htmlFor="bathrooms" className={labelClass}>Bathrooms</label>
                    <select id="bathrooms" name="bathrooms" defaultValue="" className={fieldClass}><option value="">—</option>{["1", "1.5", "2", "2.5", "3", "4+"].map((o) => <option key={o}>{o}</option>)}</select></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label htmlFor="date" className={labelClass}>Preferred Date</label><input id="date" name="date" type="date" className={fieldClass} /></div>
                  <div><label htmlFor="time" className={labelClass}>Preferred Time</label>
                    <select id="time" name="time" defaultValue="" className={fieldClass}><option value="">Any</option><option>Morning</option><option>Midday</option><option>Afternoon</option></select></div>
                </div>
                <div className="sm:col-span-2"><label htmlFor="details" className={labelClass}>Additional Details</label><textarea id="details" name="details" rows={4} maxLength={1000} placeholder="Pets, access instructions, areas to focus on…" className={fieldClass} {...a("details")} />{err("details")}</div>
                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-sm text-muted-foreground">We'll confirm every detail with you before anything is booked.</p>
                  <button type="submit" disabled={q.busy} className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:bg-navy disabled:opacity-60">
                    {q.busy ? "Sending…" : "Request My Free Quote"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-emerald" aria-hidden />
            Prefer to talk? Call or text{" "}
            <a href={business.phoneHref} className="font-semibold text-navy underline-offset-2 hover:underline">{business.phone}</a>
          </p>
        </div>

        <div className="reveal lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-2xl shadow-float">
            <img
              src={bookingPhoto}
              alt="A FreshSpace cleaner wiping a kitchen counter in a client's home, caddy of supplies beside her"
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Our team arrives with all supplies and equipment — you don't need to provide a thing.</p>
          <div className="mt-6 rounded-2xl border bg-card p-6">
            <p className="text-[15px] leading-relaxed text-foreground/85">
              Not sure what your home needs? Request a quote online, or call and we'll walk through it with you. We'll confirm availability for your address before booking.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{business.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
