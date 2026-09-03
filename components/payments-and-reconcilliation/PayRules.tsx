"use client";

const rules = [
  {
    number: "01",
    title: (
      <>
        Original evidence is
        <br />
        preserved
      </>
    ),
    description: (
      <>
        The source event and its
        <br className="hidden xl:block" /> own state are kept 
        <br className="hidden xl:block" /> exactly as received.
      </>
    ),
  },
  {
    number: "02",
    title: (
      <>
        States are
        <br className="hidden xl:block" />
        normalized, not
        <br className="hidden xl:block" />
        overwritten
      </>
    ),
    description: (
      <>
        A normalized state sits
        <br className="hidden xl:block" /> alongside the provider
        <br className="hidden xl:block" /> state, never replacing it.
      </>
    ),
  },
  {
    number: "03",
    title: (
      <>
        Matches use explicit
        <br className="hidden xl:block" />
        evidence
      </>
    ),
    description: (
      <>
        Every match records the
        <br className="hidden xl:block" /> rule, the evidence and
        <br className="hidden xl:block" /> the confidence behind it.
      </>
    ),
  },
  {
    number: "04",
    title: (
      <>
        Allocations are
        <br className="hidden xl:block" />
        reversible
      </>
    ),
    description: (
      <>
        Applying funds creates a
        <br className="hidden xl:block" /> relationship that can be
        <br className="hidden xl:block" /> corrected, not a rewrite.
      </>
    ),
  },
  {
    number: "05",
    title: (
      <>
        Exceptions stay
        <br className="hidden xl:block" />
        visible
      </>
    ),
    description: (
      <>
        Unmatched, duplicate
        <br className="hidden xl:block" /> and overpaid amounts
        <br className="hidden xl:block" /> remain owned and on
        <br className="hidden xl:block" /> screen.
      </>
    ),
  },
  {
    number: "06",
    title: <>Availability varies</>,
    description: (
      <>
        Provider, bank, method,
        <br className="hidden xl:block" /> entity, currency and
        <br className="hidden xl:block" /> market all affect what is
        <br className="hidden xl:block" /> available.
      </>
    ),
  },
];

export default function PayRules() {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-12 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-12 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 sm:gap-10 lg:gap-11">
        
        {/* Rules */}
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 dark:border-slate-700 dark:bg-slate-700">
          {rules.map((rule) => (
            <div
              key={rule.number}
              className="flex min-h-[260px] flex-col items-start bg-white px-5 pb-9 pt-5 transition-colors duration-300 dark:bg-slate-900"
            >
              {/* Number */}
              <span className="text-[10px] font-normal leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                {rule.number}
              </span>

              {/* Title */}
              <h3 className="pt-2 text-base font-semibold leading-5 text-slate-900 dark:text-white">
                {rule.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* Operating Boundary */}
        <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f7f7f7] px-6 py-7 sm:px-7 dark:bg-slate-900">
          
          <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
            Operating boundary
          </span>

          <p className="max-w-[800px] text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
            Zoiko Billing is not a universal payment processor, a bank
            reconciliation service, an accounting ledger or a fraud-prevention
            system. A received event is not automatically settled, allocated or
            posted.
          </p>
        </div>
      </div>
    </section>
  );
}