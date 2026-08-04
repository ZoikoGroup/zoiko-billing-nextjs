'use client';

interface TrustCard {
  title: string;
  description: string;
}

const trustItems: TrustCard[] = [
  {
    title: 'Role-based access',
    description:
      'Actions are controlled by role, organisation, entity and assigned responsibility rather than by convention.',
  },
  {
    title: 'Approval controls',
    description:
      'Sensitive charges, discounts, credits, adjustments and high-value invoices can require defined approval before they take effect.',
  },
  {
    title: 'Audit events',
    description:
      'Material events record the responsible user or system, timestamp, affected record, prior state, resulting state and the supporting rule.',
  },
  {
    title: 'Encryption and data handling',
    description:
      'Summaries are published only from approved sources. Internal security architecture is not disclosed publicly.',
  },
  {
    title: 'Availability and claim status',
    description:
      'Capability, market and integration claims carry a status, owner, source and effective date.',
  },
  {
    title: 'No badge without evidence',
    description:
      'Certification badges and compliance claims appear only with current evidence, defined scope and an accountable owner.',
  },
];

export default function TrustAndControlSection() {
  return (
    <section className="w-full bg-slate-100/70 px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-sky-600 font-mono">
                Trust and control
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-sky-950 font-sans sm:text-4xl lg:text-5xl">
              Govern sensitive billing actions with attributable control.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Who may act, what required approval, what was recorded, and what we are willing to claim in public.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between space-y-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:p-7"
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold leading-snug text-sky-950 font-sans">
                  {item.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
          <a
            href="#security-trust"
            className="inline-flex w-full items-center justify-center rounded-lg bg-sky-950 px-6 py-3  font-medium text-white shadow-xs transition-colors duration-150 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
            style={{color:"white"}}
          >
            Review security and trust
          </a>

          <a
            href="#product-availability"
            className="group inline-flex items-center gap-2 px-2 py-3 font-sans text-base font-medium text-sky-700 transition-colors focus:outline-none hover:text-sky-900"
          >
            <span>Check product availability</span>
            <span className="font-mono transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
