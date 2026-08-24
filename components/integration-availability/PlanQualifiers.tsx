export default function PlanQualifiers() {
  const rows = [
    {
      dimension: "Plan applicability",
      representation:
        "An approved public plan or edition qualifier from the registry.",
      boundary: "Does not confirm a customer's active contract",
    },
    {
      dimension: "Commercial model",
      representation:
        "Included, add-on, custom, sales-led or not published — only if authoritative.",
      boundary: "No invented fee or package",
    },
    {
      dimension: "Customer entitlement",
      representation: "Authenticated current account entitlement.",
      boundary: "Never exposed publicly",
      emphasized: true,
    },
    {
      dimension: "Feature flag / controlled launch",
      representation: "An internal or eligible-customer state.",
      boundary:
        "Not advertised as Available unless public release authority says so",
    },
    {
      dimension: "Zoiko One deployment",
      representation: "Specific connection applicability where current.",
      boundary: "Does not imply all ecosystem connections",
    },
    {
      dimension: "Standalone Billing",
      representation: "Specific connection applicability where current.",
      boundary: "No inference from Zoiko One support",
    },
    {
      dimension: "Trial / sandbox",
      representation:
        "Only if the exact integration and environment is approved.",
      boundary: "No generic free-trial implication",
    },
    {
      dimension: "Contract / provider account",
      representation: "Customer-specific readiness.",
      boundary: "Separate from public availability",
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
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-10

            sm:gap-11
          "
        >
          {/* HEADER */}
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
            <div className="flex w-full items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.12em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.16em]
                "
              >
                Plan, commercial entitlement &amp; deployment qualifiers
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* TITLE */}
            <h2
              className="
                !m-0
                !text-center
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Plan applicability is not your contract.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A public plan qualifier says which commercial context can include
              a capability. It never confirms a specific customer&apos;s
              active entitlement.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1040px]">
                {/* HEADER ROW */}
                <div
                  className="
                    grid
                    grid-cols-[240px_minmax(0,1fr)_384px]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fbfcfd]
                  "
                >
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Dimension
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Public representation
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Boundary
                    </span>
                  </div>
                </div>

                {/* DATA ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.dimension}
                    className={`
                      grid
                      grid-cols-[240px_minmax(0,1fr)_384px]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#e9edf3]"
                          : ""
                      }
                    `}
                  >
                    {/* DIMENSION */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          m-0
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.dimension}
                      </p>
                    </div>

                    {/* PUBLIC REPRESENTATION */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.representation}
                      </p>
                    </div>

                    {/* BOUNDARY */}
                    <div className="px-4 py-3.5">
                      <p
                        className={`
                          m-0
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
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}