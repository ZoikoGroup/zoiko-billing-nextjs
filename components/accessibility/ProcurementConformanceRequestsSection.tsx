import Link from "next/link";

interface ProcurementNeedRow {
  need: string;
  authority: React.ReactNode;
  behaviorHere: React.ReactNode;
}

const procurementNeedRows: ProcurementNeedRow[] = [
  {
    need: "A conformance report or ACR",
    authority: "Trust Center",
    behaviorHere: (
      <>
        Linked where one exists —{" "}
        <span className="font-bold text-slate-900">
          this page never asserts that one does
        </span>
      </>
    ),
  },
  {
    need: "A jurisdiction-specific legal position",
    authority: "Legal",
    behaviorHere: (
      <span className="font-bold text-slate-900">
        No improvised ADA, Section 508 or EN-standard compliance claim
      </span>
    ),
  },
  {
    need: "A completed accessibility questionnaire",
    authority: "Sales · Legal · Accessibility",
    behaviorHere: "Routed; answers come from approved evidence, not from this page",
  },
  {
    need: "Detail on a specific limitation",
    authority: "Accessibility",
    behaviorHere: "The public registry record, plus the feedback route for anything beyond it",
  },
  {
    need: "Product-specific accessibility behavior",
    authority: (
      <>
        Product ·{" "}
        <Link href="/documentation" className="text-blue-600 font-bold hover:underline">
          Documentation
        </Link>
      </>
    ),
    behaviorHere: "Summarized and routed; documentation remains the technical authority",
  },
];

export default function ProcurementConformanceRequestsSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="procurement-requests">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PROCUREMENT &amp; CONFORMANCE REQUESTS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Five needs, routed rather than answered here.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A procurement reviewer needs the artifact, not a paraphrase of it — and no improvised legal claim.
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
                    NEED
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    AUTHORITY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/2">
                    BEHAVIOR HERE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {procurementNeedRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.need}
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
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788178943503.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Need, authority and behavior here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/4">NEED</th>
                    <th scope="col" className="py-2.5 px-4 w-1/4">AUTHORITY</th>
                    <th scope="col" className="py-2.5 px-4 w-2/4">BEHAVIOR HERE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {procurementNeedRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.need}
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

          {/* Red Third-party Callout Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-red-900">Third-party and integration boundary.</span> Where a workflow depends on a connected third-party system, its accessibility is that provider&apos;s responsibility. This boundary is stated <span className="font-bold text-slate-900">without disclaiming Zoiko-owned behavior at the interface</span> — the same distinction the Support Policy draws for third-party products.
          </div>

        </div>

      </div>
    </section>
  );
}
