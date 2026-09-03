"use client";

const evidenceRows = [
  {
    event: "Entity or default currency change",
    evidence:
      "Before and after, actor, source, reason, effective date, approval, and the impacted future workflows",
  },
  {
    event: "Customer currency override",
    evidence:
      "The request, the eligibility result, the approver and the effective period",
  },
  {
    event: "Rate source or policy change",
    evidence:
      "Old and new source, type, freshness and rounding policy, owner and effective date",
  },
  {
    event: "Manual rate override",
    evidence:
      "Pair, rate, reason, approver, expiry and the impacted transactions",
  },
  {
    event: "Provider currency change",
    evidence:
      "Provider, account, operation and currency scope, with the effective date",
  },
  {
    event: "Conflict resolution",
    evidence:
      "The competing sources or configurations, the chosen authority and the rationale",
  },
  {
    event: "Stale-rate fallback",
    evidence:
      "Why the conversion was blocked or a fallback shown — never a hidden substitute",
  },
  {
    event: "Rounding or variance adjustment",
    evidence:
      "Calculation basis, amount, currency and the actor or system",
  },
  {
    event: "Export",
    evidence:
      "Requester, purpose, scope, permissions and expiry where applicable",
  },
];

export default function AuditEvidence() {
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
              max-w-[900px]
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
                Audit, approvals, exceptions &amp; conflict evidence
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
              History has to support an investigation.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Which currency, rate and policy was effective, which source
              supplied it, what operation consumed it, who approved an
              exception, and what downstream record resulted.
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
              {/* HEADER */}
              <div className="grid grid-cols-[320px_minmax(0,1fr)] bg-[#fafbfc]">
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
                    Event
                  </span>
                </div>

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
                    Evidence required
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {evidenceRows.map((item, index) => (
                <div
                  key={item.event}
                  className={`
                    grid
                    grid-cols-[320px_minmax(0,1fr)]
                    ${
                      index !== evidenceRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* EVENT */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.event}
                    </span>
                  </div>

                  {/* EVIDENCE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.evidence}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {evidenceRows.map((item, index) => (
                <div
                  key={item.event}
                  className={`
                    p-5
                    ${
                      index !== evidenceRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* EVENT */}
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
                      Event
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
                      {item.event}
                    </p>
                  </div>

                  {/* EVIDENCE */}
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
                      Evidence required
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
                      {item.evidence}
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