"use client";

import Link from "next/link";
import { ASK_AI_GROUP_LABEL, askAiLinks } from "./ask-ai";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="font-ui border-t border-border px-5 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
          <Link
            href="#top"
            className="font-reading inline-flex shrink-0 items-center text-lg font-semibold tracking-tight text-ink focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Linaw AI
            <span className="sr-only"> (back to top)</span>
          </Link>
          <span
            className="hidden text-ink-subtle sm:inline"
            aria-hidden="true"
          >
            ·
          </span>
          <p className="m-0 text-sm text-ink-muted">
            Clarify the format. Preserve the meaning.
          </p>
        </div>

        <div className="flex min-w-0 max-w-full flex-col gap-2">
          <p id="landing-ask-ai-label" className="m-0 text-sm text-ink-muted">
            {ASK_AI_GROUP_LABEL}
          </p>
          <TooltipProvider>
            <div
              id="landing-ask-ai"
              role="group"
              aria-labelledby="landing-ask-ai-label"
              className="flex max-w-full flex-wrap gap-2"
            >
              {askAiLinks.map((link) => (
                <Tooltip key={link.id}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.accessibleName}
                      className="inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-md transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:opacity-70 motion-reduce:transition-none"
                    >
                      <img
                        src={link.lightSrc}
                        alt=""
                        width={32}
                        height={32}
                        draggable={false}
                        aria-hidden="true"
                        className="size-8 object-contain dark:hidden"
                      />
                      <img
                        src={link.darkSrc}
                        alt=""
                        width={32}
                        height={32}
                        draggable={false}
                        aria-hidden="true"
                        className="hidden size-8 object-contain dark:block"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={8} collisionPadding={8}>
                    Ask {link.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>

        <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
          <span>{`© ${year} Linaw AI. “Linaw” means clarity in Filipino.`}</span>
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center underline-offset-2 hover:text-ink hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            About
          </Link>
          <Link
            href="/legal?tab=terms"
            className="inline-flex min-h-11 items-center underline-offset-2 hover:text-ink hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="inline-flex min-h-11 items-center underline-offset-2 hover:text-ink hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}
