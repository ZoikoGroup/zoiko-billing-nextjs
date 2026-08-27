interface BuyerQuestionRow {
  question: string;
  response: React.ReactNode;
}

const buyerQuestionRows: BuyerQuestionRow[] = [
  {
    question: "Can credentials be governed?",
    response: "Show ownership, lifecycle, permission separation, revocation and audit",
  },
  {
    question: "Can access be least-privilege?",
    response: "Show the permission model and operation-level requirements without guessing",
  },
  {
    question: "Are secrets protected?",
    response: "Document non-analytics handling, masking, safe copy, storage rules and redaction",
  },
  {
    question: "Can access be reviewed?",
    response: "Show the access review and evidence model where supported; do not invent telemetry",
  },
  {
    question: "Can environments be separated?",
    response: (
      <>
        Show the environment boundary from canonical source —{" "}
        <span className="font-bold text-slate-900">
          never assume single-key portability
        </span>
      </>
    ),
  },
  {
    question: "What about custom enterprise setup?",
    response: "Use an approved enterprise route only when such assistance is explicitly defined",
  },
];

export default function EnterpriseSecurityProcurementSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="enterprise-security">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ENTERPRISE SECURITY &amp; PROCUREMENT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Six buyer questions, answered only to the extent supported.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A security reviewer should be able to complete an assessment from this page without a
          sales call — and without receiving an overclaim.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devolpers-authentication/da6.png"
            alt="Six buyer questions, answered only to the extent supported"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663835355.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Buyer question and page response.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      BUYER QUESTION
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      PAGE RESPONSE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {buyerQuestionRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.question}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.response}
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
