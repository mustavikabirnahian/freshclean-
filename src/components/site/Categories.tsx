
import { ArrowRight, Building2, House, Sparkles, Truck } from "lucide-react";

/* The four main service categories, shown directly under the hero. */
const categories = [
  {
    icon: House,
    title: "Residential Cleaning",
    sub: "Everyday Home Care",
    text: "Professional cleaning services to keep your home fresh, comfortable, and consistently clean.",
  },
  {
    icon: Sparkles,
    title: "Deep & Detailed Cleaning",
    sub: "A Deeper Level of Clean",
    text: "Intensive cleaning for neglected areas, built-up dirt, and hard-to-reach spaces.",
  },
  {
    icon: Truck,
    title: "Move-In, Move-Out & Rental Cleaning",
    sub: "Property Transition Cleaning",
    text: "Thorough cleaning to prepare homes, apartments, and rental properties for their next occupants.",
  },
  {
    icon: Building2,
    title: "Commercial & Office Cleaning",
    sub: "Business Space Cleaning",
    text: "Reliable cleaning solutions for offices, retail spaces, and commercial environments.",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#102441] py-20 text-white md:py-28"
    >
      {/* Subtle background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-[#067649]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#067649]/15 blur-3xl"
      />

      <div className="container-site relative z-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[#00C982]">
            Our Cleaning Services
          </p>

          <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            How Can FreshSpace Help You?
          </h2>

          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Explore our cleaning solutions, designed around your space and your needs.
          </p>

          <span
            aria-hidden
            className="mx-auto mt-7 block h-[2px] w-24 bg-[#067649]"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map(({ icon: Icon, title, sub, text }, i) => (
            <div
              key={title}
              className="reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <a
                href={
                  title === "Residential Cleaning"
                    ? "/residential-cleaning"
                    : title === "Deep & Detailed Cleaning"
                      ? "/deep-cleaning"
                      : title === "Move-In, Move-Out & Rental Cleaning"
                        ? "/move-in-move-out"
                        : "/commercial-office-cleaning"
                }
                className="group relative flex h-full flex-col items-center overflow-hidden rounded-[24px] border border-[#B9D6EF]/50 bg-[linear-gradient(145deg,rgba(255,255,255,0.20),rgba(255,255,255,0.08))] px-6 py-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#D8F3E0]/80 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.26),rgba(255,255,255,0.12))] hover:shadow-[0_20px_45px_rgba(0,0,0,0.30)]"
              >
                {/* Glass highlight */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-12 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-white/20"
                />

                {/* Icon */}
                <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/40 bg-[#D8F3E0] text-[#067649] shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    className="h-7 w-7"
                    strokeWidth={1.7}
                    aria-hidden
                  />
                </span>

                {/* Service title */}
                <h3 className="relative mt-5 text-lg font-semibold leading-snug text-white">
                  {title}
                </h3>

                {/* Service subtitle */}
                <p className="relative mt-2 text-[13px] font-bold uppercase tracking-wide text-[#00C982]">
                  {sub}
                </p>

                {/* Service description */}
                <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-white/85">
                  {text}
                </p>

                {/* Explore button */}
                <span className="relative mt-6 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-[#0F2340] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_5px_15px_rgba(0,0,0,0.20)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#067649] group-hover:shadow-[0_8px_22px_rgba(0,0,0,0.25)]">
                  Explore Service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
