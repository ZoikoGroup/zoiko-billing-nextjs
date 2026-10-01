"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    id: "q1",
    question: "What can I build with the Zoiko Billing API?",
    answer: (
      <>
        See the capability map and integration outcomes above. Not every
        product feature is exposed by API — each domain carries its own
        availability state.{" "}
        <Link
          href="#capability-map"
          className="font-semibold text-[#1D70F5] underline"
        >
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
    <section
      id="faq"
      className="w-full border-t border-[#edf0f4] bg-[#f7f8fa]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">
          {/* Intro */}
          <div className="flex w-full max-w-[800px] flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#7890b2]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
                Developer FAQ
              </span>
              <span className="h-px w-5 bg-[#7890b2]" />
            </div>

            <h2 className="!m-0 mt-3 w-full text-[30px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#091127] sm:text-[34px] md:text-[36px] lg:text-[40px]">
              Direct answers, with the canonical source named.
            </h2>

            <p className="!m-0 mt-3 max-w-[720px] text-[15px] leading-7 text-[#5d7192] sm:text-base">
              Every answer below points at the authority rather than restating
              technical facts this page cannot verify.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-10 grid w-full grid-cols-1 gap-5 text-left md:grid-cols-2 md:gap-6">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)] sm:p-6"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-sm font-bold leading-6 text-[#091127] sm:text-base">
                      {item.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-base font-medium ${
                        isOpen
                          ? "bg-[#1D70F5] text-white"
                          : "bg-[#f1f4f8] text-[#5d7192]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 border-t border-[#edf0f4] pt-3 text-sm leading-6 text-[#5d7192]">
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