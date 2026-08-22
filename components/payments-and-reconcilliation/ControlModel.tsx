"use client";

const concepts = [
  {
    number: "01",
    title: "Payment evidence",
    description:
      "Source, provider or bank reference, amount, currency, method and timestamps.",
  },
  {
    number: "02",
    title: "Normalized state",
    description:
      "Initiated, received, settled, failed, returned, reversed or unknown.",
  },
  {
    number: "03",
    title: "Matching context",
    description:
      "Customer, invoice, reference, amount, currency, date and source ownership.",
  },
  {
    number: "04",
    title: "Allocation",
    description:
      "Document-level or supported customer-level application, with remaining context.",
  },
  {
    number: "05",
    title: "Exception",
    description:
      "Unmatched, duplicate, overpayment, short payment, conflict or unavailable source.",
  },
  {
    number: "06",
    title: "Evidence",
    description:
      "Mapping version, rule, reviewer, decision, allocation, reversal and audit history.",
  },
];

const states = [
  {
    title: "Payment state",
    description: "What the source says happened to the funds.",
  },
  {
    title: "Allocation state",
    description: "How much of that value has been applied to billing records.",
  },
  {
    title: "Cash position",
    description: "What you actually hold, which is a treasury question.",
  },
  {
    title: "Bank reconciliation",
    description:
      "Agreement with a bank statement, done against the bank.",
  },
  {
    title: "Accounting posting",
    description:
      "Journal treatment and close, done in your accounting system.",
  },
];

export default function ControlModel() {
  return (
    <section className="w-full bg-white transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pt-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          {/* Left */}
          <div className="flex flex-1 flex-col items-start gap-5">
            {/* Label */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase tracking-wider text-blue-500 dark:text-blue-400">
                Control model
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[640px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-[48px] sm:leading-[1.12] dark:text-white">
              Six concepts behind
              <br className="hidden sm:block" />
              every payment
              <br className="hidden sm:block" />
              operation.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full max-w-[530px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              No single provider state is treated as universal truth, and
              payment, allocation, cash, bank and accounting states are all
              kept distinct.
            </p>
          </div>
        </div>

        {/* SIX CONCEPTS */}
        <div className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.number}
              className="flex min-h-[245px] flex-col items-start rounded-2xl border border-zinc-200 bg-white px-6 py-6 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Number */}
              <div className="flex w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 py-1.5">
                <span className="text-[10px] font-semibold leading-4 text-white">
                  {concept.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="pt-3 text-base font-semibold leading-5 text-slate-900 dark:text-white">
                {concept.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[400px] text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* STATE DIFFERENCES */}
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 dark:border-slate-700 dark:bg-slate-700">
          {states.map((state) => (
            <div
              key={state.title}
              className="flex min-h-[180px] flex-col items-start bg-white px-5 py-5 transition-colors duration-300 dark:bg-slate-900"
            >
              <h3 className="pb-1 text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {state.title}
              </h3>

              <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {state.description}
              </p>
            </div>
          ))}
        </div>

        {/* MODEL BOUNDARY */}
        <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f7f7f7] px-6 py-7 sm:px-7 dark:bg-slate-900">
          <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
            Model boundary
          </span>

          <p className="max-w-[820px] text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
            These five are never collapsed into a single “reconciled” flag.
            Zoiko Billing reconciles payments to billing records; it does not
            perform bank reconciliation or an accounting close.
          </p>
        </div>
      </div>
    </section>
  );
}