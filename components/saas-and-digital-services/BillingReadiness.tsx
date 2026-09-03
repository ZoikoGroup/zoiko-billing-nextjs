const readinessRows = [
  {
    requirement: "Customer & account",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "Customer Records",
    owner: "Billing Ops",
  },
  {
    requirement: "Billing basis",
    state: "Ready",
    type: "ready",
    detail: "Seat-derived, version 2, supported",
    source: "Billing basis registry",
    owner: "Billing Ops",
  },
  {
    requirement: "Service period",
    state: "Current",
    type: "ready",
    detail: "01–31 Aug, timezone basis recorded",
    source: "Schedule SCH-0502",
    owner: "Billing Ops",
  },
  {
    requirement: "Amount, rate or quantity input",
    state: "Changed since review",
    type: "changed",
    detail: "Rate rule v3 effective 01 Sep",
    source: "Rate registry",
    owner: "Finance Approver",
  },
  {
    requirement: "External seat reference",
    state: "Source stale",
    type: "stale",
    detail: "Observed 13 Aug; policy requires within 48 hours",
    source: "Product system",
    owner: "Product / RevOps source",
  },
  {
    requirement: "Change or add-on request",
    state: "Needs approval",
    type: "approval",
    detail: "CHG-0412 effective 01 Sep",
    source: "Change reference",
    owner: "Finance Approver",
  },
  {
    requirement: "Approval policy",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "Workflow policy v4",
    owner: "Finance Approver",
  },
  {
    requirement: "Schedule or trigger",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "SCH-0502",
    owner: "Billing Ops",
  },
  {
    requirement: "Document & delivery setup",
    state: "Ready",
    type: "ready",
    detail: "",
    source: "Documents & Delivery",
    owner: "Billing Ops",
  },
  {
    requirement: "Integration dependency",
    state: "Needs verification",
    type: "stale",
    detail: "Product webhook route last verified 13 Aug",
    source: "Integration registry",
    owner: "Integration Admin",
  },
];

const stateStyles = {
  ready: "border-[#bbebd0] bg-[#f0fdf4] text-[#15803d]",
  changed: "border-[#fed7aa] bg-[#fff7ed] text-[#ea580c]",
  stale: "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]",
  approval: "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]",
};

export default function BillingReadiness() {
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
                Readiness, service period &amp; evidence
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
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
              <span className="block">
                Readiness is a list of named blockers,
              </span>

              <span className="block">
                never a percentage.
              </span>
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
              A stale seat quantity, a missing service period, an unsupported
              basis or a pending approval each block billing on their own — so
              each stays individually visible.
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
            {/* HORIZONTAL SCROLL */}
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                {/* HEADER */}
                <thead>
                  <tr className="bg-[#fafbfc]">
                    <th
                      className="
                        w-[24%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3.5
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Requirement
                    </th>

                    <th
                      className="
                        w-[32%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3.5
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      State
                    </th>

                    <th
                      className="
                        w-[19%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3.5
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Source
                    </th>

                    <th
                      className="
                        w-[25%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3.5
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Owner
                    </th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {readinessRows.map((row, index) => (
                    <tr key={row.requirement}>
                      {/* REQUIREMENT */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          ${
                            index !== readinessRows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        <span className="text-sm font-semibold leading-5 text-[#091127]">
                          {row.requirement}
                        </span>
                      </td>

                      {/* STATE */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          ${
                            index !== readinessRows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        <div className="flex flex-col items-start gap-1">
                          <span
                            className={`
                              inline-flex
                              items-center
                              rounded-md
                              border
                              px-2.5
                              py-1
                              text-[11px]
                              font-semibold
                              leading-4
                              ${stateStyles[row.type as keyof typeof stateStyles]}
                            `}
                          >
                            {row.type === "ready" && (
                              <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#16a34a]" />
                            )}

                            {row.type === "changed" && (
                              <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#f97316]" />
                            )}

                            {row.type === "stale" && (
                              <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#7890b2]" />
                            )}

                            {row.type === "approval" && (
                              <span className="mr-2 h-3 w-3 shrink-0 rounded-full border-2 border-[#7890b2]" />
                            )}

                            {row.state}
                          </span>

                          {row.detail && (
                            <span className="max-w-[300px] text-xs font-normal leading-5 text-[#5d7192]">
                              {row.detail}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* SOURCE */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          ${
                            index !== readinessRows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        <span className="text-sm font-normal leading-5 text-[#5d7192]">
                          {row.source}
                        </span>
                      </td>

                      {/* OWNER */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          ${
                            index !== readinessRows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        <span className="text-sm font-normal leading-5 text-[#5d7192]">
                          {row.owner}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}