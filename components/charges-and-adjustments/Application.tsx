"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Apply to a draft",
    description:
      "Approved components are attached to a draft invoice or credit note, never directly to an issued document.",
  },
  {
    number: "02",
    title: "Preserve context",
    description:
      "Source, description, quantity, rate, tax context and amount all travel with the line.",
  },
  {
    number: "03",
    title: "Group only where reviewable",
    description:
      "Lines are grouped or summarized only where supported, and the detail stays inspectable.",
  },
  {
    number: "04",
    title: "Calculate document totals",
    description:
      "Subtotal, tax and total are computed according to the approved rules for that document.",
  },
  {
    number: "05",
    title: "Record the version link",
    description:
      "The application records which document version the component became part of.",
  },
  {
    number: "06",
    title: "Prevent duplicates",
    description:
      "Idempotency keys or source references stop the same component being applied twice.",
  },
];

export default function Application() {
  return (
    <section className="w-full bg-color-grey-97-2">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-0 lg:px-12">

          {/* Header */}
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
            {/* Left */}
            <div className="min-w-0 flex-1 pt-2.5 pb-5">
              <div className="flex flex-col items-start gap-5">

                {/* Eyebrow */}
                <div className="relative h-4 w-40">
                  <div className="absolute left-0 top-[7.94px] h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

                  <span className="absolute left-[30px] top-[-1px] whitespace-nowrap font-['IBM_Plex_Mono'] text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                    Application
                  </span>
                </div>

                {/* Heading */}
                <div className="w-full max-w-[638.15px]">
                  <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-sky-950 sm:text-[42px] lg:text-5xl lg:leading-[53.82px]">
                    From approved
                    <br />
                    component to
                    <br />
                    document line.
                  </h2>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full max-w-[528.77px] flex-1">
              <p className="font-['Segoe_UI'] text-base font-normal leading-8 text-color-azure-35">
                Applying an amount to a draft is a distinct step with its own
                controls. A charge definition is not an issued invoice.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex w-full flex-col items-start bg-white px-6 py-6 ${
                  index !== steps.length - 1
                    ? "border-b border-zinc-200"
                    : ""
                }`}
              >
                {/* Number */}
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-color-cyan-42 to-color-azure-51">
                  <span className="font-['IBM_Plex_Mono'] text-[9.9px] font-semibold leading-4 text-white">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="w-full pt-2 pb-1 font-['Plus_Jakarta_Sans'] text-base font-semibold leading-5 text-sky-950">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="max-w-[650px] font-['Segoe_UI'] text-sm font-normal leading-5 text-color-azure-35">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Boundary */}
          <div className="flex w-full flex-col items-start gap-2 rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-6 py-8 sm:px-7">
            <div className="font-['IBM_Plex_Mono'] text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
              Application boundary
            </div>

            <p className="max-w-[761px] font-['Segoe_UI'] text-base font-normal leading-7 text-sky-950">
              A charge definition is not an issued invoice, and application to
              a draft does not prove issue, delivery or payment. Those are
              separate states on the document itself.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center">
            <Link
              href="/invoices"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2 font-['Segoe_UI'] text-base font-normal leading-6 !text-white shadow-sm transition-colors duration-200 hover:bg-sky-900"
            >
              <span className="!text-white">
                Explore Invoices &amp; Credit Notes
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}