interface DestinationRuleRow {
  intent: string;
  destination: string;
  rule: React.ReactNode;
}

const destinationRows: DestinationRuleRow[] = [
  {
    intent: "Need exact API contracts",
    destination: "API Documentation",
    rule: "Approved and locked destination",
  },
  {
    intent: "Need event delivery",
    destination: "Webhooks",
    rule: "Link only — the detailed page remains a future item",
  },
  {
    intent: "Need a safe test environment",
    destination: "Developer Sandbox",
    rule: (
      <>
        Link only —{" "}
        <span className="font-bold text-slate-900">
          do not describe unsupported sandbox behavior
        </span>
      </>
    ),
  },
  {
    intent: "Need code accelerators",
    destination: "SDKs & Examples",
    rule: (
      <>
        Link only —{" "}
        <span className="font-bold text-slate-900">
          do not claim languages or packages
        </span>
      </>
    ),
  },
  {
    intent: "Need implementation help",
    destination: "Build an Integration",
    rule: "Commercial and support behavior must be approved separately",
  },
];

export default function FiveDestinationsNextStepsSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="next-steps">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BUILD &amp; TEST NEXT STEPS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Five destinations, linked without describing them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Each link routes to the destination that owns the topic; none of them is characterized
          here.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    DEVELOPER INTENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    DESTINATION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/2">
                    RULE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {destinationRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.intent}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-blue-600 align-top">
                      {row.destination}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.rule}
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
