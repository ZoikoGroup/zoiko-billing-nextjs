const readinessRows = [
  {
    requirement: "Customer & account",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "Customer Records",
    owner: "Billing Ops",
  },
  {
    requirement: "Billing basis",
    state: "Ready",
    type: "ready",
    detail: "Seat-derived, version 2, supported",
    source: "Billing basis registry",
    owner: "Billing Ops",
  },
  {
    requirement: "Service period",
    state: "Current",
    type: "ready",
    detail: "01–31 Aug, timezone basis recorded",
    source: "Schedule SCH-0502",
    owner: "Billing Ops",
  },
  {
    requirement: "Amount, rate or quantity input",
    state: "Changed since review",
    type: "changed",
    detail: "Rate rule v3 effective 01 Sep",
    source: "Rate registry",
    owner: "Finance Approver",
  },
  {
    requirement: "External seat reference",
    state: "Source stale",
    type: "stale",
    detail: "Observed 13 Aug; policy requires within 48 hours",
    source: "Product system",
    owner: "Product / RevOps source",
  },
  {
    requirement: "Change or add-on request",
    state: "Needs approval",
    type: "approval",
    detail: "CHG-0412 effective 01 Sep",
    source: "Change reference",
    owner: "Finance Approver",
  },
  {
    requirement: "Approval policy",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "Workflow policy v4",
    owner: "Finance Approver",
  },
  {
    requirement: "Schedule or trigger",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "SCH-0502",
    owner: "Billing Ops",
  },
  {
    requirement: "Document & delivery setup",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "Documents & Delivery",
    owner: "Billing Ops",
  },
  {
    requirement: "Integration dependency",
    state: "Needs verification",
    type: "stale",
    detail: "Product webhook route last verified 13 Aug",
    source: "Integration registry",
    owner: "Integration Admin",
  },
];

const stateStyles = {
  ready: "border-green-200 bg-green-50 text-green-700",
  changed: "border-orange-200 bg-orange-50 text-orange-600",
  stale: "border-gray-200 bg-gray-50 text-slate-600",
  approval: "border-gray-200 bg-gray-50 text-slate-600",
};

export default function BillingReadiness() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 lg:px-7">

        {/* ================= HEADING ================= */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-4 text-center sm:gap-5">

          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-slate-400/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Readiness, service period &amp; evidence
            </span>

            <span className="h-px w-4 shrink-0 bg-slate-400/40" />
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              w-full
              max-w-[900px]
              text-center
              text-3xl
              font-extrabold
              leading-[1.15]
              tracking-[-0.02em]
              text-slate-900
              sm:text-4xl
              sm:leading-[1.15]
              lg:text-5xl
              lg:leading-[1.14]
            "
          >
            <span className="block">
              Readiness is a list of named blockers,
            </span>

            <span className="block">
              never a percentage.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              w-full
              max-w-[687px]
              text-center
              text-sm
              font-normal
              leading-6
              text-slate-500
              sm:text-base
              sm:leading-7
            "
          >
            A stale seat quantity, a missing service period, an unsupported
            basis or a pending approval each block billing on their own — so
            each stays individually visible.
          </p>
        </div>

        {/* ================= TABLE ================= */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]
          "
        >
          {/* Horizontal scroll on mobile */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">

              {/* Table Header */}
              <thead>
                <tr className="bg-gray-50">
                  <th
                    className="
                      w-[24%]
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-slate-500
                    "
                  >
                    Requirement
                  </th>

                  <th
                    className="
                      w-[32%]
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-slate-500
                    "
                  >
                    State
                  </th>

                  <th
                    className="
                      w-[19%]
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-slate-500
                    "
                  >
                    Source
                  </th>

                  <th
                    className="
                      w-[25%]
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-slate-500
                    "
                  >
                    Owner
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {readinessRows.map((row) => (
                  <tr key={row.requirement}>

                    {/* Requirement */}
                    <td className="border-b border-gray-100 px-4 py-4 align-top">
                      <span className="text-sm font-semibold leading-5 text-slate-900">
                        {row.requirement}
                      </span>
                    </td>

                    {/* State */}
                    <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                      <div className="flex flex-col items-start gap-1">

                        <span
                          className={`
                            inline-flex
                            items-center
                            rounded-md
                            border
                            px-2.5
                            py-1
                            text-xs
                            font-semibold
                            leading-4
                            ${stateStyles[row.type as keyof typeof stateStyles]}
                          `}
                        >
                          {row.type === "ready" && (
                            <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-green-600" />
                          )}

                          {row.type === "changed" && (
                            <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-orange-500" />
                          )}

                          {row.type === "stale" && (
                            <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-slate-500" />
                          )}

                          {row.type === "approval" && (
                            <span className="mr-2 h-3 w-3 shrink-0 rounded-full border-2 border-slate-500" />
                          )}

                          {row.state}
                        </span>

                        {row.detail && (
                          <span className="max-w-[300px] text-xs font-normal leading-5 text-slate-500">
                            {row.detail}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Source */}
                    <td className="border-b border-gray-100 px-4 py-4 align-top">
                      <span className="text-sm font-normal leading-5 text-slate-500">
                        {row.source}
                      </span>
                    </td>

                    {/* Owner */}
                    <td className="border-b border-gray-100 px-4 py-4 align-top">
                      <span className="text-sm font-normal leading-5 text-slate-500">
                        {row.owner}
                      </span>
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