"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "Least-privilege actions",
    description:
      "View, match, allocate, reverse, refund and export are separately permissioned.",
  },
  {
    title: "Payer-data protection",
    description:
      "Payer, bank-reference, account and transaction data are protected in access and handling.",
  },
  {
    title: "Tokenized or provider-hosted",
    description:
      "Payment data is tokenized or provider-hosted where applicable. No raw card storage is claimed.",
  },
  {
    title: "Secure channels",
    description:
      "Service identities, webhooks, file channels and credentials all run on approved controls.",
  },
  {
    title: "Full evidence chain",
    description:
      "Source, normalization, match, allocation, reversal and export each leave evidence.",
  },
  {
    title: "Retention and dispute",
    description:
      "Retention, deletion, dispute and legal-hold treatment are defined in advance.",
  },
];

export default function TrustPrivacySecurity() {
  return (
    <section className="w-full bg-[#f7f7f7] transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT */}
          <div className="flex flex-1 flex-col items-start gap-5 pb-5 pt-2.5">

            {/* SECTION LABEL */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Trust, privacy and security
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[638px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-5xl sm:leading-[53.82px] dark:text-white">
              Payment and banking
              <br className="hidden sm:block" />
              data gets the strictest
              <br className="hidden sm:block" />
              handling.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[529px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              Payer, bank-reference, account and transaction data all carry
              regulatory weight, so access, storage and evidence are controlled
              accordingly.
            </p>
          </div>
        </div>

        {/* TRUST / SECURITY CARDS */}
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
          {trustItems.map((item) => (
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

        {/* OBLIGATION BOUNDARY */}
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
            Obligation boundary
          </span>

          <p className="max-w-[900px] text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
            Internal secrets, full credentials and card data are never
            published, and no unsupported certification claim is made. Product
            controls do not replace PCI, banking, accounting, legal or treasury
            obligations.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-1 sm:flex-row">

          {/* PRIMARY */}
          <Link
            href="/trust"
            className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              rounded-lg
              bg-slate-950
              px-6
              py-3
              text-base
              font-normal
              leading-6
              !text-white
              transition-colors
              hover:bg-slate-800
              sm:w-auto
            "
          >
            Review security and trust
          </Link>

          {/* SECONDARY */}
          <Link
            href="/privacy"
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
              !text-blue-500
              transition-colors
              hover:!text-blue-600
              dark:!text-blue-400
              dark:hover:!text-blue-300
            "
          >
            Read the privacy notice

            <span className="text-base font-bold leading-6">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}