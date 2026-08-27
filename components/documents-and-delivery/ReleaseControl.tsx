"use client";

import Link from "next/link";

const releaseChecks = [
  {
    number: "01",
    title: "Document state and version",
    description:
      "The document must be in a releasable state, and the version is pinned to the decision.",
  },
  {
    number: "02",
    title: "Release permission and scope",
    description:
      "The actor holds release permission for this document class, entity and recipient scope.",
  },
  {
    number: "03",
    title: "Approval policy and decision",
    description:
      "Any required approval has a recorded decision before the attempt is created.",
  },
  {
    number: "04",
    title: "Recipient and endpoint validation",
    description:
      "The resolved recipient and endpoint are active, permitted and suitable for this document.",
  },
  {
    number: "05",
    title: "Sensitivity and channel suitability",
    description:
      "Content classification is checked against what the chosen channel is allowed to carry.",
  },
  {
    number: "06",
    title: "Timing, hold and embargo",
    description:
      "Scheduled send time, hold or manual release where those controls are supported.",
  },
  {
    number: "07",
    title: "External and cross-border disclosure",
    description:
      "External-domain or cross-border disclosure checks where your policy requires them.",
  },
  {
    number: "08",
    title: "Recorded release decision",
    description:
      "Actor, approver, conditions, version and time all stay attached to the attempt.",
  },
];

export default function ReleaseControl() {
  return (
    <section className="w-full bg-color-grey-97-2 px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-28 xl:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-0 sm:px-4 lg:px-8 xl:px-12">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          <div className="min-w-0 flex-1 pt-2.5 pb-2 lg:pb-6">
            <div className="relative mb-5 h-4 w-40">
              <div className="absolute left-0 top-[7.94px] h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

              <span className="absolute left-[30px] top-[-1px] whitespace-nowrap text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                Release control
              </span>
            </div>

            <h2 className="max-w-[638px] text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl lg:leading-[53.82px]">
              Authorize the exact
              <br className="hidden sm:block" />
              document, recipient and
              channel.
            </h2>
          </div>

          <div className="w-full max-w-[528px]">
            <p className="text-base font-normal leading-8 text-color-azure-35">
              Release is its own decision, evaluated against current permission
              and policy — not inherited from whoever approved the invoice.
            </p>
          </div>
        </div>

        {/* ================= 8 RELEASE CHECKS ================= */}
        <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200">
          <div className="grid w-full grid-cols-1 gap-px md:grid-cols-2">

            {releaseChecks.map((item) => (
              <div
                key={item.number}
                className="flex min-h-[180px] w-full bg-color-white-solid p-6 sm:p-7"
              >
                <div className="flex w-full items-start gap-4">

                  {/* NUMBER */}
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-color-azure-87 bg-color-grey-97-2">
                    <span className="text-[9.6px] font-semibold leading-4 text-color-azure-44">
                      {item.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 text-base font-semibold leading-6 text-sky-950">
                      {item.title}
                    </h3>

                    <p className="text-sm font-normal leading-6 text-color-azure-35">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= RELEASE BOUNDARY ================= */}
        <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-6 py-7 sm:px-7">
          <div className="w-full">
            <span className="text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
              Release boundary
            </span>
          </div>

          <p className="max-w-[900px] text-sm font-normal leading-7 text-sky-950 sm:text-base">
            Approval applies to the exact document, recipient, channel and
            version reviewed. It authorizes the attempt — it never guarantees
            that the provider or the recipient will succeed.
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div className="flex w-full items-center justify-center pt-1">
          <Link
            href="/roles-and-approvals"
            className="relative z-50 inline-flex min-h-[44px] w-fit shrink-0 items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2.5 text-center no-underline"
          >
            <span className="block whitespace-nowrap text-base font-normal leading-6 text-white">
              Explore Roles &amp; Approvals
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}