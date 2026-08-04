import React from 'react';

interface UseCaseCard {
  category: string;
  title: string;
  description: string;
  flow: string;
  linkText: string;
}

const useCaseCards: UseCaseCard[] = [
  {
    category: 'Customer records',
    title: 'Route records that need attention',
    description:
      'Send incomplete, duplicate, stale or restricted records to the right owner for review.',
    flow: 'Record flagged -> conditions checked -> assign owner -> review task',
    linkText: 'Customer Records',
  },
  {
    category: 'Invoices',
    title: 'Move documents through preparation',
    description:
      'Assign preparation, request approval, schedule an issue date or route a failed issue.',
    flow: 'Schedule due -> prepare draft -> approval gate -> issue or route failure',
    linkText: 'Invoices & Credit Notes',
  },
  {
    category: 'Documents and delivery',
    title: 'Prepare, send and handle failure',
    description:
      'Prepare a document, choose an approved channel, and route delivery failures for recovery.',
    flow: 'Document ready -> channel selected -> delivery recorded -> retry on failure',
    linkText: 'Documents & Delivery',
  },
  {
    category: 'Accounts receivable',
    title: 'Assign follow-up and escalate',
    description:
      'Assign follow-up work, prepare reminders for review, and escalate exceptions by age or value.',
    flow: 'Balance ages -> assign owner -> prepare reminder -> escalate exception',
    linkText: 'Accounts Receivable',
  },
  {
    category: 'Payments and reconciliation',
    title: 'Route what does not match',
    description:
      'Send unmatched, short-paid or conflicting payment records to a reviewer instead of guessing.',
    flow: 'Payment recorded -> match attempted -> exception raised -> review queue',
    linkText: 'Payments & Reconciliation',
  },
  {
    category: 'Reporting',
    title: 'Schedule summaries and alerts',
    description:
      'Schedule approved summaries, or notify owners when a defined operational condition is met.',
    flow: 'Period closes -> summary prepared -> recipients checked -> delivered',
    linkText: 'Reporting & Analytics',
  },
];

export default function UseCasesSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-600">
                Use cases
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight font-sans text-sky-950 sm:text-4xl lg:text-5xl">
              Reduce repetitive work across the billing record.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Examples of governed workflows by domain. These are illustrations of
              the model, not a guarantee that every action is production available
              on every plan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {useCaseCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-md"
            >
              <div className="space-y-4">
                <span className="block text-[10px] font-mono font-medium uppercase tracking-wider text-sky-600">
                  {card.category}
                </span>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold leading-snug text-sky-950 font-sans">
                    {card.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/80 bg-slate-50 p-3">
                  <p className="font-mono text-xs leading-relaxed text-slate-600">
                    {card.flow}
                  </p>
                </div>
              </div>

              <a
                href={`#${card.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="group inline-flex items-center gap-1.5 pt-2 text-[11px] font-mono font-medium uppercase tracking-wider text-sky-600 transition-colors hover:text-sky-700"
              >
                <span>{card.linkText}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="space-y-2 rounded-r-2xl border-l-4 border-sky-600 bg-slate-200/60 p-6 sm:p-7">
          <span className="block text-[10px] font-mono font-medium uppercase tracking-wider text-sky-600">
            Use-case boundary
          </span>
          <p className="max-w-4xl text-sm font-normal leading-relaxed text-sky-950 sm:text-base">
            No workflow automatically determines creditworthiness, misconduct,
            legal liability or tax treatment. A succeeded run means the configured
            steps completed - it is not proof of a business outcome.
          </p>
        </div>
      </div>
    </section>
  );
}
