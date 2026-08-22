export default function DataAuthority() {
  const rows = [
    {
      category: "Organization / entity",
      authority: "Billing authoritative",
      authorityType: "success",
      copy: "Shared reference",
      conflict: "Source wins",
      disconnect: "Source retained; reference broken",
    },
    {
      category: "Customer / account",
      authority: "Source defined per mapping",
      authorityType: "neutral",
      copy: "Mapped reference",
      conflict: "Human review",
      disconnect: "Source retained; mapping removed",
    },
    {
      category: "User / role",
      authority: "Identity source vs permission owner differ",
      authorityType: "verification",
      copy: "Linked, not copied",
      conflict: "Reject — no privilege union",
      disconnect: "Access revoked at source authority",
    },
    {
      category: (
        <>
          Invoice / billing
          <br className="hidden sm:block" />
          document
        </>
      ),
      authority: "Billing only",
      authorityType: "success",
      copy: "Referenced",
      conflict: (
        <>
          Not applicable — one-way
          <br className="hidden sm:block" /> reference
        </>
      ),
      disconnect: "Documents remain in Billing",
    },
    {
      category: "Payment / reconciliation",
      authority: "Billing authoritative",
      authorityType: "success",
      copy: "Reference only",
      conflict: "Billing validation applies",
      disconnect: "Records remain in Billing",
    },
    {
      category: "Status / analytics",
      authority: "Reporting copy — freshness stated",
      authorityType: "not-stated",
      copy: "Point-in-time copy",
      conflict: "Newer snapshot supersedes",
      disconnect: "Copies handled by retention policy",
    },
    {
      category: "Workflow task / event",
      authority: "Published, consumed, or pending",
      authorityType: "orange",
      copy: (
        <>
          Event with correlation
          <br className="hidden sm:block" /> ID
        </>
      ),
      conflict: "Reconcile before replay",
      disconnect: (
        <>
          Orphaned tasks identified and
          <br className="hidden sm:block" /> dispositioned
        </>
      ),
    },
  ];

  const authorityStyles = {
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    neutral:
      "border-gray-200 bg-gray-50 text-slate-600",
    verification:
      "border-blue-100 bg-blue-50 text-blue-700",
    "not-stated":
      "border-gray-200 bg-gray-50 text-slate-500",
    orange:
      "border-orange-200 bg-orange-50 text-orange-700",
  };

  const dotStyles = {
    success: "bg-emerald-600/75",
    neutral: "bg-slate-500/75",
    verification: "bg-blue-600/75",
    "not-stated": "bg-slate-500/75",
    orange: "bg-orange-600/75",
  };

  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
            Data authority &amp; system of record
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Every category answers who owns it before anything moves.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[720px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          Connection is not ownership. For each category: who owns it, who may
          change it, what is copied versus referenced, how current it is, what
          happens on conflict, and what remains after disconnection.
        </p>

        {/* Table */}
        <div className="mt-8 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          {/* Intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm font-normal leading-5 text-slate-500">
              System of record by data category. States shown are synthetic
              examples of the required vocabulary.
            </p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-[192px_320px_192px_256px_1fr]">
            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Data category
              </span>
            </div>

            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Authority
              </span>
            </div>

            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Copy or reference
              </span>
            </div>

            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                On conflict
              </span>
            </div>

            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                After disconnect
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-[192px_320px_192px_256px_1fr] ${
                  index !== rows.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Data Category */}
                <div className="bg-gray-50 px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Data category
                  </div>

                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {row.category}
                  </p>
                </div>

                {/* Authority */}
                <div className="px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Authority
                  </div>

                  <span
                    className={`inline-flex max-w-full items-start rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${
                      authorityStyles[
                        row.authorityType as keyof typeof authorityStyles
                      ]
                    }`}
                  >
                    <span
                      className={`mr-2 mt-[5px] h-1.5 w-1.5 shrink-0 rounded-sm ${
                        dotStyles[
                          row.authorityType as keyof typeof dotStyles
                        ]
                      }`}
                    />

                    <span>{row.authority}</span>
                  </span>
                </div>

                {/* Copy / Reference */}
                <div className="px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Copy or reference
                  </div>

                  <p className="text-sm font-normal leading-5 text-slate-500">
                    {row.copy}
                  </p>
                </div>

                {/* Conflict */}
                <div className="px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    On conflict
                  </div>

                  <p className="text-sm font-normal leading-5 text-slate-500">
                    {row.conflict}
                  </p>
                </div>

                {/* Disconnect */}
                <div className="px-5 py-4">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    After disconnect
                  </div>

                  <p className="text-sm font-normal leading-5 text-slate-500">
                    {row.disconnect}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}