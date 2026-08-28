import Link from "next/link";

interface DestinationRow {
  questionType: string;
  authority: React.ReactNode;
  behaviorHere: React.ReactNode;
}

const destinationRows: DestinationRow[] = [
  {
    questionType: "How does a product capability work?",
    authority: "Documentation",
    behaviorHere: "Concepts, prerequisites, roles, states, fields, procedure, expected outcome",
  },
  {
    questionType: "How do I fix a problem or symptom?",
    authority: "Help Center",
    behaviorHere: (
      <>
        <span className="font-bold text-slate-900">Troubleshooting is not duplicated here</span> — symptom diagnosis links out
      </>
    ),
  },
  {
    questionType: "What endpoint, schema, auth or webhook behavior applies?",
    authority: "Developers - API Documentation",
    behaviorHere: (
      <>
        Linked, <span className="font-bold text-slate-900">never duplicated</span> — this is a different destination from /docs
      </>
    ),
  },
  {
    questionType: "What plan or price includes this?",
    authority: (
      <Link href="/pricing-and-plans" className="text-blue-600 font-bold hover:underline">
        Pricing
      </Link>
    ),
    behaviorHere: "An availability note only if sourced, always linking to Pricing for commercial truth",
  },
  {
    questionType: "Is the service working right now?",
    authority: "System Status",
    behaviorHere: (
      <span className="font-bold text-slate-900">
        Documentation never asserts current operational state
      </span>
    ),
  },
  {
    questionType: "What security or privacy evidence applies?",
    authority: "Trust · Security · Privacy",
    behaviorHere: "Linked to authority; no assurance claims restated",
  },
  {
    questionType: "What support commitment applies?",
    authority: "Support Policy",
    behaviorHere: (
      <span className="font-bold text-slate-900">
        No mutable support promise repeated
      </span>
    ),
  },
];

export default function DocVsHelpVsApiSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="doc-destinations">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DOCUMENTATION VS HELP VS API DOCUMENTATION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Three destinations that sound alike and are not.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          &quot;Documentation&quot; explains how the product works. Help Center fixes problems. API
          Documentation, under Developers, covers technical contracts.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    QUESTION TYPE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    AUTHORITY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-5/12">
                    BEHAVIOR HERE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {destinationRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.questionType}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.authority}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.behaviorHere}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787836300115.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Question type, canonical authority and behavior here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">QUESTION TYPE</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">AUTHORITY</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">BEHAVIOR HERE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {destinationRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.questionType}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.authority}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.behaviorHere}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Amber Search Callout Box inside Card */}
            <div className="m-3.5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed">
              <span className="font-bold text-amber-900">Why this matters for search.</span> A reader typing &quot;payment won&apos;t reconcile&quot; wants Help Center, and one typing &quot;webhook payload schema&quot; wants Developers. Mixing those results into product documentation silently would give both a worse answer than saying plainly where to go — which is what the search above does.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
