"use client";

const rows = [
  {
    context: "Client & billing account",
    behavior: "The billing account of record.",
    authority: "Customer Records",
    highlighted: true,
  },
  {
    context: "Brand or sub-account reference",
    behavior:
      "An optional contextual reference where approved — never a hidden hierarchy that Customer Records does not support.",
    authority: "Customer Records",
  },
  {
    context: "Engagement, campaign or project reference",
    behavior:
      "A stable reference to approved context. Not a campaign or project-management object.",
    authority: "Upstream system",
  },
  {
    context: "Service description & fee purpose",
    behavior: "An approved descriptor with source and version.",
    authority: "Billing, versioned",
  },
  {
    context: "Client contact & delivery route",
    behavior: "Purpose-limited and current.",
    authority: "Billing",
  },
  {
    context: "Entity, currency & jurisdiction",
    behavior: "Approved availability only.",
    authority: "Global Billing",
    highlighted: true,
  },
  {
    context: "Upstream CRM, project or campaign system",
    behavior:
      "A manual reference or an approved integration, with direction and authority explicit.",
    authority: "Integrations",
    highlighted: true,
  },
];

export default function BillingContext() {
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
              max-w-[900px]
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="flex h-4 items-center gap-3">
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
                Client, brand &amp; engagement context
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
              A campaign reference explains why you are billing. It does not
              run the campaign.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[686px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Context can arrive from a CRM, project tool or media plan.
              Authority over issued billing documents, payments and financial
              approvals stays where it belongs.
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
                  grid-cols-[260px_minmax(0,1fr)_176px]
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
                    Context
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
                    Behavior
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
                    Authority
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.context}
                  className={`
                    grid
                    grid-cols-[260px_minmax(0,1fr)_176px]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONTEXT */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.context}
                    </span>
                  </div>

                  {/* BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.behavior}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        font-semibold
                        leading-6
                        ${
                          row.highlighted
                            ? "text-[#58759d]"
                            : "text-[#5d7192]"
                        }
                      `}
                    >
                      {row.authority}
                    </span>
                  </div>
                </div>
              ))}

              {/* UNKNOWN / INCOMPLETE */}
              <div className="grid grid-cols-[260px_minmax(0,1fr)_176px]">
                {/* CONTEXT */}
                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    Unknown or incomplete
                  </span>
                </div>

                {/* BEHAVIOR */}
                <div className="px-4 py-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="
                        inline-flex
                        min-h-6
                        items-center
                        rounded-md
                        border
                        border-[#f1dfc7]
                        bg-[#fff8ed]
                        px-2.5
                        py-0.5
                        text-xs
                        font-semibold
                        leading-4
                        text-[#9a681f]
                      "
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-sm bg-[#c58a38]" />
                      Needs input
                    </span>

                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      stays visible until the source owner resolves it.
                    </span>
                  </div>
                </div>

                {/* AUTHORITY */}
                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    Named source owner
                  </span>
                </div>
              </div>
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.context}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONTEXT */}
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
                      Context
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
                      {row.context}
                    </p>
                  </div>

                  {/* BEHAVIOR */}
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
                      Behavior
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.behavior}
                    </p>
                  </div>

                  {/* AUTHORITY */}
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
                      Authority
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-6
                        ${
                          row.highlighted
                            ? "text-[#58759d]"
                            : "text-[#5d7192]"
                        }
                      `}
                    >
                      {row.authority}
                    </p>
                  </div>
                </div>
              ))}

              {/* UNKNOWN / INCOMPLETE */}
              <div className="p-5">
                {/* CONTEXT */}
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
                    Context
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
                    Unknown or incomplete
                  </p>
                </div>

                {/* BEHAVIOR */}
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
                    Behavior
                  </p>

                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <span
                      className="
                        inline-flex
                        min-h-6
                        items-center
                        rounded-md
                        border
                        border-[#f1dfc7]
                        bg-[#fff8ed]
                        px-2.5
                        py-0.5
                        text-xs
                        font-semibold
                        leading-4
                        text-[#9a681f]
                      "
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-sm bg-[#c58a38]" />
                      Needs input
                    </span>

                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      stays visible until the source owner resolves it.
                    </span>
                  </div>
                </div>

                {/* AUTHORITY */}
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
                    Authority
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    Named source owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}