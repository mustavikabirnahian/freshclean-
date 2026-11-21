
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import blogKitchen from "@/assets/blog-kitchen.jpg";
import blogPets from "@/assets/blog-pets.jpg";
import blogPests from "@/assets/blog-pests.jpg";
import blogDeep from "@/assets/blog-deep.jpg";
import blogEco from "@/assets/blog-eco.jpg";

// Demo articles — replace with real posts when the blog page is built.
// TODO: point links at /blog-and-tips once that page exists.
const journalPosts = [
  {
    img: blogKitchen,
    category: "Home Care",
    title: "7 Simple Ways to Keep Your Kitchen Spotless",
    text: "Easy tips to keep your kitchen clean and fresh every day.",
    readTime: "5 min read",
  },
  {
    img: blogPets,
    category: "Pets & Home",
    title: "How to Keep Your Home Clean with Pets",
    text: "Helpful tips to manage pet hair, odors, and keep your home fresh.",
    readTime: "6 min read",
  },
  {
    img: blogPests,
    category: "Pest Control Tips",
    title: "How to Prevent Ants and Other Household Pests",
    text: "Simple steps to keep ants, bugs, and other pests out of your home.",
    readTime: "4 min read",
  },
  {
    img: blogDeep,
    category: "Deep Cleaning",
    title: "How Often Should You Deep Clean Your Home?",
    text: "Find the right cleaning schedule for a healthier home.",
    readTime: "5 min read",
  },
  {
    img: blogEco,
    category: "Eco-Friendly Tips",
    title: "Natural Cleaning Hacks You Can Try at Home",
    text: "Simple and safe cleaning ideas using everyday items.",
    readTime: "4 min read",
  },
];

const arrowBtnClass =
  "grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-white/75 text-[#102441] shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-[#102441] hover:text-white disabled:pointer-events-none disabled:opacity-35";

function HouseLeaf() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className="h-16 w-16 text-emerald-bright sm:h-20 sm:w-20"
      aria-hidden
    >
      <path d="M6 30 32 9l26 21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 27v30h40V27" strokeLinejoin="round" />
      <path
        d="M40 41c5-6 12-7 12-7s-1 7-6 10c-3.5 2-6-3-6-3Z"
        strokeLinejoin="round"
      />
      <path d="M40 46c2-3 5-6 9-8" strokeLinecap="round" />
    </svg>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Journal() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [email, setEmail] = useState("");
  const [note, setNote] = useState<string | null>(null);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null;

    if (!el || !first) return;

    el.scrollBy({
      left: dir * (first.offsetWidth + 16),
      behavior: "smooth",
    });
  }, []);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setNote("Please enter a valid email address.");
      return;
    }

    // No subscription backend is wired up yet.
    setNote(
      "The newsletter isn't connected yet, so this email hasn't been saved. We'll wire that up soon."
    );
    setEmail("");
  };

  return (
    <section
      id="blog-and-tips"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="container-site relative">

        {/* Section heading */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-emerald/60" aria-hidden />
            Cleaning Tips &amp; Guides
            <span className="h-px w-7 bg-emerald/60" aria-hidden />
          </p>

          <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            FreshSpace{" "}
            <span className="text-[#067649]">Journal</span>
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Practical tips for a cleaner, healthier, and happier home.
          </p>
        </div>

        {/* Article carousel */}
        <div className="relative mt-12">

          {/* Desktop previous button */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous articles"
            className={`${arrowBtnClass} absolute top-1/2 left-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:grid`}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          {/* Desktop next button */}
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next articles"
            className={`${arrowBtnClass} absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 translate-x-1/2 lg:grid`}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div
            ref={trackRef}
            onScroll={update}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {journalPosts.map((p, i) => (
              <div
                key={p.title}
                className="reveal w-[86%] flex-none snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-4rem)/5)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <article
                  className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/90 bg-[linear-gradient(rgba(6,118,73,0.20),rgba(6,118,73,0.20)),#FDFDFD] p-3 shadow-[0_12px_35px_rgba(16,36,65,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald/40 hover:bg-white/90 hover:shadow-[0_20px_45px_rgba(16,36,65,0.15)] sm:p-4"
                >
                  {/* Category and reading time */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-emerald/20 bg-[#067649] px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm sm:text-xs">
                      {p.category}
                    </span>

                    <span className="shrink-0 rounded-full border border-white/90 bg-white/75 px-3 py-1.5 text-[10px] font-semibold text-[#102441] shadow-sm backdrop-blur-md sm:text-xs">
                      {p.readTime.replace(" read", "")}
                    </span>
                  </div>

                  {/* Article title */}
                  <h3 className="font-display text-[17px] font-semibold leading-snug text-[#102441] sm:text-lg">
                    {p.title}
                  </h3>

                  {/* Article description */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#52677F]">
                    {p.text}
                  </p>

                  {/* Article image */}
                  <div className="mt-5 overflow-hidden rounded-[1.1rem] border border-white/80 shadow-sm">
                    <img
                      src={p.img}
                      alt={p.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Card footer */}
                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#DCE5E8]/90 pt-4">
                    <div className="flex min-w-0 items-center gap-2">
                      <Clock
                        className="h-4 w-4 shrink-0 text-[#067649]"
                        aria-hidden
                      />
                      <span className="whitespace-nowrap text-xs text-[#344B68]">
                        {p.readTime}
                      </span>
                    </div>

                    <a
                      href="/blog-and-tips"
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#067649] transition-colors hover:text-[#102441]"
                      aria-label={`Read more: ${p.title}`}
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Mobile carousel buttons */}
          <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous articles"
              className={arrowBtnClass}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next articles"
              className={arrowBtnClass}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Explore button */}
        <div className="reveal mt-12 text-center">
          <a
            href="/blog-and-tips"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald/40 bg-[#067649] px-7 py-3.5 font-semibold text-white shadow-[0_8px_25px_rgba(6,118,73,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-dark hover:shadow-lift"
          >
            Explore All Cleaning Tips
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </div>

        {/* Glass newsletter banner */}
        <div className="reveal relative mt-16 overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-[#173B59]/95 via-[#102441]/95 to-[#075B50]/90 p-8 text-white shadow-[0_20px_50px_rgba(16,36,65,0.22)] backdrop-blur-2xl md:p-12">

          {/* Subtle glass highlights */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-emerald/10" aria-hidden />
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-emerald/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" aria-hidden />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">

            {/* Newsletter icon */}
            <div className="flex items-center gap-8">
              <span className="mx-auto grid place-items-center rounded-full border border-emerald-bright/50 bg-white/5 p-3 shadow-inner backdrop-blur-xl lg:mx-0">
                <HouseLeaf />
              </span>

              <span
                className="hidden h-24 w-px bg-emerald-bright/50 lg:block"
                aria-hidden
              />
            </div>

            {/* Newsletter text */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-medium text-white sm:text-3xl">
                Get Clean Home Tips in Your Inbox
              </h3>

              <p className="mt-2 max-w-md text-[15px] text-white/80 max-lg:mx-auto">
                Subscribe to our newsletter for simple cleaning tips, special
                offers, and more from FreshSpace.
              </p>
            </div>

            {/* Newsletter form */}
            <form
              onSubmit={subscribe}
              noValidate
              className="w-full max-w-sm max-lg:mx-auto"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (note) setNote(null);
                  }}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full border border-white/70 bg-white/95 px-5 py-3 text-sm text-[#102441] shadow-inner outline-none placeholder:text-[#52677F] focus-visible:outline-2 focus-visible:outline-emerald-bright"
                />

                <button
                  type="submit"
                  className="shrink-0 rounded-full border border-emerald-bright/60 bg-[#067649] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-dark hover:shadow-xl"
                >
                  Subscribe
                </button>
              </div>

              {note ? (
                <p role="status" className="mt-2.5 text-xs text-emerald-bright">
                  {note}
                </p>
              ) : (
                <p className="mt-2.5 text-xs text-white/65">
                  We respect your privacy.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
