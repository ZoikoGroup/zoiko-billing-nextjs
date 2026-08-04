import React from 'react';

interface StageItem {
  stage: string;
  title: string;
  description: string;
}

const stages: StageItem[] = [
  {
    stage: 'STAGE 01',
    title: 'Customer',
    description: 'Billing profile, contacts and terms',
  },
  {
    stage: 'STAGE 02',
    title: 'Charge',
    description: 'Line items, fees, discounts and corrections',
  },
  {
    stage: 'STAGE 03',
    title: 'Invoice',
    description: 'Approved billing documents and credit notes',
  },
  {
    stage: 'STAGE 04',
    title: 'Delivery',
    description: 'Generation, sending and delivery records',
  },
  {
    stage: 'STAGE 05',
    title: 'Payment record',
    description: 'Recorded outcomes and allocation',
  },
  {
    stage: 'STAGE 06',
    title: 'Reconciliation',
    description: 'Matching and exception review',
  },
  {
    stage: 'STAGE 07',
    title: 'Outstanding balance',
    description: 'Ageing and collection visibility',
  },
  {
    stage: 'STAGE 08',
    title: 'Reporting',
    description: 'Billing, payment and receivables reporting',
  },
];

export default function ConnectedRecordSection() {
  return (
    <section className="w-full bg-white px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl rounded-[28px] border border-cyan-500/25 bg-[#0b2444] px-5 py-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_30px_90px_rgba(2,6,23,0.45)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div className="space-y-10 lg:space-y-12">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-500" />
                <span className="text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
                  The connected record
                </span>
              </div>
              <h2 className="text-3xl font-medium leading-tight text-white font-sans sm:text-4xl lg:text-5xl">
                Keep the billing record connected from customer to payment.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
                A conceptual view of how records connect. Real sequencing varies by customer, provider, entity and jurisdiction.
              </p>
            </div>
          </div>

          {/* Stages Cards Pipeline Grid */}
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {stages.map((item) => (
              <div
                key={item.stage}
                className="flex flex-col justify-between space-y-2 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <span className="block text-[10px] font-mono font-normal uppercase tracking-wider text-cyan-400">
                  {item.stage}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold leading-snug text-white font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs font-normal leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Boundary Callout */}
          <div className="space-y-2 rounded-r-2xl border-l-4 border-cyan-400 bg-white/[0.06] p-6 sm:p-7">
            <span className="block text-cyan-400 text-[10px] font-mono font-medium uppercase tracking-wider">
              Boundary
            </span>
            <p className="max-w-4xl text-sm font-normal leading-relaxed text-slate-200 sm:text-base">
              This journey is conceptual. Zoiko Billing records and reconciles payments through approved providers; it does not process every payment, file taxes or replace accounting software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
