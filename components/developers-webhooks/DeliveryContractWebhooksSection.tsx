interface DimensionRow {
  dimension: string;
  answer: React.ReactNode;
}

const dimensionRows: DimensionRow[] = [
  {
    dimension: "Method / transport",
    answer: "Canonical method and transport only",
  },
  {
    dimension: "Destination",
    answer: "How the configured endpoint is used, including redirect behavior only if approved",
  },
  {
    dimension: "Envelope",
    answer: (
      <>
        Event and delivery identifiers, type, occurrence time, object reference, version metadata —{" "}
        <span className="font-bold text-slate-900">
          only fields in the canonical schema
        </span>
      </>
    ),
  },
  {
    dimension: "Headers / metadata",
    answer: "Only source-approved names and meanings",
  },
  {
    dimension: "Acknowledgment",
    answer: "Which receiver result is considered accepted",
  },
  {
    dimension: "Timeout",
    answer: "Exact value and behavior only if published by engineering",
  },
  {
    dimension: "Response body",
    answer: "Whether ignored, stored, truncated, redacted or surfaced — from source policy only",
  },
  {
    dimension: "Delivery timing",
    answer: (
      <span className="font-bold text-slate-900">
        No &quot;instant&quot; or &quot;real-time&quot; claim unless a service-level objective exists
      </span>
    ),
  },
  {
    dimension: "Size limits",
    answer: "Only approved payload, header and response limits",
  },
  {
    dimension: "Data classification",
    answer: "Sensitive and regulated fields identified, with minimization rules where available",
  },
];

export default function DeliveryContractWebhooksSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="delivery-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DELIVERY CONTRACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Ten dimensions, published only from canonical source.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Where a value is not published, the contract says so rather than supplying a
          plausible default.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    DIMENSION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED PUBLISHED ANSWER
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dimensionRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
