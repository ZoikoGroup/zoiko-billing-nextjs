'use client';

import React, { useMemo, useState } from 'react';

type FAQCategory =
  | 'All'
  | 'Product'
  | 'Company'
  | 'Commercial'
  | 'Capabilities'
  | 'Global'
  | 'Technology'
  | 'Security'
  | 'Automation'
  | 'Onboarding';

interface FAQItem {
  id: string;
  category: FAQCategory;
  categoryGroupTitle: string;
  question: string;
  answer?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'prod-1',
    category: 'Product',
    categoryGroupTitle: 'Product identity',
    question: 'What is Zoiko Billing?',
    answer:
      'Zoiko Billing is a global billing and invoicing platform that helps businesses create and manage charges, issue invoices, track payments, monitor outstanding balances, apply controlled adjustments and maintain clear financial records.',
  },
  {
    id: 'prod-2',
    category: 'Product',
    categoryGroupTitle: 'Product identity',
    question: 'Is it an invoicing tool or a complete billing platform?',
  },
  {
    id: 'prod-3',
    category: 'Product',
    categoryGroupTitle: 'Product identity',
    question: 'Why was Zoiko Billing created?',
  },
  {
    id: 'prod-4',
    category: 'Product',
    categoryGroupTitle: 'Product identity',
    question: 'Is Zoiko Billing a bank or payment provider?',
  },
  {
    id: 'prod-5',
    category: 'Product',
    categoryGroupTitle: 'Product identity',
    question: 'Does it replace accounting software?',
  },
  {
    id: 'comp-1',
    category: 'Company',
    categoryGroupTitle: 'Ownership and company',
    question: 'Who owns and operates Zoiko Billing?',
  },
  {
    id: 'comp-2',
    category: 'Company',
    categoryGroupTitle: 'Ownership and company',
    question: 'Is Zoiko Billing a separate legal company?',
  },
  {
    id: 'comp-3',
    category: 'Company',
    categoryGroupTitle: 'Ownership and company',
    question: "What is Zoiko Group's relationship with Zoiko Billing?",
  },
  {
    id: 'comp-4',
    category: 'Company',
    categoryGroupTitle: 'Ownership and company',
    question: "What is Zoiko One's relationship with Zoiko Billing?",
  },
  {
    id: 'comp-5',
    category: 'Company',
    categoryGroupTitle: 'Ownership and company',
    question: 'Where is Zoiko Billing based?',
  },
  {
    id: 'comm-1',
    category: 'Commercial',
    categoryGroupTitle: 'Commercial model',
    question: 'Can I use Zoiko Billing without Zoiko One?',
  },
  {
    id: 'comm-2',
    category: 'Commercial',
    categoryGroupTitle: 'Commercial model',
    question: 'Why use Zoiko Billing through Zoiko One?',
  },
  {
    id: 'comm-3',
    category: 'Commercial',
    categoryGroupTitle: 'Commercial model',
    question: 'Does Zoiko Billing offer a free trial?',
  },
  {
    id: 'comm-4',
    category: 'Commercial',
    categoryGroupTitle: 'Commercial model',
    question: 'How is Zoiko Billing priced?',
  },
  {
    id: 'comm-5',
    category: 'Commercial',
    categoryGroupTitle: 'Commercial model',
    question: 'Are payment-processing fees included?',
  },
  {
    id: 'cap-1',
    category: 'Capabilities',
    categoryGroupTitle: 'Capabilities',
    question: 'What billing models are supported?',
  },
  {
    id: 'cap-2',
    category: 'Capabilities',
    categoryGroupTitle: 'Capabilities',
    question: 'Can it manage unpaid invoices?',
  },
  {
    id: 'cap-3',
    category: 'Capabilities',
    categoryGroupTitle: 'Capabilities',
    question: 'Can it track partial payments?',
  },
  {
    id: 'cap-4',
    category: 'Capabilities',
    categoryGroupTitle: 'Capabilities',
    question: 'Does it support credits, refunds and adjustments?',
  },
  {
    id: 'cap-5',
    category: 'Capabilities',
    categoryGroupTitle: 'Capabilities',
    question: 'Can customers view invoices online?',
  },
  {
    id: 'cap-6',
    category: 'Capabilities',
    categoryGroupTitle: 'Capabilities',
    question: 'Does it automate reminders?',
  },
  {
    id: 'cap-7',
    category: 'Capabilities',
    categoryGroupTitle: 'Capabilities',
    question: 'Does it support approvals?',
  },
  {
    id: 'glob-1',
    category: 'Global',
    categoryGroupTitle: 'Global operations',
    question: 'Is Zoiko Billing available globally?',
  },
  {
    id: 'glob-2',
    category: 'Global',
    categoryGroupTitle: 'Global operations',
    question: 'Does it support multiple currencies?',
  },
  {
    id: 'glob-3',
    category: 'Global',
    categoryGroupTitle: 'Global operations',
    question: 'Can it support multiple legal entities?',
  },
  {
    id: 'glob-4',
    category: 'Global',
    categoryGroupTitle: 'Global operations',
    question: 'Does it calculate tax?',
  },
  {
    id: 'glob-5',
    category: 'Global',
    categoryGroupTitle: 'Global operations',
    question: 'Does it support electronic invoicing?',
  },
  {
    id: 'glob-6',
    category: 'Global',
    categoryGroupTitle: 'Global operations',
    question: 'Where is customer data stored?',
  },
  {
    id: 'tech-1',
    category: 'Technology',
    categoryGroupTitle: 'Integrations and technology',
    question: 'What systems can it connect with?',
  },
  {
    id: 'tech-2',
    category: 'Technology',
    categoryGroupTitle: 'Integrations and technology',
    question: 'Does Zoiko Billing have an API?',
  },
  {
    id: 'tech-3',
    category: 'Technology',
    categoryGroupTitle: 'Integrations and technology',
    question: 'Is a sandbox available?',
  },
  {
    id: 'tech-4',
    category: 'Technology',
    categoryGroupTitle: 'Integrations and technology',
    question: 'Can it be customized?',
  },
  {
    id: 'sec-1',
    category: 'Security',
    categoryGroupTitle: 'Security and privacy',
    question: 'How are financial records protected?',
  },
  {
    id: 'sec-2',
    category: 'Security',
    categoryGroupTitle: 'Security and privacy',
    question: 'Is Zoiko Billing certified to a security standard?',
  },
  {
    id: 'sec-3',
    category: 'Security',
    categoryGroupTitle: 'Security and privacy',
    question: 'Does it maintain an audit trail?',
  },
  {
    id: 'sec-4',
    category: 'Security',
    categoryGroupTitle: 'Security and privacy',
    question: 'Can an invoice be deleted without a record?',
  },
  {
    id: 'sec-5',
    category: 'Security',
    categoryGroupTitle: 'Security and privacy',
    question: 'How is privacy handled?',
  },
  {
    id: 'auto-1',
    category: 'Automation',
    categoryGroupTitle: 'Automation and AI',
    question: 'Does Zoiko Billing use artificial intelligence?',
  },
  {
    id: 'auto-2',
    category: 'Automation',
    categoryGroupTitle: 'Automation and AI',
    question: 'Can AI make financial decisions automatically?',
  },
  {
    id: 'auto-3',
    category: 'Automation',
    categoryGroupTitle: 'Automation and AI',
    question: 'Is customer data used to train AI models?',
  },
  {
    id: 'onb-1',
    category: 'Onboarding',
    categoryGroupTitle: 'Onboarding and support',
    question: 'How does an organization get started?',
  },
  {
    id: 'onb-2',
    category: 'Onboarding',
    categoryGroupTitle: 'Onboarding and support',
    question: 'What is required during onboarding?',
  },
  {
    id: 'onb-3',
    category: 'Onboarding',
    categoryGroupTitle: 'Onboarding and support',
    question: 'Can existing billing data be imported?',
  },
  {
    id: 'onb-4',
    category: 'Onboarding',
    categoryGroupTitle: 'Onboarding and support',
    question: 'What support is available?',
  },
  {
    id: 'onb-5',
    category: 'Onboarding',
    categoryGroupTitle: 'Onboarding and support',
    question: 'Where is product documentation?',
  },
  {
    id: 'onb-6',
    category: 'Onboarding',
    categoryGroupTitle: 'Onboarding and support',
    question: 'How can an enterprise evaluate Zoiko Billing?',
  },
];

const CATEGORIES: FAQCategory[] = [
  'All',
  'Product',
  'Company',
  'Commercial',
  'Capabilities',
  'Global',
  'Technology',
  'Security',
  'Automation',
  'Onboarding',
];

export default function QuestionsSection() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'prod-1': true,
  });

  const filteredData = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const groupedData = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {};

    filteredData.forEach((item) => {
      if (!groups[item.categoryGroupTitle]) {
        groups[item.categoryGroupTitle] = [];
      }
      groups[item.categoryGroupTitle].push(item);
    });

    return groups;
  }, [filteredData]);

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="questions" className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-start gap-8">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Questions about Zoiko Billing
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Direct answers, grouped <br />
              by what you are <br className="hidden sm:inline" />
              evaluating.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Every answer is on the page and linkable. Filter by category or
              search to narrow the list.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-4 pt-4">
          <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2.5 shadow-xs transition-colors focus-within:border-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:focus-within:border-blue-400">
            <svg
              className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search questions and answers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-normal text-sky-950 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>

          <div className="flex w-full flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[38px] cursor-pointer rounded-full px-4 py-2 text-xs font-medium leading-4 tracking-wide transition-colors duration-150 font-['IBM_Plex_Mono',monospace] uppercase ${
                    isActive
                      ? 'border border-sky-950 bg-sky-950 text-white dark:border-blue-600 dark:bg-blue-600'
                      : 'border border-zinc-200 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-xs font-normal font-['IBM_Plex_Mono',monospace] text-slate-500 dark:text-slate-400">
          Showing {filteredData.length} of {FAQ_DATA.length} questions.
        </div>

        <div className="flex w-full flex-col gap-10">
          {Object.keys(groupedData).length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
              No questions found matching &quot;{searchQuery}&quot;.
            </div>
          ) : (
            Object.entries(groupedData).map(([groupTitle, items]) => (
              <div key={groupTitle} className="flex w-full flex-col">
                <div className="mb-2 border-b border-zinc-200 py-2 dark:border-slate-800">
                  <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-semibold uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                    {groupTitle}
                  </span>
                </div>

                {items.map((item) => {
                  const isExpanded = !!expandedIds[item.id];

                  return (
                    <div
                      key={item.id}
                      className="border-b border-zinc-200 transition-colors dark:border-slate-800"
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        className="group flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left focus:outline-none"
                      >
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold leading-7 text-sky-950 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                          {item.question}
                        </span>

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold font-['IBM_Plex_Mono',monospace] transition-colors ${
                            isExpanded
                              ? 'border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500'
                              : 'border-zinc-200 bg-white text-slate-600 group-hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                          }`}
                        >
                          {isExpanded ? '-' : '+'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="max-w-3xl pb-6 pt-1 text-sm font-normal leading-7 text-slate-600 dark:text-slate-300">
                          {item.answer ||
                            'Detailed documentation and operating specifications for this topic are available in the platform guide.'}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
