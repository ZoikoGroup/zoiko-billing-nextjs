interface MeasurementElementRow {
  element: string;
  requirement: React.ReactNode;
}

const measurementElementRows: MeasurementElementRow[] = [
  {
    element: "Start event",
    requirement: "What starts the clock — an accepted case, a valid submission, or another approved event",
  },
  {
    element: "Calendar",
    requirement: "Business or elapsed hours, the timezone, business days, and holiday and weekend treatment",
  },
  {
    element: "Pause condition",
    requirement: (
      <>
        Whether waiting on customer or third-party information pauses timing —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● only if approved
        </span>
      </>
    ),
  },
  {
    element: "Resume condition",
    requirement: "What restarts timing after a pause",
  },
  {
    element: "Stop event",
    requirement: "What actually satisfies the target",
  },
  {
    element: "Scope",
    requirement: "Which customers, cases, channels and priorities the target applies to",
  },
  {
    element: "Exclusions",
    requirement: (
      <>
        Approved exceptions only —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never vague &apos;at our discretion&apos; language
        </span>{" "}
        unless Legal approved
      </>
    ),
  },
];

export default function ResponseMeasurementContractSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="response-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          RESPONSE MEASUREMENT CONTRACT
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Seven elements, all required, or the timing value does not publish.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          A response target without a start event and a calendar is a number, not a commitment — and it is
          unenforceable in both directions.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/support-policy/sp3.png"
            alt="Seven elements, all required, or the timing value does not publish"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788177935587.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/3">ELEMENT</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">REQUIREMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {measurementElementRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.element}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Translucent Dark Callout Box inside Card */}
            <div className="m-3.5 rounded-2xl border border-slate-800 bg-[#070D1E]/70 p-4 text-xs text-slate-300 leading-relaxed">
              <div className="text-xs font-bold text-slate-200 mb-1.5">
                Why all seven, or nothing
              </div>
              <p className="text-[11px] text-slate-400">
                A published &quot;four-hour initial response&quot; with no start event, no timezone and no pause rule creates a commitment neither side can evaluate. The customer measures from when they hit submit; support measures from case acceptance; nobody agreed which. Publishing the value without the basis produces disputes rather than clarity — so the contract is all-or-nothing.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
