import Link from "next/link";

interface AuthoritativeHandoffRow {
  need: string;
  authority: React.ReactNode;
  insightBehavior: React.ReactNode;
}

const handoffRows: AuthoritativeHandoffRow[] = [
  {
    need: "My own Zoiko Billing metrics",
    authority: (
      <>
        <Link href="/reporting-and-analytics" className="text-slate-600 hover:text-blue-600 transition">
          Reporting &amp; Analytics
        </Link>{" "}
        · Documentation
      </>
    ),
    insightBehavior: "A public insight explains theoretical principles; in-product features remain authoritative",
  },
  {
    need: "How do I improve this process?",
    authority: (
      <>
        <Link href="/resource-center" className="text-blue-600 font-bold hover:underline">
          Guides
        </Link>{" "}
        ·{" "}
        <Link href="/resource-center" className="text-blue-600 font-bold hover:underline">
          Templates
        </Link>
      </>
    ),
    insightBehavior: "Translate evidence into editorial recommendations",
  },
  {
    need: "What does this term mean?",
    authority: (
      <Link href="/resource-center" className="text-blue-600 font-bold hover:underline">
        Billing Glossary
      </Link>
    ),
    insightBehavior: "Metric and term definitions live in the glossary",
  },
  {
    need: "What does Zoiko Billing support?",
    authority: "Product · Documentation",
    insightBehavior: (
      <span className="font-bold text-slate-900">
        No feature or availability implied by research
      </span>
    ),
  },
  {
    need: "Pricing or plan",
    authority: (
      <Link href="/pricing-and-plans" className="text-blue-600 font-bold hover:underline">
        Pricing
      </Link>
    ),
    insightBehavior: "No plan or price duplication",
  },
  {
    need: "Technical implementation",
    authority: (
      <Link href="/developers-api-overview" className="text-slate-600 hover:text-blue-600 transition">
        Developers
      </Link>
    ),
    insightBehavior: (
      <span className="font-bold text-slate-900">
        No API, telemetry or schema facts invented
      </span>
    ),
  },
  {
    need: "Account-specific issue",
    authority: "Help Center · Support",
    insightBehavior: "No customer diagnosis in analysis",
  },
  {
    need: "Security or privacy assurance",
    authority: "Trust · Security",
    insightBehavior: "No unsupported assurances",
  },
];

export default function AuthoritativeHandoffsSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="authoritative-handoffs">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          AUTHORITATIVE HANDOFFS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Research is not a product claim.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Eight needs, each owned by a system that can answer without inference from analysis.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/reports-and-insights/rai5.png"
            alt="Research is not a product claim"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787832668350.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Need, destination and insight behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">NEED</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">AUTHORITY</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">INSIGHT BEHAVIOR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {handoffRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.need}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.authority}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.insightBehavior}
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
