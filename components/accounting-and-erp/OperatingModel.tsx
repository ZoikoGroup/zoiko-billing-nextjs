export default function OperatingModel() {
  const rows = [
    {
      layer: "Zoiko Billing",
      role: "Owns approved billing operational objects and their history.",
      boundary: "Does not become the external general ledger by connection",
    },
    {
      layer: "Integration connector",
      role: "Transforms and transports approved object and action payloads.",
      boundary: "Transport logic does not decide accounting policy",
    },
    {
      layer: "Accounting / ERP target",
      role: "Owns target objects, posting rules, ledgers, periods and native state.",
      boundary: "Target acceptance and posting semantics must be preserved",
    },
    {
      layer: "Mapping set",
      role:
        "Maps entity, customer, account, tax, currency, dimension and reference values.",
      boundary: "Explicit, versioned and context-specific",
    },
    {
      layer: "Target acknowledgment",
      role:
        "An external response indicating receipt or validation as defined.",
      boundary: "Acknowledged is not necessarily posted",
      emphasized: true,
    },
    {
      layer: "Posting evidence",
      role:
        "Target-specific posted or journal evidence, only if the connector exposes authoritative state.",
      boundary: "Never inferred from a transport success",
    },
    {
      layer: "Reconciliation",
      role:
        "Compares the expected Billing handoff to target response, state and reference.",
      boundary: "Does not replace bank reconciliation or accounting close",
    },
    {
      layer: "Audit & history",
      role:
        "Records source, payload version, mapping version, target references, timestamps and outcomes.",
      boundary: "No sensitive payloads in general analytics",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 md:gap-11">
          {/* SECTION INTRO */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
                Integration operating model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2 className="!m-0 w-full max-w-[1000px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              Authority is object and field specific.
            </h2>

            {/* DESCRIPTION */}
            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-[#5d7192] sm:text-base">
              Billing can be source authority for an issued invoice while the
              ERP remains authority for its journal representation, ledger
              account, period and posting status.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:block">
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[192px_minmax(0,1.05fr)_minmax(0,0.85fr)] bg-[#fafbfc]">
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Layer
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Role
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Authority boundary
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.layer}
                className={`grid grid-cols-[192px_minmax(0,1.05fr)_minmax(0,0.85fr)] ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* LAYER */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.layer}
                  </div>
                </div>

                {/* ROLE */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.role}
                  </div>
                </div>

                {/* AUTHORITY BOUNDARY */}
                <div className="px-4 py-3.5">
                  <div
                    className={`text-sm leading-5 ${
                      row.emphasized
                        ? "font-bold text-[#091127]"
                        : "font-normal text-[#5d7192]"
                    }`}
                  >
                    {row.boundary}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.layer}
                className={`p-5 ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* LAYER */}
                <div className="mb-2 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Layer
                </div>

                <div className="text-sm font-semibold leading-5 text-[#091127]">
                  {row.layer}
                </div>

                {/* ROLE */}
                <div className="mb-2 mt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Role
                </div>

                <div className="text-sm font-normal leading-6 text-[#5d7192]">
                  {row.role}
                </div>

                {/* AUTHORITY BOUNDARY */}
                <div className="mb-2 mt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Authority boundary
                </div>

                <div
                  className={`text-sm leading-6 ${
                    row.emphasized
                      ? "font-bold text-[#091127]"
                      : "font-normal text-[#5d7192]"
                  }`}
                >
                  {row.boundary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}