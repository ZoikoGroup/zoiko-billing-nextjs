'use client';

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Set the context',
    description:
      'Business, entity, currency and billing configuration for the markets you operate.',
  },
  {
    number: '02',
    title: 'Create or connect customers',
    description:
      'Billing profiles, contacts and terms, entered directly or through an approved integration.',
  },
  {
    number: '03',
    title: 'Create approved charges',
    description:
      'Charges and documents built from approved rules and routed for approval where required.',
  },
  {
    number: '04',
    title: 'Deliver the records',
    description:
      'Issue through configured channels and keep the delivery outcome on the record.',
  },
  {
    number: '05',
    title: 'Record and reconcile payments',
    description:
      'Capture outcomes from supported sources, allocate them and review exceptions.',
  },
  {
    number: '06',
    title: 'Review balances and reports',
    description:
      'Ageing, receivables activity and reporting with stated source, period and entity.',
  },
  {
    number: '07',
    title: 'Correct with history intact',
    description:
      'Apply approved corrections while the original event and reason remain traceable.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-sky-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-sky-600 font-mono">
                How it works
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-sky-950 font-sans sm:text-4xl lg:text-5xl">
              The controlled operating sequence.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              A summary of how teams run Zoiko Billing. This is an overview, not an onboarding checklist for the authenticated product.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-zinc-300 hover:shadow-md"
            >
              <div className="rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 px-2.5 py-1 text-xs font-semibold leading-4 text-white font-mono">
                {step.number}
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold leading-snug text-sky-950 font-sans">
                  {step.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
