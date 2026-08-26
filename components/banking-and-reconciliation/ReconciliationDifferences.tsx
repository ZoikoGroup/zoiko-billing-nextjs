export default function ReconciliationDifferences() {
  const rows = [
    {
      pattern: "Provider fee deducted",
      behavior: (
        <>
          Use the authoritative provider breakdown where available —{" "}
          <span className="font-bold">never invent a fee split</span>
        </>
      ),
    },
    {
      pattern: "Batch / net payout",
      behavior:
        "Relate one bank transaction to multiple settlement records through an explicit settlement group",
    },
    {
      pattern: "Refund or reversal included",
      behavior:
        "Link negative records to the original payment evidence where supported",
    },
    {
      pattern: "FX conversion",
      behavior:
        "Preserve both source and original currency amounts; no hidden conversion or FX gain/loss accounting",
    },
    {
      pattern: "Timing difference",
      behavior:
        "Provider success and bank booking may fall on different dates; show dates independently",
    },
    {
      pattern: "Partial payment",
      behavior:
        "Allow partial reconciliation per Billing rules, with the residual visible",
    },
    {
      pattern: "Over or under payment",
      behavior:
        "An exception for review — no invoice is auto-adjusted without authority",
    },
    {
      pattern: "Fee-only transaction",
      behavior:
        "Classified only when source mapping proves it; no description-only financial classification",
    },
    {
      pattern: "Multiple invoices, one transfer",
      behavior:
        "One-to-many only with an explicit allocation policy",
    },
    {
      pattern: "One invoice, multiple transfers",
      behavior:
        "Many-to-one only with clear residual and finality",
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Fees, FX, net/gross, batches &amp; settlement differences
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              A difference is not an error by default.
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
              Fees, FX, batching, partials and reversals can all explain a
              bank amount that does not equal an invoice amount. Original
              values are preserved rather than silently adjusted.
            </p>
          </div>

          {/* TABLE CARD */}
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
            {/* RESPONSIVE TABLE */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[900px]">
                {/* TABLE HEADER */}
                <div className="grid grid-cols-[288px_1fr]">
                  <div
                    className="
                      border-b
                      border-[#dfe5ee]
                      bg-[#fafbfc]
                      px-4
                      py-3.5
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Pattern
                  </div>

                  <div
                    className="
                      border-b
                      border-[#dfe5ee]
                      bg-[#fafbfc]
                      px-4
                      py-3.5
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Required behavior
                  </div>
                </div>

                {/* TABLE ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.pattern}
                    className={`
                      grid
                      grid-cols-[288px_1fr]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* PATTERN */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.pattern}
                      </p>
                    </div>

                    {/* REQUIRED BEHAVIOR */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.behavior}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE SCROLL TEXT */}
          <p
            className="
              -mt-5
              text-xs
              font-normal
              text-[#7890b2]

              sm:hidden
            "
          >
            Swipe to view the full table
          </p>
        </div>
      </div>
    </section>
  );
}