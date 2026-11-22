/** Published landing canonical. Search and hash never enter the prompt. */
const LINAW_LANDING_CANONICAL = "https://linawai.tech";

export function cleanCanonical(href: string): string {
  const url = new URL(href);
  url.search = "";
  url.hash = "";
  const path = url.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return url.origin;
  return `${url.origin}${path}`;
}

const landingCanonical = cleanCanonical(LINAW_LANDING_CANONICAL);

export const ASK_AI_GROUP_LABEL = "Ask your AI";

export const ASK_AI_PROMPT = `As someone who received a notice, I want to understand how Linaw can help me make it easier to read without losing the dates or who must do what. I still need the meaning to stay the same so I know what is being asked of me and when it is due. A shorter notice only helps if I can still tell what to do and by when. Summarize the highlights from Linaw AI: ${landingCanonical} Don't include a notice or document I have.`;

const PROVIDERS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    base: "https://chatgpt.com/",
    lightSrc: "/images/platforms/ask-chatgpt.png",
    darkSrc: "/images/platforms/ask-chatgpt-dark.png",
  },
  {
    id: "claude",
    name: "Claude",
    base: "https://claude.ai/new",
    lightSrc: "/images/platforms/ask-claude.png",
    darkSrc: "/images/platforms/ask-claude-dark.png",
  },
  {
    id: "gemini",
    name: "Gemini",
    base: "https://gemini.google.com/app",
    lightSrc: "/images/platforms/ask-google.png",
    darkSrc: "/images/platforms/ask-google-dark.png",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    base: "https://www.perplexity.ai/search",
    lightSrc: "/images/platforms/ask-perplexity.png",
    darkSrc: "/images/platforms/ask-perplexity-dark.png",
  },
  {
    id: "grok",
    name: "Grok",
    base: "https://grok.com/",
    lightSrc: "/images/platforms/ask-grok.png",
    darkSrc: "/images/platforms/ask-grok-dark.png",
  },
] as const;

export function askAiAccessibleName(provider: string): string {
  return `${provider}, Linaw, opens in a new tab`;
}

export function askAiHref(base: string, prompt: string): string {
  const url = new URL(base);
  const params = new URLSearchParams();
  params.set("q", prompt);
  url.search = params.toString();
  url.hash = "";
  return url.toString();
}

export const askAiLinks = PROVIDERS.map((provider) => ({
  ...provider,
  href: askAiHref(provider.base, ASK_AI_PROMPT),
  accessibleName: askAiAccessibleName(provider.name),
}));
