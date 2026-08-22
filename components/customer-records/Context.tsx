const rows = [
  {
    context: "Billing address",
    record: "Approved billing and document context.",
    boundary: "Not proof of legal residence or tax status",
  },
  {
    context: "Delivery & correspondence address",
    record: "Purpose-specific document or account communication context.",
    boundary: "Not reused across purposes without a rule",
  },
  {
    context: "Customer legal entity reference",
    record: "An approved organization or entity reference where supported.",
    boundary: "Does not independently verify corporate registry status",
  },
  {
    context: "Billing entity",
    record:
      "Which Zoiko billing entity applies, where commercial configuration defines it.",
    boundary:
      "Authority comes from commercial and global billing configuration",
  },
  {
    context: "Currency context",
    record: "An approved billing or document currency preference.",
    boundary: "Does not authorize unsupported currency or foreign exchange",
  },
  {
    context: "Tax identifier reference",
    record:
      "Stored and displayed only where product, privacy, legal and tax architecture permits.",
    boundary: "No validation, filing or compliance claim",
  },
  {
    context: "Jurisdiction & locale",
    record: "Operational and document context as approved.",
    boundary: "No universal availability or legal conclusion",
  },
];

export default function Context() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:gap-11 lg:px-7">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px w-4 bg-blue-600 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
              Addresses, entity, currency &amp; tax context
            </span>

            <div className="h-px w-4 bg-blue-600 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            Context is not determination.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Customer Records can carry approved billing context. Tax
            calculation, filing, legal-entity validation, jurisdiction
            eligibility, exchange rates and compliance conclusions belong to
            their own authoritative services.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop Table */}
          <div className="hidden md:block">
            {/* Header */}
            <div className="grid grid-cols-[24%_44%_32%] border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  Context
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  What the record may hold
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  Boundary
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={row.context}
                className={`grid grid-cols-[24%_44%_32%] ${
                  index !== rows.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="px-4 py-3.5">
                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {row.context}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-slate-600">
                    {row.record}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-slate-600">
                    {row.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.context}
                className={`p-5 ${
                  index !== rows.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {row.context}
                </h3>

                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                    What the record may hold
                  </p>

                  <p className="mt-1 text-sm font-normal leading-5 text-slate-600">
                    {row.record}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                    Boundary
                  </p>

                  <p className="mt-1 text-sm font-normal leading-5 text-slate-600">
                    {row.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}