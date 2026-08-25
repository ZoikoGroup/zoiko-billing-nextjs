export default function CorrectionRecovery() {
  const rows = [
    {
      scenario: "Invoice corrected before issue",
      recovery:
        "Update the draft per Billing history; no accounting handoff has occurred yet",
    },
    {
      scenario: "Issued invoice corrected",
      recovery:
        "Use the approved credit, correction or reissue flow, preserving the original object",
    },
    {
      scenario: "Target rejected the export",
      recovery:
        "Correct mapping, data or prerequisite, then resend as a governed attempt",
    },
    {
      scenario: "Target accepted but not posted",
      recovery: (
        <>
          Read target status —{" "}
          <strong>
            do not duplicate the handoff without reconciliation
          </strong>
        </>
      ),
    },
    {
      scenario: "Target posted, then Billing corrects",
      recovery:
        "Send a target correction or reversal only if connector and accounting policy support it; link original and correction references",
    },
    {
      scenario: "Mapping changed after a prior handoff",
      recovery:
        "The new version applies prospectively unless controlled remediation explicitly targets prior records",
    },
    {
      scenario: "Closed period",
      recovery:
        "Use authorized target accounting treatment — no hidden backdating",
    },
    {
      scenario: "Duplicate target object",
      recovery:
        "Reconcile by external reference and idempotency; never delete or overwrite blindly",
    },
    {
      scenario: "Target object changed manually",
      recovery:
        "A mismatch state; the accounting owner decides the source-of-truth action",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-8
          px-5
          py-12

          sm:px-8
          sm:py-16
          sm:gap-10

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
                whitespace-nowrap
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.1em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.15em]
              "
            >
              Corrections, reversals, reposting &amp; historical integrity
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              w-full
              max-w-[900px]
              text-center
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
              md:leading-10
              md:whitespace-nowrap
            "
          >
            Correction links; it does not erase.
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
            Historical issued documents and target acknowledgments remain
            evidence. A correction produces linked new events rather than
            rewriting what was previously sent.
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
          {/* HORIZONTAL SCROLL ON SMALL SCREENS */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[288px_minmax(612px,1fr)]
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
                    Scenario
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
                    Required recovery
                  </span>
                </div>
              </div>

              {/* TABLE ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.scenario}
                  className={`
                    grid
                    grid-cols-[288px_minmax(612px,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#eef1f5]"
                        : ""
                    }
                  `}
                >
                  {/* SCENARIO */}
                  <div className="px-4 py-3.5">
                    <div
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.scenario}
                    </div>
                  </div>

                  {/* REQUIRED RECOVERY */}
                  <div className="px-4 py-3.5">
                    <div
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.recovery}
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