"use client";

import { useMemo, useState } from "react";

type SupportChatCopy = {
  launcherLabel: string;
  title: string;
  greeting: string;
  responseTime: string;
  primaryCta: string;
  secondaryCta: string;
  emailSubject: string;
  emailBody: string;
};

type SupportChatProps = {
  copy: SupportChatCopy;
};

const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "info@woortec.com";
const supportChatUrl = process.env.NEXT_PUBLIC_SUPPORT_CHAT_URL?.trim();

function buildMailto(copy: SupportChatCopy) {
  const params = new URLSearchParams({
    subject: copy.emailSubject,
    body: copy.emailBody,
  });

  return `mailto:${supportEmail}?${params.toString()}`;
}

export function SupportChat({ copy }: SupportChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contactHref = useMemo(
    () => supportChatUrl || buildMailto(copy),
    [copy],
  );

  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {isOpen && (
        <section
          aria-label={copy.title}
          className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-woortec-dark/20"
        >
          <div className="bg-gradient-to-br from-woortec-solid to-woortec-text px-5 py-4 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                  Woortec
                </p>
                <h2 className="mt-1 text-xl font-bold">{copy.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/15 px-3 py-1 text-lg leading-none text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Cerrar chat de soporte"
              >
                ×
              </button>
            </div>
          </div>

          <div className="space-y-4 px-5 py-5">
            <div className="rounded-2xl bg-neutral-200 px-4 py-3 text-sm leading-6 text-neutral-800">
              {copy.greeting}
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-woortec-text">
              {copy.responseTime}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={contactHref}
                target={supportChatUrl ? "_blank" : undefined}
                rel={supportChatUrl ? "noopener noreferrer" : undefined}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-woortec-dark px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-woortec-darker focus:outline-none focus:ring-2 focus:ring-woortec-text focus:ring-offset-2"
              >
                {copy.primaryCta}
              </a>
              <a
                href={`mailto:${supportEmail}`}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-neutral-400 px-5 py-3 text-center text-sm font-semibold text-woortec-dark transition hover:border-woortec-text hover:text-woortec-text focus:outline-none focus:ring-2 focus:ring-woortec-text focus:ring-offset-2"
              >
                {copy.secondaryCta}
              </a>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={copy.launcherLabel}
        className="group inline-flex items-center gap-3 rounded-full bg-woortec-dark px-5 py-4 text-sm font-bold text-white shadow-xl shadow-woortec-dark/25 transition hover:-translate-y-0.5 hover:bg-woortec-darker focus:outline-none focus:ring-2 focus:ring-woortec-text focus:ring-offset-2"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-woortec-solid text-woortec-dark">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
        {copy.launcherLabel}
      </button>
    </div>
  );
}
