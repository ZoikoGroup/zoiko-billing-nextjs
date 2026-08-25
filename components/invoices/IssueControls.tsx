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
            max-w-[1220px]
            flex-col
            items-start
            gap-8

            sm:gap-9
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                pb-2

                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#5c83aa]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#5c83aa]

                    sm:text-xs
                  "
                >
                  Issue controls
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[40px]

                  md:text-[44px]

                  lg:text-[48px]
                "
              >
                Validate and approve before a document becomes issued.
              </h2>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                  sm:leading-8
                "
              >
                Issue is the point of consequence. Everything before it exists
                so that moment is deliberate, attributable and hard to get
                wrong.
              </p>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-10
              pt-3

              lg:flex-row
              lg:gap-12

              xl:gap-16
            "
          >
            {/* VALIDATION CHECKS */}
            <div className="w-full flex-1">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What validation checks
              </h3>

              <p
                className="
                  !m-0
                  mt-1.5
                  max-w-[480px]
                  text-sm
                  font-normal
                  leading-7
                  text-[#5d7192]
                "
              >
                Configured requirements only. Validation confirms the
                document is complete and permitted — not that it is legally
                correct.
              </p>

              {/* CHECK LIST */}
              <div className="mt-5 flex w-full flex-col">
                {validationChecks.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-2
                      py-4

                      sm:flex-row
                      sm:items-start
                      sm:gap-6

                      ${
                        index !== validationChecks.length - 1
                          ? "border-b border-[#dfe5ee]"
                          : ""
                      }
                    `}
                  >
                    <div className="w-full shrink-0 sm:w-[145px]">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <p
                      className="
                        !m-0
                        flex-1
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ISSUE RECORDS */}
            <div className="w-full flex-1 lg:max-w-[526px]">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What issue records
              </h3>

              <p
                className="
                  !m-0
                  mt-1.5
                  max-w-[480px]
                  text-base
                  font-normal
                  leading-7
                  text-[#5d7192]
                "
              >
                The issued document becomes an accountable record with its own
                version, number and evidence.
              </p>

              {/* IMAGE */}
              <div
                className="
                  mt-5
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_4px_14px_rgba(14,33,27,0.04),0_1px_2px_rgba(14,33,27,0.05)]
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
                  text-[#527f73]
                "
              >
                Destructive deletion and silent overwrite of an issued
                document are prevented according to policy and retention
                obligations.
              </p>
            </div>
          </div>

          {/* ISSUE BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5c83aa]
              bg-[#f7f8fa]
              px-5
              py-7

              sm:px-6

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-normal
                uppercase
                leading-4
                tracking-[0.08em]
                text-[#5c83aa]
              "
            >
              Issue boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#091127]

                sm:text-base
                sm:leading-7
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
              href="#approvals-governed"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#dfe5ee]
                bg-transparent
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                text-[#091127]
                transition-colors
                hover:bg-white
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