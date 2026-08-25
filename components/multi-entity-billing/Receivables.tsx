const rows = [
  {
    record: "Invoice / credit balance",
    rule: "Authoritative to the issuing entity and document currency",
  },
  {
    record: "Aging",
    rule:
      "Entity-specific rules and terms; an aggregate display must preserve the entity and currency basis",
  },
  {
    record: "Payment record",
    rule: "Provider, account and entity evidence maintained",
  },
  {
    record: "Allocation",
    rule: (
      <>
        <strong>Cannot cross entities</strong> unless an explicit supported
        workflow exists
      </>
    ),
  },
  {
    record: "Unapplied payment",
    rule:
      "Entity-owned until a governed transfer or reclassification workflow exists",
  },
  {
    record: "Refund / reversal",
    rule:
      "Entity, provider and payment-context specific, with history preserved",
  },
  {
    record: "Settlement",
    rule:
      "Provider, merchant-account and entity evidence — not a group cash position",
  },
  {
    record: "Reconciliation",
    rule:
      "Source, account, entity, currency, period and status explicit",
  },
  {
    record: "Collections activity",
    rule:
      "Entity and account scope per policy — no debt-collection or legal authority claim",
  },
];

export default function Receivables() {
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
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

          xl:px-24
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-9

            sm:gap-10

            lg:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />

              <span
                className="
                  text-center
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Receivables, payments &amp; reconciliation by entity
              </span>

              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-center
                text-[30px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[36px]

                md:text-[40px]

                lg:text-4xl
                lg:leading-10
              "
            >
              A cross-entity dashboard is not a cash
              position.
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

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              Summarizing outstanding balances across entities is operational
              visibility. It creates no cash pooling, netting, treasury
              management, intercompany settlement or consolidated bank
              reconciliation.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TABLE INTRO */}
            <div
              className="
                border-b
                border-[#e1e5eb]
                bg-[#fbfbfc]
                px-5
                py-4
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Entity rules for each receivables and payment record.
              </p>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[256px_minmax(0,1fr)]
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                "
              >
                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-blue-600
                    "
                  >
                    Record
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
                      text-blue-600
                    "
                  >
                    Entity rule
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.record}
                  className={`
                    grid
                    grid-cols-[256px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* RECORD */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-slate-900
                      "
                    >
                      {row.record}
                    </p>
                  </div>

                  {/* RULE */}
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
                      {row.rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <div
                className="
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                  px-4
                  py-3

                  sm:px-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.1em]
                    text-blue-600

                    sm:text-xs
                  "
                >
                  Receivables &amp; payment records
                </span>
              </div>

              {rows.map((row, index) => (
                <div
                  key={row.record}
                  className={`
                    flex
                    flex-col
                    gap-4
                    px-4
                    py-5

                    sm:px-5
                    sm:py-6

                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* RECORD */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-slate-900

                      sm:text-base
                    "
                  >
                    {row.record}
                  </p>

                  {/* RULE */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-blue-600
                      "
                    >
                      Entity rule
                    </span>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.rule}
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