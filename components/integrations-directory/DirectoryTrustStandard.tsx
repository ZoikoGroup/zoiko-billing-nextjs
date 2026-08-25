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
    <section className="w-full overflow-hidden bg-[#f8f9fb]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        {/* HEADING CONTENT */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 text-center">
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#091127]
              sm:text-[34px]
              md:text-[36px]
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
              pt-1
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

        {/* TABLE */}
        <div
          className="
            mt-8
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            sm:mt-10
            md:mt-12
          "
        >
          {/* RESPONSIVE TABLE SCROLL */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* TABLE HEADER */}
              <div className="grid grid-cols-[208px_minmax(0,1fr)] bg-[#fafbfc]">
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  Required field
                </div>

                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  Purpose
                </div>
              </div>

              {/* TABLE ROWS */}
              {fields.map((item, index) => (
                <div
                  key={item.field}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,1fr)]
                    ${
                      index !== fields.length - 1
                        ? "border-b border-[#eef1f5]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {item.field}
                  </div>

                  <div
                    className="
                      px-4
                      py-3.5
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {item.purpose}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE HINT */}
        <p className="mt-3 text-xs font-normal text-[#7890b2] sm:hidden">
          Swipe horizontally to view the full table.
        </p>
      </div>
    </section>
  );
}
