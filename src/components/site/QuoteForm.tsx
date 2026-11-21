
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { business } from "@/content/site";
import { useQuoteSubmit, quoteSchema, type QuoteErrors } from "./use-quote";
import bookingPhoto from "@/assets/booking-cleaner.jpg";

export { useQuoteSubmit, quoteSchema, type QuoteErrors } from "./use-quote";

const REQUIRED = [
  "name",
  "email",
  "phone",
  "zip",
  "propertyType",
  "service",
] as const satisfies (keyof z.infer<typeof quoteSchema>)[];

const navy = "#102C50";
const green = "#16845B";

const labelClass =
  "block text-[11px] font-bold uppercase tracking-[0.08em] text-[#526174]";

const fieldClass =
  "mt-2 block w-full min-w-0 rounded-lg border border-[#E5E5E2] bg-white px-3.5 py-3 text-[14px] text-[#102C50] outline-none transition placeholder:text-[#A1A1AA] focus:border-[#102C50] focus:ring-2 focus:ring-[#102C50]/10 aria-[invalid=true]:border-red-500";

export function QuoteForm({
  animate = true,
  discount = null,
}: {
  animate?: boolean;
  discount?: number | null;
}) {
  const q = useQuoteSubmit([...REQUIRED, "discount"]);
  const revealClass = animate ? "reveal" : "";

  const err = (k: keyof QuoteErrors) =>
    q.errors[k] ? (
      <p id={`${k}-err`} className="mt-1 text-xs text-red-600">
        {q.errors[k]}
      </p>
    ) : null;

  const a = (k: keyof QuoteErrors) => ({
    "aria-invalid": !!q.errors[k],
    "aria-describedby": q.errors[k] ? `${k}-err` : undefined,
  });

  const textHref = `sms:${business.phoneHref.replace(/^tel:/, "")}`;

  return (
    <section
      id="quote"
      className="overflow-hidden bg-[#FFF8F3] py-16 md:py-24"
    >
      <div className="container-site mx-auto max-w-[1100px]">

        {/* PAGE HEADING */}
        <div className={`${revealClass} mx-auto max-w-2xl px-4 text-center`}>
          <span className="inline-flex rounded-full bg-[#F1EDE7] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#102C50]">
            Book Cleaning
          </span>

          <h2 className="mx-auto mt-5 max-w-[650px] text-[42px] font-extrabold uppercase leading-[0.99] tracking-[-0.055em] text-[#102C50] sm:text-[54px] md:text-[64px]">
            LET'S GET YOUR
            <br />
            PLACE CLEANED
          </h2>

          <p className="mx-auto mt-6 max-w-[540px] text-[14px] leading-relaxed text-[#475569] sm:text-[15px]">
            Book a trusted, background-checked cleaner who actually shows up,
            cares, and leaves your home feeling fresh.
          </p>
        </div>

        {/* BOOKING AREA */}
        <div className="mx-auto mt-12 grid max-w-[920px] items-stretch gap-3 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-3">

          {/* LEFT — FORM */}
          <div
            className={`${revealClass} rounded-[20px] border border-[#E9E5DD] bg-[#F1EEE8] p-5 sm:p-7`}
          >
            {q.sent ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center px-4 py-12 text-center" role="status">
                <CheckCircle2
                  className="h-14 w-14"
                  style={{ color: green }}
                  strokeWidth={1.5}
                />

                <h3 className="mt-5 text-2xl font-bold text-[#102C50]">
                  Your quote request is ready!
                </h3>

                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#526174]">
                  This is a demo submission. Your details have not been sent
                  or stored by a backend. To discuss your cleaning needs,
                  please contact us directly by phone or text.{" "}
                  <a
                    className="font-bold text-[#102C50] underline underline-offset-4"
                    href={business.phoneHref}
                  >
                    Call {business.phone}
                  </a>
                  .
                </p>

                <button
                  onClick={q.restart}
                  className="mt-7 rounded-full bg-[#102C50] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#183F6B]"
                >
                  Prepare another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[21px] font-bold tracking-tight text-[#102C50] sm:text-[23px]">
                  Book online in 60 seconds
                </h3>

                {/* SCRATCH & WIN DISCOUNT */}
                {discount !== null && (
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-[#16845B]/20 bg-white px-4 py-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#16845B]">
                        Scratch & Win Reward
                      </p>
                      <p className="mt-1 text-[13px] text-[#526174]">
                        Your earned discount is included in this quote request.
                      </p>
                    </div>

                    <span className="shrink-0 text-2xl font-extrabold text-[#16845B]">
                      {discount}% OFF
                    </span>
                  </div>
                )}

                <p className="mt-2 text-[12px] text-[#77766F]">
                  For people who prefer instant booking.
                </p>

                <form
                  onSubmit={q.onSubmit}
                  noValidate
                  className="mt-6 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2"
                >
                  {/* HONEYPOT */}
                  <div className="absolute -left-[9999px]" aria-hidden>
                    <label>
                      Website
                      <input
                        name="company_website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  {/* EARNED DISCOUNT */}
                  {discount !== null && (
                    <input
                      type="hidden"
                      name="discount"
                      value={String(discount)}
                    />
                  )}

                  {/* NAME */}
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className={fieldClass}
                      {...a("name")}
                    />
                    {err("name")}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={fieldClass}
                      {...a("email")}
                    />
                    {err("email")}
                  </div>

                  {/* PHONE */}
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Your phone number"
                      className={fieldClass}
                      {...a("phone")}
                    />
                    {err("phone")}
                  </div>

                  {/* ZIP */}
                  <div>
                    <label htmlFor="zip" className={labelClass}>
                      ZIP Code *
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      inputMode="numeric"
                      maxLength={5}
                      autoComplete="postal-code"
                      placeholder="ZIP code"
                      className={fieldClass}
                      {...a("zip")}
                    />
                    {err("zip")}
                  </div>

                  {/* PROPERTY TYPE */}
                  <div>
                    <label htmlFor="propertyType" className={labelClass}>
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      defaultValue=""
                      className={fieldClass}
                      {...a("propertyType")}
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option>House</option>
                      <option>Apartment / Condo</option>
                      <option>Townhome</option>
                      <option>Office</option>
                      <option>Vacation Rental</option>
                      <option>Commercial Space</option>
                    </select>
                    {err("propertyType")}
                  </div>

                  {/* CLEANING SERVICE */}
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Cleaning Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className={fieldClass}
                      {...a("service")}
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option>Residential Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-In / Move-Out</option>
                      <option>Office Cleaning</option>
                      <option>Airbnb / Vacation Rental</option>
                      <option>Commercial Cleaning</option>
                    </select>
                    {err("service")}
                  </div>

                  {/* BEDROOMS */}
                  <div>
                    <label htmlFor="bedrooms" className={labelClass}>
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="">—</option>
                      {["Studio", "1", "2", "3", "4", "5+"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* BATHROOMS */}
                  <div>
                    <label htmlFor="bathrooms" className={labelClass}>
                      Bathrooms
                    </label>
                    <select
                      id="bathrooms"
                      name="bathrooms"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="">—</option>
                      {["1", "1.5", "2", "2.5", "3", "4+"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* PREFERRED DATE */}
                  <div>
                    <label htmlFor="date" className={labelClass}>
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className={fieldClass}
                    />
                  </div>

                  {/* PREFERRED TIME */}
                  <div>
                    <label htmlFor="time" className={labelClass}>
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="">Any</option>
                      <option>Morning</option>
                      <option>Midday</option>
                      <option>Afternoon</option>
                    </select>
                  </div>

                  {/* ADDITIONAL DETAILS */}
                  <div className="sm:col-span-2">
                    <label htmlFor="details" className={labelClass}>
                      Additional Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={3}
                      maxLength={1000}
                      placeholder="Pets, access instructions, areas to focus on..."
                      className={fieldClass}
                      {...a("details")}
                    />
                    {err("details")}
                  </div>

                  {/* SUBMIT */}
                  <div className="flex flex-col gap-4 pt-1 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[230px] text-[11px] leading-relaxed text-[#555C65]">
                      Demo only: your quote details are prepared locally
                      and are not sent to a backend.
                    </p>

                    <button
                      type="submit"
                      disabled={q.busy}
                      className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#16845B] px-6 py-3.5 text-[13px] font-bold text-white shadow-sm transition duration-300 hover:bg-[#102C50] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {q.busy ? "Preparing..." : "PREPARE QUOTE REQUEST"}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* RIGHT — CLEANER PHOTO */}
          <div className={`${revealClass} flex flex-col`}>
            <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-[20px] border border-[#E5E1D8] bg-[#E8E7E1] sm:min-h-[560px] lg:min-h-0">
              <img
                src={bookingPhoto}
                alt="A FreshSpace cleaner wiping a kitchen counter in a client's home, caddy of supplies beside her"
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* PHOTO CAPTION */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-[13px] font-bold text-[#102C50]">
                  FreshSpace Cleaning Team
                </p>
                <p className="mt-1 text-[11px] text-[#64748B]">
                  Bringing a fresh feeling to your home.
                </p>
              </div>
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-[#526174]">
              Our team arrives with all supplies and equipment — you don't
              need to provide a thing.
            </p>
          </div>
        </div>

        {/* CONTACT OPTIONS */}
        <div className={`${revealClass} mx-auto mt-8 max-w-[500px] px-4`}>
          <p className="mb-4 text-center text-[14px] font-medium text-[#102C50]">
            Prefer to talk?
          </p>

          <div className="grid grid-cols-2 gap-3">

            {/* CALL CARD */}
            <a
              href={business.phoneHref}
              className="group flex min-h-[88px] items-center gap-3 rounded-xl border border-[#E9E5DD] bg-[#F1EEE8] p-3 transition hover:-translate-y-1 hover:border-[#102C50]/20 hover:shadow-md sm:p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#102C50] shadow-sm transition group-hover:bg-[#102C50] group-hover:text-white">
                <Phone className="h-5 w-5" />
              </span>

              <span className="min-w-0">
                <span className="block text-[17px] font-bold text-[#102C50]">
                  Call
                </span>
                <span className="mt-1 block truncate text-[11px] text-[#526174]">
                  {business.phone}
                </span>
              </span>
            </a>

            {/* TEXT CARD */}
            <a
              href={textHref}
              className="group flex min-h-[88px] items-center gap-3 rounded-xl border border-[#E9E5DD] bg-[#F1EEE8] p-3 transition hover:-translate-y-1 hover:border-[#102C50]/20 hover:shadow-md sm:p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#102C50] shadow-sm transition group-hover:bg-[#102C50] group-hover:text-white">
                <MessageCircle className="h-5 w-5" />
              </span>

              <span className="min-w-0">
                <span className="block text-[17px] font-bold text-[#102C50]">
                  Text
                </span>
                <span className="mt-1 block truncate text-[11px] text-[#526174]">
                  {business.phone}
                </span>
              </span>
            </a>

          </div>
        </div>

        {/* EXISTING BUSINESS HOURS */}
        <p className="mt-6 text-center text-[12px] text-[#64748B]">
          {business.hours}
        </p>
      </div>
    </section>
  );
}
