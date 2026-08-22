"use client";

import Image from "next/image";
import Link from "next/link";

const correctiveEvents = [
  {
    title: "Provider reversal",
    description:
      "The provider removes value it previously reported. Original payment and reversal both stay.",
  },
  {
    title: "Bank return",
    description:
      "The bank returns funds after receipt, often days later, with its own reference.",
  },
  {
    title: "Chargeback or dispute",
    description:
      "The payer contests the payment through the provider, where that event is supported.",
  },
  {
    title: "Refund",
    description:
      "A deliberate return of funds to the payer, executed by an approved provider capability.",
  },
  {
    title: "Allocation reversal",
    description:
      "The payment stands; only its application to a document is corrected.",
  },
];

const eventRecords = [
  {
    title: "Original relationship",
    description:
      "The payment, allocation or document the correction relates to.",
  },
  {
    title: "Type and reason",
    description:
      "Which of the five events this is, and why it occurred.",
  },
  {
    title: "Amount and currency",
    description:
      "How much value is affected, in which currency.",
  },
  {
    title: "Provider state",
    description:
      "The source state that triggered it, retained as received.",
  },
  {
    title: "Downstream impact",
    description:
      "Effect on documents, receivable positions and customer communication.",
  },
  {
    title: (
      <>
        Permission and
        <br />
        approval
      </>
    ),
    description:
      "Who was authorized to act, and any approval that was required.",
  },
];

const accountingItems = [
  {
    title: "Payment and allocation export",
    description:
      "Payments and allocations can be exported or integrated to a connected system.",
  },
  {
    title: "External posting state",
    description:
      "Ledger or ERP posting state is shown where that integration is verified.",
  },
  {
    title: "Settlement batch reference",
    description:
      "Bank statement or settlement-batch references are recorded as reconciliation evidence.",
  },
  {
    title: "Journal mapping",
    description:
      "Journal or clearing-account mapping only where it has been approved for you.",
  },
  {
    title: "Posting failures",
    description:
      "Posting failure, mismatch and retry evidence stays visible rather than silent.",
  },
  {
    title: "Independent close",
    description:
      "Close and approval remain the accounting system's responsibility, not this one's.",
  },
];

function DetailRows({
  rows,
}: {
  rows: {
    title: React.ReactNode;
    description: string;
  }[];
}) {
  return (
    <div className="w-full">
      {rows.map((row, index) => (
        <div
          key={index}
          className={`grid gap-4 py-3.5 sm:grid-cols-[145px_1fr] ${
            index !== rows.length - 1
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
  );
}

export default function CorrectiveEvents() {
  return (
    <section className="w-full bg-[#f7f7f7] transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT */}
          <div className="flex flex-1 flex-col items-start gap-5 pb-5 pt-2.5">

            {/* LABEL */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Corrective events
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[640px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-[48px] sm:leading-[1.12] dark:text-white">
              Correct payment
              <br className="hidden sm:block" />
              relationships without
              <br className="hidden sm:block" />
              erasing history.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[530px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              Five different corrective events, each with its own trigger,
              authority and downstream effect. Collapsing them is how
              reconciliation goes wrong.
            </p>
          </div>
        </div>

        {/* FIVE CORRECTIVE EVENTS */}
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 dark:border-slate-700 dark:bg-slate-700">
          {correctiveEvents.map((event) => (
            <div
              key={event.title}
              className="flex min-h-[190px] flex-col items-start bg-white px-5 pb-8 pt-5 dark:bg-slate-900"
            >
              <h3 className="pb-2 text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {event.title}
              </h3>

              <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* EVENT RECORDS + IMAGE */}
        <div className="grid w-full gap-10 pb-10 pt-4 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <div className="flex w-full flex-col items-start gap-1.5">

            <h3 className="text-lg font-semibold leading-6 text-slate-900 dark:text-white">
              What every corrective event records
            </h3>

            <DetailRows rows={eventRecords} />
          </div>

          {/* RIGHT */}
          <div className="flex w-full flex-col items-start gap-10">

            {/* IMAGE */}
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_rgba(14,33,27,0.04)] dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/images/payments-and-reconcilliation/corrective-events.png"
                alt="Corrective payment events"
                width={526}
                height={404}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* FUNDS MOVEMENT BOUNDARY */}
            <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-white px-6 py-7 dark:bg-slate-900">

              <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Funds-movement boundary
              </span>

              <p className="text-sm font-normal leading-7 text-slate-900 dark:text-slate-200">
                Zoiko Billing does not move funds. A refund happens through an
                approved payment provider capability; Zoiko Billing records
                the request, its state and its effect on the billing record.
              </p>
            </div>
          </div>
        </div>

        {/* ACCOUNTING BOUNDARY */}
        <div className="flex w-full flex-col items-start gap-3.5 border-t border-zinc-200 pt-12 dark:border-slate-700">

          <h3 className="max-w-[560px] text-[28px] font-medium leading-8 tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Accounting and bank-reconciliation
            <br className="hidden sm:block" />
            boundary
          </h3>

          <p className="max-w-[600px] text-base font-normal leading-7 text-slate-600 dark:text-slate-300">
            Reconciling payments to billing records is a different job from
            reconciling to a bank statement or closing a set of books.
          </p>
        </div>

        {/* ACCOUNTING / BANK RECONCILIATION CARDS */}
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-2 dark:border-slate-700 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3">
          {accountingItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[170px] flex-col items-start bg-white px-6 py-6 dark:bg-slate-900"
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

        {/* CLOSURE BOUNDARY */}
        <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-white px-6 py-7 dark:bg-slate-900 sm:px-7">

          <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
            Closure boundary
          </span>

          <p className="max-w-[850px] text-sm font-normal leading-7 text-slate-900 dark:text-slate-200">
            Zoiko Billing reconciliation is not automatically bank
            reconciliation or an accounting close, and no claim is made about
            revenue recognition or cash-account correctness.
          </p>
        </div>

        {/* CTA */}
        <div className="flex w-full justify-center pt-1">
          <Link
            href="/roles-and-approvals"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-6 py-3 text-base font-normal leading-6 !text-white transition-colors hover:bg-slate-800"
          >
            Explore Roles &amp; Approvals
          </Link>
        </div>

      </div>
    </section>
  );
}