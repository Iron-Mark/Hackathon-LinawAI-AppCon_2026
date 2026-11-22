/**
 * @vitest-environment jsdom
 */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  ASK_AI_GROUP_LABEL,
  ASK_AI_PROMPT,
  askAiLinks,
  cleanCanonical,
} from "./ask-ai";
import { Footer } from "./Footer";

const PROVIDER_ORIGINS = [
  "https://chatgpt.com/",
  "https://claude.ai/new",
  "https://gemini.google.com/app",
  "https://www.perplexity.ai/search",
  "https://grok.com/",
];

describe("landing footer", () => {
  it("shows the group label and five provider hrefs", () => {
    document.body.innerHTML = renderToStaticMarkup(createElement(Footer));

    expect(document.getElementById("landing-ask-ai-label")?.textContent).toBe(
      ASK_AI_GROUP_LABEL,
    );
    expect(ASK_AI_GROUP_LABEL).toBe("Ask your AI");

    const group = document.getElementById("landing-ask-ai");
    const hrefs = [...(group?.querySelectorAll("a") ?? [])].map((anchor) =>
      anchor.getAttribute("href"),
    );

    expect(hrefs).toEqual(askAiLinks.map((link) => link.href));
    expect(
      hrefs.map((href) => {
        const url = new URL(href ?? "");
        return `${url.origin}${url.pathname}`;
      }),
    ).toEqual(PROVIDER_ORIGINS);

    for (const href of hrefs) {
      const url = new URL(href ?? "");
      expect([...url.searchParams.keys()]).toEqual(["q"]);
      expect(url.searchParams.get("q")).toBe(ASK_AI_PROMPT);
      expect(url.hash).toBe("");
    }

    expect(ASK_AI_PROMPT).toContain("Summarize the highlights from Linaw AI: https://linawai.tech");
    expect(ASK_AI_PROMPT).toContain("who must do what");
    expect(ASK_AI_PROMPT).toContain("Don't include a notice or document I have.");
    expect(ASK_AI_PROMPT).not.toContain("https://linawai.tech/about");
    expect(ASK_AI_PROMPT).not.toMatch(/[?#]/);
    expect(cleanCanonical("https://linawai.tech/?utm=1#faq")).toBe(
      "https://linawai.tech",
    );
    expect(cleanCanonical("https://linawai.tech/about?tab=1#team")).toBe(
      "https://linawai.tech/about",
    );
  });
});
