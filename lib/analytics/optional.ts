/**
 * Optional analytics. Nothing here loads unless the matching public env var is set.
 * If both Tag Manager and a GA4 id are set, only Tag Manager loads. Put GA4 inside
 * Tag Manager so the same page view is not counted twice.
 * Events never include the notice text.
 */

const GTM_ID = /^GTM-[A-Z0-9]+$/;
const GA_ID = /^G-[A-Z0-9]+$/;
const CF_TOKEN = /^[a-zA-Z0-9_-]{8,64}$/;

function clean(value: string | undefined, pattern: RegExp): string | null {
  const trimmed = value?.trim() ?? "";
  return pattern.test(trimmed) ? trimmed : null;
}

export function optionalAnalyticsIds() {
  const tagManagerId = clean(process.env.NEXT_PUBLIC_GTM_ID, GTM_ID);
  const measurementId = clean(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    GA_ID,
  );
  return {
    tagManagerId,
    measurementId: tagManagerId ? null : measurementId,
    cloudflareToken: clean(
      process.env.NEXT_PUBLIC_CF_BEACON_TOKEN,
      CF_TOKEN,
    ),
  };
}

/** Safe product event: detail and wording only, never the source text. */
export function trackProductEvent(
  name: string,
  props: Record<string, string>,
): void {
  if (typeof window === "undefined") return;
  const layer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  layer?.push({ event: name, ...props });
  const gtag = (
    window as Window & { gtag?: (...args: unknown[]) => void }
  ).gtag;
  gtag?.("event", name, props);
}
