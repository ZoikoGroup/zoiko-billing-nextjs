"use client";

const principles = [
  {
    number: "01",
    title: (
      <>
        Every metric has a
        <br className="hidden lg:block" /> definition
      </>
    ),
    description: (
      <>
        A formula, a version and
        <br className="hidden lg:block" /> an accountable owner
        <br className="hidden lg:block" /> sit behind each number.
      </>
    ),
  },
  {
    number: "02",
    title: (
      <>
        Every result has
        <br className="hidden lg:block" /> scope
      </>
    ),
    description: (
      <>
        Entity, currency, date
        <br className="hidden lg:block" /> basis and as-of time
        <br className="hidden lg:block" /> travel with the figure.
      </>
    ),
  },
  {
    number: "03",
    title: (
      <>
        Freshness stays
        <br className="hidden lg:block" /> visible
      </>
    ),
    description: (
      <>
        Staleness and
        <br className="hidden lg:block" /> incompleteness are
        <br className="hidden lg:block" /> shown, never smoothed
        <br className="hidden lg:block" /> over.
      </>
    ),
  },
  {
    number: "04",
    title: (
      <>
        Charts keep their
        <br className="hidden lg:block" /> tables
      </>
    ),
    description: (
      <>
        An accessible table or
        <br className="hidden lg:block" /> summary accompanies
        <br className="hidden lg:block" /> every visualization.
      </>
    ),
  },
  {
    number: "05",
    title: (
      <>
        Drill-through
        <br className="hidden lg:block" /> preserves context
      </>
    ),
    description: (
      <>
        Filters and source
        <br className="hidden lg:block" /> relationships survive the
        <br className="hidden lg:block" /> move to detail.
      </>
    ),
  },
  {
    number: "06",
    title: (
      <>
        Exports are
        <br className="hidden lg:block" /> controlled
      </>
    ),
    description: (
      <>
        Permissioned, minimized
        <br className="hidden lg:block" /> and auditable, with
        <br className="hidden lg:block" /> expiry where it applies.
      </>
    ),
  },
];

export default function ReportingAnalyticsPrinciples() {
  return (
    <section className="w-full bg-slate-50 px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 sm:gap-10 lg:gap-11">
        {/* Principles */}
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 gap-px dark:border-slate-700 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {principles.map((item) => (
            <div
              key={item.number}
              className="flex min-h-[250px] flex-col items-start bg-white px-5 pb-10 pt-5 transition-colors dark:bg-slate-900 lg:min-h-[265px]"
            >
              {/* Number */}
              <div className="mb-1.5 w-full">
                <span className="font-mono text-[10px] font-normal leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="mb-2 w-full">
                <h3 className="text-base font-semibold leading-5 text-sky-950 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Operating Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-50 px-5 py-6 dark:bg-slate-900 sm:px-7 sm:py-7">
          <div className="mb-2">
            <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Operating boundary
            </span>
          </div>

          <p className="max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            This is governed operational reporting. It is not statutory
            reporting, audit assurance, a guaranteed forecast or causal
            intelligence, and not every metric, chart, export or integration
            is available in every plan or market.
          </p>
        </div>
      </div>
    </section>
  );
}