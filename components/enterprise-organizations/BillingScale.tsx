const billingRows = [
  {
    domain: "Customer records",
    proof: "Scoped records with ownership and history.",
    boundary: "No master-data management claim beyond product scope",
  },
  {
    domain: "Billing schedules",
    proof:
      "Repeat and staged billing where supported, with state, owner and version.",
    boundary: "No advanced subscription-management claim",
  },
  {
    domain: "Invoices & credit notes",
    proof: "Draft, approval, issue and correction history.",
    boundary: "No statutory-compliance guarantee",
  },
  {
    domain: "Documents & delivery",
    proof: "Generate, send and delivery evidence where supported.",
    boundary: "Sent is not delivered",
  },
  {
    domain: "Outstanding balances & AR",
    proof: "Aging, attention, dispute and reminder states.",
    boundary: "No debt-collection-service claim",
  },
  {
    domain: "Payments & reconciliation",
    proof: "Payment record, allocation and reconciliation context.",
    boundary: "No universal payment processing",
  },
  {
    domain: "Adjustments",
    proof: "Reason, approval and history.",
    boundary: "No silent financial override",
  },
  {
    domain: "Reporting",
    proof: "Operational metrics with source, definition and as-of.",
    boundary: "No revenue recognition or forecasting unless approved",
  },
];

export default function BillingScale() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
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
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            md:gap-11
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
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

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
                Billing operations at scale
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Operating breadth, without a volume claim.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Scope, segmentation, filters and operational patterns are what
              make enterprise billing workable. Transaction volumes,
              concurrency, latency and throughput figures are not published
              without verified capacity evidence.
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              <div
                className="
                  grid
                  grid-cols-[22%_45%_33%]
                  bg-[#fafbfc]
                "
              >
                {/* HEADER - DOMAIN */}
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Domain
                  </span>
                </div>

                {/* HEADER - PROOF */}
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Enterprise proof
                  </span>
                </div>

                {/* HEADER - BOUNDARY */}
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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

              {/* TABLE ROWS */}
              {billingRows.map((row, index) => (
                <div
                  key={row.domain}
                  className={`
                    grid
                    grid-cols-[22%_45%_33%]
                    ${
                      index !== billingRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DOMAIN */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.domain}
                    </span>
                  </div>

                  {/* ENTERPRISE PROOF */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.proof}
                    </span>
                  </div>

                  {/* BOUNDARY */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.boundary}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {billingRows.map((row, index) => (
                <div
                  key={row.domain}
                  className={`
                    p-5
                    ${
                      index !== billingRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DOMAIN */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Domain
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.domain}
                    </p>
                  </div>

                  {/* ENTERPRISE PROOF */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Enterprise proof
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.proof}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Boundary
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
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
    </section>
  );
}