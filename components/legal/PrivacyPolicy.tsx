import type { ReactNode } from "react";

export function PrivacyPolicy() {
  return (
    <div className="font-ui flex flex-col gap-6 text-sm leading-relaxed text-ink sm:text-base">
      <p>
        This is the privacy policy for the Linaw AI website and the Linaw AI
        Chrome extension. It says what we collect, how we use it, how we
        handle it, where it is stored, and who it is shared with.
      </p>

      <Section title="Collection">
        When you choose Clarify, or when you have turned Auto-Clarify on, we
        collect the text you selected or the readable article text on the
        current page, and the address of that page, so the side panel can
        show a clarified note for that page. Auto-Clarify is off until you
        opt in. The extension does not run a clarification in the background.
        On the website, if you type an optional name or email, we collect
        those too. If you press Save, we collect that saved piece. We also
        collect the reading choices you set: detail, wording, delivery, and
        listen speed. Vercel Web Analytics counts a page view, and a Clarify
        click records only the detail and wording choices. Google Analytics 4,
        Google Tag Manager, and Cloudflare Web Analytics are not loaded unless
        their public IDs are set. When one is set, that service receives the
        page address and the same detail and wording choices. It does not
        receive the pasted message, the clarified note, or an email. We do
        not collect your password, health information, payment information, or
        location. We do not keep a list of pages you have visited, and we do
        not record clicks, mouse movement, scrolling, or keystrokes. We do
        not sign in to your email or chat accounts. Text you choose to clarify
        may be copied from a notice, a page, or a message already on screen.
      </Section>

      <Section title="Use">
        Selected text and the current page address are used only to rewrite
        the notice into the reading format you chose and to check that dates,
        conditions, and who-does-what are still there. Preferences are used
        to apply that format. A saved piece is used so you can open it again
        on this device. An optional name or email is used only as the local
        label you typed. Page-view counts are used to see which screens are
        opened. We do not use any of this for advertising. We do not sell it.
        We do not use it to judge creditworthiness or for lending.
      </Section>

      <Section title="Handling">
        Text sent off this device goes over HTTPS. The Linaw server does not
        write source text to disk and does not put it in logs. A successful
        model answer may be kept in server memory, up to 50 notes, so the
        same source, detail, and wording are not sent again. That memory is
        gone when the server process stops. The semantic check is not stored
        after the response. If you create a share link, the source is placed
        in the URL on purpose, and anyone you send that link to can read it.
      </Section>

      <Section title="Storage">
        On the website, preferences stay in this browser under
        linaw.preferences.v1. Listen speed stays under linaw.listen.rate. An
        optional name and email stay under linaw.auth.v1. Saved pieces stay
        under linaw.pieces.v1, up to 20,000 characters each, and only after
        you press Save. The extension keeps the same preference fields, plus
        reading display choices, disabled sites, and the text of the current
        clarification, in chrome.storage.local on your device. Nothing in
        that storage is a Linaw account, and Linaw does not keep a password.
        You can delete a saved piece in My Content, sign out to remove the
        optional name and email, clear this site’s data in the browser, or
        uninstall the extension. That is how you access, correct, and delete
        what is stored.
      </Section>

      <Section title="Sharing">
        We share the text you ask Linaw to clarify, and only for that
        clarification, with these parties:
      </Section>
      <ul className="m-0 flex list-disc flex-col gap-2 pl-5">
        <li>
          The Linaw service at https://linawai.tech, which receives the text
          over HTTPS when you request a clarification. If that address does
          not answer, the extension tries
          https://appcon-lumiere-linawai.vercel.app, then a copy running on
          your own computer.
        </li>
        <li>
          Google (Gemini), when a model key is set on the server. With no
          key, the text is not sent to a model.
        </li>
        <li>
          The configured OpenAI-compatible gateway, only if Gemini does not
          return a note.
        </li>
        <li>
          The Linaw language-check service at
          https://linaw-nli.onrender.com/predict, which receives a source
          sentence and a claim for the semantic check.
        </li>
        <li>
          Hugging Face, only to download the Linaw voice model the first time
          you use Listen. The words of the notice are spoken on your device
          after that download. They are not sent to Hugging Face. The voice
          library is loaded from cdnjs and jsDelivr. If that voice cannot
          start, Listen uses the browser’s own speech engine, and some of
          those voices send the spoken line to the browser vendor.
        </li>
        <li>
          Google (Analytics or Tag Manager) and Cloudflare (Web Analytics),
          only when the matching public ID is set. They receive the page
          address and, for a Clarify click, the detail and wording choices.
          They do not receive the pasted message. If Tag Manager is set, the
          GA4 tag belongs inside Tag Manager so the visit is not counted twice.
        </li>
        <li>
          Vercel, for the page-view count described under Collection. Vercel
          does not receive the pasted message.
        </li>
      </ul>
      <p className="m-0">
        No other party receives the text. We do not sell it or transfer it
        for advertising, credit, or lending. OTis Philippines Inc. organized
        AppCon 2026. OTis does not run Linaw and does not receive the
        messages you paste.
      </p>

      <Section title="Limited use">
        Linaw uses this data only to clarify the text you chose and to keep
        that feature working. We transfer it only to the parties named under
        Sharing, and only when that transfer is needed to clarify the text,
        to keep the service secure, or to comply with the law. We do not use
        it to show ads. People on the Linaw team do not read your notices.
        The exceptions are a message you ask us to look at, an abuse
        investigation, a legal duty, or data combined so it no longer
        identifies you.
      </Section>

      <Section title="Retention">
        A model answer kept in server memory lasts only until that server
        process stops, and at most 50 notes. Saved pieces, preferences, and
        an optional name or email stay on your device until you delete them,
        clear site data, or uninstall the extension. The voice model, once
        downloaded, stays in the extension’s storage on your device until you
        remove the extension.
      </Section>

      <Section title="Philippine law">
        The Data Privacy Act of 2012 (Republic Act No. 10173) applies when a
        message contains personal information, such as a name, a schedule, or
        a school detail. That law gives you the right to be informed, to
        access your personal information, to correct it, and to erase or
        block it, and to object to processing when the law allows an
        objection. The Collection, Storage, and Contact sections are how
        Linaw meets those rights for this app. Linaw does not publish a
        National Privacy Commission registration number. You may also
        complain to the National Privacy Commission. Nothing in this policy
        removes a right the Act gives you.
      </Section>

      <Section title="AppCon">
        We built Linaw as a team in AppCon 2026 and submitted it to that
        contest. The contest ended on 25 September 2026. We still run the
        app. OTis Philippines Inc. organized AppCon. OTis does not run Linaw
        and does not receive what you type or select. The contest rules let
        OTis show the source code we submitted, for the contest and its
        sponsors. That is code only. It does not include your notices, name,
        or email.
      </Section>

      <Section title="Contact">
        Linaw is not directed at children. To ask for access, correction, or
        deletion, or to report a leak, open an issue on
        https://github.com/Iron-Mark/appcon2026-lumiere-linawai/issues. Do
        not paste a real personal notice into a public issue.
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-reading text-lg font-semibold text-ink">{title}</h2>
      <p className="m-0">{children}</p>
    </section>
  );
}
