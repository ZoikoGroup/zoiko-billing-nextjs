import React from 'react';

interface FeatureCardProps {
  id: string;
  title: string;
}

const featureCards: FeatureCardProps[] = [
  {
    id: '01',
    title: 'Multi-currency and entity-aware billing',
  },
  {
    id: '02',
    title: 'Role-based access and approvals',
  },
  {
    id: '03',
    title: 'Preserved audit history',
  },
  {
    id: '04',
    title: 'Integration-ready architecture',
  },
];

interface TimelineStepProps {
  step: number;
  title: string;
  subtitle: string;
}

const timelineSteps: TimelineStepProps[] = [
  { step: 1, title: 'Customer', subtitle: 'Account · Contacts · Terms' },
  { step: 2, title: 'Charge', subtitle: 'Price · Quantity · Version' },
  { step: 3, title: 'Invoice', subtitle: 'Approve · Issue · Deliver' },
  { step: 4, title: 'Payment', subtitle: 'Reference · Outcome' },
  { step: 5, title: 'Reconciliation', subtitle: 'Match · Exception' },
  { step: 6, title: 'Record', subtitle: 'Audit · Retention' },
];

export default function PlatformProofSection() {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Feature Grid & Image */}
        <div className="lg:col-span-6 space-y-8">
          {/* 2x2 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-6 rounded-2xl border border-zinc-200 flex flex-col justify-between h-48 shadow-xs"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 bg-slate-50 rounded-lg border border-blue-200 flex items-center justify-center text-blue-600 text-xs font-semibold font-mono">
                    {card.id}
                  </div>
                  <h3 className="text-zinc-900 text-base font-semibold leading-snug">
                    {card.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="text-blue-600 text-[10px] font-mono font-normal uppercase tracking-wide text-left hover:underline focus:outline-hidden"
                >
                  Show detail
                </button>
              </div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <img
              src="/images/home/frame-1.png"
              alt="Platform Proof Visualization"
              className="w-full h-auto object-cover max-h-[431px]"
            />
          </div>
        </div>

        {/* Right Column: Hero Copy & Billing Lifecycle Diagram */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header & Tag */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
                Platform proof
              </span>
            </div>
            <h2 className="text-zinc-900 text-4xl sm:text-5xl font-medium leading-tight">
              Control that finance teams can trust.
            </h2>
            <p className="text-slate-600 text-base font-normal leading-relaxed max-w-xl">
              Designed for controlled financial operations across teams, entities, and markets.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="px-5 py-2.5 bg-sky-950 text-white rounded-md font-normal text-base hover:bg-sky-900 transition-colors"
              >
                Explore the Platform
              </button>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-normal text-base hover:text-blue-700 transition-colors"
              >
                <span>Visit the Trust Center</span>
                <span className="font-mono font-bold">→</span>
              </a>
            </div>
          </div>

          {/* Lifecycle Signal / Timeline Card */}
          <div className="bg-slate-50 border border-blue-200 rounded-3xl p-6 sm:p-8 space-y-6">
            {/* Diagram Header Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-blue-600 text-[10px] font-mono uppercase tracking-wide">
                Billing lifecycle signal
              </span>
              <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-zinc-200 text-zinc-500 text-[10px] font-mono uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                Diagram
              </div>
            </div>

            {/* Timeline Steps with Vertical Connecting Line */}
            <div className="relative pl-2">
              {/* Vertical Progress Bar Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-blue-600" />

              <div className="space-y-4">
                {timelineSteps.map((item) => (
                  <div
                    key={item.step}
                    className="relative flex items-center gap-4 py-1.5"
                  >
                    <div className="relative z-10 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px] font-semibold font-mono shrink-0">
                      {item.step}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-900 text-base font-semibold">
                        {item.title}
                      </span>
                      <span className="text-slate-600 text-[10px] font-mono tracking-tight">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}