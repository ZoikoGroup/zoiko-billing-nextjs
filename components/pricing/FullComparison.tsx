export default function FullComparison() {
  const sections = [
    {
      title: "Quantitative limits",
      rows: [
        ["Internal users", "3", "15", "50", "Contracted"],
        ["Active customers", "2,500", "25,000", "250,000", "Contracted"],
        ["Invoices + credit notes / month", "1,000", "10,000", "100,000", "Contracted"],
        ["Active recurring schedules", "100", "2,500", "25,000", "Contracted"],
        ["Legal entities", "1", "3", "10", "Contracted"],
        ["Currencies", "5", "30", "All supported", "Contracted"],
        ["Payment provider connections", "1", "3", "10", "Contracted"],
        ["Automation / dunning rules", "5", "50", "500", "Contracted"],
        ["Webhook endpoints", "Not included", "10", "50", "Contracted"],
        ["API requests / day", "10k read · no write", "100k", "1m", "Contracted"],
        ["Searchable audit history", "12 months", "36 months", "84 months", "Contracted"],
        ["Sandboxes", "Not included", "1", "3", "Contracted"],
      ],
    },
    {
      title: "Core billing",
      rows: [
        [
          "One-time invoices & credit notes",
          "Included",
          "Included",
          "Included",
          "Included",
        ],
        ["Payment links", "Included", "Included", "Included", "Included"],
        ["Balances & aging", "Included", "Included", "Included", "Included"],
        ["Basic reconciliation", "Included", "Included", "Included", "Included"],
        ["Immutable audit trail", "Included", "Included", "Included", "Included"],
      ],
    },
    {
      title: "Recurring & automation",
      rows: [
        [
          "Subscriptions & proration",
          "Not included",
          "Included",
          "Included",
          "Included",
        ],
        ["Promotions", "Not included", "Included", "Included", "Included"],
        [
          "Configurable dunning",
          "Standard reminders only",
          "Included",
          "Included",
          "Included",
        ],
        [
          "Automated reconciliation rules",
          "Not included",
          "Included",
          "Included",
          "Included",
        ],
      ],
    },
    {
      title: "Advanced revenue operations",
      rows: [
        [
          "Usage & metered billing",
          "Not included",
          "Not included",
          "Included",
          "Included",
        ],
        [
          "Tiered & volume pricing",
          "Not included",
          "Not included",
          "Included",
          "Included",
        ],
        [
          "Advanced matching",
          "Not included",
          "Not included",
          "Included",
          "Included",
        ],
        [
          "Maker-checker approvals",
          "Not included",
          "Not included",
          "Included",
          "Included",
        ],
        [
          "Consolidated multi-entity reports",
          "Not included",
          "Not included",
          "Included",
          "Included",
        ],
      ],
    },
    {
      title: "Platform, security & identity",
      rows: [
        ["MFA", "Included", "Included", "Included", "Included"],
        ["Custom roles", "Not included", "Included", "Included", "Included"],
        [
          "Write API & webhooks",
          "Not included",
          "Included",
          "Included",
          "Included",
        ],
        [
          "ERP & data warehouse integrations",
          "Not included",
          "Not included",
          "Included",
          "Included",
        ],
        [
          "SAML / OIDC SSO",
          "Not included",
          "Not included",
          "Not included",
          "Included",
        ],
        [
          "SCIM provisioning",
          "Not included",
          "Not included",
          "Not included",
          "Included",
        ],
        [
          "Dedicated security & compliance review",
          "Not included",
          "Not included",
          "Not included",
          "Included",
        ],
        [
          "SLA & commercial terms",
          "Not included",
          "Not included",
          "Not included",
          "Contracted",
        ],
      ],
    },
  ];

  const isIncluded = (value: string) => value === "Included";

  const isNotIncluded = (value: string) =>
    value === "Not included" ||
    value === "Standard reminders only" ||
    value.includes("no write");

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
                Full comparison
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
              Features and limits, side by side.
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
              Per AC-09 this table is keyboard and screen-reader usable and{" "}
              <span className="font-bold">never colour-dependent</span> —
              every cell states a value or the word &quot;Not included&quot;
              rather than relying on a tick.
            </p>
          </div>

          {/* COMPARISON TABLE */}
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
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(190px,1.35fr)_repeat(4,minmax(130px,1fr))]
                  bg-[#091127]
                "
              >
                {[
                  "Feature / limit",
                  "Essentials",
                  "Professional",
                  "Business",
                  "Enterprise",
                ].map((heading, index) => (
                  <div
                    key={heading}
                    className={`
                      px-3.5
                      py-3
                      ${index !== 4 ? "border-r border-white/15" : ""}
                    `}
                  >
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                      {heading}
                    </span>
                  </div>
                ))}
              </div>

              {/* TABLE SECTIONS */}
              {sections.map((section) => (
                <div key={section.title}>
                  {/* SECTION TITLE */}
                  <div className="border-t border-[#dfe5ee] bg-[#f1f3f6] px-3.5 py-2.5">
                    <span className="text-xs font-extrabold uppercase leading-4 tracking-wide text-[#091127]">
                      {section.title}
                    </span>
                  </div>

                  {/* SECTION ROWS */}
                  {section.rows.map((row, rowIndex) => (
                    <div
                      key={row[0]}
                      className={`
                        grid
                        grid-cols-[minmax(190px,1.35fr)_repeat(4,minmax(130px,1fr))]
                        ${
                          rowIndex !== section.rows.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* FEATURE */}
                      <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-2.5">
                        <span className="text-xs font-semibold leading-5 text-[#091127]">
                          {row[0]}
                        </span>
                      </div>

                      {/* PLAN VALUES */}
                      {row.slice(1).map((value, index) => (
                        <div
                          key={`${row[0]}-${index}`}
                          className={`
                            px-3.5
                            py-2.5
                            ${
                              index !== 3
                                ? "border-r border-[#edf0f4]"
                                : ""
                            }
                          `}
                        >
                          <span
                            className={`
                              text-xs
                              leading-5
                              ${
                                isIncluded(value)
                                  ? "font-bold text-[#16834b]"
                                  : isNotIncluded(value)
                                    ? "font-normal text-[#7890b2]"
                                    : "font-normal text-[#5d7192]"
                              }
                            `}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET */}
            <div className="flex flex-col md:hidden">
              {/* MOBILE PLAN HEADER */}
              <div className="bg-[#091127] px-5 py-4">
                <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
                  Feature comparison
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    "Essentials",
                    "Professional",
                    "Business",
                    "Enterprise",
                  ].map((plan) => (
                    <div
                      key={plan}
                      className="rounded-md border border-white/15 px-2 py-2"
                    >
                      <span className="text-xs font-bold text-white">
                        {plan}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOBILE SECTIONS */}
              {sections.map((section) => (
                <div key={section.title}>
                  {/* SECTION TITLE */}
                  <div className="border-b border-[#dfe5ee] bg-[#f1f3f6] px-5 py-3">
                    <span className="text-[11px] font-extrabold uppercase leading-4 tracking-wide text-[#091127]">
                      {section.title}
                    </span>
                  </div>

                  {/* MOBILE ROWS */}
                  {section.rows.map((row, rowIndex) => (
                    <div
                      key={row[0]}
                      className={`
                        p-5
                        ${
                          rowIndex !== section.rows.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* FEATURE */}
                      <div className="mb-4">
                        <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                          Feature / limit
                        </p>

                        <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                          {row[0]}
                        </p>
                      </div>

                      {/* PLAN VALUES */}
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {[
                          "Essentials",
                          "Professional",
                          "Business",
                          "Enterprise",
                        ].map((plan, index) => {
                          const value = row[index + 1];

                          return (
                            <div
                              key={plan}
                              className="
                                rounded-lg
                                border
                                border-[#edf0f4]
                                bg-[#fafbfc]
                                px-3
                                py-2.5
                              "
                            >
                              <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.1em] text-[#7890b2]">
                                {plan}
                              </p>

                              <p
                                className={`
                                  !m-0
                                  mt-1
                                  text-xs
                                  leading-5
                                  ${
                                    isIncluded(value)
                                      ? "font-bold text-[#16834b]"
                                      : isNotIncluded(value)
                                        ? "font-normal text-[#7890b2]"
                                        : "font-normal text-[#5d7192]"
                                  }
                                `}
                              >
                                {value}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}