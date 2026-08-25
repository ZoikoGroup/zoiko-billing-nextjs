export default function EvidenceHistory() {
  const rows = [
    {
      field: "Owner / source",
      behavior: "A named accountable registry or service",
    },
    {
      field: "Verified at",
      behavior: "The last technical or product verification",
    },
    {
      field: "Effective from / to",
      behavior: "Future, current and expired kept separate",
    },
    {
      field: "Stale after",
      behavior:
        "An internal threshold after which the positive claim suppresses or enters Needs review",
    },
    {
      field: "Supersedes",
      behavior: "The prior availability version retained in history",
    },
    {
      field: "Change reason",
      behavior:
        "Region, plan, capability, version, provider, review, operational or lifecycle change",
    },
    {
      field: "Evidence refs",
      behavior:
        "Current support, technical, partner or certification references",
    },
    {
      field: "Planned state",
      behavior:
        "Future intent only — no production count and no setup CTA",
      emphasized: true,
    },
    {
      field: "Notification",
      behavior:
        "Optional minimal consent-based notification only where separately approved",
    },
    {
      field: "Withdrawal",
      behavior:
        "Consent can be withdrawn, and is never bundled with marketing consent",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-10
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-7
          lg:py-20

          xl:gap-11
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
                tracking-[0.11em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.15em]
              "
            >
              Currentness, change history, planned &amp; evidence
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
            Evidence before persuasion.
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
            Availability facts stay accessible without a sales form. A
            notification flow must never become a hidden lead-capture
            requirement for current public information.
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
            <div className="min-w-[900px]">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[240px_minmax(0,1fr)]
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
                    Field
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
                    Required behavior
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.field}
                  className={`
                    grid
                    grid-cols-[240px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#e9edf3]"
                        : ""
                    }
                  `}
                >
                  {/* FIELD */}
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
                      {row.field}
                    </p>
                  </div>

                  {/* BEHAVIOR */}
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
                      {row.behavior}
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