interface BlockRow {
  block: string;
  behavior: React.ReactNode;
}

const FourteenBlockRows: BlockRow[] = [
  {
    block: "Operation title",
    behavior: "Verb plus resource intent in plain language, with the canonical identifier if assigned",
  },
  {
    block: "Availability",
    behavior: "Available, Limited, Planned, Requires setup or Enterprise only — mapped from status",
  },
  {
    block: "Version / lifecycle",
    behavior: "Current version, with beta, preview or deprecated state only when source-approved",
  },
  {
    block: "Purpose",
    behavior: (
      <>
        What the operation does{" "}
        <span className="font-bold text-slate-900">and what it does not do</span>
      </>
    ),
  },
  {
    block: "Permissions",
    behavior: "Required permission, scope or role summary, linking to Authentication for creation",
  },
  {
    block: "Request target",
    behavior: "Verified method and path, or the equivalent transport contract",
  },
  {
    block: "Path, query & header params",
    behavior: "Name, type, required, constraints, default and semantics — all source-bound",
  },
  {
    block: "Request body",
    behavior: "Schema, required and optional fields, money, time and identifier semantics",
  },
  {
    block: "Idempotency",
    behavior: "Required, optional or unsupported, with key behavior where verified",
  },
  {
    block: "Response",
    behavior: "Success statuses, schema, pagination metadata if relevant, examples",
  },
  {
    block: "Errors",
    behavior: "Known classes, retryability, developer action, and correlation identifier when supported",
  },
  {
    block: "Related events",
    behavior: "Webhook and event links only when verified",
  },
  {
    block: "Audit / evidence impact",
    behavior: "Whether the operation creates or changes evidence-bearing records",
  },
  {
    block: "Last reviewed",
    behavior: "Documentation freshness from the docs governance pipeline",
  },
];

export default function OperationPageAnatomySection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="anatomy">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          OPERATION PAGE ANATOMY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Fourteen blocks, identical on every operation.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The structure is designer-owned; the values are source-injected. A developer should
          never have to relearn the pattern between resources.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devoloper-api-documentation/dad2.png"
            alt="Fourteen blocks, identical on every operation"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787661423694.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          
          {/* Sub-header inside card */}
          <div className="p-3.5 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
            Required blocks and their behavior.
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    BLOCK
                  </th>
                  <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                    REQUIRED BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FourteenBlockRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                      {row.block}
                    </td>
                    <td className="py-3 px-4 text-[11px] sm:text-xs font-normal text-slate-600 leading-relaxed align-top">
                      {row.behavior}
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
