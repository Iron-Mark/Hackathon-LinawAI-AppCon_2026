import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What the Linaw AI website and Chrome extension collect, how that data is used, handled, stored, and who it is shared with.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col gap-8 px-5 py-10 text-left sm:px-8 sm:py-14">
      <header className="flex flex-col gap-3">
        <Link
          href="/"
          className="font-ui w-fit text-sm font-medium text-ink-muted hover:text-ink focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          Linaw AI
        </Link>
        <h1 className="font-reading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Privacy policy
        </h1>
        <p className="font-ui text-sm leading-relaxed text-ink-muted sm:text-base">
          Linaw AI, the website and the Chrome extension.
        </p>
      </header>
      <PrivacyPolicy />
    </main>
  );
}
