"use client";

import React from "react";

export default function IntegrationsApi() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                09
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Integrations &amp; API access
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Listed does not mean enabled.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Access depends on plan, environment, region, and provider setup.
              Each row states which.
            </p>
          </div>

          {/* Image / integration matrix */}
          <div className="mt-0.5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            <div className="flex min-h-[360px] w-full items-center justify-center bg-gray-50 px-5 py-10 sm:min-h-[480px] sm:px-8 lg:min-h-[632px] lg:px-12">
              <div className="w-full max-w-[1100px]">
                <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
                  {/* Table header */}
                  <div className="hidden border-b border-gray-200 pb-3 sm:grid sm:grid-cols-[1.5fr_1fr_1fr_1fr] sm:gap-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Integration
                    </span>

                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Plan
                    </span>

                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Environment
                    </span>

                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Region / provider
                    </span>
                  </div>

                  {/* Example rows */}
                  <div className="divide-y divide-gray-200">
                    {[
                      {
                        name: "Payment provider",
                        plan: "Plan-dependent",
                        environment: "Production",
                        region: "Provider-dependent",
                      },
                      {
                        name: "Accounting integration",
                        plan: "Plan-dependent",
                        environment: "Production",
                        region: "Region-dependent",
                      },
                      {
                        name: "Developer API",
                        plan: "Plan-dependent",
                        environment: "Sandbox / production",
                        region: "Availability-dependent",
                      },
                      {
                        name: "Webhooks",
                        plan: "Optional",
                        environment: "Production",
                        region: "Provider setup",
                      },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-[1.5fr_1fr_1fr_1fr] sm:items-center sm:gap-4"
                      >
                        <div>
                          <p className="text-sm font-semibold leading-6 text-slate-900">
                            {row.name}
                          </p>
                        </div>

                        <div>
                          <span className="inline-flex rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                            {row.plan}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm leading-5 text-slate-600">
                            {row.environment}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm leading-5 text-slate-600">
                            {row.region}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}