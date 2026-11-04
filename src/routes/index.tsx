import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Categories } from "@/components/site/Categories";
import { Hero, TrustBar, About, Services, BeforeAfter, HowItWorks, ServiceArea, Testimonials, Gallery, WhyUs } from "@/components/site/Sections";
import { Journal } from "@/components/site/Journal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FAQ, FinalCTA, Footer } from "@/components/site/Closing";
import { business, faqs } from "@/content/site";
import { useReveal } from "@/hooks/use-reveal";

const title = "FreshSpace Cleaning Co. | House & Office Cleaning in Austin, TX";
const description = "Reliable residential and commercial cleaning in Austin and nearby areas. Insured, background-checked team and flexible scheduling. Get a free quote.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: business.name,
  telephone: business.phone,
  email: business.email,
  areaServed: business.areas,
  address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.region, addressCountry: "US" },
  openingHours: "Mo-Sa 08:00-18:00",
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-navy-foreground">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Categories />
        <About />
        <Services />
        <BeforeAfter />
        <HowItWorks />
        <ServiceArea />
        <Testimonials />
        <Gallery />
        <Journal />
        <WhyUs />
        <QuoteForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
