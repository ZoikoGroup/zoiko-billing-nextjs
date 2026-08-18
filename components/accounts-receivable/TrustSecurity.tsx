"use client";

import React from "react";

const trustItems = [
  {
    title: "Role-based actions",
    description:
      "View, assign, contact, hold, promise, dispute and export are separately permissioned.",
  },
  {
    title: "Data protection",
    description:
      "Customer contact, financial, dispute and communication data are protected in access and handling.",
  },
  {
    title: "Full evidence chain",
    description:
      "Ownership, messages, decisions, promises, payments and status changes all leave evidence.",
  },
  {
    title: "Secure channels and identities",
    description:
      "Channels, templates and service identities run on approved controls.",
  },
  {
    title: "Retention and access requests",
    description:
      "Retention, complaint, access-request and legal-hold treatment are defined in advance.",
  },
  {
    title: "Nothing sensitive in analytics",
    description:
      "No sensitive customer or balance data in ordinary analytics.",
  },
];

export default function TrustSecurity() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex w-full flex-col gap-9">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
            {/* Left */}
            <div className="flex w-full flex-1 flex-col items-start gap-5 pb-6">
              {/* Label */}
              <div className="flex h-4 items-center">
                <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

                <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                  Trust, privacy and security
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[638px] text-3xl font-medium leading-[1.12] text-sky-950 sm:text-4xl lg:text-5xl dark:text-white">
                Receivables work
                <br />
                touches people, not just
                <br />
                balances.
              </h2>
            </div>

            {/* Right */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                Contact data, dispute detail and communication history are
                sensitive in their own right, and are handled that way.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-2.5 sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-700 dark:bg-slate-700">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[180px] flex-col items-start bg-white px-6 py-6 dark:bg-slate-900"
              >
                <h3 className="pb-1 text-base font-semibold leading-6 text-sky-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Policy Boundary */}
          <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-7 sm:px-7 sm:py-9 dark:bg-slate-900">
            <div className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Policy boundary
            </div>

            <p className="mt-2 max-w-[900px] text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
              Internal collection logic, secrets and certification claims are
              published only with evidence. Product controls do not replace
              legal, regulatory, customer-support or vulnerable-customer
              policy.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Review Security */}
            <button
              type="button"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2.5 text-sm font-normal leading-6 text-white transition hover:bg-sky-900 sm:w-auto sm:text-base dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
            >
              Review security and trust
            </button>

            {/* Privacy Notice */}
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 px-1 py-2.5 text-sm font-normal leading-6 text-sky-600 transition hover:text-sky-800 sm:text-base dark:text-sky-400 dark:hover:text-sky-300"
            >
              <span>Read the privacy notice</span>
              <span className="text-base font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}