interface RegistrationRuleRow {
  area: string;
  requirement: React.ReactNode;
}

const registrationRuleRows: RegistrationRuleRow[] = [
  {
    area: "Registration CTA",
    requirement: (
      <>
        Points only to the approved registration authority —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no open redirects
        </span>
      </>
    ),
  },
  {
    area: "Registration data",
    requirement: "The public page does not restate data collection beyond the approved privacy notice",
  },
  {
    area: "Account requirement",
    requirement: "Shown only where the registration system confirms it",
  },
  {
    area: "Deadline",
    requirement: (
      <>
        From the registry or system only —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never a marketing-copy deadline
        </span>
      </>
    ),
  },
  {
    area: "Capacity / waitlist",
    requirement: "Shown only if supported and current; otherwise omitted",
  },
  {
    area: "Join link",
    requirement: (
      <>
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● Never exposed before approved access state
        </span>
        , and never indexed where access is controlled
      </>
    ),
  },
  {
    area: "Support",
    requirement: "Event-specific support only if approved; otherwise Help and Support",
  },
  {
    area: "Third-party platform",
    requirement: (
      <>
        Labeled only where approved and necessary —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● without implying Zoiko control
        </span>
      </>
    ),
  },
];

export default function RegistrationAccessAuthoritySection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="registration-authority">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          REGISTRATION &amp; ACCESS AUTHORITY
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Eight rules between a button and a third–party platform.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          The registration system owns its own behavior, and this page does not restate it.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/webinar-and-events/wae4.png"
            alt="Eight rules between a button and a third-party platform"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787834576677.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/3">AREA</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">REQUIREMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {registrationRuleRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.area}
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
