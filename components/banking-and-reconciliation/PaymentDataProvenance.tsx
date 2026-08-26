export default function PaymentDataProvenance() {
  const rows = [
    {
      field: "Source transaction ID",
      handling:
        "A stable provider identifier, used as the dedupe key where reliable",
    },
    {
      field: "Connection / account reference",
      handling: "An opaque or masked source account mapping",
    },
    {
      field: "Provider-native state",
      handling:
        "Preserved; normalized only through a named mapping",
    },
    {
      field: "Amount and currency",
      handling: (
        <>
          Exact signed value semantics and fixed precision —{" "}
          <span className="font-bold">no hidden conversion</span>
        </>
      ),
    },
    {
      field: "Booking date",
      handling:
        "Used only if the source provides it, with the semantic label retained",
    },
    {
      field: "Value / effective date",
      handling:
        "Kept separate from booking date when the source supports it",
    },
    {
      field: "Description / reference",
      handling:
        "Source text, privacy-minimized in display and logging",
    },
    {
      field: "Counterparty metadata",
      handling:
        "Only approved fields; no inferred identity",
    },
    {
      field: "Received / ingested time",
      handling:
        "When Zoiko observed the record, distinct from when it occurred",
    },
    {
      field: "Last confirmed",
      handling: "Freshness and source status",
    },
    {
      field: "Original payload reference",
      handling:
        "A secure evidence pointer — the raw payload is not broadly exposed",
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
                Ingestion, normalization &amp; provenance
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
              Provenance survives normalization.
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
              Normalized fields improve matching, but the original source
              identifier, state and semantics stay recoverable for audit,
              support and conflict resolution.
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
                <div className="grid grid-cols-[384px_1fr]">
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
                    Field
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
                    Required handling
                  </div>
                </div>

                {/* TABLE ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.field}
                    className={`
                      grid
                      grid-cols-[384px_1fr]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* FIELD */}
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
                        {row.field}
                      </p>
                    </div>

                    {/* REQUIRED HANDLING */}
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
                        {row.handling}
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