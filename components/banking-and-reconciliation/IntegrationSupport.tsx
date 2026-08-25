export default function IntegrationSupport() {
  const rows = [
    {
      stage: "Select source",
      behavior: "Only a current approved registry record",
    },
    {
      stage: "Check prerequisites",
      behavior:
        "Region, plan, source method, account type, currency, authentication, data scope and entity mapping",
    },
    {
      stage: "Connect / authorize",
      behavior:
        "An approved method with masked account references and no secret exposure",
    },
    {
      stage: "Initial sync / backfill",
      behavior:
        "Dry run and preview, date and account scope, dedupe, partial errors and reconciliation impact",
    },
    {
      stage: "Mapping & rules",
      behavior:
        "Versioned rules, permissions, an auto-match ceiling and defined review behavior",
    },
    {
      stage: "Activate",
      behavior:
        "Currentness, health and source account mapping verified first",
    },
    {
      stage: "Operational incident",
      behavior:
        "Expose source status and currentness; support and status come before commercial messaging",
    },
    {
      stage: "Provider schema change",
      behavior:
        "Compatibility test, mapping version update, staged rollout and recovery",
    },
    {
      stage: "Disconnect",
      behavior:
        "Stop future reads, revoke authorization, preserve historical source IDs and evidence, resolve pending jobs",
    },
    {
      stage: "Privacy",
      behavior:
        "Transaction narratives and account metadata are purpose-limited and minimized",
    },
    {
      stage: "Compliance",
      behavior: (
        <>
          <span className="font-bold">
            No blanket banking, financial-control or audit compliance claim
          </span>{" "}
          from connection capability
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
                Setup, migration, operational status, support &amp; privacy
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
              Support diagnoses connections, not
              accounts.
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
              Integration Support can diagnose connection, ingestion,
              currentness, mapping and workflow issues. It does not give
              banking, accounting, legal, tax or financial advice.
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
                <div className="grid grid-cols-[256px_1fr]">
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
                    Stage / issue
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
                    key={row.stage}
                    className={`
                      grid
                      grid-cols-[256px_1fr]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* STAGE / ISSUE */}
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
                        {row.stage}
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