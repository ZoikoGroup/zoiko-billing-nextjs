'use client';

import Image from 'next/image';
import Link from 'next/link';

interface DutySeparationItem {
  id: string;
  title: string;
  description: string;
}

const SEPARATION_DUTIES: DutySeparationItem[] = [
  {
    id: 'self-approval-blocked',
    title: 'Self-approval blocked',
    description:
      'The requester is removed from the eligible approver set for that request, and the block is shown on the request itself.',
  },
  {
    id: 'self-approval-disclosed',
    title: 'Self-approval disclosed',
    description:
      'Where configuration permits it, the decision record states that requester and approver were the same subject.',
  },
  {
    id: 'conflicting-membership',
    title: 'Conflicting membership',
    description:
      'A subject holding both preparer and approver roles in the same scope is surfaced for review rather than silently allowed.',
  },
  {
    id: 'authority-ceiling',
    title: 'Authority ceiling',
    description:
      'An approver cannot decide beyond the amount, entity, action or time authority delegated to them; the request escalates instead.',
  },
  {
    id: 'missing-evidence',
    title: 'Missing evidence',
    description:
      'Required supporting evidence that is absent is flagged before a decision is recorded.',
  },
  {
    id: 'decision-reason',
    title: 'Decision reason',
    description:
      'A reason is captured with the decision, with optional supporting evidence attached to the record.',
  },
];

export default function MeaningfulReviewSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-16">
          {/* Eyebrow & Title */}
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-blue-600">
                Meaningful review
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              Give reviewers the context to make a meaningful decision.
            </h2>
          </div>

          {/* Header Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            A reviewer who cannot see what is changing, or why it needs a decision, is not really reviewing anything.
          </p>
        </div>

        {/* 2-Column Main Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Column 1: Context Preview Image */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-sky-950">
                What the reviewer is shown
              </h3>
              <p className="font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600">
                The requested action, the records it affects, the before and after values, the policy reason, and anything that conflicts or is missing.
              </p>
            </div>

            <div className="relative min-h-[420px] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)] sm:min-h-[520px]">
              <Image
                src="/images/roles-and-approvals/div.revcard (1).png"
                alt="Reviewer context and decision panel preview"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Column 2: Separation of Duties Details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-sky-950">
                Separation of duties
              </h3>
              <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-600">
                Where policy separates duties, the person who prepared an action cannot be the person who authorizes it. Where it does not, the overlap is disclosed rather than hidden.
              </p>
            </div>

            {/* List of Duty Rules */}
            <div className="flex flex-col divide-y divide-zinc-200/80 border-t border-b border-zinc-200/80">
              {SEPARATION_DUTIES.map((duty) => (
                <div
                  key={duty.id}
                  className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:gap-6"
                >
                  <h4 className="w-full font-['Plus_Jakarta_Sans'] text-sm font-semibold text-sky-950 sm:w-40 sm:shrink-0">
                    {duty.title}
                  </h4>
                  <p className="flex-1 font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-600">
                    {duty.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Configuration Boundary Callout */}
            <div className="flex flex-col gap-2 rounded-r-2xl border-l-[3px] border-blue-600 bg-slate-100 p-6">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-normal uppercase tracking-wide text-blue-600">
                Configuration boundary
              </span>
              <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-sky-950">
                Separation of duties is configuration-dependent. It is available as a control, but it is not a universal guarantee and it is not claimed as one.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Navigation CTA */}
        <div className="flex justify-center pt-4">
          <Link
            href="/invoices-and-credit-notes"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sky-950 px-6 py-2.5 font-['Segoe_UI'] "
            style={{ color: 'white' }}
          >
            Explore Invoices &amp; Credit Notes
          </Link>
        </div>

      </div>
    </section>
  );
}