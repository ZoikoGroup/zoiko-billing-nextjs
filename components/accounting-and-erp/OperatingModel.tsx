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
      role: "Maps entity, customer, account, tax, currency, dimension and reference values.",
      boundary: "Explicit, versioned and context-specific",
    },
    {
      layer: "Target acknowledgment",
      role: "An external response indicating receipt or validation as defined.",
      boundary: "Acknowledged is not necessarily posted",
      emphasized: true,
    },
    {
      layer: "Posting evidence",
      role: "Target-specific posted or journal evidence, only if the connector exposes authoritative state.",
      boundary: "Never inferred from a transport success",
    },
    {
      layer: "Reconciliation",
      role: "Compares the expected Billing handoff to target response, state and reference.",
      boundary: "Does not replace bank reconciliation or accounting close",
    },
    {
      layer: "Audit & history",
      role: "Records source, payload version, mapping version, target references, timestamps and outcomes.",
      boundary: "No sensitive payloads in general analytics",
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
        {/* SECTION INTRO */}
        <div
          className="
            flex
            w-full
            max-w-[662px]
            flex-col
            items-center
            gap-3
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
              Integration operating model
            </span>

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              max-w-[662px]
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
            Authority is object and field specific.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              text-sm
              font-normal
              leading-6
              text-[#5d7192]

              sm:text-base
              sm:leading-7
            "
          >
            Billing can be source authority for an issued invoice while the
            ERP remains authority for its journal representation, ledger
            account, period and posting status.
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
          {/* MOBILE SCROLL CONTAINER */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[192px_minmax(400px,594px)_384px]
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
                    Layer
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
                    Role
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
                    Authority boundary
                  </span>
                </div>
              </div>

              {/* TABLE ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.layer}
                  className={`
                    grid
                    grid-cols-[192px_minmax(400px,594px)_384px]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#eef1f5]"
                        : ""
                    }
                  `}
                >
                  {/* LAYER */}
                  <div className="px-4 py-4">
                    <div
                      className="
                        whitespace-pre-line
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.layer}
                    </div>
                  </div>

                  {/* ROLE */}
                  <div className="px-4 py-4">
                    <div
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.role}
                    </div>
                  </div>

                  {/* AUTHORITY BOUNDARY */}
                  <div className="px-4 py-4">
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