'use client';

import { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'what-is-zoiko-billing',
    question: 'What is Zoiko Billing?',
    answer:
      'Zoiko Billing is a global billing and invoicing platform that manages the connected billing record across customers, charges, invoices, delivery, payments, outstanding balances and reporting. It can be used independently or as part of the integrated Zoiko One suite.',
  },
  {
    id: 'use-without-zoiko-one',
    question: 'Can I use Zoiko Billing without Zoiko One?',
    answer:
      'Yes, Zoiko Billing operates completely independently with its own configuration, onboarding, and direct integrations. A Zoiko One subscription is not required.',
  },
  {
    id: 'managed-records',
    question: 'What records can it manage?',
    answer:
      'It manages customer billing profiles, recurring and one-off charges, credit notes, invoice generation and delivery outcomes, payment allocations, and receivables ageing.',
  },
  {
    id: 'process-payments',
    question: 'Does it process payments?',
    answer:
      'Zoiko Billing integrates with supported payment gateways and banking processors to capture and allocate payment outcomes directly against outstanding balances.',
  },
  {
    id: 'entities-currencies',
    question: 'Can it support multiple entities and currencies?',
    answer:
      'Yes, it supports multi-entity structures and multi-currency billing and reporting with FX tracking per market.',
  },
  {
    id: 'country-availability',
    question: 'Is it available in my country?',
    answer:
      'Platform capabilities and market readiness vary by region. Please check our availability matrix for localized compliance details.',
  },
  {
    id: 'supported-integrations',
    question: 'Which integrations are supported?',
    answer:
      'We offer direct connectors for major CRM, ERP, and accounting platforms, alongside secure REST APIs for custom workflows.',
  },
  {
    id: 'pricing-cost',
    question: 'How much does it cost?',
    answer:
      'Pricing depends on your deployment mode (independent or suite integrated) and required processing volume. Contact sales for detailed tier breakdown.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(
    'what-is-zoiko-billing'
  );

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Questions
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Direct answers about the platform.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>

          {/* FAQ LIST */}
          <div
            className="
              w-full
              max-w-[1000px]
              divide-y
              divide-[#edf0f4]
              border-y
              border-[#dfe5ee]
            "
          >
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="py-1">
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      rounded-lg
                      px-2
                      py-4
                      text-left
                      transition-colors
                      duration-150
                      hover:bg-white
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7890b2]
                      sm:px-3
                      sm:py-5
                    "
                  >
                    <span
                      className="
                        text-[15px]
                        font-semibold
                        leading-6
                        text-[#091127]
                        transition-colors
                        duration-150
                        group-hover:text-[#45658f]
                        sm:text-base
                        md:text-lg
                      "
                    >
                      {item.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-sm
                        font-semibold
                        leading-5
                        transition-all
                        duration-150
                        ${
                          isOpen
                            ? 'bg-[#091127] text-white'
                            : 'border border-[#cbd5e1] bg-white text-[#7890b2] group-hover:border-[#7890b2] group-hover:text-[#45658f]'
                        }
                      `}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="
                        pb-5
                        pl-2
                        pr-10
                        sm:pl-3
                        sm:pr-14
                      "
                    >
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                          sm:text-base
                          sm:leading-7
                        "
                      >
                        {item.answer}
                      </p>
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