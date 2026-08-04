'use client';

import Image from 'next/image';

interface LifecycleStage {
  step: string;
  title: string;
  description: string;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: '01',
    title: 'Request',
    description: 'Action, record values, reason and, initiator are captured.',
  },
  {
    step: '02',
    title: 'Validate',
    description: 'Permissions, policy, data and dependencies are confirmed.',
  },
  {
    step: '03',
    title: 'Assign',
    description: 'An eligible approver or group receives the decision task.',
  },
  {
    step: '04',
    title: 'Review',
    description: 'Relevant source and change context is presented.',
  },
  {
    step: '05',
    title: 'Decide',
    description: 'Approve, reject, and change context is presented.',
  },
  {
    step: '06',
    title: 'Execute',
    description: 'Current authority is rechecked before the action runs.',
  },
  {
    step: '07',
    title: 'Complete',
    description: 'Result, failure or partial outcome is recorded.',
  },
  {
    step: '08',
    title: 'Expire',
    description: 'Expiry, cancellation or supersession stays visible.',
  },
];

export default function ApprovalLifecycleSection() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-11">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-16">
          {/* Eyebrow & Main Title */}
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-blue-600">
                Approval lifecycle
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              From proposed action to accountable decision.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Eight stages, each leaving evidence. Approval and execution are separate events, because the world can change between them.
          </p>
        </div>

        {/* 8-Stage Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LIFECYCLE_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
            >
              {/* Step Badge */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 font-['IBM_Plex_Mono'] text-[10px] font-semibold text-white">
                {stage.step}
              </div>

              {/* Stage Title & Description */}
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

        {/* Workflow Lifecycle Visual Preview */}
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-slate-50 shadow-sm">
          <Image
            src="/images/roles-and-approvals/div.vocab (2).png"
            alt="Approval lifecycle workflow detailed diagram"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

      </div>
    </section>
  );
}