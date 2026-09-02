interface SpeakerRuleRow {
  area: string;
  requirement: React.ReactNode;
}

const speakerRuleRows: SpeakerRuleRow[] = [
  {
    area: "Speaker status",
    requirement: (
      <>
        Draft, invited, unconfirmed, canceled and replaced are internal states —{" "}
        <span className="font-bold text-slate-900">
          only confirmed appears publicly
        </span>
      </>
    ),
  },
  {
    area: "Identity",
    requirement: "Approved name, title and organization, with pronunciation or accessibility metadata where useful",
  },
  {
    area: "Bio & photo",
    requirement: "Consent and rights verified, with alt text and a review or expiry date",
  },
  {
    area: "Session ownership",
    requirement: "Title, summary, speaker and order independently reviewable",
  },
  {
    area: "Replacement",
    requirement: (
      <>
        Public update where a named speaker changes materially —{" "}
        <span className="font-bold text-slate-900">
          without implying endorsement beyond participation
        </span>
      </>
    ),
  },
  {
    area: "Recording rights",
    requirement: "Separate from live participation rights",
  },
  {
    area: "Quote & reuse",
    requirement: "Do not turn event remarks into customer or analyst endorsement without explicit approval",
  },
];

export default function SpeakerSessionGovernanceSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="speaker-governance">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SPEAKER &amp; SESSION GOVERNANCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Only confirmed speakers appear.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Seven rules protecting people who agreed to speak at an event, not to become marketing evidence.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    AREA
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {speakerRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.area}
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
