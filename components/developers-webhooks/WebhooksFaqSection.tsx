'use client';

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is a webhook in Zoiko Billing?",
    answer:
      "An event-driven outbound notification: when an approved billing event occurs, an eligible endpoint receives a delivery. Which events exist is governed by the approved catalog.",
  },
  {
    id: "faq-2",
    question: "Which events are available?",
    answer:
      "Events are defined in the canonical event catalog, grouped by billing domain rather than listed alphabetically. Unverified events are never guessed.",
  },
  {
    id: "faq-3",
    question: "How do I verify a webhook?",
    answer:
      "Verification methods use security-approved signatures and key handling instructions. Refer to the canonical verification section.",
  },
  {
    id: "faq-4",
    question: "What happens if my endpoint fails?",
    answer:
      "Retry policies and failure classification dictate retry intervals, backoff behavior, and eventual dead-letter or notification status.",
  },
  {
    id: "faq-5",
    question: "Can I receive the same event more than once?",
    answer:
      "At-least-once delivery mechanisms mean duplicate deliveries can occur. Integrations must implement idempotent processing.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "faq-6",
    question: "Are webhook events ordered?",
    answer:
      "Ordering guarantees are explicitly stated or marked as unspecified. Integrations should not assume global ordering unless documented.",
  },
  {
    id: "faq-7",
    question: "Can I test or replay an event?",
    answer:
      "Test delivery and event replay controls require explicit confirmation and indicate environmental context to prevent accidental production side-effects.",
  },
  {
    id: "faq-8",
    question: "How do I troubleshoot delivery?",
    answer:
      "Use delivery attempt evidence, response status codes, and operational logs to inspect timelines and identify failing endpoints.",
  },
  {
    id: "faq-9",
    question: "How do webhook changes get communicated?",
    answer:
      "Material contract changes, additive fields, and deprecation schedules are governed through formal release notes and changelogs.",
  },
  {
    id: "faq-10",
    question: "Is webhook verification the same as API authentication?",
    answer:
      "No. API authentication proves caller identity to Zoiko Billing, whereas webhook verification proves that outbound requests originated from Zoiko Billing.",
  },
];

export default function WebhooksFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderFaqItem = (item: FaqItem) => {
    const isOpen = openId === item.id;
    return (
      <div key={item.id} className="py-4 border-b border-slate-100 last:border-0">
        <button
          type="button"
          onClick={() => toggleFaq(item.id)}
          className="flex w-full items-center justify-between gap-4 text-left transition"
        >
          <span className="text-sm sm:text-base font-bold text-slate-900">
            {item.question}
          </span>
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
              isOpen ? "bg-[#1D70F5] text-white" : "bg-slate-100 text-slate-500"
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
        {isOpen && (
          <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
            {item.answer}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="faq">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          WEBHOOKS FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers, including the honest unknowns.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Primary conversion here is a successful integration, not a demo request.
        </p>

        {/* 2-Column Accordion Grid */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Column */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
            {leftFaqs.map(renderFaqItem)}
          </div>

          {/* Right Column */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
            {rightFaqs.map(renderFaqItem)}
          </div>

        </div>

      </div>
    </section>
  );
}
