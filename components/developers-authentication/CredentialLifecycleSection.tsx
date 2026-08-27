interface LifecycleStageRow {
  stage: string;
  behavior: string;
  constraint: React.ReactNode;
}

const credentialLifecycleRows: LifecycleStageRow[] = [
  {
    stage: "Create",
    behavior: "Explicit owner, purpose, environment and permission context before creation.",
    constraint: "High-impact action — use a review step",
  },
  {
    stage: "Reveal / copy",
    behavior: "Masked by default; reveal only where product policy permits; copy is explicit and accessible.",
    constraint: (
      <span className="font-bold text-slate-900">
        Never include a real secret in a mockup
      </span>
    ),
  },
  {
    stage: "Store",
    behavior: "Approved secret-manager expectation stated at policy level.",
    constraint: "Do not recommend browser or local plaintext storage",
  },
  {
    stage: "Use",
    behavior: "Safe request-pattern guidance, with authorization text separate.",
    constraint: (
      <span className="font-bold text-slate-900">
        No secret in a URL or query example
      </span>
    ),
  },
  {
    stage: "Review",
    behavior: "Owner, status and last-review evidence only if available.",
    constraint: "Do not invent last-used telemetry",
  },
  {
    stage: "Rotate",
    behavior: "Verified replacement, overlap and cutover behavior; otherwise labeled source required.",
    constraint: "Avoid downtime promises",
  },
  {
    stage: "Revoke",
    behavior: "Confirmation, impact preview, reason where policy requires, plus success and audit state.",
    constraint: "Irreversible, high-impact treatment",
  },
  {
    stage: "Recover",
    behavior: "Route to a verified recreate or reissue process.",
    constraint: (
      <span className="font-bold text-slate-900">
        Never imply plaintext retrieval
      </span>
    ),
  },
];

export default function CredentialLifecycleSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="credential-lifecycle">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CREDENTIAL LIFECYCLE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Eight stages, and recovery is not one of them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          No stage assumes a secret can be retrieved later. Recovery routes to a verified
          recreate or reissue process instead.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    STAGE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[45%]">
                    REQUIRED BEHAVIOR
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[35%]">
                    DESIGN CONSTRAINT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {credentialLifecycleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.stage}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.behavior}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.constraint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663340283.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Stage, required behavior and the design constraint each carries.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                      STAGE
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                      REQUIRED BEHAVIOR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {credentialLifecycleRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.stage}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.behavior}
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
