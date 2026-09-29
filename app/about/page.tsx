import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM = [
  { name: "Mark Angelo D. Siazon", role: "Team leader", href: "https://github.com/Iron-Mark" },
  { name: "Alexander Oro", href: "https://github.com/bhimlex13" },
  { name: "Franchezca Natividad Banayad", href: "https://github.com/chezca-v" },
  { name: "John Kurt M. Tapada", href: "https://github.com/choookieee-dev" },
  { name: "Salvador Vincent Javier", href: "https://github.com/slvdrvncntjvr" },
] as const;

export const metadata: Metadata = {
  title: "About",
  description:
    "Linaw means clarity in Filipino. It rewrites a notice, then checks that the date, the condition, and who must act are still there.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col gap-8 px-5 py-10 text-left sm:px-8 sm:py-14">
      <header className="flex flex-col gap-3">
        <Link
          href="/"
          className="font-ui inline-flex min-h-11 w-fit items-center text-sm font-medium text-ink-muted hover:text-ink focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          Linaw AI
        </Link>
        <h1 className="font-reading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          About
        </h1>
      </header>

      <div className="font-ui flex flex-col gap-8 text-base leading-relaxed text-ink">
        <p className="m-0">
          Linaw means clarity in Filipino. It rewrites a notice, then checks
          that the date, the condition, and who must act are still there.
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="font-reading m-0 text-xl font-semibold tracking-tight text-ink">
            Who runs it
          </h2>
          <p className="m-0">
            Lumière, team code TEAM-011, built it, submitted it to AppCon
            2026, and still runs it at linawai.tech. The contest ended on 25 September 2026. OTis
            organized the contest. OTis does not run Linaw and does not
            receive notices.
          </p>
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {TEAM.map((person) => (
              <li key={person.href}>
                <a
                  href={person.href}
                  className="inline-flex min-h-11 items-center gap-2 text-ink underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  {person.name}
                  {"role" in person ? (
                    <span className="text-sm font-normal text-ink-muted">
                      {person.role}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-reading m-0 text-xl font-semibold tracking-tight text-ink">
            A line it catches
          </h2>
          <figure className="m-0 overflow-hidden rounded-lg border border-border">
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-border p-4 sm:border-r sm:border-b-0 sm:p-5">
                <p className="m-0 text-sm font-medium text-ink-muted">Source</p>
                <p className="m-0 mt-2 leading-relaxed text-ink">
                  You can drop the class, only with your adviser’s written
                  approval.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-4 sm:p-5">
                <div>
                  <p className="m-0 text-sm font-medium text-ink-muted">
                    Short line
                  </p>
                  <p className="m-0 mt-2 leading-relaxed text-ink">
                    You can drop the class.
                  </p>
                </div>
                <p className="m-0 border-t border-border pt-4 text-sm leading-relaxed text-ink">
                  <span className="font-semibold">Warning.</span> The written
                  approval was dropped.
                </p>
              </div>
            </div>
          </figure>
        </section>

        <div className="flex flex-col items-start gap-1">
          <Button
            asChild
            className="h-11 min-h-11 cursor-pointer gap-2 rounded-lg bg-action px-6 text-base font-semibold text-paper-raised shadow-none transition-colors duration-150 hover:bg-action-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-reduce:transition-none"
          >
            <Link href="/read">
              Open Linaw
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
          </Button>
          <p className="m-0 flex flex-wrap items-center gap-x-4">
            <Link
              href="/legal"
              className="inline-flex min-h-11 items-center text-sm text-ink-muted underline-offset-2 hover:text-ink hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center text-sm text-ink-muted underline-offset-2 hover:text-ink hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
