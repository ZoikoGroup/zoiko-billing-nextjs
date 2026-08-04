'use client';

import Image from 'next/image';

interface DelegationRule {
  step: string;
  title: string;
  description: string;
}

const DELEGATION_RULES: DelegationRule[] = [
  {
    step: '01',
    title: 'Temporary delegation',
    description:
      'Authority passes for a defined window with an explicit start and end time.',
  },
  {
    step: '02',
    title: "Capped at the delegator's own authority",
    description:
      'A delegate can never receive more than the delegator was permitted to exercise.',
  },
  {
    step: '03',
    title: 'Out-of-office and workload reassignment',
    description:
      'Where supported, pending decisions route to an eligible alternate automatically.',
  },
  {
    step: '04',
    title: 'Escalation on deadline',
    description:
      'An undecided request escalates after a defined deadline or condition rather than stalling.',
  },
  {
    step: '05',
    title: 'Revocation and conflict handling',
    description:
      'Delegation can be withdrawn, and overlapping delegations are resolved by policy, not by chance.',
  },
  {
    step: '06',
    title: 'Full evidence',
    description:
      'Delegator, delegate, reason and every resulting decision are recorded.',
  },
];

export default function DelegationSection() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-16">
          {/* Eyebrow & Title */}
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-blue-600">
                Delegation
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              Maintain continuity without transferring unlimited authority.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            People take leave and workloads shift. Delegation covers that without anyone sharing a password or inheriting powers they were never granted.
          </p>
        </div>

        {/* Main Content 2-Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Column 1: Numbered Rules List */}
          <div className="flex flex-col divide-y divide-zinc-200">
            {DELEGATION_RULES.map((rule) => (
              <div
                key={rule.step}
                className="flex items-start gap-4 py-3.5 first:pt-0 last:pb-0"
              >
                {/* Step Number */}
                <span className="shrink-0 font-['IBM_Plex_Mono'] text-xs font-semibold text-blue-600 pt-0.5">
                  {rule.step}
                </span>

                {/* Title & Description */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-sky-950">
                    {rule.title}
                  </h3>
                  <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-600">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Visual Preview & Boundary Callout */}
          <div className="flex flex-col gap-10">
            {/* Image Diagram Container */}
            <div className="relative aspect-[11/10] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-slate-50 shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)] sm:aspect-[4/3] lg:aspect-[11/10]">
              <Image
                src="/images/roles-and-approvals/div.revcard (2).png"
                alt="Delegation workflow and authority ceiling diagram"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Delegation Boundary Callout */}
            <div className="flex flex-col gap-2 rounded-r-2xl border-l-[3px] border-blue-600 bg-slate-100 p-6">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-normal uppercase tracking-wide text-blue-600">
                Delegation boundary
              </span>
              <p className="font-['Segoe_UI'] text-base font-normal leading-relaxed text-sky-950">
                Delegation is a transfer of authority, never of credentials. Passwords and tokens are not shared, and delegation does not silently include restricted roles or emergency powers.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}