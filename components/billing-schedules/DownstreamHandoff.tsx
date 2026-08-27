"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Prepare the context",
    description:
      "Charge or document context is prepared from the approved data current at that moment.",
  },
  {
    number: "02",
    title: "Create a draft",
    description:
      "A draft invoice or credit note is created where that is supported.",
  },
  {
    number: "03",
    title: "Route validation",
    description:
      "Document validation and any required approval run on the draft.",
  },
  {
    number: "04",
    title: "Issue only if controls pass",
    description:
      "Issue happens only after the document controls succeed, never because a schedule fired.",
  },
  {
    number: "05",
    title: "Render and deliver",
    description:
      "Delivery is handled by Documents & Delivery, with its own separate states.",
  },
  {
    number: "06",
    title: "Record failure and next action",
    description:
      "Any failure is recorded with the next operational action and an owner.",
  },
];

const followUpItems = [
  {
    title: "Due-date and grace reminders",
    description:
      "Reminder timing relative to a due date or grace period, where supported.",
  },
  {
    title: "Owner assignment and review",
    description:
      "Follow-up work is assigned with review timing attached.",
  },
  {
    title: "Escalation preparation",
    description:
      "Escalation or customer-contact material is prepared for a decision.",
  },
  {
    title: "Pause for dispute or hold",
    description:
      "Timing pauses when a dispute, hold or payment update is recorded.",
  },
  {
    title: "Re-evaluate before acting",
    description:
      "The current balance is re-checked before any follow-up proceeds.",
  },
];

export default function DownstreamHandoff() {
  return (
    <section className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-28 xl:py-24">
      <div className="mx-auto w-full max-w-[1220px]">
        {/* HEADER */}
        <div className="mx-auto flex w-full max-w-[1116px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="flex-1">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-[2px] w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
                Downstream handoff
              </span>
            </div>

            <h2 className="max-w-[638px] text-4xl font-medium leading-tight text-sky-950 sm:text-5xl">
              Where the schedule
              <br className="hidden sm:block" />
              stops and the document
              <br className="hidden sm:block" />
              begins.
            </h2>
          </div>

          <div className="max-w-[529px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-500">
              Becoming eligible starts a document process. Schedule state,
              invoice state and delivery state stay three separate facts.
            </p>
          </div>
        </div>

        {/* STEPS */}
        <div className="mx-auto mt-16 grid w-full max-w-[1116px] grid-cols-1 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-zinc-200 bg-white px-6 py-6"
            >
              <div className="flex flex-col items-start gap-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                  <span className="text-[10px] font-semibold leading-4 text-white">
                    {step.number}
                  </span>
                </div>

                <div className="pt-2 pb-1">
                  <h3 className="text-base font-semibold leading-5 text-sky-950">
                    {step.title}
                  </h3>
                </div>

                <p className="max-w-[700px] text-sm font-normal leading-5 text-slate-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* HANDOFF BOUNDARY */}
        <div className="mx-auto mt-8 w-full max-w-[1116px] rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f1f3f5] px-7 py-7">
          <div className="mb-2 text-[10px] font-normal uppercase tracking-wide text-blue-600">
            Handoff boundary
          </div>

          <p className="max-w-[900px] text-base font-normal leading-7 text-sky-950">
            The schedule does not guarantee document issue or delivery.
            Schedule, invoice and delivery states are never merged into a
            single status.
          </p>
        </div>

        {/* REMINDER SECTION */}
        <div className="mx-auto mt-20 w-full max-w-[1116px] border-t border-zinc-200 pt-12">
          <div className="max-w-[560px]">
            <h2 className="text-3xl font-medium leading-8 text-sky-950 sm:text-4xl">
              Reminder and follow-up timing
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-slate-500">
              Schedules also govern when receivables follow-up becomes eligible
              — not whether a debt is valid or what a customer has done.
            </p>
          </div>
        </div>

        {/* FOLLOW-UP CONTENT */}
        <div className="mx-auto mt-12 grid w-full max-w-[1116px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <div className="flex flex-col">
            {followUpItems.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:gap-4 ${
                  index !== followUpItems.length - 1
                    ? "border-b border-zinc-300"
                    : ""
                }`}
              >
                <div className="w-full shrink-0 sm:w-36">
                  <h3 className="text-sm font-semibold leading-5 text-sky-950">
                    {item.title}
                  </h3>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-normal leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-9">
            {/* FOLLOW-UP BOUNDARY */}
            <div className="rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f1f3f5] px-7 py-7">
              <div className="mb-2 text-[10px] font-normal uppercase tracking-wide text-blue-600">
                Follow-up boundary
              </div>

              <p className="text-base font-normal leading-7 text-sky-950">
                A reminder schedule does not prove debt validity or customer
                misconduct. External communication requires a configured
                recipient, content, permission and delivery controls before
                anything is sent.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/documents-and-delivery"
                style={{
                  backgroundColor: "#082f49",
                  color: "#ffffff",
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-base font-normal leading-6 transition-opacity duration-200 hover:opacity-90"
              >
                <span style={{ color: "#ffffff" }}>
                  Explore Documents &amp; Delivery
                </span>
              </Link>

              <Link
                href="/accounts-receivable"
                style={{
                  color: "#2563eb",
                }}
                className="inline-flex min-h-11 items-center gap-2 px-0 py-2.5 text-base font-normal leading-6"
              >
                <span style={{ color: "#2563eb" }}>
                  Accounts Receivable
                </span>

                <span
                  aria-hidden="true"
                  style={{ color: "#2563eb" }}
                  className="text-base font-bold"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}