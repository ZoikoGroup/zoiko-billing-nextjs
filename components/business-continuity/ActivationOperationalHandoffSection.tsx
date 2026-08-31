import Link from "next/link";

interface HandoffRow {
  question: string;
  authority: React.ReactNode;
  behaviorHere: React.ReactNode;
}

const handoffRows: HandoffRow[] = [
  {
    question: "Is something wrong right now?",
    authority: "System Status",
    behaviorHere: (
      <>
        <span className="font-bold text-slate-900">Never answered here</span>. Linked, with no cached state substituted
      </>
    ),
  },
  {
    question: "Has continuity been activated?",
    authority: "System Status · approved incident communication",
    behaviorHere: "Activation status is operational truth, not a governance statement",
  },
  {
    question: "What happened in a past event?",
    authority: "System Status event history",
    behaviorHere: "No historical continuity events asserted here",
  },
  {
    question: "How will I be told?",
    authority: "System Status · Support communication",
    behaviorHere: (
      <>
        The channel is named;{" "}
        <span className="font-bold text-slate-900">
          no notification timing is promised
        </span>
      </>
    ),
  },
  {
    question: "Who do I contact in an emergency?",
    authority: "Approved Support entry",
    behaviorHere: (
      <>
        <span className="font-bold text-slate-900">
          No emergency contact is invented
        </span>{" "}
        — the approved route is shown, or none
      </>
    ),
  },
  {
    question: "What are my contractual remedies?",
    authority: (
      <>
        Legal ·{" "}
        <Link href="/support-policy" className="text-blue-600 font-bold hover:underline">
          Support Policy
        </Link>
      </>
    ),
    behaviorHere: "No SLA, credit or entitlement inferred from continuity language",
  },
];

export default function ActivationOperationalHandoffSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="activation-handoff">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ACTIVATION &amp; OPERATIONAL HANDOFF
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Where continuity ends and System Status begins.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          This page never becomes a live incident surface — a continuity explainer that reports current
          state creates a second, slower source of operational truth.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    QUESTION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    AUTHORITY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-5/12">
                    BEHAVIOR HERE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {handoffRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.question}
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
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788179672191.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Question, authority and behavior here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/4">QUESTION</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">AUTHORITY</th>
                    <th scope="col" className="py-2.5 px-4 w-5/12">BEHAVIOR HERE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {handoffRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.question}
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
          </div>

          {/* Amber Unavailable Status Source Callout Box */}
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-amber-900">When the status source is unavailable.</span> This page does not fill in. It states that the source could not be reached and links to it — because a continuity page that guesses at current availability is exactly the failure mode it exists to guard against.
          </div>

        </div>

      </div>
    </section>
  );
}
