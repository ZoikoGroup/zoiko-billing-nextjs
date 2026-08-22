"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does Zoiko Billing support multiple currencies?",
    answer:
      "Where the current currency-operation, entity, jurisdiction and provider configuration shows support. Check availability for your intended context rather than assuming a currency works everywhere.",
    link: "Open the applicability matrix",
  },
  {
    question: "Can I invoice in one currency and settle in another?",
    answer:
      "Yes. A provider may accept payment in one currency and settle funds in another. Each stage retains its own currency and evidence.",
  },
  {
    question: "Does Zoiko Billing convert currencies?",
    answer:
      "Currency conversion can be used where the configured operation supports it. Display conversion, executed conversion and settlement are treated as separate capabilities.",
  },
  {
    question: "Are exchange rates real time?",
    answer:
      "Not necessarily. Rate freshness depends on the configured source, operation and policy. The rate source, timestamp, basis and finality are retained for auditability.",
  },
  {
    question: "Can I set a currency per customer or entity?",
    answer:
      "Yes, where the applicable configuration allows it. Customer preferences remain subject to entity, contract, jurisdiction and provider rules.",
  },
  {
    question: "What happens to old invoices if I change currency?",
    answer:
      "Previously issued invoices are not rewritten. A future currency change applies only to eligible future documents from its effective date.",
  },
  {
    question: "How are rounding differences handled?",
    answer:
      "Rounding follows the configured calculation policy. Any resulting residual or variance is classified and reconciled rather than silently absorbed.",
  },
  {
    question: "Which currencies are available in my country?",
    answer:
      "Availability depends on the currency, operation, entity, jurisdiction and provider context. The applicable currency registry should be checked for the specific use case.",
  },
  {
    question: "Does currency support mean local tax or payment compliance?",
    answer:
      "No. Currency availability does not by itself establish tax, regulatory or payment compliance. Those requirements remain separate considerations.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the applicable Zoiko Billing plan and commercial configuration.",
  },
];

export default function CurrencyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-sky-600/40" />

            <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-[0.18em] text-sky-600">
              Decision guide &amp; FAQ
            </span>

            <span className="h-px w-4 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.08]">
            <span className="block whitespace-nowrap">
              Direct answers about multi-currency
            </span>

            <span className="block whitespace-nowrap">billing.</span>
          </h2>

          {/* Description */}
          <p className="max-w-[720px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Checking currency support never requires uploading invoices, bank
            statements, payment files, tax records, customer data or
            credentials.
          </p>
        </div>

        {/* FAQ columns */}
        <div className="grid w-full gap-5 pt-2 lg:grid-cols-2">
          {[faqs.slice(0, 5), faqs.slice(5)].map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]"
            >
              {column.map((faq) => {
                const index = faqs.indexOf(faq);
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold leading-6 text-slate-900">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold text-slate-600 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-sm leading-6 text-slate-500">
                          {faq.answer}
                        </p>

                        {faq.link && (
                          <button
                            type="button"
                            className="mt-2 text-sm font-semibold text-blue-600 hover:underline"
                          >
                            {faq.link}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}