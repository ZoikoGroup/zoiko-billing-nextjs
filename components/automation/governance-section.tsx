import React from 'react';

interface GovernanceRule {
  step: string;
  title: string;
  description: string;
}

const governanceRules: GovernanceRule[] = [
  {
    step: '01',
    title: 'Builder permission',
    description:
      'Who may create and edit workflow definitions, and within which data and action scope.',
  },
  {
    step: '02',
    title: 'Template publisher',
    description:
      'Who may publish a configuration as a reusable template for other teams.',
  },
  {
    step: '03',
    title: 'Approver and separation of duties',
    description:
      'Who may approve a definition or sensitive change, and when the approver may not be the author.',
  },
  {
    step: '04',
    title: 'Activation, pause and emergency stop',
    description:
      'Who may switch a workflow on, pause it, or stop it immediately when something is wrong.',
  },
  {
    step: '05',
    title: 'Restricted action and data scopes',
    description:
      'Which actions and which records a given workflow or role may ever touch.',
  },
  {
    step: '06',
    title: 'Export and bulk-action limits',
    description:
      'Constraints on exporting restricted data or applying an action across many records at once.',
  },
  {
    step: '07',
    title: 'Auditor read-only access',
    description:
      'Read-only access to definitions, versions, runs and decisions for review without operational power.',
  },
  {
    step: '08',
    title: 'Scoped administration',
    description:
      'Administrative power remains scoped, attributable and reviewable rather than unlimited.',
  },
];

export default function GovernanceSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-600">
                Governance
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight font-sans text-sky-950 sm:text-4xl lg:text-5xl">
              Control who can design, approve and operate automation.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Building a workflow, approving it, switching it on and reading its
              evidence are separate permissions.
            </p>
          </div>
        </div>

        <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          {governanceRules.map((rule) => (
            <div
              key={rule.step}
              className="flex flex-col items-start gap-4 p-5 transition-colors hover:bg-slate-50/50 sm:flex-row sm:gap-6 sm:p-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-[11px] font-mono font-semibold text-sky-600">
                {rule.step}
              </div>

              <div className="flex-1 space-y-1">
                <h3 className="text-base font-semibold leading-snug font-sans text-sky-950">
                  {rule.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-slate-600">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 rounded-r-2xl border-l-4 border-sky-600 bg-slate-200/60 p-6 sm:p-7">
          <span className="block text-[10px] font-mono font-medium uppercase tracking-wider text-sky-600">
            Governance boundary
          </span>
          <p className="max-w-4xl text-sm font-normal leading-relaxed text-sky-950 sm:text-base">
            A configured approval workflow is a control, not a universal compliance
            guarantee. It supports your obligations; it does not discharge them.
          </p>
        </div>
      </div>
    </section>
  );
}
