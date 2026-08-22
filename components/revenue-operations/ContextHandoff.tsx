"use client";

import Image from "next/image";

export default function ContextHandoff() {
  return (
    <section className="w-full border-t border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-[0.16em] text-blue-600">
            Customer &amp; commercial context handoff
          </span>
        </div>

        {/* Heading */}
        <div className="w-full">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            A handoff can carry context without transferring authority.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="m-0 text-sm font-normal leading-6 text-slate-600 sm:text-base">
            Each arrow below is a governed relationship with a named direction
            and owner. Where a relationship is only workflow context, it says
            so rather than implying a sync.
          </p>
        </div>

        {/* Main Diagram Card */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:p-6 lg:p-8">
          <div className="w-full overflow-x-auto">
            <div className="mx-auto min-w-[900px] max-w-[1200px] py-3">
              {/* Diagram title */}
              <div className="mb-8 text-center text-xs font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-sm">
                Governed handoff routes — Mapping v6
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-5">
                {/* Approved Source */}
                <div className="min-h-[190px] border border-slate-300 bg-slate-50 p-6">
                  <h3 className="m-0 text-lg font-bold text-slate-900">
                    Approved source
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    CRM or upstream system
                  </p>

                  <div className="mt-6 space-y-2 text-sm text-slate-900">
                    <p className="m-0">Owns: commercial context</p>
                    <p className="m-0">Owns: opportunity record</p>
                  </div>

                  <p className="mt-6 mb-0 text-sm font-bold text-slate-700">
                    Not a billing authority
                  </p>
                </div>

                {/* Approved Fields / Reference Only */}
                <div className="flex min-w-[150px] flex-col items-center gap-3">
                  <div className="flex w-full items-center">
                    <div className="h-0.5 flex-1 bg-blue-600" />
                    <div className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-blue-600" />
                  </div>

                  <div className="text-center">
                    <p className="m-0 text-sm font-bold text-slate-700">
                      Approved fields
                    </p>

                    <p className="m-0 mt-1 text-sm text-slate-600">
                      validated, versioned
                    </p>
                  </div>

                  <div className="mt-2 flex w-full items-center">
                    <div className="h-0.5 flex-1 bg-slate-400" />
                    <div className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-slate-400" />
                  </div>

                  <p className="m-0 text-center text-sm font-bold text-slate-600">
                    Reference only
                  </p>
                </div>

                {/* Zoiko Billing */}
                <div className="min-h-[240px] border border-blue-200 bg-slate-50 p-6">
                  <div className="mb-5">
                    <Image
                      src="/images/revenue-operations/zoikobilling-logo.png"
                      alt="Zoiko Billing"
                      width={160}
                      height={40}
                      className="h-auto w-32 sm:w-40"
                    />
                  </div>

                  <div className="space-y-2 text-sm text-slate-900">
                    <p className="m-0">Owns: billing profile</p>
                    <p className="m-0">Owns: schedule</p>
                    <p className="m-0">Owns: document lifecycle</p>
                    <p className="m-0">Owns: delivery state</p>
                  </div>
                </div>

                {/* Invoice / Payment State */}
                <div className="flex min-w-[150px] flex-col items-center gap-3">
                  <div className="flex w-full items-center">
                    <div className="h-0.5 flex-1 bg-blue-600" />
                    <div className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-blue-600" />
                  </div>

                  <div className="text-center">
                    <p className="m-0 text-sm font-bold text-slate-700">
                      Invoice &amp; balance
                    </p>

                    <p className="m-0 mt-1 text-sm text-slate-600">
                      Finance decides outcome
                    </p>
                  </div>

                  <div className="mt-2 flex w-full items-center">
                    <div className="h-0.5 flex-1 bg-slate-400" />
                    <div className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-slate-400" />
                  </div>

                  <p className="m-0 text-center text-sm font-bold text-slate-600">
                    Payment state, read only
                  </p>
                </div>

                {/* Finance & AR */}
                <div className="min-h-[190px] border border-emerald-300 bg-slate-50 p-6">
                  <h3 className="m-0 text-lg font-bold text-slate-900">
                    Finance &amp; AR
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Downstream authority
                  </p>

                  <div className="mt-6 space-y-2 text-sm text-slate-900">
                    <p className="m-0">Owns: allocation</p>
                    <p className="m-0">Owns: reconciliation</p>
                    <p className="m-0">Owns: credit approval</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Context Handoff Image */}
        <div className="mt-1 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/revenue-operations/context-handoff.png"
            alt="Customer and commercial context handoff"
            width={1264}
            height={632}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}