"use client";

import React from "react";

const contextItems = [
  {
    title: "Legal entity",
    description:
      "The entity that holds the receivable and the customer relationship behind it.",
  },
  {
    title: "Currency and rate source",
    description:
      "Currency per position, with an exchange-rate source wherever totals are aggregated.",
  },
  {
    title: "Locale and language",
    description:
      "The document and communication language used with that customer.",
  },
  {
    title: "Due date and grace",
    description:
      "Local due-date and grace-period rules, where those have been verified.",
  },
  {
    title: "Communication rules",
    description:
      "Local communication rules and restrictions where they are verified.",
  },
  {
    title: "Timezone and hours",
    description:
      "Timezone and business hours that govern when contact is appropriate.",
  },
  {
    title: "Provider availability",
    description:
      "Provider and jurisdiction availability, published per market.",
  },
  {
    title: "Restricted models",
    description:
      "Restricted or partner-supported operating models where they apply.",
  },
];

export default function GlobalContext() {
  return (
    <section className="w-full bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-24 xl:px-28">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 lg:px-12">

          {/* Header */}
          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
            <div className="flex w-full flex-1 flex-col items-start gap-5 pb-6">

              {/* Section label */}
              <div className="flex h-4 items-center">
                <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-400 to-blue-500" />

                <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-cyan-300">
                  Global context
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[638px] text-3xl font-medium leading-[1.12] text-white sm:text-4xl lg:text-5xl">
                Receivables work
                <br className="hidden sm:block" />
                differs by entity,
                <br className="hidden sm:block" />
                currency and
                <br className="hidden sm:block" />
                market.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-300 sm:text-base">
                Due-date conventions, communication rules and business hours
                are all local. None of them are assumed from a locale setting.
              </p>
            </div>
          </div>

          {/* Context cards */}
          <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

            {contextItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[190px] flex-col items-start bg-sky-950 px-5 py-5"
              >
                <div className="w-full pb-1">
                  <h3 className="text-sm font-semibold leading-5 text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm font-normal leading-5 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Jurisdiction boundary */}
          <div className="w-full rounded-r-2xl border-l-[3px] border-cyan-400 bg-white/[0.06] px-5 py-7 sm:px-7 sm:py-9">
            <div>
              <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-cyan-300">
                Jurisdiction boundary
              </span>
            </div>

            <p className="mt-2 max-w-[850px] text-sm font-normal leading-7 text-slate-200 sm:text-base">
              Locale does not determine legal collection rights, and
              country-specific collection compliance is never claimed without
              current evidence.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white bg-white px-5 py-2.5 text-sm font-normal leading-6 text-sky-950 transition hover:bg-slate-100 sm:w-auto sm:text-base"
            >
              Explore global billing
            </button>

            <button
              type="button"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/35 bg-transparent px-5 py-2.5 text-sm font-normal leading-6 text-white transition hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Check availability
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}