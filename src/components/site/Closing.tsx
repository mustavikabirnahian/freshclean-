import { ArrowRight, Phone, Clock, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { business, faqs } from "@/content/site";
import { Logo } from "./Header";

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl">Questions we hear a lot</h2>
          <p className="mt-4 text-muted-foreground">Don't see yours? Call <a href={business.phoneHref} className="font-semibold text-emerald">{business.phone}</a> — happy to help.</p>
        </div>
        <Accordion type="single" collapsible className="reveal rounded-2xl border bg-card px-6 shadow-soft">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`f${i}`} className="last:border-b-0">
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-site">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-emerald-soft px-6 py-14 text-center shadow-lift sm:px-12 md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-medium text-navy sm:text-5xl">Your Cleaner Space Is One Click Away.</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Tell us what you need cleaned and we'll help you find the right service.</p>
          <a href="#quote" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 font-semibold text-navy-foreground shadow-lift transition hover:bg-emerald">
            Get My Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-navy sm:flex-row sm:gap-8">
            <a href={business.phoneHref} className="flex items-center gap-2 font-medium"><Phone className="h-4 w-4 text-emerald" />{business.phone}</a>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald" />{business.hours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3ZM12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22ZM6.4 14a6 6 0 0 1 0-3.9V7.5H3.1a10 10 0 0 0 0 9.1L6.4 14ZM12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5L6.4 10C7.2 7.7 9.4 6 12 6Z" /></svg>;
}

export function Footer() {
  const col = "text-sm font-semibold uppercase tracking-wider text-navy-foreground";
  const link = "text-navy-foreground/70 transition hover:text-navy-foreground";
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm text-navy-foreground/70">{business.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[{ I: Facebook, l: "Facebook" }, { I: Instagram, l: "Instagram" }].map(({ I, l }) => (
              <a key={l} href="#" aria-label={l} className="grid h-10 w-10 place-items-center rounded-full bg-navy-soft transition hover:bg-emerald"><I className="h-4 w-4" /></a>
            ))}
            <a href="#" aria-label="Google Business Profile" className="grid h-10 w-10 place-items-center rounded-full bg-navy-soft transition hover:bg-emerald"><GoogleIcon /></a>
          </div>
        </div>
        <nav aria-label="Footer">
          <h3 className={col}>Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[["Home", "#top"], ["Services", "#services"], ["About", "#about"], ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Contact", "#quote"]].map(([l, h]) => <li key={l}><a href={h} className={link}>{l}</a></li>)}
          </ul>
        </nav>
        <div>
          <h3 className={col}>Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {["Residential Cleaning", "Deep Cleaning", "Move-Out Cleaning", "Commercial Cleaning"].map((s) => <li key={s}><a href="#services" className={link}>{s}</a></li>)}
          </ul>
        </div>
        <address className="not-italic">
          <h3 className={col}>Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            <li><a href={business.phoneHref} className={`flex items-center gap-2 ${link}`}><Phone className="h-4 w-4" />{business.phone}</a></li>
            <li><a href={`mailto:${business.email}`} className={`flex items-center gap-2 break-all ${link}`}><Mail className="h-4 w-4 shrink-0" />{business.email}</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />{business.serviceAreaLabel}</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" />{business.hours}</li>
          </ul>
        </address>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FreshSpace Cleaning Co. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className={link}>Privacy Policy</a><a href="#" className={link}>Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}
