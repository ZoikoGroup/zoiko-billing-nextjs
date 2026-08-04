import React from 'react';

interface RuleStep {
  number: string;
  title: string;
  description: string;
}

const ruleSteps: RuleStep[] = [
  {
    number: '01',
    title: 'Explicit trigger and conditions',
    description:
      'Every workflow starts from an approved event, schedule, manual start or connector signal.',
  },
  {
    number: '02',
    title: 'Permitted action and owner',
    description:
      'Actions are scoped to what the workflow is allowed to do, and every one has a named owner.',
  },
  {
    number: '03',
    title: 'Human review when required',
    description: 'Configured sensitive or consequential actions wait for a real decision.',
  },
  {
    number: '04',
    title: 'Visible exception and audit path',
    description: 'Failures surface with a class, owner and recovery route. Runs leave evidence.',
  },
  {
    number: '05',
    title: 'Availability varies',
    description:
      'Capability, plan, connector and jurisdiction all affect what is available to you.',
  },
];

export default function WorkflowRulesSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-11">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {ruleSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between space-y-4 bg-white p-5 transition-colors hover:bg-slate-50/80 sm:p-6"
            >
              <div className="space-y-3">
                <span className="block text-[10px] font-mono font-medium tracking-wider text-sky-600">
                  {step.number}
                </span>
                <h3 className="font-sans text-base font-semibold leading-snug text-sky-950">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm font-normal leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2 rounded-r-2xl border-l-4 border-sky-600 bg-slate-200/60 p-6 sm:p-7">
          <span className="block text-[10px] font-mono font-medium uppercase tracking-wider text-sky-600">
            Operating boundary
          </span>
          <p className="max-w-4xl text-sm font-normal leading-relaxed text-sky-950 sm:text-base">
            This is controlled automation, not autonomous operation. Zoiko Billing
            does not offer unrestricted scripting or access to every record and
            action, and no workflow determines creditworthiness, misconduct, legal
            liability or tax treatment.
          </p>
        </div>
      </div>
    </section>
  );
}
