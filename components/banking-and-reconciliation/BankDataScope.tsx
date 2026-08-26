export default function BankDataScope() {
  const rows = [
    {
      dataClass: "Transaction feed / read",
      claim: "Read source transaction records for the configured account.",
      boundary: "No payment initiation or ownership claim",
    },
    {
      dataClass: "Account metadata",
      claim:
        "Masked name, type, currency and reference where the provider supplies it.",
      boundary: "No legal account verification claim",
    },
    {
      dataClass: "Balance data",
      claim:
        "Only if the exact connector supports it and currentness semantics are defined.",
      boundary:
        "Does not imply available cash or a treasury position",
      boldBoundary: true,
    },
    {
      dataClass: "Transaction status",
      claim:
        "Pending, booked, posted or provider-native state only if the source supplies it.",
      boundary:
        "Bank state is not translated into Billing finality automatically",
    },
    {
      dataClass: "Statement / file import",
      claim:
        "Import an approved statement format where supported.",
      boundary: "No universal bank-format support",
    },
    {
      dataClass: "Events / webhooks",
      claim:
        "Receive source change events if supported.",
      boundary: "Event receipt is not reconciliation finality",
    },
    {
      dataClass: "Historical backfill",
      claim:
        "Only within approved source and date limits.",
      boundary: "No unlimited history claim",
    },
    {
      dataClass: "Counterparty / reference text",
      claim:
        "Provider-supplied data, minimized per privacy rules.",
      boundary: "No identity or legal ownership inferred",
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
          lg:py-20

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
                Feed types, account references &amp; data scope
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
              Transaction access does not imply
              <br className="hidden sm:block" />
              balance access.
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
              Each data class carries its own registry state and freshness. A
              connector without an explicit balance capability never shows a
              balance.
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
            {/* HORIZONTAL SCROLL CONTAINER */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1040px]">
                {/* TABLE HEADER */}
                <div className="grid grid-cols-[224px_539px_1fr]">
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
                    Data class
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
                    Allowed claim when registered
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
                    Boundary
                  </div>
                </div>

                {/* TABLE ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.dataClass}
                    className={`
                      grid
                      grid-cols-[224px_539px_1fr]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* DATA CLASS */}
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
                        {row.dataClass}
                      </p>
                    </div>

                    {/* ALLOWED CLAIM */}
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
                        {row.claim}
                      </p>
                    </div>

                    {/* BOUNDARY */}
                    <div className="px-4 py-3.5">
                      <p
                        className={`
                          !m-0
                          text-sm
                          leading-5
                          ${
                            row.boldBoundary
                              ? "font-bold text-[#5d7192]"
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