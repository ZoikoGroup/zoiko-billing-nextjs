import React from 'react';
import Image from 'next/image';

interface FeatureCard {
  title: string;
  description: string;
}

const runtimeFeatures: FeatureCard[] = [
  {
    title: 'Duplicate protection',
    description:
      'Idempotency keys and duplicate-event handling stop the same action running twice.',
  },
  {
    title: 'Versioning',
    description:
      'Definitions and actions are versioned; a run is tied to the version that started it.',
  },
  {
    title: 'Limits and concurrency',
    description:
      'Execution, rate and concurrency limits keep load predictable.',
  },
  {
    title: 'Run states and timestamps',
    description: 'Every state change is recorded with the time it occurred.',
  },
  {
    title: 'Service and user identity',
    description:
      'Runs record the service identity and the initiating user context.',
  },
  {
    title: 'Structured logs',
    description:
      'Audit and operational logs are structured for review, not free text.',
  },
  {
    title: 'Retry and dead-letter',
    description:
      'Retry policy with backoff, and an explicit unresolved state when attempts are exhausted.',
  },
  {
    title: 'Safe pause and reprocess',
    description:
      'Work can be paused and reprocessed under control rather than abandoned.',
  },
];

export default function RuntimeReliabilitySection() {
  return (
    <section className="w-full bg-white px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] bg-sky-950 px-5 py-6 text-white shadow-[0_22px_60px_rgba(2,6,23,0.14)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="space-y-10 lg:space-y-12">
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col items-start gap-4 lg:col-span-7">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-cyan-400">
                    Runtime
                  </span>
                </div>
                <h2 className="text-3xl font-medium leading-tight font-sans text-white sm:text-4xl lg:text-5xl">
                  Execution that stays safe, attributable and observable.
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="text-base font-normal leading-relaxed text-sky-200/80 sm:text-lg">
                  How runs behave under duplication, failure, load and revision -
                  and what evidence each one leaves.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {runtimeFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col justify-start space-y-2.5 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xs transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <h3 className="text-sm font-semibold leading-snug font-sans text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-normal leading-relaxed text-sky-200/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full pt-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-sky-900/30 shadow-md">
                <Image
                  src={encodeURI('/images/automation/div.vocab (1).png')}
                  alt="Runtime Execution Model & Observability"
                  width={955}
                  height={571}
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
