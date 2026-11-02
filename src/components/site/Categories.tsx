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
    <section id="categories" className="bg-navy py-20 text-navy-foreground md:py-28">
      <div className="container-site">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Cleaning Services</p>
          <h2 className="mt-3 text-3xl font-medium sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            How Can FreshSpace Help You?
          </h2>
          <p className="mt-4 text-base text-navy-foreground/75 sm:text-lg">
            Explore our cleaning solutions, designed around your space and your needs.
          </p>
          <span aria-hidden className="accent-line mx-auto mt-7 block" />
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map(({ icon: Icon, title, sub, text }, i) => (
            <div key={title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <a
                href="#services"
                className="group flex h-full flex-col items-center rounded-2xl border border-navy-foreground/10 bg-card px-6 py-8 text-center shadow-soft transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1.5 hover:border-emerald/50 hover:bg-card hover:shadow-glow"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-soft text-emerald transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-medium leading-snug text-navy">{title}</h3>
                <p className="mt-1.5 text-[13px] font-semibold uppercase tracking-wide text-emerald">{sub}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald opacity-70 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                  Explore <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
