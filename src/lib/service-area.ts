// Centralized service-area configuration — edit this one file to change coverage.
// supportedCities are matched against the city returned by the live ZIP lookup;
// supportedZipCodes is a verified allowlist that overrides the lookup.
// Do not add ZIP codes or cities that the business has not confirmed serving.
export const serviceAreaConfig = {
  country: "US",
  state: "TX",
  supportedCities: ["Austin", "Round Rock", "Cedar Park", "Pflugerville"],
  supportedZipCodes: [] as readonly string[],
};

export const ZIP_PATTERN = /^\d{5}$/;
