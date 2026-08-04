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
  // First item open by default
  const [openId, setOpenId] = useState<string | null>('role-vs-permission');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-16">
          {/* Eyebrow & Main Heading */}
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-blue-600">
                Questions
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              Direct answers about roles and approvals.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Every answer is rendered on the page and works without JavaScript.
          </p>
        </div>

        {/* Accordion FAQ List Container */}
        <div className="flex w-full max-w-4xl flex-col">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-zinc-200 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="font-['Plus_Jakarta_Sans'] text-base font-semibold text-sky-950 sm:text-lg">
                    {item.question}
                  </span>

                  {/* Toggle Indicator (- / +) */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-['IBM_Plex_Mono'] text-sm font-semibold transition-colors ${
                      isOpen
                        ? 'bg-blue-600 text-white'
                        : 'border border-zinc-300 text-slate-600 hover:border-zinc-400'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Collapsible Answer Content */}
                {isOpen && (
                  <div className="pb-6 pr-10">
                    <p className="font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}