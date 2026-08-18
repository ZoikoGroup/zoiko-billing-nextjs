"use client";

import Link from "next/link";

const sourceItems = [
  {
    title: "Verified categories only",
    description:
      "Payment, banking, accounting, ERP, commerce, CRM and custom integrations, described only where verified.",
  },
  {
    title: "Inbound events",
    description:
      "Payment, settlement, return, refund or statement events from an approved source.",
  },
  {
    title: "Outbound events",
    description:
      "Allocation, receivable, accounting or exception events emitted onward.",
  },
  {
    title: "Ordering and replay",
    description:
      "Event ordering, replay and duplicate handling are all defined per connector.",
  },
  {
    title: "Source ownership",
    description:
      "Which system owns a field, and what happens when two sources disagree.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved customer context or cross-product handoffs where enabled.",
  },
];

export default function SourcesHandoffs() {
  return (
    <section className="w-full bg-[#f7f7f7] transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT */}
          <div className="flex flex-1 flex-col items-start gap-5 pt-2.5 pb-5">

            {/* LABEL */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Sources and handoffs
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[638px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-5xl sm:leading-[53.82px] dark:text-white">
              What arrives, and what is
              emitted.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[529px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              Payment, settlement, return, refund and statement events can
              arrive inbound. Allocation, receivable, accounting and exception
              events can go back out.
            </p>
          </div>
        </div>

        {/* SOURCE / HANDOFF CARDS */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-px
            overflow-hidden
            rounded-2xl
            border
            border-zinc-200
            bg-zinc-200
            sm:grid-cols-2
            lg:grid-cols-3
            dark:border-slate-700
            dark:bg-slate-700
          "
        >
          {sourceItems.map((item) => (
            <div
              key={item.title}
              className="
                flex
                min-h-[175px]
                flex-col
                items-start
                bg-white
                px-6
                py-6
                transition-colors
                duration-300
                hover:bg-slate-50
                dark:bg-slate-900
                dark:hover:bg-slate-800
              "
            >
              <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CONNECTOR BOUNDARY */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-2
            rounded-r-2xl
            border-l-[3px]
            border-blue-500
            bg-white
            px-6
            py-7
            sm:px-7
            dark:bg-slate-900
          "
        >
          <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
            Connector boundary
          </span>

          <p className="max-w-[850px] text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
            Not every connector processes payments, settles funds or posts
            accounting, and not in real time. Behaviour is stated per
            connector in the governed integration registry. Zoiko Billing
            remains independently deployable.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-1 sm:flex-row">

          {/* PRIMARY */}
          <Link
            href="/integrations"
            className="
              inline-flex
              min-h-11
              w-full
              items-center
              justify-center
              rounded-lg
              bg-slate-950
              px-5
              py-2.5
              text-base
              font-normal
              leading-6
              text-white
              transition
              hover:bg-slate-800
              sm:w-auto
              dark:bg-white
              dark:text-slate-950
              dark:hover:bg-slate-200
            "
          >
            Browse integrations
          </Link>

          {/* SECONDARY */}
          <Link
            href="/deployment-options"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              gap-2
              px-2
              py-2.5
              text-base
              font-normal
              leading-6
              text-blue-500
              transition
              hover:text-blue-600
              dark:text-blue-400
              dark:hover:text-blue-300
            "
          >
            Compare deployment options

            <span className="text-base font-bold leading-6">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}