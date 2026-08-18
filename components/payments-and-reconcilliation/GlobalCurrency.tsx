"use client";

import Link from "next/link";

const contextItems = [
  {
    title: "Provider and bank account",
    description: "Which provider and which account received the funds.",
  },
  {
    title: "Legal entity",
    description:
      "The entity the payment and the target document both belong to.",
  },
  {
    title: "Payment currency",
    description: "The currency the payer actually paid in.",
  },
  {
    title: "Document currency",
    description:
      "The currency the invoice was issued in, which may differ.",
  },
  {
    title: "Settlement currency",
    description:
      "The currency the funds settled in at the provider or bank.",
  },
  {
    title: "Exchange-rate source",
    description:
      "Rate source and date, recorded wherever conversion is supported.",
  },
  {
    title: "Value date and business day",
    description:
      "Value date, timezone and business-day context for the event.",
  },
  {
    title: "Local reference formats",
    description:
      "Local payment reference and identifier formats where they apply.",
  },
];

export default function GlobalCurrency() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 transition-colors duration-300 dark:bg-black">
      {/* OUTER RADIAL GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-0
          h-[1014.97px]
          w-[1116px]
          max-w-[100vw]
          -translate-x-1/2
          opacity-25
          bg-[radial-gradient(circle_at_50%_20%,rgba(80,220,150,0.55)_0%,rgba(80,220,150,0)_70%)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-1 flex-col items-start gap-5 pt-2.5 pb-6">

            {/* SECTION LABEL */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-cyan-400">
                Global and currency context
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[638px] text-[40px] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[53.82px]">
              Three currencies can
              <br className="hidden sm:block" />
              be involved in one
              <br className="hidden sm:block" />
              payment.
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-300 sm:leading-8">
              Payment currency, document currency and settlement currency are
              separate facts, and so are the provider, bank account and legal
              entity behind them.
            </p>
          </div>
        </div>

        {/* CONTEXT CARDS */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-px
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/10
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {contextItems.map((item) => (
            <div
              key={item.title}
              className="
                flex
                min-h-[180px]
                flex-col
                items-start
                bg-sky-950
                px-5
                pb-7
                pt-5
                transition-colors
                duration-300
                hover:bg-sky-900
              "
            >
              <div className="flex w-full flex-col items-start">
                <h3 className="pb-1 text-sm font-semibold leading-5 text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm font-normal leading-5 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* SETTLEMENT BOUNDARY */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-2
            rounded-r-2xl
            border-l-[3px]
            border-cyan-400
            bg-white/[0.06]
            px-6
            py-7
            sm:px-7
          "
        >
          <div className="flex w-full flex-col items-start">
            <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-cyan-400">
              Settlement boundary
            </span>
          </div>

          <div className="w-full max-w-[900px]">
            <p className="text-base font-normal leading-7 text-slate-200">
              Locale does not determine banking or legal entity, and instant
              or same-day settlement is never claimed without provider- and
              market-specific evidence. Regional availability, partner support
              and restrictions are published per market.
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex w-full flex-col items-center justify-center gap-3 pt-1 sm:flex-row">

          <Link
            href="/global-billing"
            className="
              inline-flex
              min-h-11
              w-full
              items-center
              justify-center
              rounded-lg
              bg-white
              px-5
              py-2.5
              text-base
              font-normal
              leading-6
              text-slate-950
              transition
              hover:bg-slate-100
              sm:w-auto
            "
          >
            Explore global billing
          </Link>

          <Link
            href="/availability"
            className="
              inline-flex
              min-h-11
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-white/30
              px-5
              py-2.5
              text-base
              font-normal
              leading-6
              text-white
              transition
              hover:bg-white/10
              sm:w-auto
            "
          >
            Check availability
          </Link>

        </div>
      </div>
    </section>
  );
}