export default function DirectoryTrustStandard() {
  const fields = [
    {
      field: "Integration name",
      purpose: "The canonical listing name",
    },
    {
      field: "Category",
      purpose:
        "Payment providers, accounting and ERP, CRM, banking and reconciliation, Zoiko ecosystem, or another approved method category",
    },
    {
      field: "Provider",
      purpose:
        "The provider or operator responsible for the external system or method",
    },
    {
      field: "Authentication method",
      purpose:
        'The current supported pattern — not a marketing "secure connection" label',
    },
    {
      field: "Availability status",
      purpose:
        "Whether the integration is currently available for the stated context",
    },
    {
      field: "Supported regions",
      purpose: "Current region and jurisdiction applicability",
    },
    {
      field: "Supported plans",
      purpose: "Current entitlement and commercial applicability",
    },
    {
      field: "Setup method",
      purpose:
        "Who initiates and configures setup, through which approved route",
    },
    {
      field: "Documentation",
      purpose:
        "The current authoritative setup, usage and security documentation",
    },
    {
      field: "Operational status",
      purpose:
        "Current operational state, or a route to the authoritative status source",
    },
    {
      field: "Certification status",
      purpose:
        "A named current scheme where one exists — otherwise absent, never a vague badge",
    },
    {
      field: "Last verification date",
      purpose:
        "When the listing facts were last verified against owners and evidence",
    },
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
            items-center
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
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
                Directory trust &amp; listing standard
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
              Twelve fields, or it is not published.
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
              A listing is publishable only when every required field has an
              owner, current evidence and a safe public state. Missing fields
              are never filled with assumptions or marketing copy.
            </p>
          </div>

          {/* =========================================================
              TABLE / CARDS
          ========================================================= */}
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
            {/* =======================================================
                DESKTOP TABLE
            ======================================================= */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[208px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
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
                    Required field
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
                    Purpose
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {fields.map((item, index) => (
                <div
                  key={item.field}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,1fr)]
                    ${
                      index !== fields.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* REQUIRED FIELD */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.field}
                    </span>
                  </div>

                  {/* PURPOSE */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.purpose}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* =======================================================
                MOBILE / SMALL TABLET CARDS
            ======================================================= */}
            <div className="flex flex-col md:hidden">
              {fields.map((item, index) => (
                <div
                  key={item.field}
                  className={`
                    p-5
                    ${
                      index !== fields.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* REQUIRED FIELD */}
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
                      Required field
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
                      {item.field}
                    </p>
                  </div>

                  {/* PURPOSE */}
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
                      Purpose
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
                      {item.purpose}
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