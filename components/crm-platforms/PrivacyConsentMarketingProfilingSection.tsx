interface PrivacyRuleRow {
  area: string;
  requiredRule: React.ReactNode;
}

const privacyRuleRows: PrivacyRuleRow[] = [
  {
    area: "Purpose",
    requiredRule: "Billing, service, sales and marketing purposes stay explicit — synchronization does not expand purpose",
  },
  {
    area: "Marketing consent",
    requiredRule: (
      <>
        Separate, optional and source-specific.{" "}
        <span className="font-bold text-slate-900">
          A billing relationship or invoice delivery is not consent
        </span>
      </>
    ),
  },
  {
    area: "Contact roles",
    requiredRule: "Billing, delivery, finance, admin, sales and marketing contact roles remain distinct",
  },
  {
    area: "Data minimization",
    requiredRule: "Only fields needed for the defined use case cross systems",
  },
  {
    area: "Sensitive data",
    requiredRule: "Tax IDs, payment and bank data, dispute text and restricted notes are not exported unless purpose and authority require it",
  },
  {
    area: "Profiling",
    requiredRule: "No hidden customer-value, payment-propensity, churn, renewal, fraud, sentiment, urgency or willingness-to-pay scoring from billing data",
  },
  {
    area: "Lead scoring",
    requiredRule: "Outside the integration contract unless separately governed — no automatic scoring from overdue behavior",
  },
  {
    area: "Sales routing",
    requiredRule: "May use declared owner and workflow state; no sensitive inference",
  },
  {
    area: "Analytics",
    requiredRule: "CRM operational events stay separate from website analytics and marketing audiences",
  },
  {
    area: "Retention & deletion",
    requiredRule: "Downstream copies follow governed responsibility; no promise that every external CRM copy shares the Billing lifecycle",
  },
];

export default function PrivacyConsentMarketingProfilingSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="privacy-consent">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PRIVACY, CONSENT, MARKETING &amp; PROFILING BOUNDARIES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Billing operations must not become an invisible sales ranking system.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Synchronization moves data. It does not expand the purpose that data was collected
          for.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP TABLE VERSION (UNTOUCHED - hidden lg:block)                       */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    AREA
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED RULE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {privacyRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.area}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredRule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711411297.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm mb-4">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Ten privacy areas and their required rule.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      AREA
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      REQUIRED RULE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {privacyRuleRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.area}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requiredRule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red Scope Callout Box */}
          <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed">
            <span className="font-bold text-red-900">Any advanced scoring or AI model is out of scope here.</span> It would require separate intended-use, data, governance, privacy and human-decision controls before it could exist at all.
          </div>

        </div>

      </div>
    </section>
  );
}
