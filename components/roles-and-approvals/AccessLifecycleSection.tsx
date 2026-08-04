'use client';

import Link from 'next/link';

interface AccessStage {
  step: string;
  title: string;
  description: string;
}

const ACCESS_STAGES: AccessStage[] = [
  {
    step: '01',
    title: 'Invite or identity link',
    description:
      'A subject is invited, or linked from an approved identity provider.',
  },
  {
    step: '02',
    title: 'Validate and activate',
    description:
      'Membership is validated against the workspace, entity or organization before it becomes live.',
  },
  {
    step: '03',
    title: 'Assign role and scope',
    description:
      'A role is bound to the subject within an explicit scope, with an assigner on record.',
  },
  {
    step: '04',
    title: 'Access review',
    description:
      'Periodic or event-driven review confirms the access is still appropriate.',
  },
  {
    step: '05',
    title: 'Temporary access expiry',
    description:
      'Time-boxed access ends on its own rather than depending on someone remembering.',
  },
  {
    step: '06',
    title: 'Suspension',
    description:
      'Access is suspended for risk, departure or a defined policy condition.',
  },
  {
    step: '07',
    title: 'Revocation',
    description:
      'Membership is revoked, with defined consequences for sessions and tokens.',
  },
  {
    step: '08',
    title: 'Evidence retained',
    description:
      'Assignment and access history is retained according to policy after removal.',
  },
];

export default function AccessLifecycleSection() {
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
                Access lifecycle
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              Review and remove access as responsibilities change.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Granting access is the easy half. These are the eight stages that keep it correct over time and remove it cleanly.
          </p>
        </div>

        {/* 8-Stage Responsive Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
            >
              {/* Badge Number */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 font-['IBM_Plex_Mono'] text-[10px] font-semibold text-white">
                {stage.step}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-sky-950">
                  {stage.title}
                </h3>
                <p className="font-['Segoe_UI'] text-xs font-normal leading-relaxed text-slate-600">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Revocation Boundary Callout */}
        <div className="flex flex-col gap-2 rounded-r-2xl border-l-[3px] border-blue-600 bg-slate-100 p-6 sm:p-7">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-normal uppercase tracking-wide text-blue-600">
            Revocation boundary
          </span>
          <p className="max-w-4xl font-['Segoe_UI'] text-base font-normal leading-relaxed text-sky-950">
            Account deletion, membership revocation and evidence retention are three distinct processes. Revocation behaviour across external identity providers and connectors depends on each integration, so no promise of instant revocation everywhere is made here.
          </p>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="flex justify-center pt-2">
          <Link
            href="/security-and-trust"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sky-950 px-6 py-2.5 font-['Segoe_UI'] "
            style={{ color: 'white' }}
          >
            Review security and trust
          </Link>
        </div>

      </div>
    </section>
  );
}