import Link from "next/link";

interface UpdatesHandoffRow {
  question: string;
  authority: React.ReactNode;
  behaviorHere: React.ReactNode;
}

const updatesHandoffRows: UpdatesHandoffRow[] = [
  {
    question: "How does it work now?",
    authority: "Documentation · Product",
    behaviorHere: "Link to current behavior rather than restate it",
  },
  {
    question: "Is the service currently healthy?",
    authority: "System Status",
    behaviorHere: (
      <span className="font-bold text-slate-900">
        Do not infer service health from a release feed
      </span>
    ),
  },
  {
    question: "Is there a security issue?",
    authority: "Security · Trust",
    behaviorHere: (
      <span className="font-bold text-slate-900">
        No vulnerability advisory in a product update
      </span>
    ),
  },
  {
    question: "What does it cost?",
    authority: (
      <Link href="/pricing-and-plans" className="text-blue-600 font-bold hover:underline">
        Pricing
      </Link>
    ),
    behaviorHere: "No plan or price restated in an update",
  },
  {
    question: "What is the API contract?",
    authority: "Developers",
    behaviorHere: "Business summary only; no protocol detail",
  },
  {
    question: "What is coming next?",
    authority: "Approved roadmap source, if one exists",
    behaviorHere: (
      <span className="font-bold text-slate-900">
        No roadmap or coming-soon promise
      </span>
    ),
  },
  {
    question: "My account has a problem.",
    authority: "Help Center · Support",
    behaviorHere: "No account-specific troubleshooting",
  },
];

export default function ProductUpdatesAuthoritativeHandoffsSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="authoritative-handoffs">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          AUTHORITATIVE HANDOFFS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          A release feed is not a status page.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Seven questions this page attracts and must route rather than answer.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    QUESTION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    AUTHORITY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/4">
                    BEHAVIOR HERE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {updatesHandoffRows.map((row, idx) => (
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

      </div>
    </section>
  );
}
