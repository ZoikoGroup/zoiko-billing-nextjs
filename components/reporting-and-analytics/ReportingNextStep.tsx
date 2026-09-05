"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Definition",
    description: "Formula, grain, owner, version",
  },
  {
    number: "02",
    title: "Scope",
    description: "Entity, currency, date basis",
  },
  {
    number: "03",
    title: "Snapshot",
    description: "As-of, freshness, completeness",
  },
  {
    number: "04",
    title: "Presentation",
    description: "Table first, chart alongside",
  },
  {
    number: "05",
    title: "Drill-through",
    description: "Context preserved, permission-aware",
  },
  {
    number: "06",
    title: "Export",
    description: "Permissioned and audited",
  },
];

export default function ReportingNextStep() {
  return (
    <section className="w-full bg-sky-950 px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10">
        <div className="flex w-full flex-col items-start justify-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="flex w-full flex-1 flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-cyan-300">
                Next step
              </span>
            </div>

            <h2 className="pt-1 text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Start with the
              <br className="hidden sm:block" />
              reporting questions
              <br className="hidden sm:block" />
              your operation
              <br className="hidden sm:block" />
              needs to answer.
            </h2>

            <p className="max-w-[529px] text-base font-normal leading-8 text-slate-300">
              Decide which numbers people will act on, who owns their
              definitions, and what evidence has to sit behind each one.
            </p>

            {/* CTAs */}
            <div className="relative z-10 flex flex-col items-start gap-3 pt-4 sm:flex-row">
              <Link
                href="create-account"
                className="inline-flex min-h-11 items-center justify-center rounded-lg !bg-sky-600 px-5 py-2.5 text-base font-normal leading-6 !text-white !outline !outline-1 !outline-offset-[-1px] !outline-sky-600 transition hover:!bg-sky-500 hover:!text-white"
              >
                Create Account
              </Link>

              <Link
                href="book-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-lg !bg-transparent px-5 py-2.5 text-base font-normal leading-6 !text-white !outline !outline-1 !outline-offset-[-1px] !outline-white/30 transition hover:!bg-white/10 hover:!text-white"
              >
                Book a Demo
              </Link>
            </div>

            <p className="mt-2 text-sm font-normal leading-7 text-slate-300">
              A chart is never the source of truth.
              <br />
              Availability varies by plan, metric, dataset, integration and
              market.
            </p>
          </div>

          {/* Right Process Card */}
          <div className="flex w-full flex-1 flex-col gap-5">
            <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
              <div className="flex flex-col">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex items-center gap-4 py-3 ${
                      index !== steps.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600 font-mono text-[9px] font-normal leading-4 text-white">
                      {step.number}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="text-sm font-normal leading-6 text-slate-200">
                        {step.title}
                      </span>

                      <span className="font-mono text-[10px] font-normal leading-4 text-sky-300">
                        {step.description}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold leading-6 text-white">
                    Billing clarity from invoice to payment.
                  </p>
                </div>
              </div>
            </div>

            {/* Explore Platform */}
            <div className="relative z-10 flex flex-wrap items-center">
              <Link
                href="platform-overview"
                className="inline-flex min-h-11 items-center justify-center rounded-lg !bg-transparent px-5 py-2.5 text-base font-normal leading-6 !text-white !outline !outline-1 !outline-offset-[-1px] !outline-white/30 transition hover:!bg-white/10 hover:!text-white"
              >
                Explore the platform
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}