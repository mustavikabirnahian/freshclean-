
import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Home,
  MessageCircle,
  Play,
  ShieldCheck,
  Youtube,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Closing";
import { useReveal } from "@/hooks/use-reveal";

import residentialHero from "@/assets/residential-cleaning-hero.jpg";
import blogKitchen from "@/assets/blog-kitchen.jpg";
import blogPets from "@/assets/blog-pets.jpg";
import blogPests from "@/assets/blog-pests.jpg";
import blogDeep from "@/assets/blog-deep.jpg";
import blogEco from "@/assets/blog-eco.jpg";

const title = "FreshSpace Journal | Cleaning Tips & Guides";
const description =
  "Explore practical home cleaning tips, expert advice, and helpful videos from FreshSpace Cleaning Co.";

const videoGuides = [
  {
    image: blogKitchen,
    title: "How to Clean Your Kitchen Properly",
    category: "Kitchen Cleaning",
    duration: "Kitchen guide",
    search: "how to clean a kitchen properly cleaning tips",
  },
  {
    image: blogPets,
    title: "How to Keep Your Home Clean with Pets",
    category: "Pets & Home",
    duration: "Pet-friendly cleaning",
    search: "how to clean house with pets remove pet hair",
  },
  {
    image: blogPests,
    title: "How to Prevent Ants and Household Pests",
    category: "Healthy Home",
    duration: "Home protection",
    search: "how to prevent ants in the house home cleaning",
  },
  {
    image: blogDeep,
    title: "Deep Cleaning Your Home Step by Step",
    category: "Deep Cleaning",
    duration: "Deep cleaning guide",
    search: "full house deep cleaning step by step",
  },
  {
    image: blogEco,
    title: "Natural Cleaning Tips for Your Home",
    category: "Eco-Friendly",
    duration: "Natural cleaning",
    search: "natural eco friendly home cleaning tips",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

function JournalPage() {
  useReveal();

  const [email, setEmail] = useState("");
  const [note, setNote] = useState<string | null>(null);

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setNote("Please enter a valid email address.");
      return;
    }

    setNote(
      "The newsletter is not connected yet, so your email has not been saved."
    );
    setEmail("");
  };

  return (
    <>
      <a
        href="#journal-main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-navy-foreground"
      >
        Skip to content
      </a>

      <Header />

      <main id="journal-main" className="bg-background">
        {/* Wide journal hero image */}
        <section className="relative h-[220px] overflow-hidden sm:h-[280px] lg:h-[340px]">
          <img
            src={residentialHero}
            alt="A clean and welcoming home interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/15 to-transparent" />
        </section>

        {/* Journal introduction */}
        <section className="relative px-5 pb-10 pt-0 text-center">
          <div className="relative z-10 mx-auto -mt-8 grid h-16 w-16 place-items-center rounded-full border-4 border-background bg-emerald text-white shadow-soft sm:-mt-9 sm:h-[76px] sm:w-[76px]">
            <Home className="h-8 w-8 sm:h-9 sm:w-9" />
          </div>

          <div className="mx-auto mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              FreshSpace Cleaning Guides
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" />
              Helpful Home Advice
            </span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl md:text-5xl">
            FreshSpace Journal
          </h1>

          <p className="mx-auto mt-2 max-w-2xl font-display text-base italic text-muted-foreground sm:text-xl">
            Practical tips for a cleaner, healthier, and happier home.
          </p>

          <span className="mx-auto mt-5 block h-0.5 w-24 bg-emerald" />
        </section>

        {/* Featured cleaning tips */}
        <section className="container-site pb-12 pt-2 sm:pb-16">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.35fr] lg:gap-12">
            <div className="reveal">
              <p className="eyebrow">FreshSpace Cleaning Advice</p>

              <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl">
                8 Cleaning Tips You’ll Love
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Keeping your home clean doesn't have to be hard. Discover
                simple and effective cleaning tips that save time, reduce
                stress, and create a healthier living space for you and your
                family.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Quick daily cleaning habits",
                  "Natural cleaning solutions",
                  "Tips for a healthier home",
                  "Expert advice from FreshSpace",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-navy sm:text-base"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={blogKitchen}
                  alt="Cleaning supplies arranged in a bright kitchen"
                  className="aspect-[16/8] w-full object-cover"
                />
              </div>

              <div className="mt-2 grid grid-cols-3 gap-2">
                {[residentialHero, blogDeep, blogEco].map((image, index) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-lg"
                  >
                    <img
                      src={image}
                      alt={[
                        "Clean and welcoming living room",
                        "Home deep cleaning",
                        "Natural cleaning supplies",
                      ][index]}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal mt-8 text-center">
            <a
              href="#recommended-videos"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-dark hover:shadow-lift"
            >
              Explore All Cleaning Tips
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Cleaning video banner */}
        <section className="container-site pb-10 sm:pb-14">
          <a
            href="https://www.youtube.com/results?search_query=professional+home+cleaning+tips"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch home cleaning videos on YouTube"
            className="group reveal relative block overflow-hidden rounded-xl"
          >
            <img
              src={blogDeep}
              alt="Home cleaning in progress"
              className="h-[190px] w-full object-cover sm:h-[250px] lg:h-[290px]"
            />

            <div className="absolute inset-0 bg-emerald/65 transition-colors duration-300 group-hover:bg-emerald/55" />

            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-white text-white transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                <Play className="ml-1 h-7 w-7 fill-white sm:h-8 sm:w-8" />
              </span>
            </span>

            <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 text-sm font-semibold text-white sm:bottom-6 sm:left-7">
              <Youtube className="h-5 w-5" />
              Watch Cleaning Tips
            </span>
          </a>
        </section>

        {/* About FreshSpace */}
        <section className="container-site pb-10 text-center sm:pb-14">
          <div className="reveal mx-auto max-w-3xl">
            <blockquote className="font-display text-lg italic leading-relaxed text-navy sm:text-xl">
              "A clean home is a happy home — and we're here to help you achieve it."
            </blockquote>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              At FreshSpace, we believe in the power of a clean space. Our
              Journal shares practical advice, helpful ideas, and easy
              solutions to help keep your home fresh and your life easier.
            </p>

            <h2 className="mt-6 font-display text-xl font-semibold text-navy sm:text-2xl">
              About FreshSpace
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              FreshSpace Cleaning Co. provides residential and commercial
              cleaning services in Austin, TX, and nearby communities. We
              believe every space deserves thoughtful care and attention.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {["Cleaning Tips", "Home Care", "Healthy Home", "Eco-Friendly"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Recommended YouTube videos */}
        <section
          id="recommended-videos"
          className="bg-secondary/30 py-12 sm:py-16"
        >
          <div className="container-site">
            <div className="reveal mb-8 flex items-center justify-center gap-3 text-center">
              <span className="h-px flex-1 bg-emerald/50" />
              <h2 className="font-display text-lg font-semibold text-emerald sm:text-xl">
                RECOMMENDED CLEANING VIDEOS
              </h2>
              <span className="h-px flex-1 bg-emerald/50" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {videoGuides.map((video, index) => (
                <a
                  key={video.title}
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.search)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="reveal group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-lift"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={video.image}
                      alt={video.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute inset-0 grid place-items-center bg-navy/10 transition-colors group-hover:bg-navy/25">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald text-white shadow-soft">
                        <Play className="ml-0.5 h-4 w-4 fill-white" />
                      </span>
                    </span>

                    <span className="absolute bottom-2 left-2 rounded bg-navy/85 px-2 py-1 text-[10px] font-semibold text-white">
                      <Youtube className="mr-1 inline h-3 w-3" />
                      YouTube
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald">
                      {video.category}
                    </p>

                    <h3 className="mt-2 font-display text-sm font-semibold leading-snug text-navy sm:text-base">
                      {video.title}
                    </h3>

                    <div className="mt-auto flex items-center gap-1.5 pt-3 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3 text-emerald" />
                      {video.duration}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="container-site py-12 sm:py-16">
          <div className="reveal rounded-3xl bg-navy p-7 text-navy-foreground shadow-float sm:p-10 lg:p-12">
            <div className="grid items-center gap-7 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
              <div className="flex items-center justify-center gap-6">
                <HouseLeaf />
                <span className="hidden h-20 w-px bg-emerald-bright/40 lg:block" />
              </div>

              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Get Clean Home Tips in Your Inbox
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-foreground/75">
                  Subscribe to our newsletter for expert cleaning tips,
                  seasonal advice, and special offers.
                </p>
              </div>

              <form
                onSubmit={subscribe}
                noValidate
                className="w-full max-w-sm lg:min-w-[310px]"
              >
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (note) setNote(null);
                    }}
                    placeholder="Your email address"
                    aria-label="Email address"
                    className="min-w-0 flex-1 rounded-full bg-white px-4 py-3 text-sm text-navy outline-none placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-emerald-bright"
                  />

                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-emerald px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-emerald-dark sm:px-5"
                  >
                    Subscribe <ArrowRight className="ml-1 inline h-4 w-4" />
                  </button>
                </div>

                {note ? (
                  <p role="status" className="mt-2 text-xs text-emerald-bright">
                    {note}
                  </p>
                ) : (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-navy-foreground/60">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    We respect your privacy.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const Route = createFileRoute("/blog-and-tips")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalPage,
});
