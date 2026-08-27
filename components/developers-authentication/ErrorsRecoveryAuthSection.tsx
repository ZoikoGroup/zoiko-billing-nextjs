interface FailureClassRow {
  failureClass: string;
  treatment: string;
  doNot: React.ReactNode;
}

const failureClassRows: FailureClassRow[] = [
  {
    failureClass: "Missing or invalid credential",
    treatment: "Explain that access could not be authenticated; point to safe setup checks.",
    doNot: "Reveal parser details that expose secret material",
  },
  {
    failureClass: "Expired or revoked",
    treatment: "Identify status where the source model supports it, and route to recreate, rotate or re-authorize.",
    doNot: "Promise grace periods",
  },
  {
    failureClass: "Permission denied",
    treatment: "Explain that authentication succeeded but the action is not authorized, where API semantics support the distinction.",
    doNot: (
      <span className="font-bold text-slate-900">
        Tell the user to &quot;use an admin key&quot;
      </span>
    ),
  },
  {
    failureClass: "Environment mismatch",
    treatment: "Explain the mismatch only if the platform can detect it safely.",
    doNot: "Expose production identifiers",
  },
  {
    failureClass: "Unknown outcome",
    treatment: "Preserve the request identifier and give retry guidance only from canonical API semantics.",
    doNot: (
      <span className="font-bold text-slate-900">
        Tell the user to blindly retry a write
      </span>
    ),
  },
  {
    failureClass: "Service configuration error",
    treatment: "Route to status and support with safe evidence.",
    doNot: "Ask for secrets in ticket text",
  },
];

export default function ErrorsRecoveryAuthSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="errors-recovery">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ERRORS &amp; RECOVERY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Six failure classes, and what must never be said.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The &quot;do not&quot; column matters as much as the treatment — a helpful-sounding error
          can leak secret material or trigger a duplicate write.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    FAILURE CLASS
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[45%]">
                    USER-FACING TREATMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[30%]">
                    DO NOT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {failureClassRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.failureClass}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.treatment}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.doNot}
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
