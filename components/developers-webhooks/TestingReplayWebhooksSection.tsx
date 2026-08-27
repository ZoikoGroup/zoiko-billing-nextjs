interface ReplayCapabilityRow {
  capability: string;
  requirement: React.ReactNode;
}

const replayCapabilityRows: ReplayCapabilityRow[] = [
  {
    capability: "Test delivery",
    requirement: "Only if supported, with synthetic provenance and the selected environment clearly labeled",
  },
  {
    capability: "Sample event",
    requirement: (
      <>
        Canonical sample payload and event identity —{" "}
        <span className="font-bold text-slate-900">
          never fabricate production identifiers
        </span>
      </>
    ),
  },
  {
    capability: "Replay",
    requirement: "Only if supported; show eligible events, reason, target endpoint, environment, side-effect warning and audit evidence",
  },
  {
    capability: "Replay window",
    requirement: "Display only the approved retention period",
  },
  {
    capability: "Sandbox relationship",
    requirement: "Deep link to Developer Sandbox as the next destination",
  },
  {
    capability: "Production safeguard",
    requirement: "A test or replay control must be visually and interactively distinct from viewing",
  },
];

export default function TestingReplayWebhooksSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="testing-replay">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          TESTING &amp; REPLAY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          A replay control must never look like passive viewing.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Where external effects are possible, clear intent and confirmation are required
          before anything is sent.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CAPABILITY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {replayCapabilityRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.capability}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requirement}
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
