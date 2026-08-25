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
      actions:
        "Pass approved computed values and mapped target codes.",
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
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        {/* INTRO */}
        <div
          className="
            flex
            w-full
            max-w-[662px]
            flex-col
            items-center
            gap-3
            pt-2
            text-center
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Supported objects, actions &amp; direction
            </span>

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              w-full
              max-w-[760px]
              text-center
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
              md:leading-10
            "
          >
            There is no generic bidirectional sync.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              text-center
              text-sm
              font-normal
              leading-6
              text-[#5d7192]

              sm:text-base
              sm:leading-7
            "
          >
            Nine object areas, each with registered actions and an explicit
            boundary. Direction is declared per object and action, never as a
            single arrow.
          </p>
        </div>

        {/* TABLE */}
        <div
          className="
            mt-9
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

            sm:mt-11
          "
        >
          {/* MOBILE HORIZONTAL SCROLL */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1040px]">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[208px_470px_1fr]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Object area
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Possible registered actions
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    grid-cols-[208px_470px_1fr]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#eef1f5]"
                        : ""
                    }
                  `}
                >
                  {/* OBJECT */}
                  <div className="px-4 py-3.5">
                    <div
                      className="
                        whitespace-pre-line
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.object}
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="px-4 py-3.5">
                    <div
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.actions}
                    </div>
                  </div>

                  {/* BOUNDARY */}
                  <div className="px-4 py-3.5">
                    <div
                      className={`
                        text-sm
                        leading-5
                        ${
                          row.emphasized
                            ? "font-bold text-[#091127]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.boundary}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}