"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

type Tab = "terms" | "privacy";

const TABS: { id: Tab; label: string }[] = [
  { id: "terms", label: "Terms" },
  { id: "privacy", label: "Privacy" },
];

export function LegalNotice({ initialTab }: { initialTab: Tab }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>(initialTab);

  function select(next: Tab) {
    setTab(next);
    router.replace(next === "privacy" ? "/legal?tab=privacy" : "/legal?tab=terms", {
      scroll: false,
    });
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = tab === "terms" ? "privacy" : "terms";
    select(next);
    document.getElementById(`legal-tab-${next}`)?.focus();
  }

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
          Terms and privacy
        </h1>
        <p className="font-ui text-sm leading-relaxed text-ink-muted sm:text-base">
          This notice accompanies Linaw AI. It is not a law-firm document,
          and Linaw is not a registered company.
        </p>
      </header>

      <div
        role="tablist"
        aria-label="Legal notices"
        className="font-ui flex gap-2"
        onKeyDown={onTabKeyDown}
      >
        {TABS.map((item) => {
          const selected = tab === item.id;
          return (
            <button
              key={item.id}
              id={`legal-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`legal-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className={`min-h-11 cursor-pointer rounded-full px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
                selected
                  ? "bg-action text-paper-raised"
                  : "border border-border bg-paper-raised text-ink hover:bg-paper-inset"
              }`}
              onClick={() => select(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {tab === "terms" ? <TermsPanel /> : <PrivacyPanel />}
    </main>
  );
}

function TermsPanel() {
  return (
    <article
      id="legal-panel-terms"
      role="tabpanel"
      aria-labelledby="legal-tab-terms"
      className="font-ui flex flex-col gap-6 text-sm leading-relaxed text-ink sm:text-base"
    >
      <Section n="1" title="What Linaw is">
        Linaw rewrites one notice, email, or lesson into the detail, wording,
        and delivery you chose, then runs Meaning Check against the source.
        It is not a lawyer, a doctor, a school, or a government office. A pass
        on Meaning Check is not a guarantee that every meaning survived.
      </Section>
      <Section n="2" title="Who runs it">
        The Linaw team runs this app at linawai.tech. We are the hackathon
        team that built it and submitted it to AppCon 2026. That contest
        ended on 25 September 2026. We kept the app. OTis Philippines Inc.
        organized AppCon. OTis does not run Linaw, does not host it, and does
        not receive the text you paste or select.
      </Section>
      <Section n="3" title="Using the app">
        An account is optional. If you add a name or email, it stays in this
        browser. On this device there is no password. When cloud sign-in is
        configured, the password stays with that account service. You can stop
        using Linaw at any time.
        Clearing this site’s data in the browser removes the local profile,
        preferences, and saved pieces.
      </Section>
      <Section n="4" title="Your messages">
        You keep the messages you paste, drop, or upload. Linaw may process
        that text only to build the clarified note and its Meaning Check. A
        share link puts the source in the URL on purpose. Anyone who receives
        that link can read the message, the same as if you had forwarded it.
        What is collected, stored, and shared is in the{" "}
        <Link href="/privacy">privacy policy</Link>.
      </Section>
      <Section n="5" title="Contest code">
        The AppCon rules we accepted as participants say the organizer may
        show the source code we submitted, for the contest and its sponsors.
        That is code only. It is not a right to run Linaw, and it is not a
        right to your notices, name, or email.
      </Section>
      <Section n="6" title="Model calls">
        With no model key, clarification stays on the offline sample adapter
        and is not sent to a model. If a key is set, the order is Gemini,
        then an OpenAI-compatible gateway, then the offline adapter. The
        reading screen says so before a model is used. The seeded failure
        example never uses a model. It exists so Meaning Check can show a
        warning.
      </Section>
      <Section n="7" title="Do not misuse the app">
        Do not try to pull API keys, flood POST /api/adapt, or paste someone
        else’s private message unless you have a right to use it. Do not
        treat Linaw as advice you can rely on for a legal, medical, school,
        or employment decision.
      </Section>
      <Section n="8" title="Philippine law">
        The Data Privacy Act of 2012 (Republic Act No. 10173) applies when a
        message contains personal information, such as a name, a schedule, or
        a school detail. Your rights to be informed, to access, to correct,
        and to delete that information are described in the{" "}
        <Link href="/privacy">privacy policy</Link>. Linaw does not publish a
        National Privacy Commission registration number. These terms do not
        override a right that Philippine law gives you.
      </Section>
      <Section n="9" title="No warranty">
        The app is free. It is provided as it is. Meaning Check can miss a
        change, and a model can be wrong. To the extent Philippine law
        allows, the team is not liable for loss that comes from relying on a
        clarified note. Nothing here limits liability that the law does not
        let us limit.
      </Section>
    </article>
  );
}

function PrivacyPanel() {
  return (
    <article
      id="legal-panel-privacy"
      role="tabpanel"
      aria-labelledby="legal-tab-privacy"
      className="font-ui flex flex-col gap-6 text-sm leading-relaxed text-ink sm:text-base"
    >
      <PrivacyPolicy />
    </article>
  );
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-reading text-lg font-semibold text-ink">
        {n}. {title}
      </h2>
      <p className="m-0">{children}</p>
    </section>
  );
}
