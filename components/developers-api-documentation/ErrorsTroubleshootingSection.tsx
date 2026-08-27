interface ErrorDetailRow {
  field: string;
  detail: React.ReactNode;
}

const errorRows: ErrorDetailRow[] = [
  {
    field: "Transport status",
    detail: "Only source-verified status or protocol outcome",
  },
  {
    field: "Machine-error code",
    detail: "A stable identifier if the API exposes one",
  },
  {
    field: "Human message",
    detail: (
      <>
        Plain language summary —{" "}
        <span className="font-bold text-slate-900">
          not relied on for program logic
        </span>
      </>
    ),
  },
  {
    field: "Cause",
    detail: "The most likely condition or validation rule",
  },
  {
    field: "Retryability",
    detail: "Retry now, retry later, do not retry, or reconcile first",
  },
  {
    field: "Developer action",
    detail: "A specific corrective next step",
  },
  {
    field: "Field errors",
    detail:
      "Field-level validation detail and multiple error behavior when supported",
  },
  {
    field: "Request identifier",
    detail: (
      <>
        How to surface it to support{" "}
        <span className="font-bold text-slate-900">without exposing secrets</span>
      </>
    ),
  },
  {
    field: "Related docs",
    detail: "Permission, schema, idempotency, status or support link",
  },
];

export default function ErrorsTroubleshootingSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="errors">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ERRORS &amp; TROUBLESHOOTING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Nine fields per error, including what not to do.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A human message is a summary, never the thing program logic depends on.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-8 items-center text-left">
          
          {/* Left Column: Table Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Required detail per error reference.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {errorRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-5 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.field}
                      </td>
                      <td className="py-3 px-5 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Graphic Image */}
          <div className="w-full overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
            <img
              src="/images/devoloper-api-documentation/dad5.png"
              alt="Nine fields per error, including what not to do"
              className="w-full h-auto object-cover rounded-3xl block"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787661565380.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* 9-Row Mobile Detail Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full mb-4">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Required detail per error reference.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {errorRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-4 text-xs font-bold text-slate-900 align-top w-2/5">
                        {row.field}
                      </td>
                      <td className="py-2.5 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Troubleshooting Example Mobile Card */}
          <div className="rounded-2xl border border-purple-200/80 bg-purple-50/30 p-4 sm:p-5 mb-4 text-xs text-slate-700">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-purple-100/80 text-purple-700 px-2 py-0.5 rounded border border-purple-200/60 font-mono text-[11px] font-semibold">
                {`{error_identifier}`}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 px-2 py-0.5 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Reconcile first
              </span>
            </div>

            <div className="flex flex-col gap-2 font-normal text-slate-600">
              <div>
                <span className="font-bold text-slate-900">What happened:</span> An error context described as a non-retryable write failure
              </div>

              <div>
                <span className="font-bold text-slate-900">Why it happens:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">
                  {`{reason_per_canonical_schema}`}
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-900">What to do:</span>
                <ol className="list-decimal pl-4 mt-1 space-y-1 text-[11px]">
                  <li>
                    Read current state using{" "}
                    <span className="bg-purple-100/70 text-purple-700 px-1 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">
                      {`{idempotency_key_or_submitted_id}`}
                    </span>
                  </li>
                  <li>Confirm what the receiving domain actually recorded</li>
                  <li>Proceed only if the operation demonstrably did not apply</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Red Danger Warning Box */}
          <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs leading-relaxed text-red-950 font-normal">
            <span className="font-bold text-red-900">Danger:</span> never retry a request to &quot;make sure it went through&quot; if retry on an unconfirmed financial write a flow duplicate invoices, payments and allocations are created.
          </div>

        </div>

      </div>
    </section>
  );
}
