"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqLeft: FaqItem[] = [
  {
    id: "q1",
    question: "What can I build with the Zoiko Billing API?",
    answer: (
      <>
        See the capability map and integration outcomes above. Not every product feature
        is exposed by API — each domain carries its own availability state.{" "}
        <Link href="#capability-map" className="font-semibold text-blue-600 underline hover:text-blue-700">
          View the capability map
        </Link>
      </>
    ),
  },
  {
    id: "q2",
    question: "Where is the full API reference?",
    answer:
      "Canonical endpoints, schemas, authentication methods, event definitions and limits belong in the corresponding developer reference documentation.",
  },
  {
    id: "q3",
    question: "How do I authenticate?",
    answer:
      "Authentication method, credential lifecycle, scopes, secret handling and environment setup are sourced from the canonical Authentication documentation.",
  },
  {
    id: "q4",
    question: "Does Zoiko Billing support webhooks?",
    answer:
      "Where event delivery is supported, integrations can respond to defined billing lifecycle changes via Webhooks specification.",
  },
  {
    id: "q5",
    question: "Is there a developer sandbox?",
    answer:
      "A developer sandbox is available for testing supported flows with nonproduction data where available.",
  },
];

const faqRight: FaqItem[] = [
  {
    id: "q6",
    question: "Are SDKs available?",
    answer:
      "Only languages and libraries that are actually published appear in our developer portal, with officially supported SDKs distinguished from community code.",
  },
  {
    id: "q7",
    question: "How are API changes handled?",
    answer:
      "We maintain version, deprecation, and change-log discipline so new capabilities are adopted without breaking existing integrations.",
  },
  {
    id: "q8",
    question: "How are permissions enforced?",
    answer:
      "Identity, role context, object and action, and workflow state are enforced as distinct concerns rather than single admin access keys.",
  },
  {
    id: "q9",
    question: "Can I integrate payments and reconciliation?",
    answer:
      "Integrations can surface payment evidence and allocation or reconciliation workflows while preserving original invoice source history.",
  },
  {
    id: "q10",
    question: "How do I get help with an enterprise integration?",
    answer:
      "Guided implementation support is offered when complexity or enterprise requirements justify it — after technical proof.",
  },
];

export default function DeveloperFaqSection() {
  const [openId, setOpenId] = useState<string | null>("q1");

  const toggleFaq = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="faq">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-6 bg-slate-300" />
          DEVELOPER FAQ
          <span className="h-px w-6 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          Direct answers, with the canonical source named.
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 max-w-xl text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
          Every answer below points at the authority rather than restating technical facts
          this page cannot verify.
        </p>

        {/* 2-Column Accordions Layout */}
        <div className="mt-12 grid w-full max-w-[1240px] grid-cols-1 gap-6 md:grid-cols-2 text-left items-start">
          
          {/* Left Column Accordions */}
          <div className="flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-sm divide-y divide-slate-100 overflow-hidden">
            {faqLeft.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="p-5 sm:p-6 transition hover:bg-slate-50/40">
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600 pt-1">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column Accordions */}
          <div className="flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-sm divide-y divide-slate-100 overflow-hidden">
            {faqRight.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="p-5 sm:p-6 transition hover:bg-slate-50/40">
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600 pt-1">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
