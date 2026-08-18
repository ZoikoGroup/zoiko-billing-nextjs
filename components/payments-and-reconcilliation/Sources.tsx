"use client";

import Link from "next/link";

const evidenceRows = [
  {
    number: "1",
    label: "Source",
    value: "Approved payment provider · webhook",
    mono: false,
  },
  {
    number: "2",
    label: "Event and dedupe key",
    value: "evt_7c19 · key pmt_7c19_v1",
    mono: true,
  },
  {
    number: "3",
    label: "Original state",
    value: '"transfer.completed" · retained verbatim',
    mono: true,
  },
  {
    number: "4",
    label: "Normalized state",
    value: "settled · mapping version 6",
    mono: true,
  },
  {
    number: "5",
    label: "Timestamps",
    value: "received 24 Jul 11:02Z · provider 24 Jul 10:58Z",
    mono: true,
  },
  {
    number: "6",
    label: "Value and settlement date",
    value: "value 24 Jul · settlement 25 Jul",
    mono: true,
  },
];

const sourceRows = [
  {
    title: (
      <>
        Payment provider
        <br />
        events
      </>
    ),
    description:
      "Gateway or provider events, where that provider is verified for your configuration.",
  },
  {
    title: (
      <>
        Bank and open
        <br />
        banking
      </>
    ),
    description:
      "Bank statement, open-banking or file import where supported.",
  },
  {
    title: "System integrations",
    description:
      "ERP, commerce, CRM or custom integration records where verified.",
  },
  {
    title: "Manual evidence",
    description:
      "Entered under restricted permission with a recorded reason.",
  },
];

export default function Sources() {
  return (
    <section className="w-full bg-[#f7f7f7] transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          
          {/* Left */}
          <div className="flex flex-1 flex-col items-start gap-5">
            {/* Label */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase tracking-wider text-blue-500 dark:text-blue-400">
                Sources
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[640px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-[48px] sm:leading-[1.12] dark:text-white">
              Preserve the original
              <br className="hidden sm:block" />
              evidence behind every
              <br className="hidden sm:block" />
              payment state.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full max-w-[530px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              Normalization makes provider states comparable. It never discards
              what the provider actually said, or when it said it.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid w-full gap-12 pt-4 lg:grid-cols-2 lg:gap-16">

          {/* PRODUCT VIEW */}
          <div className="flex w-full flex-col items-start gap-3">
            
            {/* Badge */}
            <div className="flex items-center">
              <div className="flex h-7 items-center rounded-full border border-emerald-500/10 bg-white/70 px-3 dark:border-emerald-400/10 dark:bg-slate-900/70">
                <span className="mr-2 h-[5px] w-[5px] rounded-sm bg-blue-500" />

                <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                  Illustrative product view
                </span>
              </div>
            </div>

            {/* Product Card */}
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04)] dark:border-slate-700 dark:bg-slate-900">

              {/* Header */}
              <div className="flex flex-wrap items-center gap-2.5 border-b border-zinc-200 bg-[#f7f7f7] px-4 py-3.5 dark:border-slate-700 dark:bg-slate-800">
                <span className="h-2 w-2 rounded-sm bg-blue-500" />

                <span className="text-xs font-normal uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  State normalization · PMT-88A41C
                </span>

                <span className="ml-auto rounded-full border border-blue-500/20 bg-[#f7f7f7] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-500 dark:border-blue-400/20 dark:bg-slate-900 dark:text-blue-400">
                  ✓ &nbsp; Mapping v6
                </span>
              </div>

              {/* Evidence rows */}
              {evidenceRows.map((row, index) => (
                <div
                  key={row.number}
                  className={`flex items-start gap-3.5 px-4 py-3.5 ${
                    index !== evidenceRows.length - 1
                      ? "border-b border-zinc-200 dark:border-slate-700"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-blue-500/20 bg-[#f7f7f7] dark:border-blue-400/20 dark:bg-slate-800">
                    <span className="text-[9px] font-semibold leading-4 text-blue-500 dark:text-blue-400">
                      {row.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                      {row.label}
                    </div>

                    <div
                      className={`mt-1.5 break-words text-sm leading-5 text-slate-900 dark:text-slate-200 ${
                        row.mono
                          ? "font-mono"
                          : "font-normal"
                      }`}
                    >
                      {row.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product note */}
            <p className="text-[10px] font-normal uppercase leading-5 tracking-wider text-blue-500 dark:text-blue-400">
              Support for a specific provider, bank, country, network or
              payment method is published only where it has been verified.
            </p>
          </div>

          {/* WHERE EVIDENCE COMES FROM */}
          <div className="flex w-full flex-col items-start gap-1.5">
            
            <h3 className="text-lg font-semibold leading-6 text-slate-900 dark:text-white">
              Where evidence comes from
            </h3>

            <div className="mt-1 w-full">
              {sourceRows.map((row, index) => (
                <div
                  key={index}
                  className={`grid gap-4 py-3.5 sm:grid-cols-[145px_1fr] ${
                    index !== sourceRows.length - 1
                      ? "border-b border-zinc-200 dark:border-slate-700"
                      : ""
                  }`}
                >
                  <div className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                    {row.title}
                  </div>

                  <div className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                    {row.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SOURCE BOUNDARY */}
        <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f7f7f7] px-6 py-7 sm:px-7 dark:bg-slate-900">
          
          <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
            Source boundary
          </span>

          <p className="max-w-[850px] text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
            Manual evidence never silently overrides provider truth. Where a
            manual record conflicts with a provider state, the conflict is
            surfaced for review rather than resolved quietly.
          </p>
        </div>

        {/* CTA */}
        <div className="flex w-full items-center">
          <Link
            href="/verified-payment-sources"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-5 py-2.5 text-base font-normal leading-6 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            See verified payment sources
          </Link>
        </div>
      </div>
    </section>
  );
}