interface AtTestFieldRow {
  field: string;
  requirement: React.ReactNode;
}

const atTestFieldRows: AtTestFieldRow[] = [
  {
    field: "Workflow / surface",
    requirement: (
      <>
        The exact evaluated workflow —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● not a product area
        </span>
      </>
    ),
  },
  {
    field: "Release / version",
    requirement: "The product release or effective date the result applies to",
  },
  {
    field: "Browser / OS",
    requirement: (
      <>
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● Only the exact tested environment
        </span>{" "}
        — results are not generalized across browser/OS
      </>
    ),
  },
  {
    field: "Assistive technology",
    requirement: (
      <>
        Exact product and version —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● only where approved for publication
        </span>
      </>
    ),
  },
  {
    field: "Method",
    requirement: "Manual task flow, screen-reader test, keyboard test, zoom or reflow test",
  },
  {
    field: "Result",
    requirement: "Supports · partially supports · does not support · not applicable · not established",
  },
  {
    field: "Limitations",
    requirement: "A reference to the known-issue record where one exists",
  },
  {
    field: "Date",
    requirement: "The test or verification date",
  },
];

export default function AssistiveTechnologyTestingSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="at-testing">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          ASSISTIVE TECHNOLOGY TESTING
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Eight fields, and &quot;tested with a screen reader&quot; is not one of them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          A test result is only meaningful with its exact environment, method, scope and date attached.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/accessibility/a4.png"
            alt="Eight fields, and 'tested with a screen reader' is not one of them"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788178915038.png - block lg:hidden) */}
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
                  {atTestFieldRows.map((row, idx) => (
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

            {/* Translucent Dark Callout Box inside Card */}
            <div className="m-3.5 rounded-2xl border border-slate-800 bg-[#070D1E]/70 p-4 text-xs text-slate-300 leading-relaxed">
              <div className="text-xs font-bold text-slate-200 mb-1.5">
                Why a result cannot be generalized
              </div>
              <p className="text-[11px] text-slate-400">
                A workflow that works with one screen reader on one browser and OS combination may fail on another, because the failure often lives in the interaction between the assistive technology and the browser rather than on the page. Publishing &quot;compatible with screen readers&quot; from a single tested combination is a claim the evidence cannot support — so the environment is part of the result, not a footnote to it.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
