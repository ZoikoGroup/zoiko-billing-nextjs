interface OutcomeFieldRow {
  field: string;
  requirement: React.ReactNode;
}

const outcomeFieldRows: OutcomeFieldRow[] = [
  {
    field: "Outcome title",
    requirement: "A plain-language technical or business job",
  },
  {
    field: "What it needs",
    requirement: "Required API domains and actions, event dependency, data direction and environment — from canonical sources only",
  },
  {
    field: "Availability",
    requirement: "Available, Limited, Requires setup, Enterprise, Planned, Not exposed or Needs review — only when source-approved",
  },
  {
    field: "Authority links",
    requirement: "API Overview domain, API Documentation operations, plus Authentication, Webhooks, Sandbox and SDK links as applicable",
  },
  {
    field: "Complexity signal",
    requirement: (
      <>
        <span className="font-bold text-slate-900">
          No arbitrary easy, medium or hard.
        </span>{" "}
        Where prerequisites differ materially, state them explicitly
      </>
    ),
  },
  {
    field: "Primary action",
    requirement: "Open the plan section with outcome context, using privacy-safe navigation",
  },
  {
    field: "No lead gate",
    requirement: (
      <>
        Outcome exploration and core technical planning{" "}
        <span className="font-bold text-slate-900">remain public</span>
      </>
    ),
  },
];

export default function ChooseIntegrationOutcomeSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="choose-outcome">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CHOOSE YOUR INTEGRATION OUTCOME
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Begin with intent, not an endpoint list.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Outcome cards render from an approved registry. Seven fields per card — and none of
          them is an arbitrary difficulty rating.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    FIELD
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {outcomeFieldRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.field}
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
