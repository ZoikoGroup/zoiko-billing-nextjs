interface ReferenceTypeRow {
  type: string;
  rule: React.ReactNode;
}

const referenceTypeRows: ReferenceTypeRow[] = [
  {
    type: "Field table",
    rule: (
      <>
        Name, meaning, availability, editability and derived state only when canonical —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never invent API field names
        </span>
      </>
    ),
  },
  {
    type: "State table",
    rule: "State, meaning, entry condition, allowed actions, next states and visibility only from product source",
  },
  {
    type: "Permission table",
    rule: "Role capability and view, edit, approve, export and configure boundaries only when governed",
  },
  {
    type: "Metric definition",
    rule: "Name, definition, scope, filters, exclusions, source and update behavior only when defined",
  },
  {
    type: "Limits",
    rule: (
      <>
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● Do not publish numeric caps, rates, retention, size, timing or quotas
        </span>{" "}
        unless source-authoritative
      </>
    ),
  },
  {
    type: "Integration mapping",
    rule: (
      <>
        Business object, direction and source-of-truth context only —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● protocol and schema in Developers
        </span>
      </>
    ),
  },
  {
    type: "Audit & evidence",
    rule: (
      <>
        Visible audit concepts explained —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● without exposing internal security implementation
        </span>
      </>
    ),
  },
];

export default function ReferenceTableContractSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="reference-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          REFERENCE TABLE CONTRACT
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Seven reference types, and none may be invented.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          A reference table is the part of documentation readers trust most literally, which is
          exactly why it carries the strictest sourcing rule.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/documentation/d4.png"
            alt="Seven reference types, and none may be invented"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787836422548.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/3">REFERENCE TYPE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">REQUIRED RULE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {referenceTypeRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.type}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.rule}
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
