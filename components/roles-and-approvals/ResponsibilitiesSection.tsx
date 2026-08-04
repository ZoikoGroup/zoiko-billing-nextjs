'use client';

import Link from 'next/link';

interface ResponsibilityCard {
  number: string;
  title: string;
  description: string;
  ceiling: string;
}

const RESPONSIBILITIES: ResponsibilityCard[] = [
  {
    number: '01',
    title: 'Accountable owner',
    description:
      'Manages high-level membership, configuration and emergency procedures within approved authority.',
    ceiling:
      'Cannot override external law, contract, provider or platform security controls.',
  },
  {
    number: '02',
    title: 'Billing administrator',
    description:
      'Configures permitted roles, billing settings and operating scope for the organization.',
    ceiling:
      'Restricted from self-approving configured sensitive changes where policy separates duties.',
  },
  {
    number: '03',
    title: 'Preparer / operator',
    description:
      'Creates or prepares customer, invoice, charge and workflow records within an assigned scope.',
    ceiling:
      'Cannot approve or execute restricted actions unless separately authorized.',
  },
  {
    number: '04',
    title: 'Approver',
    description:
      'Reviews configured actions with their evidence and policy context, then records a decision.',
    ceiling:
      'Cannot exceed delegated amount, entity, action or time authority.',
  },
  {
    number: '05',
    title: 'Viewer / auditor',
    description:
      'Reviews records, decisions and evidence to understand what happened and who authorized it.',
    ceiling:
      'Read-only. Sensitive fields and exports remain separately controlled.',
  },
  {
    number: '06',
    title: 'Service identity',
    description:
      'Performs explicitly scoped integration or workflow actions as a non-human subject.',
    ceiling:
      'No interactive ownership, shared password or unrestricted administrative access.',
  },
];

export default function ResponsibilitiesSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-16">
          {/* Eyebrow & Title */}
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-blue-600">
                Responsibilities
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              Six responsibilities, each with its own ceiling.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            A conceptual model. Exact role names and the permissions available to them are configured in the product, not fixed by this page.
          </p>
        </div>

        {/* Responsibilities 6-Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESPONSIBILITIES.map((card) => (
            <div
              key={card.number}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              {/* Badge Number */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-100 bg-slate-50 font-['IBM_Plex_Mono'] text-xs font-semibold text-blue-600">
                {card.number}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-['Plus_Jakarta_Sans'] text-base font-semibold text-sky-950">
                  {card.title}
                </h3>
                <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>

              {/* Ceiling Boundary Sub-block */}
              <div className="mt-auto flex flex-col gap-1 border-t border-zinc-100 pt-3">
                <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  Ceiling
                </span>
                <p className="font-['Segoe_UI'] text-xs font-normal leading-normal text-slate-500">
                  {card.ceiling}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Model Boundary Callout */}
        <div className="flex flex-col gap-2 rounded-r-2xl border-l-[3px] border-blue-600 bg-slate-100 p-6 sm:p-7">
          <span className="font-['IBM_Plex_Mono'] text-xs font-normal uppercase tracking-wide text-blue-600">
            Model boundary
          </span>
          <p className="max-w-3xl font-['Segoe_UI'] text-base font-normal leading-relaxed text-sky-950">
            Owner status does not bypass legal, contractual, security or policy controls, and a role title alone establishes no authority outside the platform.
          </p>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <Link
            href="/workflows"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sky-950 px-6 py-2.5 font-['Segoe_UI']  font-normal text-white"
             style={{ color: 'white' }}
          >
            See how workflows use these roles
          </Link>
        </div>

      </div>
    </section>
  );
}