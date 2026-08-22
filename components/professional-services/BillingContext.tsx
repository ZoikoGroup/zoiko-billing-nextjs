"use client";

import Image from "next/image";

const contextCards = [
  {
    title: "Project or CRM system",
    subtitle: "Approved upstream source",
    items: [
      "Owns: engagement record",
      "Owns: milestone completion",
    ],
    note: "Not a billing authority",
    type: "source",
  },
  {
    title: "Zoiko Billing",
    subtitle: "",
    items: [
      "Owns: billing basis",
      "Owns: schedule",
      "Owns: invoice lifecycle",
      "Owns: delivery state",
    ],
    type: "billing",
  },
  {
    title: "Finance & AR",
    subtitle: "Downstream authority",
    items: [
      "Owns: allocation",
      "Owns: reconciliation",
      "Owns: credit approval",
    ],
    type: "finance",
  },
];

export default function BillingContext() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Client, engagement &amp; billing context
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Context can arrive from your project tool. Authority does not.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          An engagement reference links billing to the work without creating a
          shadow project-management record. Each arrow below is a governed
          relationship with a named direction.
        </p>

        {/* Diagram Card */}
        <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:px-6 sm:py-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
            {/* Project / CRM */}
            <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5 lg:w-[260px]">
              <h3 className="text-lg font-bold text-slate-900">
                Project or CRM system
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Approved upstream source
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-900">
                <p>Owns: engagement record</p>
                <p>Owns: milestone completion</p>
              </div>

              <p className="mt-6 text-sm font-bold text-blue-700">
                Not a billing authority
              </p>
            </div>

            {/* Route 1 */}
            <div className="hidden min-w-0 flex-1 flex-col items-center lg:flex">
              <span className="text-center text-sm font-bold text-blue-700">
                Approved fields
              </span>
              <span className="mt-1 text-center text-sm text-slate-500">
                validated, versioned
              </span>
              <div className="mt-3 h-0.5 w-full bg-blue-600" />
            </div>

            {/* Billing */}
            <div className="w-full rounded-xl border border-blue-200 bg-white p-5 shadow-sm lg:w-[260px]">
              <div className="mb-5 flex justify-center">
                <Image
                  src="/images/professional-services/billing-context.png"
                  alt="Billing context"
                  width={160}
                  height={56}
                  className="h-auto w-[140px] object-contain"
                />
              </div>

              <div className="space-y-2 text-sm text-slate-900">
                <p>Owns: billing basis</p>
                <p>Owns: schedule</p>
                <p>Owns: invoice lifecycle</p>
                <p>Owns: delivery state</p>
              </div>
            </div>

            {/* Route 2 */}
            <div className="hidden min-w-0 flex-1 flex-col items-center lg:flex">
              <span className="text-center text-sm font-bold text-blue-700">
                Invoice &amp; balance
              </span>
              <div className="mt-3 h-0.5 w-full bg-blue-600" />
              <span className="mt-3 text-center text-sm font-bold text-slate-500">
                Payment state, read only
              </span>
            </div>

            {/* Finance & AR */}
            <div className="w-full rounded-xl border border-green-200 bg-green-50 p-5 lg:w-[240px]">
              <h3 className="text-lg font-bold text-slate-900">
                Finance &amp; AR
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Downstream authority
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-900">
                <p>Owns: allocation</p>
                <p>Owns: reconciliation</p>
                <p>Owns: credit approval</p>
              </div>
            </div>
          </div>

          {/* Mobile relationship labels */}
          <div className="mt-8 flex flex-col gap-4 lg:hidden">
            <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-sm font-bold text-blue-700">
                Approved fields
              </p>
              <p className="text-sm text-slate-600">
                Validated, versioned
              </p>
            </div>

            <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-sm font-bold text-blue-700">
                Invoice &amp; balance
              </p>
              <p className="text-sm font-bold text-slate-500">
                Payment state, read only
              </p>
            </div>
          </div>

          {/* Governance */}
          <div className="mt-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Governed context routes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}