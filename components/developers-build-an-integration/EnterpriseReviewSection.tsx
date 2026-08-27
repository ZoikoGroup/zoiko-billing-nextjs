interface EnterpriseReviewRow {
  situation: string;
  treatment: React.ReactNode;
}

const enterpriseReviewRows: EnterpriseReviewRow[] = [
  {
    situation: "Complex security or procurement review",
    treatment: (
      <>
        Offer the approved route{" "}
        <span className="font-bold text-slate-900">after</span> public architecture and security
        information is visible
      </>
    ),
  },
  {
    situation: "Enterprise-only verified capability",
    treatment: "State the exact verified condition and offer the approved route",
  },
  {
    situation: "Custom implementation engagement",
    treatment: "Mentioned only if such a service exists and the commercial owner approves the scope",
  },
  {
    situation: "High scale or limit planning",
    treatment: "Route to documented limits, or an approved technical contact where self-service material is insufficient",
  },
  {
    situation: "Regulatory or residency requirement",
    treatment: (
      <>
        Route to approved trust and privacy evidence —{" "}
        <span className="font-bold text-slate-900">
          no jurisdiction promises made here
        </span>
      </>
    ),
  },
  {
    situation: "General developer question",
    treatment: "Prefer documentation and support over sales, unless the visitor chooses a commercial conversation",
  },
];

export default function EnterpriseReviewSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="enterprise-review">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ENTERPRISE REVIEW
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Assistance appears when the need is real.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Public architecture and security information comes first. &quot;Enterprise&quot; is never
          used as a generic scarcity badge.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    SITUATION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                    TREATMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enterpriseReviewRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.situation}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.treatment}
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
