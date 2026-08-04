'use client';

import Link from 'next/link';

interface AuditItem {
  id: string;
  title: string;
  description: string;
}

const AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'role-membership',
    title: 'Role and membership changes',
    description:
      'Who was granted or removed from which role, in which scope, by whom and when.',
  },
  {
    id: 'policy-decisions',
    title: 'Policy versions and decisions',
    description:
      'Which policy version applied, what effect it returned and the reason recorded.',
  },
  {
    id: 'approval-outcomes',
    title: 'Approval requests and outcomes',
    description:
      'Requester, reviewer, reason, deadline and the final decision on each request.',
  },
  {
    id: 'executed-actions',
    title: 'Executed actions and overrides',
    description:
      'What actually ran, what it changed, and any override applied to it.',
  },
  {
    id: 'restricted-access',
    title: 'Restricted access and export',
    description:
      'Access to sensitive data and export events where the policy requires them recorded.',
  },
  {
    id: 'retention-legal-hold',
    title: 'Retention and legal hold',
    description:
      'Defined retention, legal-hold treatment and authorized evidence export.',
  },
];

const EMERGENCY_TAGS = [
  'Request and reason',
  'Limited duration',
  'Monitored while active',
  'Retrospective review',
  'Full evidence retained',
];

export default function AuditAndEvidenceSection() {
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
                Audit and evidence
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              Preserve who requested, approved and executed each action.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Evidence exists so a decision can be reconstructed later — by your own team, an auditor or a customer in dispute.
          </p>
        </div>

        {/* Audit Categories Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
            >
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-semibold text-sky-950">
                {item.title}
              </h3>
              <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency Access Special Callout */}
        <div className="flex flex-col gap-4 rounded-2xl border border-amber-300 bg-amber-50/50 p-6 sm:p-8">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium uppercase tracking-wide text-amber-700">
            Emergency access
          </span>

          <div className="flex flex-col gap-2">
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-sky-950">
              Exceptional, time-limited and reviewed afterwards
            </h3>
            <p className="max-w-4xl font-['Segoe_UI'] text-sm font-normal leading-relaxed text-amber-950/80 sm:text-base">
              Where emergency access exists, it is requested with a reason, granted for a limited duration, monitored while active and reviewed retrospectively. It is an exception path with a paper trail — not a standing master key, and not a backdoor.
            </p>
          </div>

          {/* Emergency Process Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {EMERGENCY_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-amber-300 bg-white px-3.5 py-1.5 font-['IBM_Plex_Mono'] text-xs font-normal text-amber-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Evidence Boundary Callout */}
        <div className="flex flex-col gap-2 rounded-r-2xl border-l-[3px] border-blue-600 bg-slate-100 p-6 sm:p-7">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-normal uppercase tracking-wide text-blue-600">
            Evidence boundary
          </span>
          <p className="max-w-4xl font-['Segoe_UI'] text-base font-normal leading-relaxed text-sky-950">
            Audit records are evidence, not proof that every action was appropriate or compliant. They show what happened and who authorized it; judging whether it was correct remains a human responsibility.
          </p>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/security-overview"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sky-950 px-6 py-2.5 font-['Segoe_UI'] text-base font-normal text-white transition-colors hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-950 focus:ring-offset-2"
            style={{ color: 'white' }}
          >
            Security overview
          </Link>

          <Link
            href="/privacy-notice"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 font-['Segoe_UI'] text-base font-normal text-blue-600 transition-colors hover:text-blue-700 focus:outline-none"
          >
            Read the privacy notice
            <span className="font-['IBM_Plex_Mono'] font-bold">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}