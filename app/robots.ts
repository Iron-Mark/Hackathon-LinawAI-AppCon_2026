import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/read",
        "/content",
        "/settings",
        "/account",
        "/onboarding",
        "/todo",
        "/home",
      ],
    },
    sitemap: "https://linawai.tech/sitemap.xml",
  };
}
