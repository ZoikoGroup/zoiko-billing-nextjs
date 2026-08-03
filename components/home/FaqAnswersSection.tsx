"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is Zoiko Billing?",
    answer:
      "Zoiko Billing is a global billing and invoicing platform that helps businesses create invoices, manage charges, track payments, monitor outstanding balances, and maintain clear financial records.",
  },
  {
    id: "faq-2",
    question: "Who is Zoiko Billing for?",
    answer:
      "It is designed for businesses of all sizes - from solo operators and growing teams to multi-entity enterprises - needing scalable, accurate billing and recurring invoice automation.",
  },
  {
    id: "faq-3",
    question: "Can Zoiko Billing be used without Zoiko One?",
    answer:
      "Yes. Zoiko Billing operates as a standalone solution with complete functionality. When connected to Zoiko One, it seamlessly shares identity, permissions, audit trails, and unified reporting.",
  },
  {
    id: "faq-4",
    question: "Does Zoiko Billing process payments?",
    answer:
      "Zoiko Billing integrates with leading payment gateways to track and reconcile incoming payments against issued invoices and balances.",
  },
  {
    id: "faq-5",
    question: "Is Zoiko Billing available globally?",
    answer:
      "Yes, it supports multi-currency, regional tax modes, and jurisdiction configurations for international operations.",
  },
  {
    id: "faq-6",
    question: "How do I get started?",
    answer:
      "You can sign up directly for a standalone account or reach out to our team for guided onboarding and migration support.",
  },
];

interface FaqAnswersSectionProps {
  onViewAllFaqs?: () => void;
  onVisitHelpCenter?: () => void;
  onCopyLink?: (faqId: string) => void;
}

export function FaqAnswersSection({
  onViewAllFaqs,
  onVisitHelpCenter,
  onCopyLink,
}: FaqAnswersSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleCopyLink = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setCopiedId(id);
    onCopyLink?.(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-hidden bg-slate-50 px-4 py-16 font-['Segoe_UI',sans-serif] text-zinc-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-4 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Answers
            </span>
          </div>

          <h2 className="max-w-[640px] text-3xl font-medium leading-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif]">
            Questions about Zoiko Billing
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-slate-800 dark:border-slate-800 lg:col-span-7">
            {faqData.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div key={faq.id} className="flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-blue-600"
                  >
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold leading-7 text-zinc-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl border transition-colors ${
                        isOpen
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-zinc-200 text-stone-600 dark:border-slate-800 dark:text-slate-300"
                      }`}
                    >
                      <span className="font-['IBM_Plex_Mono',monospace] text-sm font-semibold leading-none">
                        {isOpen ? "-" : "+"}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="flex flex-col gap-3 pb-6 pr-6">
                      <p className="text-sm leading-6 text-stone-600 dark:text-slate-300">
                        {faq.answer}
                      </p>
                      <button
                        type="button"
                        onClick={(e) => handleCopyLink(e, faq.id)}
                        className="self-start cursor-pointer py-1 font-['IBM_Plex_Mono',monospace] text-[10px] uppercase tracking-wide text-blue-600 transition-colors hover:underline dark:text-blue-400"
                      >
                        {copiedId === faq.id ? "Link copied!" : "Copy link to answer"}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex flex-wrap items-center gap-3 border-t-0 pt-8">
              <button
                type="button"
                onClick={onViewAllFaqs}
                className="cursor-pointer rounded-md border border-blue-600 bg-blue-600 px-5 py-2.5 text-base font-normal text-white transition-colors hover:bg-blue-500"
              >
                View All FAQs
              </button>
              <button
                type="button"
                onClick={onVisitHelpCenter}
                className="cursor-pointer rounded-md border border-zinc-200 px-5 py-2.5 text-base font-normal text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Visit the Help Center
              </button>
            </div>
          </div>

          <div className="w-full lg:col-span-5">
            <div className="flex w-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2.5 border-b border-zinc-200 bg-zinc-50 px-4 py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
                <div className="h-3.5 w-3.5 shrink-0 rounded-sm border border-stone-500 dark:border-slate-400" />
                <span className="truncate text-sm font-normal leading-6 text-zinc-900 dark:text-slate-200">
                  How do I bill one customer from two legal entities?
                </span>
                <div className="h-4 w-[2px] shrink-0 animate-pulse bg-blue-600" />
              </div>

              <div className="flex flex-col gap-4 p-5">
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  Answer
                </span>

                <p className="text-sm leading-6 text-zinc-900 dark:text-slate-200">
                  Hold one customer with entity-scoped billing accounts. Each invoice carries the
                  identity, numbering, and tax mode of the entity that issued it, and group
                  reporting consolidates across both.
                </p>

                <div className="flex flex-col gap-2 border-t border-zinc-100 pt-4 dark:border-slate-800">
                  <a
                    href="#multi-entity-billing"
                    className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-xs font-normal text-stone-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    <span>{'->'}</span>
                    <span>Multi-entity billing</span>
                  </a>
                  <a
                    href="#jurisdiction-configuration"
                    className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-xs font-normal text-stone-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    <span>{'->'}</span>
                    <span>Jurisdiction configuration</span>
                  </a>
                  <a
                    href="#multi-entity-reporting"
                    className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-xs font-normal text-stone-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    <span>{'->'}</span>
                    <span>Multi-entity reporting</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
