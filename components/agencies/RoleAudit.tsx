export default function RoleAudit() {
  const columns = [
    "Decision",
    "Account / client services",
    "Billing Ops",
    "Finance / AR",
    "IT / integration",
    "Commercial",
  ];

  const rows = [
    [
      "Provide client & engagement context",
      "Own and source",
      "Consume",
      "View",
      "Integrate",
      "May source approved commercial context",
    ],
    [
      "Confirm project or service evidence",
      "Own where the process requires",
      "Validate",
      "View",
      "Integration support",
      "No",
    ],
    [
      "Submit pass-through cost",
      "Initiate where configured",
      "Process",
      "Review or approve",
      "Integration support",
      "No",
    ],
    [
      "Approve markup, fee or adjustment",
      "No unless separately authorized",
      "Role-based",
      "Own where policy requires",
      "No",
      "No",
    ],
    [
      "Configure schedule",
      "Consult",
      "Own",
      "Review",
      "Admin support",
      "No",
    ],
    [
      "Approve invoice or change",
      "No unless separately authorized",
      "Role-based",
      "Own where policy requires",
      "No",
      "No",
    ],
    [
      "Issue or deliver",
      "View",
      "Own",
      "View",
      "Supports connectors",
      "No",
    ],
    [
      "Reminder & dispute policy",
      "View",
      "Operate as authorized",
      "Own or approve as configured",
      "No",
      "No",
    ],
    [
      "Payment allocation & reconciliation",
      "View",
      "Assist",
      "Own",
      "Integration support",
      "No",
    ],
  ];

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
            items-start
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
              flex-col
              items-start
              gap-3
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                Roles, approvals, client ownership &amp; audit
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Owning the client relationship is not the same as approving the
              fee.
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
              Account leads need visibility into billing status. That is a
              different thing from authority over invoices, markups, payments
              and reminder policy.
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
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                {columns.map((column) => (
                  <div
                    key={column}
                    className="border-b border-[#dfe5ee] px-4 py-3.5"
                  >
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
                      {column}
                    </span>
                  </div>
                ))}
              </div>

              {/* ROWS */}
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      rowIndex !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {row.map((cell, cellIndex) => (
                    <div
                      key={`${rowIndex}-${cellIndex}`}
                      className="px-4 py-3.5"
                    >
                      <span
                        className={`
                          text-sm
                          leading-5
                          ${
                            cellIndex === 0
                              ? "font-semibold text-[#091127]"
                              : "font-normal text-[#5d7192]"
                          }
                        `}
                      >
                        {cell}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`
                    p-5
                    ${
                      rowIndex !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DECISION */}
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
                      Decision
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
                      {row[0]}
                    </p>
                  </div>

                  {/* ACCOUNT / CLIENT SERVICES */}
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
                      Account / client services
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
                      {row[1]}
                    </p>
                  </div>

                  {/* BILLING OPS */}
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
                      Billing Ops
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
                      {row[2]}
                    </p>
                  </div>

                  {/* FINANCE / AR */}
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
                      Finance / AR
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
                      {row[3]}
                    </p>
                  </div>

                  {/* IT / INTEGRATION */}
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
                      IT / integration
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
                      {row[4]}
                    </p>
                  </div>

                  {/* COMMERCIAL */}
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
                      Commercial
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
                      {row[5]}
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