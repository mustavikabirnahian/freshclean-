// Shared quote-request validation and submission state.
// Used by both the hero quick-quote card and the full booking form.
import { useRef, useState } from "react";
import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().regex(/^[\d\s()+.-]{10,20}$/, "Please enter a valid phone number"),
  propertyType: z.string().min(1, "Choose a property type"),
  service: z.string().min(1, "Choose a service"),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  zip: z.string().trim().regex(/^\d{5}$/, "Enter a 5-digit ZIP code"),
  details: z.string().trim().max(1000, "Please keep it under 1000 characters").optional(),
});
export type QuoteErrors = Partial<Record<keyof z.infer<typeof quoteSchema>, string>>;

/**
 * Validates only the requested subset of fields, then "submits".
 * TODO: connect to a secure backend or email service to actually deliver
 * requests — right now nothing is stored or sent anywhere.
 */
export function useQuoteSubmit(fields: (keyof z.infer<typeof quoteSchema>)[]) {
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const started = useRef(Date.now());
  const restart = () => { setSent(false); started.current = Date.now(); };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Spam guards: hidden honeypot field and minimum fill time.
    if (fd.get("company_website") || Date.now() - started.current < 2500) return;
    const mask: Record<string, true> = {};
    fields.forEach((f) => (mask[f] = true));
    const res = quoteSchema.pick(mask as never).safeParse(Object.fromEntries(fd));
    if (!res.success) {
      const errs: QuoteErrors = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as keyof QuoteErrors] ??= i.message; });
      setErrors(errs);
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${String(res.error.issues[0]?.path[0] ?? "")}"]`);
      first?.focus();
      return;
    }
    setErrors({});
    setBusy(true);
    setTimeout(() => { setBusy(false); setSent(true); }, 700);
  }

  return { errors, sent, busy, onSubmit, restart };
}
