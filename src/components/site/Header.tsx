import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { business } from "@/content/site";

const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#quote" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${business.name} home`}>
      <span className={`grid h-9 w-9 place-items-center rounded-lg ${light ? "bg-navy-foreground text-navy" : "bg-navy text-navy-foreground"}`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10v9.5h13V10" strokeLinejoin="round" />
          <path d="M15.5 6.5c1.2-.2 2-1 2.2-2.2.2 1.2 1 2 2.2 2.2-1.2.2-2 1-2.2 2.2-.2-1.2-1-2-2.2-2.2Z" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${light ? "text-navy-foreground" : "text-navy"}`}>FreshSpace</span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>Cleaning Co.</span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="hidden bg-navy text-navy-foreground/85 md:block">
        <div className="container-site flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={business.phoneHref} className="flex items-center gap-1.5 hover:text-navy-foreground"><Phone className="h-3.5 w-3.5" />{business.phone}</a>
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />Serving {business.serviceAreaLabel}</span>
          </div>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{business.hours}</span>
        </div>
      </div>
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border bg-background/90 shadow-soft backdrop-blur-md" : "border-transparent bg-background"}`}>
        <div className="container-site flex h-[72px] items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-foreground/80">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="transition-colors hover:text-emerald">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#quote" className="rounded-full bg-emerald px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-navy sm:px-5">
              <span className="sm:hidden">Get Quote</span><span className="hidden sm:inline">Get a Free Quote</span>
            </a>
            <button onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full text-navy hover:bg-muted lg:hidden" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-nav">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu" className={`fixed inset-0 z-[60] lg:hidden ${open ? "visible" : "invisible"}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-background p-6 shadow-float transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between">
            <Logo />
            <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-muted" aria-label="Close menu"><X className="h-5 w-5" /></button>
          </div>
          <ul className="mt-8 flex flex-col">
            {nav.map((n) => (
              <li key={n.href}><a onClick={() => setOpen(false)} href={n.href} className="block border-b py-4 text-lg font-medium text-navy">{n.label}</a></li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 pt-6">
            <a href="#quote" onClick={() => setOpen(false)} className="block rounded-full bg-emerald py-3.5 text-center font-semibold text-primary-foreground">Get a Free Quote</a>
            <a href={business.phoneHref} className="block rounded-full border py-3.5 text-center font-semibold text-navy">Call {business.phone}</a>
            <p className="text-center text-xs text-muted-foreground">{business.hours}</p>
          </div>
        </div>
      </div>
    </>
  );
}
