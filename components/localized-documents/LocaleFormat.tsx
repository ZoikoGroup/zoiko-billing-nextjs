const localeDimensions = [
  {
    dimension: "Date format",
    control: "Locale formatting rules.",
    boundary: "Does not change authoritative issue or due dates",
  },
  {
    dimension: "Number separators",
    control: "Decimal and grouping conventions.",
    boundary: "Does not change the numeric value or calculation precision",
  },
  {
    dimension: "Currency display",
    control: "Symbol or code placement and formatting.",
    boundary:
      "Currency choice and amount authority stays with Multi-Currency Billing",
  },
  {
    dimension: "Address formatting",
    control: "Line and order conventions where supported.",
    boundary: "Does not verify an address or a legal entity",
  },
  {
    dimension: "Name & order conventions",
    control: "Presentation only where applicable.",
    boundary: "No identity attribute is inferred",
  },
  {
    dimension: "Timezone display",
    control: "Display context where relevant.",
    boundary: "Underlying event timestamps remain authoritative",
  },
  {
    dimension: "Paper & page size",
    control: "Template or render profile where supported.",
    boundary: "No postal or legal acceptance is claimed",
  },
  {
    dimension: "Text direction",
    control: "Left-to-right or right-to-left where supported.",
    boundary: "Requires component, layout and accessibility testing",
  },
  {
    dimension: "Locale fallback",
    control: "An explicit fallback chain or block policy.",
    boundary: "Never a silent switch to an unrelated locale",
  },
];

export default function LocaleFormat() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-sky-600/40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-[0.15em] text-sky-600">
              Locale &amp; regional formatting
            </span>

            <span className="h-px w-4 bg-sky-600/40" />
          </div>

          <h2 className="text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl sm:leading-10">
            Formatting changes the display, never
            the value.
          </h2>

          <p className="max-w-[687px] text-center text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Nine locale dimensions, each with a boundary that keeps the
            underlying record intact.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] lg:block">
          <div className="grid grid-cols-[210px_330px_1fr]">
            {/* Header */}
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-sky-600">
              Dimension
            </div>

            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-sky-600">
              Required control
            </div>

            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-sky-600">
              Boundary
            </div>

            {/* Rows */}
            {localeDimensions.map((item, index) => (
              <div key={item.dimension} className="contents">
                <div
                  className={`px-4 py-3.5 text-sm font-semibold leading-5 text-slate-900 ${
                    index !== localeDimensions.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  {item.dimension}
                </div>

                <div
                  className={`px-4 py-3.5 text-sm leading-5 text-slate-600 ${
                    index !== localeDimensions.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  {item.control}
                </div>

                <div
                  className={`px-4 py-3.5 text-sm leading-5 text-slate-600 ${
                    index !== localeDimensions.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  {item.boundary}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {localeDimensions.map((item, index) => (
            <div
              key={item.dimension}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50 text-xs font-bold text-sky-600">
                  {index + 1}
                </span>

                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {item.dimension}
                </h3>
              </div>

              <div className="space-y-4 pl-10">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sky-600">
                    Required control
                  </p>
                  <p className="text-sm leading-5 text-slate-600">
                    {item.control}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sky-600">
                    Boundary
                  </p>
                  <p className="text-sm leading-5 text-slate-600">
                    {item.boundary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}