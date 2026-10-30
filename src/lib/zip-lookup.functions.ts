import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { serviceAreaConfig } from "./service-area";

export type ZipLookupResult = {
  status: "covered" | "outside" | "unknown" | "error";
  city?: string;
  state?: string;
};

const zipSchema = z.string().regex(/^\d{5}$/, "Enter a valid 5-digit ZIP code.");

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, " ").trim();

// Live ZIP lookup (public Zippopotam database, no API key) + the verified
// service-area config decides coverage. Never claims coverage on its own.
export const lookupZip = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => zipSchema.parse(data))
  .handler(async ({ data: zip }): Promise<ZipLookupResult> => {
    // A verified allowlist entry always wins, without an external call.
    if (serviceAreaConfig.supportedZipCodes.includes(zip)) {
      return { status: "covered" };
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    try {
      const res = await fetch(
        `https://api.zippopotam.us/${serviceAreaConfig.country.toLowerCase()}/${zip}`,
        { signal: controller.signal, headers: { Accept: "application/json" } },
      );
      if (res.status === 404) return { status: "unknown" };
      if (!res.ok) throw new Error(`ZIP lookup failed with status ${res.status}`);
      const json = (await res.json()) as {
        places?: Array<{ "place name"?: string; "state abbreviation"?: string }>;
      };
      const place = json.places?.[0];
      const city = place?.["place name"] ?? "";
      const state = place?.["state abbreviation"] ?? "";
      if (!city) return { status: "unknown" };
      const covered =
        serviceAreaConfig.supportedCities.some((c) => normalize(c) === normalize(city)) ||
        serviceAreaConfig.supportedZipCodes.includes(zip);
      return covered ? { status: "covered", city, state } : { status: "outside", city, state };
    } catch (err) {
      // Log provider details server-side; the visitor only sees a neutral message.
      console.error("[zip-lookup] lookup failed for", zip, err);
      return { status: "error" };
    } finally {
      clearTimeout(timer);
    }
  });
