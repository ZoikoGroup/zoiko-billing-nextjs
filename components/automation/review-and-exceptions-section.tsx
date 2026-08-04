import React from 'react';
import Image from 'next/image';

interface ExceptionClass {
  title: string;
  description: string;
}

const exceptionClasses: ExceptionClass[] = [
  {
    title: 'Validation failure',
    description:
      'A required field, permission, action or dependency is invalid. Activation is blocked and the exact issue is identified.',
  },
  {
    title: 'Permission denied',
    description:
      'The workflow or service identity lacks the required scope. The step pauses and routes to an authorized owner.',
  },
  {
    title: 'Duplicate event',
    description:
      'The same event may have arrived before. Idempotency state applies and the action is not repeated.',
  },
  {
    title: 'Condition unknown',
    description:
      'Required context is missing, restricted or unresolved. Configured false, wait or review behaviour applies - never a guess.',
  },
  {
    title: 'Integration unavailable',
    description:
      'A connector or downstream service cannot complete. Retry under policy, pause, or require manual recovery.',
  },
  {
    title: 'Rate or volume limit',
    description:
      'Execution is delayed or blocked by an approved limit. Work queues safely and the owner is alerted.',
  },
  {
    title: 'Partial success',
    description:
      'Some actions completed and others did not. Irreversible effects and compensation options are shown.',
  },
  {
    title: 'Review expired',
    description:
      'The decision was not made within the allowed time. Escalate, reassign, cancel or pause per policy.',
  },
];

export default function ReviewAndExceptionsSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-600">
                Review and exceptions
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight font-sans text-sky-950 sm:text-4xl lg:text-5xl">
              Make failure and recovery part of the workflow.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Oversight only works if the reviewer has enough context to disagree.
              Exceptions carry a class, an owner and a route back to a working
              state.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-4 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-snug font-sans text-sky-950 sm:text-xl">
                What a reviewer actually sees
              </h3>
              <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                Trigger, affected record, proposed action, reason, source evidence
                and deadline - then the decisions their permission allows.
              </p>
            </div>

            <div className="pt-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                <Image
                  src={encodeURI('/images/automation/div.revcard.png')}
                  alt="Reviewer Interface Preview"
                  width={526}
                  height={459}
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-snug font-sans text-sky-950 sm:text-xl">
                Exception classes and recovery
              </h3>
              <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                Each failure is classified so the right recovery applies, and so
                escalation carries an owner, severity and elapsed time.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200 pt-1">
              {exceptionClasses.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 items-start gap-2 py-4 sm:grid-cols-12 sm:gap-4"
                >
                  <div className="sm:col-span-4">
                    <h4 className="text-sm font-semibold leading-snug font-sans text-sky-950">
                      {item.title}
                    </h4>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-sm font-normal leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <a
            href="#explore-roles"
            className="inline-flex items-center justify-center rounded-lg bg-sky-950 px-6 py-3 !text-white shadow-xs transition-colors hover:bg-sky-900 hover:!text-white"
            style={{ color: '#fff' }}
          >
            Explore Roles &amp; Approvals
          </a>
        </div>
      </div>
    </section>
  );
}
