"use client";

import { useState, type ReactNode } from "react";

type FaqItemData = {
  question: string;
  answer?: ReactNode;
};

const leftFaqs: FaqItemData[] = [
  {
    question: "Is Zoiko One included with Zoiko Billing?",
    answer: (
      <>
        Not unless a commercial record explicitly says so. Being technically
        connectable is not the same as being commercially included.{" "}
        <span className="font-semibold text-blue-600">
          See Pricing &amp; Plans
        </span>
      </>
    ),
  },
  {
    question: "Can Zoiko Billing work without Zoiko One?",
    answer: (
      <>
        Yes. Zoiko Billing can operate independently where the required billing
        capabilities are available on your plan. Zoiko One is only needed when
        your configuration or agreement specifically requires the connection.
      </>
    ),
  },
  {
    question: "Can we connect later?",
    answer: (
      <>
        Yes. A connection can be added later where the products, plan and
        technical configuration support it. Any implementation work,
        configuration or additional commercial terms should be confirmed
        before connection.
      </>
    ),
  },
  {
    question: "Can we disconnect later?",
    answer: (
      <>
        Yes, subject to the applicable configuration and agreement.
        Disconnection may affect synchronization and connected workflows, so
        the impact should be reviewed before the connection is removed.
      </>
    ),
  },
  {
    question: "What data is shared?",
    answer: (
      <>
        Only the data required for the configured connected workflows is
        shared. The exact data set depends on the integration, configuration,
        permissions and applicable product or agreement terms.
      </>
    ),
  },
];

const rightFaqs: FaqItemData[] = [
  {
    question: "Is synchronization real time?",
    answer: (
      <>
        Synchronization timing depends on the connected workflow and
        configuration. Some information may be synchronized automatically,
        while other processes may operate on a scheduled or event-driven
        basis.
      </>
    ),
  },
  {
    question: "What happens if a sync fails?",
    answer: (
      <>
        A failed synchronization should be identified through the applicable
        integration or system status. Depending on the failure, the record may
        require retry, correction or manual review before the connected
        workflow can continue.
      </>
    ),
  },
  {
    question: "Does Zoiko One change pricing?",
    answer: (
      <>
        Not automatically. Pricing depends on the applicable plan, products,
        configuration, market and commercial agreement. Adding Zoiko One or a
        connected service may have separate commercial terms where explicitly
        stated.
      </>
    ),
  },
  {
    question: "Is implementation included?",
    answer: (
      <>
        Not necessarily. Implementation availability and scope depend on the
        plan, market, configuration and commercial agreement. Any included or
        separately charged implementation service should be confirmed in the
        applicable commercial record.
      </>
    ),
  },
  {
    question: "Who supports a connected deployment?",
    answer: (
      <>
        Support responsibility depends on the products and services included
        in the deployment. The applicable support scope, responsibilities and
        escalation path should be confirmed in the relevant agreement or
        support terms.
      </>
    ),
  },
];

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer?: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex min-h-20 w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-slate-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
            isOpen
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-slate-500"
          }`}
        >
          <span className="text-sm font-semibold leading-none">
            {isOpen ? "−" : "+"}
          </span>
        </span>
      </button>

      {isOpen && answer && (
        <div className="px-5 pb-5 text-sm leading-5 text-slate-500">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function CommercialFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "Is Zoiko One included with Zoiko Billing"
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) => {
      if (current === question) {
        return null;
      }

      return question;
    });
  };

  return (
    <section className="w-full border-t border-gray-200 px-4 py-14 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3.5">
        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Commercial, support &amp; FAQ
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[1100px] text-2xl font-bold leading-9 text-slate-900 sm:text-3xl sm:leading-10">
          Technical connection and commercial packaging are separate records.
        </h2>

        {/* Description */}
        <p className="max-w-[700px] text-sm leading-6 text-slate-500 sm:text-base">
          Availability, plan entitlement, implementation service, support
          scope and price can each differ by market, plan, configuration and
          agreement.
        </p>

        {/* FAQ */}
        <div className="grid w-full grid-cols-1 gap-5 pt-3.5 lg:grid-cols-2">
          {/* Left column */}
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
            {leftFaqs.map((faq) => (
              <FaqRow
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onToggle={() => toggleFaq(faq.question)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
            {rightFaqs.map((faq) => (
              <FaqRow
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onToggle={() => toggleFaq(faq.question)}
              />
            ))}
          </div>
        </div>

        {/* Commercial truth */}
        <div className="mt-1 w-full rounded-[10px] border border-gray-200 bg-gray-50 px-5 py-4">
          <p className="text-sm leading-5 text-slate-500">
            <span className="font-bold text-slate-900">
              Commercial truth.
            </span>{" "}
            Technical availability, plan entitlement, implementation service,
            support scope, pricing and contract terms are separate records and
            can differ by market, plan, product configuration and agreement.
          </p>
        </div>
      </div>
    </section>
  );
}