"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    id: "q1",
    question: "If we reach phase 7, are we compliant?",
    answer:
      "No. Reaching the end is not evidence the middle was satisfied — unresolved stop conditions carry forward and remain visible. Even approved orientation is explicitly not a compliance certification.",
  },
  {
    id: "q2",
    question: "Can we continue past an unresolved hold?",
    answer:
      "Yes. Educational exploration is never blocked. However, open stop conditions from earlier phases persist downstream, ensuring no premature or unauthorized compliance claims are presented.",
  },
  {
    id: "q3",
    question: "Who can clear a review-needed state?",
    answer:
      "Only designated Tax, Legal, or Compliance reviewers hold authority to clear review-needed or conflict states. Product and billing owners cannot unilaterally resolve specialist holds.",
  },
  {
    id: "q4",
    question: "Does the guide tell us what tax applies?",
    answer:
      "No. The guide defines governance sequence, verification steps, and ownership boundaries. Substantive tax advice and rate determinations must come from qualified tax professionals or integrated tax engines.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "q5",
    question: "What happens when sources disagree?",
    answer:
      "When sources conflict, the state transitions to Conflicted. The conflict is explicitly highlighted in the audit trail without automated resolution until manual review is completed.",
  },
  {
    id: "q6",
    question: "Why is monitoring a separate phase?",
    answer:
      "Tax and compliance rules evolve continuously on legislative timetables. Phase 7 isolates ongoing monitoring, legislative triggers, and cadence-based recertification from initial setup.",
  },
  {
    id: "q7",
    question: "Do you monitor sources for us?",
    answer:
      "Zoiko Billing tracks software capability updates and integration points, but customers maintain governance over their specific jurisdictional filings, legal entity rules, and compliance interpretations.",
  },
  {
    id: "q8",
    question: "Is our progress stored?",
    answer:
      "Yes. Phase states, audit events, exception logs, and reviewer sign-offs are persisted in the governed compliance registry with complete version lineage.",
  },
];

function FaqColumn({
  faqs,
  openId,
  onToggle,
}: {
  faqs: FaqItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] sm:p-6">
      <div className="divide-y divide-[#edf0f4]">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="py-4 first:pt-1 last:pb-1">
              <button
                type="button"
                onClick={() => onToggle(faq.id)}
                className="flex w-full items-center justify-between gap-4 text-left transition"
              >
                <span className="text-xs font-bold text-[#091127] sm:text-[14px]">
                  {faq.question}
                </span>

                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all ${
                    isOpen
                      ? "bg-[#1D70F5] text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {isOpen ? (
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                  <p className="!m-0">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TaxComplianceFaqSection() {
  const [openLeft, setOpenLeft] = useState<string | null>("q1");
  const [openRight, setOpenRight] = useState<string | null>(null);

  const toggleLeft = (id: string) => {
    setOpenLeft((prev) => (prev === id ? null : id));
  };

  const toggleRight = (id: string) => {
    setOpenRight((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#f8faff] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Tax Compliance Guide FAQ
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[800px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[42px]">
          Direct answers about what finishing <br className="hidden sm:inline" />
          means.
        </h2>

        {/* SUBTITLE */}
        <p className="!mt-3 text-center text-sm font-normal text-[#5d7192] sm:text-base">
          Plainly: finishing is not a status.
        </p>

        {/* 2-COLUMN ACCORDION GRID */}
        <div className="mt-8 grid w-full max-w-[1240px] grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-2">
          <FaqColumn faqs={leftFaqs} openId={openLeft} onToggle={toggleLeft} />
          <FaqColumn faqs={rightFaqs} openId={openRight} onToggle={toggleRight} />
        </div>
      </div>
    </section>
  );
}
