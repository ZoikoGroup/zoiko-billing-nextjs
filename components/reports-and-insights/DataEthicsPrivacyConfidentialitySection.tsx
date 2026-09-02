interface EthicsControlRow {
  control: string;
  requirement: React.ReactNode;
}

const ethicsControlRows: EthicsControlRow[] = [
  {
    control: "Default posture",
    requirement: "Public, licensed, consented, or approved aggregated and de-identified evidence only",
  },
  {
    control: "Customer data",
    requirement: (
      <>
        <span className="font-bold text-slate-900">
          No account-identifiable values or screenshots
        </span>{" "}
        without explicit permission and publication approval
      </>
    ),
  },
  {
    control: "Small cohorts",
    requirement: "Suppression thresholds applied so a segment cannot re-identify its members",
  },
  {
    control: "Segmentation",
    requirement: "Only approved segments with adequate sample and privacy threshold",
  },
  {
    control: "Sponsorship",
    requirement: "Disclosed where a survey or study has one",
  },
  {
    control: "Withdrawal",
    requirement: (
      <>
        A privacy, legal or security issue triggers{" "}
        <span className="font-bold text-slate-900">immediate withdrawal</span>, with a safe
        route notice after review
      </>
    ),
  },
];

export default function DataEthicsPrivacyConfidentialitySection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="data-ethics">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DATA ETHICS, PRIVACY &amp; CONFIDENTIALITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Aggregate does not automatically mean anonymous.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Suppression thresholds exist because a small enough cohort identifies its members
          regardless of how the numbers are labeled.
        </p>

        {/* 2-Column Grid Layout */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Required controls.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {ethicsControlRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.control}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column Guidance Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
              Customer outcome claims live elsewhere
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
              A named customer result belongs in Customer Stories under its own evidence and
              authorization gate — unless this report independently and lawfully substantiates the
              claim on its own evidence.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              That separation prevents a research page from becoming a route around the
              customer-authorization process.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
