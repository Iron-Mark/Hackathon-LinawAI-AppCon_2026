import Script from "next/script";
import { optionalAnalyticsIds } from "@/lib/analytics/optional";

export function OptionalAnalytics() {
  const { tagManagerId, measurementId, cloudflareToken } =
    optionalAnalyticsIds();
  if (!tagManagerId && !measurementId && !cloudflareToken) return null;

  return (
    <>
      {tagManagerId ? (
        <>
          <Script id="linaw-gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${tagManagerId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${tagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
      {measurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="linaw-ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { send_page_view: true });`}
          </Script>
        </>
      ) : null}
      {cloudflareToken ? (
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={`{"token":"${cloudflareToken}"}`}
        />
      ) : null}
    </>
  );
}
