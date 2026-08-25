export default function ReconciliationExceptions() {
  const rows = [
    {
      exception: "Unmatched transaction",
      workflow:
        "Candidate search, then review, then match, exclude or defer — the source record remains",
    },
    {
      exception: "Duplicate source record",
      workflow:
        "Detect by stable source identity and version; dedupe without losing event history",
    },
    {
      exception: "Duplicate Billing payment",
      workflow:
        "Reconcile existing references before creating another financial object",
      bold: true,
    },
    {
      exception: "Reversal or return",
      workflow:
        "Link to the original evidence where reliable; update through a new event, never by erasing",
    },
    {
      exception: "Corrected source transaction",
      workflow:
        "Preserve the source version and change, then re-evaluate affected reconciliation",
    },
    {
      exception: "Wrong manual match",
      workflow:
        "Authorized unmatch with reason and history; downstream effects previewed first",
    },
    {
      exception: "Closed or locked Billing object",
      workflow:
        "Follow Billing correction and approval rules — no hidden rewrite",
    },
    {
      exception: "Unknown source status",
      workflow:
        "Mark stale or unknown; do not claim reconciled finality",
    },
    {
      exception: "Unsupported currency or account",
      workflow:
        "Block automatic action and route to configuration or availability",
    },
    {
      exception: "Large exception backlog",
      workflow: (
        <>
          An operational queue with filters and ownership —{" "}
          <span className="font-bold">
            no hidden severity or customer-value scoring
          </span>
        </>
      ),
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
                Exceptions: unmatched, duplicate, reversal, return &amp;
                correction
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
              A correction creates a new event.
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
              It never erases the fact that a prior match was made, and never
              retroactively rewrites the source bank transaction.
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
                <div className="grid grid-cols-[320px_1fr]">
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
                    Exception
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
                    Required workflow
                  </div>
                </div>

                {/* TABLE ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.exception}
                    className={`
                      grid
                      grid-cols-[320px_1fr]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* EXCEPTION */}
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
                        {row.exception}
                      </p>
                    </div>

                    {/* WORKFLOW */}
                    <div className="px-4 py-3.5">
                      <p
                        className={`
                          !m-0
                          text-sm
                          leading-5
                          text-[#5d7192]
                          ${row.bold ? "font-bold" : "font-normal"}
                        `}
                      >
                        {row.workflow}
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