export default function ObjectActions() {
  const rows = [
    {
      object: "Customers / account refs",
      actions: (
        <>
          Create, read or update selected approved fields; external ID
          mapping.
        </>
      ),
      boundary:
        "Identity authority stays field-specific — no universal master-data sync",
    },
    {
      object: "Invoices",
      actions:
        "Export or create target object and reference; read status.",
      boundary:
        "Does not imply journal posting or revenue recognition",
      emphasized: true,
    },
    {
      object: "Credit notes / corrections",
      actions:
        "Export or create a target correction object where supported.",
      boundary: "Original and correction lineage preserved",
    },
    {
      object: "Charges / adjustments",
      actions:
        "Export summarized or detailed approved data where supported.",
      boundary: "No account-code inference without mapping",
    },
    {
      object: "Payments",
      actions:
        "Export or read payment and allocation summary where supported.",
      boundary: (
        <>
          Payment Providers and Payments &amp; Reconciliation remain payment
          authority
        </>
      ),
    },
    {
      object: "Settlement / fees",
      actions: "Only fields explicitly supported by the handoff.",
      boundary: "No treasury or bank-reconciliation inference",
    },
    {
      object: "Tax values / codes",
      actions: "Pass approved computed values and mapped target codes.",
      boundary: "No tax determination or filing claim",
    },
    {
      object: "Dimensions / cost centers",
      actions:
        "Map approved billing context to target dimensions if registered.",
      boundary:
        "No project-accounting or management-accounting suite claim",
    },
    {
      object: (
        <>
          Status /
          <br />
          acknowledgments
        </>
      ),
      actions:
        "Read target processing or posting state if the connector supports it.",
      boundary: "Target-native semantics preserved",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 md:gap-11">
          {/* INTRO */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
                Supported objects, actions &amp; direction
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2 className="!m-0 w-full max-w-[1000px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              There is no generic bidirectional sync.
            </h2>

            {/* DESCRIPTION */}
            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-[#5d7192] sm:text-base">
              Nine object areas, each with registered actions and an explicit
              boundary. Direction is declared per object and action, never as
              a single arrow.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:block">
            {/* HEADER */}
            <div className="grid grid-cols-[208px_minmax(0,1.05fr)_minmax(0,1fr)] bg-[#fafbfc]">
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Object area
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Possible registered actions
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Boundary
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-[208px_minmax(0,1.05fr)_minmax(0,1fr)] ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* OBJECT */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.object}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.actions}
                  </div>
                </div>

                {/* BOUNDARY */}
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
                key={index}
                className={`p-5 ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* OBJECT */}
                <div className="mb-2 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Object area
                </div>

                <div className="text-sm font-semibold leading-5 text-[#091127]">
                  {row.object}
                </div>

                {/* ACTIONS */}
                <div className="mb-2 mt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Possible registered actions
                </div>

                <div className="text-sm font-normal leading-6 text-[#5d7192]">
                  {row.actions}
                </div>

                {/* BOUNDARY */}
                <div className="mb-2 mt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Boundary
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