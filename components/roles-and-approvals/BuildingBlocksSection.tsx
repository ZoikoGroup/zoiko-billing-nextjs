'use client';

import Image from 'next/image';

interface DecisionStatus {
  id: string;
  badge: string;
  badgeStyle: {
    bg: string;
    border: string;
    text: string;
  };
  title: string;
  description: string;
}

const DECISION_STATUSES: DecisionStatus[] = [
  {
    id: 'allow',
    badge: 'Allow',
    badgeStyle: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-700',
    },
    title: 'The action may proceed',
    description:
      'Permitted while all current conditions remain satisfied. Applicable policy and reason are recorded where required.',
  },
  {
    id: 'deny',
    badge: 'Deny',
    badgeStyle: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-700',
    },
    title: 'The action is prohibited',
    description:
      'Deny takes precedence according to approved policy order, with a safe explanation to the user.',
  },
  {
    id: 'require-approval',
    badge: 'Require approval',
    badgeStyle: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
    },
    title: 'A decision must be recorded',
    description:
      'Not executable until an eligible approver decides. Authority is rechecked at execution where required.',
  },
  {
    id: 'restrict',
    badge: 'Restrict',
    badgeStyle: {
      bg: 'bg-slate-100',
      border: 'border-slate-300',
      text: 'text-slate-700',
    },
    title: 'Allowed within a boundary',
    description:
      'Permitted only within specified fields, values, entities, times or channels, disclosed to authorized users.',
  },
  {
    id: 'escalate',
    badge: 'Escalate',
    badgeStyle: {
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-700',
    },
    title: 'A higher authority is needed',
    description:
      'Routed to an alternate or higher authority while the original requester and history are preserved.',
  },
];

export default function BuildingBlocksSection() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-16">
          {/* Eyebrow & Main Title */}
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-blue-600">
                Building blocks
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
              Combine responsibility, scope and permission deliberately.
            </h2>
          </div>

          {/* Header Subtitle */}
          <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Six concepts sit behind every authorization and approval decision. Select one to see what it covers.
          </p>
        </div>

        {/* Feature Visual Preview */}
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-slate-50 shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)]">
          <Image
            src="/images/roles-and-approvals/div.anat (1).png"
            alt="Authorization and approval building blocks diagram"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        {/* Decision Statuses Grid */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 gap-px sm:grid-cols-2 lg:grid-cols-5">
          {DECISION_STATUSES.map((status) => (
            <div
              key={status.id}
              className="flex flex-col gap-2.5 bg-white p-5 pb-8 sm:pb-10"
            >
              {/* Badge */}
              <div className="flex items-center">
                <span
                  className={`inline-block rounded-full border px-2.5 py-1 font-['IBM_Plex_Mono'] text-[10px] font-semibold uppercase tracking-wide ${status.badgeStyle.bg} ${status.badgeStyle.border} ${status.badgeStyle.text}`}
                >
                  {status.badge}
                </span>
              </div>

              {/* Status Title */}
              <h3 className="pt-1 font-['Plus_Jakarta_Sans'] text-sm font-semibold leading-snug text-sky-950">
                {status.title}
              </h3>

              {/* Status Description */}
              <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-600">
                {status.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}