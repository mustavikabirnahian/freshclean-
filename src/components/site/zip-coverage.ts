import { business } from "@/content/site";

// ZIP-level coverage data lives here so a real API or database can replace it later.
// Configure verified ZIP codes (as strings) before launch. While this is null, every
// valid ZIP returns "unverified" — the card explains that availability needs to be
// confirmed by phone. No fake lookups are ever shown.
export const serviceZips: readonly string[] | null = null;

export type ZipCheck = {
  status: "covered" | "outside" | "unverified";
  message: string;
};

export const ZIP_PATTERN = /^\d{5}$/;

export function checkZipCoverage(zip: string): ZipCheck {
  if (serviceZips === null) {
    return {
      status: "unverified",
      message: `Thanks — ${zip} is noted. We haven't set up online ZIP checks yet, so please call us and we'll confirm availability for your address right away.`,
    };
  }
  if (serviceZips.includes(zip)) {
    return {
      status: "covered",
      message: `Good news — we serve ${zip}. Request your free quote below or call us to book.`,
    };
  }
  return {
    status: "outside",
    message: `We don't list ${zip} in our service area yet. Call us — we may still be able to help.`,
  };
}

export function coverageHint(): string {
  return `Our team covers ${business.heroAreas.join(", ")} and nearby communities.`;
}
