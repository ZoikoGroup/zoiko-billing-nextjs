const validationChecks = [
  {
    title: "Required context",
    description:
      "Customer, issuer, dates, currency and line context are present and consistent.",
  },
  {
    title: "Numbering availability",
    description:
      "A numbering series exists and is available for this issuer, document type and context.",
  },
  {
    title: "Tax context",
    description:
      "Configured rates, identifiers and exemption evidence state where supported.",
  },
  {
    title: "Duplicate detection",
    description:
      "Conflicting or duplicated source records are surfaced where supported.",
  },
  {
    title: "Permission and policy",
    description:
      "The actor may issue, and any approval policy that applies is evaluated.",
  },
  {
    title: "Issued-effect preview",
    description:
      "The recipient, channel and resulting document are previewed before commitment.",
  },
  {
    title: "Failure ownership",
    description:
      "Every validation failure names the exact issue, an owner and a recovery route.",
  },
];

export default function IssueControls() {
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
                Issue controls
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
              Validate and approve before a document becomes issued.
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
              Issue is the point of consequence. Everything before it exists
              so that moment is deliberate, attributable and hard to get
              wrong.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="w-full">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-6

                lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
                lg:gap-8
              "
            >
              {/* VALIDATION CHECKS */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* HEADER */}
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-5
                    py-4

                    sm:px-6
                  "
                >
                  <h3
                    className="
                      !m-0
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    What validation checks
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-2
                      max-w-[560px]
                      text-[15px]
                      font-normal
                      leading-7
                      text-[#5d7192]

                      sm:text-base
                    "
                  >
                    Configured requirements only. Validation confirms the
                    document is complete and permitted — not that it is legally
                    correct.
                  </p>
                </div>

                {/* DESKTOP CHECKS */}
                <div className="hidden md:block">
                  {/* TABLE HEADER */}
                  <div
                    className="
                      grid
                      grid-cols-[176px_minmax(0,1fr)]
                      bg-[#fafbfc]
                    "
                  >
                    <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                      <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                        Check
                      </span>
                    </div>

                    <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                      <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                        Description
                      </span>
                    </div>
                  </div>

                  {/* ROWS */}
                  {validationChecks.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        grid
                        grid-cols-[176px_minmax(0,1fr)]
                        ${
                          index !== validationChecks.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <div className="px-4 py-3.5">
                        <span className="text-sm font-semibold leading-5 text-[#091127]">
                          {item.title}
                        </span>
                      </div>

                      <div className="px-4 py-3.5">
                        <span className="text-sm font-normal leading-5 text-[#5d7192]">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* MOBILE CHECKS */}
                <div className="flex flex-col md:hidden">
                  {validationChecks.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        p-5
                        ${
                          index !== validationChecks.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <div className="mb-4">
                        <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                          Check
                        </p>

                        <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                          {item.title}
                        </p>
                      </div>

                      <div>
                        <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                          Description
                        </p>

                        <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ISSUE RECORDS */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* HEADER */}
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-5
                    py-4

                    sm:px-6
                  "
                >
                  <h3
                    className="
                      !m-0
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    What issue records
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-2
                      text-[15px]
                      font-normal
                      leading-7
                      text-[#5d7192]

                      sm:text-base
                    "
                  >
                    The issued document becomes an accountable record with its
                    own version, number and evidence.
                  </p>
                </div>

                {/* IMAGE */}
                <div className="p-4 sm:p-5">
                  <div
                    className="
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#dfe5ee]
                      bg-white
                    "
                  >
                    <img
                      src="/images/invoices/issue-record.png"
                      alt="Issued document record"
                      className="
                        block
                        h-auto
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  {/* NOTE */}
                  <p
                    className="
                      !m-0
                      mt-3
                      text-[10px]
                      font-normal
                      uppercase
                      leading-5
                      tracking-[0.06em]
                      text-[#7890b2]
                    "
                  >
                    Destructive deletion and silent overwrite of an issued
                    document are prevented according to policy and retention
                    obligations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ISSUE BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6
              shadow-[0_1px_2px_rgba(15,23,42,0.02)]

              sm:px-6
              sm:py-7

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Issue boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Validation confirms configured requirements, not universal legal
              correctness, and approval applies only to the documented
              request, version and context. Issuing a document does not
              guarantee that a regulator, tax authority or recipient will
              accept it.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center">
            <a
              href="#"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                text-[#091127]
                transition-colors
                hover:bg-[#fafbfc]
              "
            >
              See how approvals are governed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}