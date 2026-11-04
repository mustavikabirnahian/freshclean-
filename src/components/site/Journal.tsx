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
  { img: blogKitchen, category: "Home Care", title: "7 Simple Ways to Keep Your Kitchen Spotless", text: "Easy tips to keep your kitchen clean and fresh every day.", readTime: "5 min read" },
  { img: blogPets, category: "Pets & Home", title: "How to Keep Your Home Clean with Pets", text: "Helpful tips to manage pet hair, odors, and keep your home fresh.", readTime: "6 min read" },
  { img: blogPests, category: "Pest Control Tips", title: "How to Prevent Ants and Other Household Pests", text: "Simple steps to keep ants, bugs, and other pests out of your home.", readTime: "4 min read" },
  { img: blogDeep, category: "Deep Cleaning", title: "How Often Should You Deep Clean Your Home?", text: "Find the right cleaning schedule for a healthier home.", readTime: "5 min read" },
  { img: blogEco, category: "Eco-Friendly Tips", title: "Natural Cleaning Hacks You Can Try at Home", text: "Simple and safe cleaning ideas using everyday items.", readTime: "4 min read" },
];

const arrowBtnClass =
  "grid h-12 w-12 place-items-center rounded-full border bg-card text-navy shadow-lift transition-colors duration-300 hover:bg-navy hover:text-navy-foreground disabled:pointer-events-none disabled:opacity-35";

/* Subtle leaf decoration for the section corners. */
function CornerLeaf({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className={`pointer-events-none absolute text-emerald opacity-[0.07] ${className}`} aria-hidden>
      <path d="M20 100C20 55 55 20 100 20c0 45-35 80-80 80Z" strokeLinejoin="round" />
      <path d="M35 85C55 65 75 45 95 25" strokeLinecap="round" />
    </svg>
  );
}

/* Outline house with a leaf — newsletter banner illustration. */
function HouseLeaf() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-16 w-16 text-emerald-bright sm:h-20 sm:w-20" aria-hidden>
      <path d="M6 30 32 9l26 21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 27v30h40V27" strokeLinejoin="round" />
      <path d="M40 41c5-6 12-7 12-7s-1 7-6 10c-3.5 2-6-3-6-3Z" strokeLinejoin="round" />
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
    el.scrollBy({ left: dir * (first.offsetWidth + 16), behavior: "smooth" });
  }, []);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setNote("Please enter a valid email address.");
      return;
    }
    // No subscription backend is wired up yet — do not claim the email was saved.
    setNote("The newsletter isn't connected yet, so this email hasn't been saved. We'll wire that up soon.");
    setEmail("");
  };

  return (
    <section id="blog-and-tips" className="relative overflow-hidden bg-background py-20 md:py-28">
      <CornerLeaf className="-left-10 -top-10 h-40 w-40 rotate-45 sm:h-56 sm:w-56" />
      <CornerLeaf className="-bottom-12 -right-12 h-40 w-40 -rotate-45 sm:h-56 sm:w-56" />
      <div className="container-site relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-emerald/60" aria-hidden /> Cleaning Tips &amp; Guides <span className="h-px w-7 bg-emerald/60" aria-hidden />
          </p>
          <h2 className="mt-3 text-3xl font-medium text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">FreshSpace Journal</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">Practical tips for a cleaner, healthier, and happier home.</p>
        </div>

        {/* Article carousel */}
        <div className="relative mt-12">
          <button type="button" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous articles" className={`${arrowBtnClass} absolute top-1/2 left-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:grid`}>
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button type="button" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next articles" className={`${arrowBtnClass} absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 translate-x-1/2 lg:grid`}>
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
          <div ref={trackRef} onScroll={update} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {journalPosts.map((p, i) => (
              <div
                key={p.title}
                className="reveal w-[86%] flex-none snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-4rem)/5)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-lift">
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <span className="absolute bottom-0 left-3 translate-y-1/2 rounded-full bg-emerald px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground shadow-soft">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 pt-7">
                    <h3 className="font-display text-[17px] font-medium leading-snug text-navy">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    <div className="mt-4 flex items-center gap-2 border-t pt-4">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-emerald" aria-hidden />
                      <span className="text-xs text-muted-foreground">{p.readTime}</span>
                      <span className="h-4 w-px bg-border" aria-hidden />
                      <a href="#blog-and-tips" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald transition-colors hover:text-navy" aria-label={`Read more: ${p.title}`}>
                        Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          {/* Mobile: arrows under the cards */}
          <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
            <button type="button" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous articles" className={arrowBtnClass}>
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button type="button" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next articles" className={arrowBtnClass}>
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div className="reveal mt-12 text-center">
          <a href="#blog-and-tips" className="group inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-px hover:bg-emerald-dark hover:shadow-lift">
            Explore All Cleaning Tips <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
        </div>

        {/* Newsletter banner */}
        <div className="reveal mt-16 rounded-3xl bg-navy p-8 text-navy-foreground shadow-float md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
            <div className="flex items-center gap-8">
              <span className="mx-auto grid place-items-center lg:mx-0"><HouseLeaf /></span>
              <span className="hidden h-24 w-px bg-emerald-bright/40 lg:block" aria-hidden />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-medium sm:text-3xl">Get Clean Home Tips in Your Inbox</h3>
              <p className="mt-2 max-w-md text-[15px] text-navy-foreground/75 max-lg:mx-auto">Subscribe to our newsletter for simple cleaning tips, special offers, and more from FreshSpace.</p>
            </div>
            <form onSubmit={subscribe} noValidate className="w-full max-w-sm max-lg:mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (note) setNote(null); }}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full bg-white/95 px-5 py-3 text-sm text-navy shadow-soft outline-none placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-emerald-bright"
                />
                <button type="submit" className="shrink-0 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-emerald-dark">
                  Subscribe
                </button>
              </div>
              {note
                ? <p role="status" className="mt-2.5 text-xs text-emerald-bright">{note}</p>
                : <p className="mt-2.5 text-xs text-navy-foreground/60">We respect your privacy.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
