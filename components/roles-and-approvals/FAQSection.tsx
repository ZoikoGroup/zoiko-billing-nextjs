'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'role-vs-permission',
    question: 'What is the difference between a role and a permission?',
    answer:
      'A permission is a single explicit ability, such as view an invoice, approve a credit note or export customer data. A role is a named responsibility that bundles permissions together. A role only grants access once it is assigned to a subject within a scope, so the same role can mean very different reach in two different entities.',
  },
  {
    id: 'approvals-required',
    question: 'Can approvals be required for specific billing actions?',
    answer:
      'Yes. Approval workflows can be configured for sensitive actions like granting discounts, issuing refunds, modifying contract terms, or overriding credit limits based on set threshold rules.',
  },
  {
    id: 'self-approval',
    question: 'Can the requester approve their own action?',
    answer:
      'No. Dual-control policies strictly prevent self-approval. Requester and reviewer roles must be distinct for any governed or high-risk billing action.',
  },
  {
    id: 'entity-limitations',
    question: 'Can access be limited by entity or record type?',
    answer:
      'Yes. Roles and permissions can be scoped to specific legal entities, business units, region groups, or individual client account classifications.',
  },
  {
    id: 'temporary-delegation',
    question: 'How does temporary delegation work?',
    answer:
      'Delegation allows a user to temporarily assign their approval authority to a peer or backup reviewer with predefined start and end timestamps, while maintaining full audit records.',
  },
  {
    id: 'service-accounts',
    question: 'Can service accounts or integrations be restricted?',
    answer:
      'Yes. Non-human identities operate under dedicated service accounts constrained to minimum required scopes, rate limits, and explicit action boundaries.',
  },
  {
    id: 'revocation-process',
    question: 'What happens when access is revoked?',
    answer:
      'Access revocation takes effect immediately. Active sessions are terminated, tokens invalidated, and all pending approval requests are automatically reassigned or cancelled.',
  },
  {
    id: 'zoiko-one-standalone',
    question: 'Can I use Roles & Approvals without Zoiko One?',
    answer:
      'Yes. Zoiko Billing includes built-in standalone role and approval management, while offering seamless integration if connected to Zoiko One.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(
    'role-vs-permission',
  );

  const toggleFAQ = (id: string) => {
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
              Direct answers about roles and approvals.
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
              mx-auto
              flex
              w-full
              max-w-[900px]
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {FAQ_DATA.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={
                    index !== FAQ_DATA.length - 1
                      ? 'border-b border-[#edf0f4]'
                      : ''
                  }
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-answer`}
                    className="
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-4
                      px-5
                      py-5
                      text-left
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7890b2]
                      focus-visible:ring-inset

                      sm:px-6
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]

                        sm:text-base
                      "
                    >
                      {item.question}
                    </span>

                    {/* TOGGLE */}
                    <span
                      aria-hidden="true"
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
                        transition-colors
                        ${
                          isOpen
                            ? 'bg-[#091127] text-white'
                            : 'border border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]'
                        }
                      `}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div
                      id={`${item.id}-answer`}
                      className="px-5 pb-6 pr-12 sm:px-6 sm:pr-16"
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