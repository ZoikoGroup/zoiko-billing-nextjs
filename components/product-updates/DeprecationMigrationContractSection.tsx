interface DeprecationContractRow {
  field: string;
  requirement: React.ReactNode;
}

const deprecationContractRows: DeprecationContractRow[] = [
  {
    field: "Deprecated item",
    requirement: "The exact approved feature, workflow or integration identifier",
  },
  {
    field: "Status",
    requirement: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Deprecated or Retired — never mixed
      </span>
    ),
  },
  {
    field: "Affected scope",
    requirement: "Audience, region, plan and environment, only from source truth",
  },
  {
    field: "Replacement",
    requirement: "An approved alternative with current documentation",
  },
  {
    field: "Action",
    requirement: "Required steps at user level; technical detail stays in Docs and Developers",
  },
  {
    field: "Dates",
    requirement: (
      <>
        Deprecation, migration deadline and retirement —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never inferred from internal planning
        </span>
      </>
    ),
  },
  {
    field: "Support",
    requirement: "A Help and Support route",
  },
  {
    field: "Risks",
    requirement: (
      <>
        What may stop working if no action is taken —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● only where verified
        </span>
      </>
    ),
  },
  {
    field: "History",
    requirement: "Corrections, extensions and supersession",
  },
];

export default function DeprecationMigrationContractSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="deprecation-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          DEPRECATION &amp; MIGRATION CONTRACT
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Nine fields, and five of them gate publication.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          A required migration notice without a replacement path, affected scope, documentation,
          approved deadline and support route does not publish at all.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/product-updates/pu4.png"
            alt="Nine fields, and five of them gate publication"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787835342474.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/3">FIELD</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">REQUIREMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {deprecationContractRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
