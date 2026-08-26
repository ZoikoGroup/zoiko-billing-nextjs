interface EnvConcernRow {
  concern: string;
  behavior: React.ReactNode;
}

const envConcernRows: EnvConcernRow[] = [
  {
    concern: "Environment label",
    behavior:
      "Always visible near the credential, code sample, request tool and setup action",
  },
  {
    concern: "Credential portability",
    behavior: (
      <span className="font-bold text-slate-900">
        Never imply the same credential works across environments unless verified
      </span>
    ),
  },
  {
    concern: "Data separation",
    behavior:
      'State only verified isolation behavior — avoid absolutes such as "never shares data" without security authority',
  },
  {
    concern: "Production warning",
    behavior:
      "A persistent production treatment for any write-capable tool, if interactive execution is ever approved",
  },
  {
    concern: "URL persistence",
    behavior:
      "Environment selection may appear in the URL only if it contains no sensitive material",
  },
  {
    concern: "Analytics",
    behavior: (
      <>
        Track selector use as safe enum metadata only —{" "}
        <span className="font-bold text-slate-900">
          never log secrets or request payloads
        </span>
      </>
    ),
  },
];

export default function EnvironmentBoundariesAuthSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="environment-boundaries">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ENVIRONMENT BOUNDARIES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Never imply one credential works everywhere.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six environment concerns, with isolation claims limited to what the security authority
          actually verifies.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CONCERN
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {envConcernRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.concern}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.behavior}
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
