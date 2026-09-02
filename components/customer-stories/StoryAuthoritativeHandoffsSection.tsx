import Link from "next/link";

interface StoryHandoffRow {
  question: string;
  authority: React.ReactNode;
  storyBehavior: React.ReactNode;
}

const storyHandoffRows: StoryHandoffRow[] = [
  {
    question: "What does Zoiko Billing do now?",
    authority: "Product · Documentation",
    storyBehavior: "Summarize story context; link to product documentation for live features",
  },
  {
    question: "How do I implement or integrate?",
    authority: (
      <>
        Documentation · Developers ·{" "}
        <Link href="/integrations-directory" className="text-blue-600 font-bold hover:underline">
          Integrations
        </Link>
      </>
    ),
    storyBehavior: "The story describes the sequence; technical contracts stay in Docs and API",
  },
  {
    question: "What is the price or plan?",
    authority: (
      <Link href="/pricing-and-plans" className="text-blue-600 font-bold hover:underline">
        Pricing
      </Link>
    ),
    storyBehavior: (
      <span className="font-bold text-slate-900">
        No hard-coded prices or plan promises
      </span>
    ),
  },
  {
    question: "Security, privacy or compliance?",
    authority: "Trust · Security",
    storyBehavior: (
      <span className="font-bold text-slate-900">
        No testimonial as audit proof
      </span>
    ),
  },
  {
    question: "I need account help.",
    authority: "Help Center · Support",
    storyBehavior: "No account-specific diagnosis in customer stories",
  },
  {
    question: "What research supports a broader trend?",
    authority: (
      <Link href="/reports-and-insights" className="text-blue-600 font-bold hover:underline">
        Reports &amp; Insights
      </Link>
    ),
    storyBehavior: "Do not generalize a customer outcome into an industry benchmark",
  },
];

export default function StoryAuthoritativeHandoffsSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="story-handoffs">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          AUTHORITATIVE HANDOFFS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          A testimonial is not assurance evidence.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six questions a story attracts but must not answer on its own authority.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/customer-stories/d4bfbf4a13383c794aa248b72211a43a5d16e850.png"
            alt="A testimonial is not assurance evidence"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787833703131.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Question, authority and story behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">QUESTION</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">AUTHORITY</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">STORY BEHAVIOR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {storyHandoffRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.question}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.authority}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.storyBehavior}
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
