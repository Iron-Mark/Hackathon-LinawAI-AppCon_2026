const DISCLOSURE_KEY = "linaw.disclosureAccepted.v1";

/** True only after the user agrees in the panel, before any notice is sent. */
export async function hasDisclosureConsent(): Promise<boolean> {
  try {
    if (typeof chrome === "undefined" || !chrome.storage?.local) return false;
    const stored = await chrome.storage.local.get(DISCLOSURE_KEY);
    return stored[DISCLOSURE_KEY] === true;
  } catch {
    return false;
  }
}

export async function acceptDisclosure(): Promise<void> {
  if (typeof chrome === "undefined" || !chrome.storage?.local) return;
  await chrome.storage.local.set({ [DISCLOSURE_KEY]: true });
}
