
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { business } from "@/content/site";

const nav = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Blog & Tips", href: "/blog-and-tips" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#quote" },
];

// Supports Facebook, Instagram and X profile links.
const socialLinks = business.socialLinks as unknown as
  | {
      facebook?: string;
      instagram?: string;
      x?: string;
    }
  | undefined;

const socialIcons = [
  {
    key: "facebook",
    label: "Facebook",
    Icon: Facebook,
    url: socialLinks?.facebook,
  },
  {
    key: "instagram",
    label: "Instagram",
    Icon: Instagram,
    url: socialLinks?.instagram,
  },
  {
    key: "x",
    label: "X",
    Icon: XBrand,
    url: socialLinks?.x,
  },
] as const;

function XBrand({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L5.5 22H2.3l7.3-8.4L1.8 2h6.4l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/#top"
      className="flex items-center gap-2.5"
      aria-label={`${business.name} home`}
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-lg ${
          light
            ? "bg-navy-foreground text-navy"
            : "bg-navy text-navy-foreground"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            d="M3 11.5 12 4l9 7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M5.5 10v9.5h13V10" strokeLinejoin="round" />
          <path
            d="M15.5 6.5c1.2-.2 2-1 2.2-2.2.2 1.2 1 2 2.2 2.2-1.2.2-2 1-2.2 2.2-.2-1.2-1-2-2.2-2.2Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </span>

      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-semibold ${
            light ? "text-navy-foreground" : "text-navy"
          }`}
        >
          FreshSpace
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${
            light ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          Cleaning Co.
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  // Keep section navigation on the current page.
  const getNavHref = (item: (typeof nav)[number]) => {
    if (
      (pathname === "/residential-cleaning" ||
        pathname === "/deep-cleaning" ||
        pathname === "/move-in-move-out" ||
        pathname === "/commercial-office-cleaning") &&
      ["How It Works", "Reviews", "FAQ", "Contact"].includes(item.label)
    ) {
      return item.href.slice(1);
    }

    return item.href;
  };

  return (
    <>
      {/* Top information bar */}
      <div className="hidden bg-navy text-navy-foreground/85 md:block">
        <div className="container-site flex h-10 items-center justify-between gap-4 text-xs">
          {/* Contact details */}
          <div className="flex items-center gap-5">
            <a
              href={business.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-navy-foreground"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {business.phone}
            </a>

            <a
              href={`mailto:${business.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-navy-foreground lg:flex"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {business.email}
            </a>
          </div>

          {/* Social media icons */}
          <ul
            className="flex items-center gap-3"
            aria-label="Social media"
          >
            {socialIcons.map(({ key, label, Icon, url }) => (
              <li key={key}>
                {url ? (
                  <a
                    href={url || "#"}
                    target={url ? "_blank" : undefined}
                    rel={url ? "noopener noreferrer" : undefined}
                    aria-label={`${business.name} on ${label}`}
                    title={label}
                    className="group grid h-9 w-9 place-items-center rounded-full text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-125 hover:bg-emerald hover:text-white hover:shadow-lg active:scale-95"
                  >
                    <Icon
                      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span
                    aria-label={`${label} profile link not configured`}
                    title={`Add your ${label} profile link in src/content/site.ts`}
                    className="grid h-7 w-7 cursor-default place-items-center rounded-full text-navy-foreground/85"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Service area */}
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Serving {business.serviceAreaLabel}
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/90 shadow-soft backdrop-blur-md"
            : "border-transparent bg-background"
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-4">
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-foreground/80">
              {nav
                .filter((n) =>
                  pathname === "/blog-and-tips"
                    ? !["About", "How It Works", "Reviews", "FAQ"].includes(n.label)
                    : true
                )
                .map((n) =>
                  n.label === "Services" ? (
                    <li key={n.href} className="group relative">
                      <a
                        href={getNavHref(n)}
                        className="flex items-center gap-1 py-5 transition-colors hover:text-emerald"
                        aria-haspopup="true"
                      >
                        Services
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                      </a>

                      {/* Services dropdown */}
                      <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-2 rounded-xl border border-border bg-background p-2 opacity-0 shadow-float transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <a
                          href="/residential-cleaning"
                          className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-emerald"
                        >
                          Residential Cleaning
                          <ArrowRight className="h-4 w-4" />
                        </a>

                        <a
                          href="/deep-cleaning"
                          className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-emerald"
                        >
                          Deep & Detailed Cleaning
                          <ArrowRight className="h-4 w-4" />
                        </a>

                        <a
                          href="/move-in-move-out"
                          className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-emerald"
                        >
                          Move-In, Move-Out & Rental Cleaning
                          <ArrowRight className="h-4 w-4" />
                        </a>

                        <a
                          href="/commercial-office-cleaning"
                          className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-emerald"
                        >
                          Commercial & Office Cleaning
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </li>
                  ) : (
                    <li key={n.href}>
                      <a
                        href={getNavHref(n)}
                        className="transition-colors hover:text-emerald"
                      >
                        {n.label}
                      </a>
                    </li>
                  )
                )}
            </ul>
          </nav>

          {/* Quote button and mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="#quote"
              className="group inline-flex items-center gap-1.5 rounded-full bg-emerald px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-px hover:bg-emerald-dark hover:shadow-lift sm:px-5"
            >
              <span className="sm:hidden">Get Quote</span>
              <span className="hidden sm:inline">Get a Free Quote</span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full text-navy hover:bg-muted lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] overflow-hidden lg:hidden ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-background p-6 shadow-float transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />

            <button
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full hover:bg-muted"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-8 flex flex-col">
            {nav
              .filter((n) =>
                pathname === "/blog-and-tips"
                  ? !["About", "How It Works", "Reviews", "FAQ"].includes(n.label)
                  : true
              )
              .map((n) =>
                n.label === "Services" ? (
                  <li key={n.href} className="border-b">
                    <a
                      onClick={() => setOpen(false)}
                      href={getNavHref(n)}
                      className="block py-4 text-lg font-medium text-navy"
                    >
                      Services
                    </a>

                    <a
                      onClick={() => setOpen(false)}
                      href="/residential-cleaning"
                      className="flex items-center justify-between pb-4 pl-4 text-sm font-medium text-emerald"
                    >
                      Residential Cleaning
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      onClick={() => setOpen(false)}
                      href="/deep-cleaning"
                      className="flex items-center justify-between pb-4 pl-4 text-sm font-medium text-emerald"
                    >
                      Deep & Detailed Cleaning
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      onClick={() => setOpen(false)}
                      href="/move-in-move-out"
                      className="flex items-center justify-between pb-4 pl-4 text-sm font-medium text-emerald"
                    >
                      Move-In, Move-Out & Rental Cleaning
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      onClick={() => setOpen(false)}
                      href="/commercial-office-cleaning"
                      className="flex items-center justify-between pb-4 pl-4 text-sm font-medium text-emerald"
                    >
                      Commercial & Office Cleaning
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                ) : (
                  <li key={n.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={getNavHref(n)}
                      className="block border-b py-4 text-lg font-medium text-navy"
                    >
                      {n.label}
                    </a>
                  </li>
                )
              )}
          </ul>

          <div className="mt-auto space-y-3 pt-6">
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald py-3.5 font-semibold text-primary-foreground"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={business.phoneHref}
              className="block rounded-full border py-3.5 text-center font-semibold text-navy"
            >
              Call {business.phone}
            </a>

            <a
              href={`mailto:${business.email}`}
              className="block text-center text-xs text-muted-foreground hover:text-navy"
            >
              {business.email}
            </a>

            {/* Mobile social icons */}
            <ul
              className="flex items-center justify-center gap-3 pt-2"
              aria-label="Social media"
            >
              {socialIcons.map(({ key, label, Icon, url }) => (
                <li key={key}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${label} page`}
                      className="grid h-10 w-10 place-items-center rounded-full border text-navy/70 transition hover:border-emerald hover:text-emerald"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      title={`Add your ${label} profile link in src/content/site.ts`}
                      className="grid h-10 w-10 place-items-center rounded-full border text-navy/70"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
