export default function PartnershipTrustEvidence() {
  const areas = [
    {
      area: "Claims",
      principle:
        "Partner, customer and product claims require evidence and approval.",
      behavior: "No case study or outcome statement is published.",
    },
    {
      area: "Logos & brand",
      principle:
        "Use requires explicit rights and brand approval.",
      behavior: "No logo directory by assumption.",
    },
    {
      area: "Conflicts",
      principle:
        "Material conflicts should be declared and reviewed.",
      behavior:
        "Sensitive conflict detail is never exposed publicly.",
    },
    {
      area: "Confidentiality",
      principle:
        "Sensitive discussion moves to controlled channels.",
      behavior:
        "No NDA terms are promised unless source-approved.",
    },
    {
      area: "Evidence",
      principle:
        "Capability and experience claims should be supportable.",
      behavior:
        "Initial enquiry accepts only safe references where enabled.",
      neutral: true,
    },
    {
      area: "Conduct",
      principle:
        "Partnership activity should align with applicable policies and terms.",
      behavior: "No partner code of conduct is invented.",
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
            gap-5

            sm:gap-7

            md:gap-8
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
                Trust, evidence, conflicts &amp; brand use
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
              Six areas where a partners page usually overreaches.
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
              Each of these is a claim the page could make cheaply and should
              not.
            </p>
          </div>

          {/* TABLE */}
          <div className="w-full pt-2">
            {/* DESKTOP TABLE */}
            <div
              className="
                hidden
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                md:block
              "
            >
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#182b49]
                "
              >
                <div
                  className="
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Area
                  </span>
                </div>

                <div
                  className="
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Required principle
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Public behavior here
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {areas.map((item, index) => (
                <div
                  key={item.area}
                  className={`
                    grid
                    grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      index !== areas.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.area}
                    </span>
                  </div>

                  {/* PRINCIPLE */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.principle}
                    </span>
                  </div>

                  {/* PUBLIC BEHAVIOR */}
                  <div
                    className={`
                      px-3.5
                      py-3
                      ${
                        item.neutral
                          ? "bg-white"
                          : "bg-[#fffafa]"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xs
                        leading-5
                        ${
                          item.neutral
                            ? "font-normal text-[#091127]"
                            : "font-bold text-[#7f1d1d]"
                        }
                      `}
                    >
                      {item.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex w-full flex-col gap-4 md:hidden">
              {areas.map((item) => (
                <article
                  key={item.area}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {/* AREA */}
                  <div
                    className="
                      border-b
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-4
                      py-3
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Area
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1
                        text-sm
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.area}
                    </p>
                  </div>

                  {/* REQUIRED PRINCIPLE */}
                  <div
                    className="
                      border-b
                      border-[#edf0f4]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Required principle
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1
                        text-sm
                        font-normal
                        leading-6
                        text-[#091127]
                      "
                    >
                      {item.principle}
                    </p>
                  </div>

                  {/* PUBLIC BEHAVIOR */}
                  <div
                    className={`
                      px-4
                      py-3.5
                      ${
                        item.neutral
                          ? "bg-white"
                          : "bg-[#fffafa]"
                      }
                    `}
                  >
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Public behavior here
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1
                        text-sm
                        leading-6
                        ${
                          item.neutral
                            ? "font-normal text-[#091127]"
                            : "font-bold text-[#7f1d1d]"
                        }
                      `}
                    >
                      {item.behavior}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}