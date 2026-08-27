"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "Role-based amount actions",
    description:
      "Price, discount, fee, override and correction actions are separately permissioned.",
  },
  {
    title: "Contract and price protection",
    description:
      "Contract, price, tax and customer context is protected in access and handling.",
  },
  {
    title: "Full calculation evidence",
    description:
      "Source, calculation, approval, application and correction all leave attributable evidence.",
  },
  {
    title: "Secrets and connector scopes",
    description:
      "Credentials sit in approved systems, and connectors receive minimum scope.",
  },
  {
    title: "Retention and legal hold",
    description:
      "Retention, archive and legal-hold treatment for amount and rule history.",
  },
  {
    title: "Nothing sensitive in analytics",
    description:
      "No formulas, customer terms or amount data in ordinary analytics or logs.",
  },
];

export default function TrustPrivacySecurity() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-0 lg:px-12">

          {/* HEADER */}
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">

            {/* LEFT */}
            <div className="min-w-0 flex-1 pt-2.5 pb-5">
              <div className="flex flex-col items-start gap-5">

                {/* EYEBROW */}
                <div className="relative h-4 w-64">
                  <div className="absolute left-0 top-[7.93px] h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

                  <span className="absolute left-[30px] top-[-1px] whitespace-nowrap font-['IBM_Plex_Mono'] text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                    Trust, privacy and security
                  </span>
                </div>

                {/* HEADING */}
                <div className="w-full max-w-[638.15px]">
                  <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-sky-950 sm:text-[42px] lg:text-5xl lg:leading-[53.82px]">
                    Pricing and contract
                    <br className="hidden sm:block" />
                    context is sensitive data.
                  </h2>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[528.77px] flex-1">
              <p className="font-['Segoe_UI'] text-base font-normal leading-8 text-color-azure-35">
                Rates, discounts, contract terms and tax evidence all carry
                commercial risk, so access and retention are controlled
                accordingly.
              </p>
            </div>
          </div>

          {/* TRUST ITEMS */}
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-5">

            {trustItems.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col items-start gap-2 bg-color-white-solid px-6 py-6"
              >
                <div className="w-full">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-base font-semibold leading-6 text-sky-950">
                    {item.title}
                  </h3>
                </div>

                <p className="font-['Segoe_UI'] text-sm font-normal leading-6 text-color-azure-35">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* SCOPE BOUNDARY */}
          <div className="flex w-full flex-col items-start gap-2 rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 pt-9 pb-8">

            {/* LABEL */}
            <div className="w-full">
              <span className="font-['IBM_Plex_Mono'] text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
                Scope boundary
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[761.07px]">
              <p className="font-['Segoe_UI'] text-base font-normal leading-7 text-sky-950">
                Internal pricing logic, secrets and certification claims are
                published only with current evidence. Product controls do not
                replace contracts, tax advice or accounting policy.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full flex-wrap items-center justify-start gap-3">

            {/* PRIMARY CTA */}
            <Link
              href="/security"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2 font-['Segoe_UI'] text-base font-normal leading-6 !text-white outline outline-1 outline-offset-[-1px] outline-sky-950 transition-colors hover:bg-sky-900 hover:!text-white"
            >
              Review security and trust
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center justify-center gap-2 px-2 py-2 font-['Segoe_UI'] text-base font-normal leading-6 !text-color-azure-44 transition-colors hover:!text-sky-950"
            >
              <span>Read the privacy notice</span>

              <span className="font-['IBM_Plex_Mono'] text-base font-bold leading-6 !text-color-azure-44">
                →
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}