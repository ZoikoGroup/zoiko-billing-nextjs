export default function ArticleBodyPattern() {
  const blocks = [
    {
      block: "What you will learn",
      requirement: "Three to six concrete learning outcomes",
    },
    {
      block: "Before you start",
      requirement:
        "Prerequisites, inputs, authority boundaries and context",
    },
    {
      block: "Step / concept sections",
      requirement:
        "Plain-language headings, one task or concept each, examples only when useful",
    },
    {
      block: "Decision callout",
      requirement:
        "Where a choice changes by workflow, product state, policy, jurisdiction or authority source",
    },
    {
      block: "Common mistake",
      requirement: "Error-prevention guidance",
    },
    {
      block: "Example",
      requirement:
        "Clearly labeled as product-accurate, conceptual or synthetic",
    },
    {
      block: "Product context",
      requirement:
        "Explain the relationship, then link to Product or Documentation for current behavior",
    },
    {
      block: "Troubleshooting boundary",
      requirement:
        "General symptoms and safe checks only — account-specific diagnosis goes to Help and Support",
      boldPart: "account-specific diagnosis goes to Help and Support",
    },
    {
      block: "Summary / checklist",
      requirement: "A concise recap, not duplicated body copy",
    },
    {
      block: "Next steps",
      requirement:
        "Related guides, authoritative source, and a contextual conversion, help or developer action",
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
          xl:px-24
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
                Article body pattern
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
              Ten blocks, in a fixed order.
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
              The pattern is fixed so a reader never has to relearn where the
              scope note or the boundary statement lives.
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
              <div className="grid grid-cols-[288px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Block
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Requirement
                  </span>
                </div>
              </div>

              {/* ROWS */}
              <div>
                {blocks.map((item, index) => (
                  <div
                    key={item.block}
                    className={`
                      grid
                      grid-cols-[288px_minmax(0,1fr)]
                      ${
                        index !== blocks.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* BLOCK */}
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {item.block}
                      </span>
                    </div>

                    {/* REQUIREMENT */}
                    <div className="px-4 py-3.5">
                      {item.boldPart ? (
                        <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                          General symptoms and safe checks only —{" "}
                          <span className="font-bold">
                            {item.boldPart}
                          </span>
                        </p>
                      ) : (
                        <span className="text-sm font-normal leading-5 text-[#5d7192]">
                          {item.requirement}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {blocks.map((item, index) => (
                <div
                  key={item.block}
                  className={`
                    p-5
                    ${
                      index !== blocks.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* BLOCK */}
                  <div className="mb-3">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Block
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {item.block}
                    </p>
                  </div>

                  {/* REQUIREMENT */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Requirement
                    </p>

                    {item.boldPart ? (
                      <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                        General symptoms and safe checks only —{" "}
                        <span className="font-bold">
                          {item.boldPart}
                        </span>
                      </p>
                    ) : (
                      <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                        {item.requirement}
                      </p>
                    )}
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