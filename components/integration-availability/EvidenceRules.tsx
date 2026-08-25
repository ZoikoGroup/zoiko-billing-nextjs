export default function EvidenceRules() {
  const rows = [
    {
      field: "Evidence type",
      content:
        "Named certification, security review, partner verification, connector validation or another governed category",
    },
    {
      field: "Subject",
      content:
        "Exactly what is covered: provider, connector, method, environment, process, organization or product",
    },
    {
      field: "Scope",
      content:
        "Capabilities, regions, versions, systems, controls or exclusions",
    },
    {
      field: "Issuer / owner",
      content:
        "The external authority or internal accountable owner",
    },
    {
      field: "Effective / review dates",
      content:
        "Currentness plus expiry or review deadline",
    },
    {
      field: "Status",
      content:
        "Current, expired, withdrawn, superseded, needs review or not published",
    },
    {
      field: "Evidence route",
      content:
        "A public trust page, controlled route or internal reference per disclosure policy",
    },
    {
      field: "Relationship rights",
      content:
        "A partner, brand or certification mark may be used only if rights are current",
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
          items-center
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
            gap-10

            sm:gap-11
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
                  tracking-[0.12em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.16em]
                "
              >
                Certification, review &amp; assurance evidence
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
              Certification is not availability, and not
              compliance.
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
              An Available connector may have no public certification
              evidence. A certified connector can still be unavailable for a
              region, plan, version or operation. Using one does not make you
              compliant.
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
                {/* TABLE HEADER */}
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
                      Required content
                    </span>
                  </div>
                </div>

                {/* TABLE ROWS */}
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

                    {/* CONTENT */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}