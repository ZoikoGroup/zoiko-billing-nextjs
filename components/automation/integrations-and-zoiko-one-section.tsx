import React from 'react';

const connectorCategories = [
  'Payment Providers',
  'Accounting & ERP',
  'CRM Platforms',
  'Banking & Reconciliation',
];

const zoikoOneFeatures = [
  'Shared identity',
  'Approved events',
  'Record handoffs',
  'Cross-product navigation',
];

export default function IntegrationsAndZoikoOneSection() {
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
                    Integrations and Zoiko One
                  </span>
                </div>
                <h2 className="text-3xl font-medium leading-tight font-sans text-white sm:text-4xl lg:text-5xl">
                  Let approved services take part - on defined terms.
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="text-base font-normal leading-relaxed text-sky-200/80 sm:text-lg">
                  External events can start a workflow, and approved connector
                  actions can run inside one, with direction, timing and error
                  behaviour stated up front.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 pt-2 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold leading-snug font-sans text-white sm:text-xl">
                    Governed connector participation
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-sky-200/80">
                    A verified integration event may start a workflow. An approved
                    connector action may be invoked within its permitted scope.
                    Source ownership and conflict rules stay visible.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 py-2">
                  {connectorCategories.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-normal text-sky-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#explore-integrations"
                    className="rounded-lg bg-white px-5 py-2.5 text-base font-normal !text-sky-950 shadow-xs transition-colors hover:bg-slate-100 hover:!text-sky-950"
                  >
                    Explore integrations
                  </a>
                  <a
                    href="#webhooks"
                    className="inline-flex items-center gap-2 text-base font-normal !text-cyan-400 transition-colors hover:!text-cyan-300"
                  >
                    <span>Webhooks</span>
                    <span className="font-mono font-bold">-&gt;</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold leading-snug font-sans text-white sm:text-xl">
                    Zoiko One participation
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-sky-200/80">
                    Where enabled, Zoiko One may provide shared identity, approved
                    events, record handoffs and cross-product navigation. Zoiko
                    Billing remains independently deployable.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 py-2">
                  {zoikoOneFeatures.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-normal text-sky-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#compare-deployment"
                    className="inline-block rounded-lg border border-white/35 bg-transparent px-5 py-2.5 text-base font-normal !text-white transition-colors hover:bg-white/10 hover:!text-white"
                  >
                    Compare deployment options
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2 rounded-r-2xl border-l-4 border-cyan-400 bg-white/5 p-6 sm:p-7">
              <span className="block text-[10px] font-mono font-medium uppercase tracking-wider text-cyan-400">
                Connector boundary
              </span>
              <p className="max-w-4xl text-sm font-normal leading-relaxed text-sky-100">
                Connectors are not all real-time, bidirectional, idempotent or
                universally available. Direction, timing, retry and error behaviour
                are stated per connector in the governed integration registry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
