interface VoiceRuleRow {
  rule: string;
  requirement: React.ReactNode;
}

const voiceRuleRows: VoiceRuleRow[] = [
  {
    rule: "Quote editing",
    requirement: (
      <>
        Grammar and length only, within approved editing permission —{" "}
        <span className="font-bold text-slate-900">never change meaning</span>
      </>
    ),
  },
  {
    rule: "Pull quote",
    requirement: (
      <>
        Must match the full-context quote and{" "}
        <span className="font-bold text-slate-900">
          not convert a preference into a measurable result
        </span>
      </>
    ),
  },
  {
    rule: "Headlines",
    requirement: (
      <span className="font-bold text-slate-900">
        Do not place words in the customer&apos;s mouth
      </span>
    ),
  },
  {
    rule: "Narrative balance",
    requirement: "Include implementation conditions and limitations where material",
  },
  {
    rule: "Hardship framing",
    requirement: (
      <>
        <span className="font-bold text-slate-900">
          Do not exaggerate operational pain or blame staff and customers
        </span>{" "}
        to heighten the transformation
      </>
    ),
  },
  {
    rule: "Review",
    requirement: "The customer approves their representation within the agreed review scope",
  },
];

export default function CustomerVoiceEditorialIntegritySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="editorial-integrity">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CUSTOMER VOICE &amp; EDITORIAL INTEGRITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Do not put words in a customer&apos;s mouth.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six rules governing how a real person&apos;s account survives editing.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    RULE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {voiceRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.rule}
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
