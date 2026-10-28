import { useRef, useState } from "react";
import { z } from "zod";
import { ArrowRight, Lock, CheckCircle2, Phone } from "lucide-react";
import { business } from "@/content/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().regex(/^[\d\s()+.-]{10,20}$/, "Please enter a valid phone number"),
  propertyType: z.string().min(1, "Choose a property type"),
  service: z.string().min(1, "Choose a service"),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  zip: z.string().trim().regex(/^\d{5}$/, "Enter a 5-digit ZIP code"),
  details: z.string().trim().max(1000, "Please keep it under 1000 characters").optional(),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-3 text-[15px] text-foreground shadow-soft outline-none transition focus:border-emerald focus:ring-4 focus:ring-emerald/15 aria-[invalid=true]:border-destructive";
const label = "text-sm font-medium text-navy";

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const started = useRef(Date.now());

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Spam guards: hidden honeypot field and minimum fill time.
    if (fd.get("company_website") || Date.now() - started.current < 2500) return;
    const res = schema.safeParse(Object.fromEntries(fd));
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] ??= i.message; });
      setErrors(errs);
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${String(res.error.issues[0]?.path[0] ?? "")}"]`);
      first?.focus();
      return;
    }
    setErrors({});
    setBusy(true);
    // TODO: connect to a secure backend or email service to deliver requests.
    setTimeout(() => { setBusy(false); setSent(true); }, 700);
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;
  const a = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <section id="quote" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-navy" aria-hidden />
      <div className="container-site relative">
        <div className="reveal mx-auto max-w-2xl text-center text-navy-foreground">
          <p className="eyebrow text-emerald-soft">Free Quote</p>
          <h2 className="mt-3 text-3xl font-medium sm:text-4xl md:text-[2.75rem]">Ready for a Cleaner Space?</h2>
          <p className="mt-4 text-navy-foreground/75">Tell us a little about your space and we'll reply with a quote, usually within one business day.</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[1.75rem] border bg-card p-6 shadow-float sm:p-10">
          {sent ? (
            <div className="py-12 text-center" role="status">
              <CheckCircle2 className="mx-auto h-14 w-14 text-leaf" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-medium text-navy">Thanks — we've got your request.</h3>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">We'll be in touch shortly with your quote. Need help sooner? Call us at <a className="font-semibold text-emerald" href={business.phoneHref}>{business.phone}</a>.</p>
              <button onClick={() => { setSent(false); started.current = Date.now(); }} className="mt-8 rounded-full border px-6 py-3 font-semibold text-navy hover:border-navy">Send another request</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div className="absolute -left-[9999px]" aria-hidden>
                <label>Website<input name="company_website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <div><label htmlFor="name" className={label}>Full Name *</label><input id="name" name="name" autoComplete="name" className={field} {...a("name")} />{err("name")}</div>
              <div><label htmlFor="email" className={label}>Email *</label><input id="email" name="email" type="email" autoComplete="email" className={field} {...a("email")} />{err("email")}</div>
              <div><label htmlFor="phone" className={label}>Phone *</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} {...a("phone")} />{err("phone")}</div>
              <div><label htmlFor="zip" className={label}>ZIP Code *</label><input id="zip" name="zip" inputMode="numeric" maxLength={5} autoComplete="postal-code" className={field} {...a("zip")} />{err("zip")}</div>
              <div>
                <label htmlFor="propertyType" className={label}>Property Type *</label>
                <select id="propertyType" name="propertyType" defaultValue="" className={field} {...a("propertyType")}>
                  <option value="" disabled>Select…</option>
                  <option>House</option><option>Apartment / Condo</option><option>Townhome</option><option>Office</option><option>Vacation Rental</option><option>Commercial Space</option>
                </select>{err("propertyType")}
              </div>
              <div>
                <label htmlFor="service" className={label}>Cleaning Service *</label>
                <select id="service" name="service" defaultValue="" className={field} {...a("service")}>
                  <option value="" disabled>Select…</option>
                  <option>Residential Cleaning</option><option>Deep Cleaning</option><option>Move-In / Move-Out</option><option>Office Cleaning</option><option>Airbnb / Vacation Rental</option><option>Commercial Cleaning</option>
                </select>{err("service")}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label htmlFor="bedrooms" className={label}>Bedrooms</label>
                  <select id="bedrooms" name="bedrooms" defaultValue="" className={field}><option value="">—</option>{["Studio", "1", "2", "3", "4", "5+"].map((o) => <option key={o}>{o}</option>)}</select></div>
                <div><label htmlFor="bathrooms" className={label}>Bathrooms</label>
                  <select id="bathrooms" name="bathrooms" defaultValue="" className={field}><option value="">—</option>{["1", "1.5", "2", "2.5", "3", "4+"].map((o) => <option key={o}>{o}</option>)}</select></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label htmlFor="date" className={label}>Preferred Date</label><input id="date" name="date" type="date" className={field} /></div>
                <div><label htmlFor="time" className={label}>Preferred Time</label>
                  <select id="time" name="time" defaultValue="" className={field}><option value="">Any</option><option>Morning</option><option>Midday</option><option>Afternoon</option></select></div>
              </div>
              <div className="sm:col-span-2"><label htmlFor="details" className={label}>Additional Details</label><textarea id="details" name="details" rows={4} maxLength={1000} placeholder="Pets, access instructions, areas to focus on…" className={field} {...a("details")} />{err("details")}</div>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-sm text-muted-foreground"><Lock className="h-4 w-4 text-leaf" />Your information is only used to respond to your request.</p>
                <button type="submit" disabled={busy} className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 font-semibold text-primary-foreground shadow-lift transition hover:bg-navy disabled:opacity-60">
                  {busy ? "Sending…" : "Request My Free Quote"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          )}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4" />Prefer to talk? <a href={business.phoneHref} className="font-semibold text-navy">{business.phone}</a></p>
      </div>
    </section>
  );
}
