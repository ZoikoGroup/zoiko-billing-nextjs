import React from 'react';
import Image from 'next/image';

interface LifecycleStep {
  step: string;
  title: string;
  description: string;
}

const steps: LifecycleStep[] = [
  {
    step: '01',
    title: 'Draft',
    description: 'Definition prepared and an owner assigned. It cannot execute.',
  },
  {
    step: '02',
    title: 'Validate',
    description: 'Fields, permissions, actions and dependencies are checked.',
  },
  {
    step: '03',
    title: 'Approve',
    description: 'Authorized review where the definition or change requires it.',
  },
  {
    step: '04',
    title: 'Activate',
    description: 'Published and eligible to trigger on configured events.',
  },
  {
    step: '05',
    title: 'Monitor',
    description: 'Runs, failures, limits and outcome states are observable.',
  },
  {
    step: '06',
    title: 'Revise',
    description: 'Pause, change and reapprove as a new version.',
  },
  {
    step: '07',
    title: 'Retire',
    description: 'No new runs. Definition and history retained per policy.',
  },
];

export default function WorkflowLifecycleSection() {
  return (
    <section className="w-full bg-white px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-600">
                Lifecycle
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight font-sans text-sky-950 sm:text-4xl lg:text-5xl">
              Approve, activate and revise workflows without losing history.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              A definition moves through the same governed path every time, and
              editing an active definition never silently changes work already in
              flight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-sky-500/40 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 text-[11px] font-mono font-semibold text-white shadow-xs">
                  {item.step}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-semibold leading-snug font-sans text-sky-950">
                  {item.title}
                </h3>
                <p className="text-xs font-normal leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full pt-4">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xs">
            <Image
              src={encodeURI('/images/automation/div.vocab.png')}
              alt="Workflow Lifecycle Visual Blueprint"
              width={1116}
              height={558}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
