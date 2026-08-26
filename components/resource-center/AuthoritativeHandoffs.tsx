const handoffs = [
  {
    question: "How does the product behave?",
    authority: "Documentation and approved product pages",
    behavior: "Summarize only; link to authority",
  },
  {
    question: "I have a problem and need help.",
    authority: "Help Center · Contact Support",
    behavior: "Do not turn education content into support intake",
    emphasis: true,
  },
  {
    question: "Is the service operational?",
    authority: "System Status",
    behavior: "Never hard-code a green operational claim",
    emphasis: true,
  },
  {
    question: "Security, privacy or assurance?",
    authority: "Security Overview · Trust Center · Privacy",
    behavior: "Route to current evidence",
  },
  {
    question: "What does it cost?",
    authority: "Pricing",
    behavior: "Do not duplicate commercial values",
    authorityLink: true,
    emphasis: true,
  },
  {
    question: "How do I integrate?",
    authority: (
      <>
        <span className="font-semibold text-[#5279b4]">Integrations</span>
        <span> · Developers</span>
      </>
    ),
    behavior: "Route to approved technical destinations",
  },
  {
    question: "What changed?",
    authority: "Product Updates",
    behavior: "Avoid roadmap and incident overlap",
  },
];

export default function AuthoritativeHandoffs() {
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
                Authoritative handoffs
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
              Seven questions this page answers by
             pointing elsewhere.
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
              Summarize and route. Never duplicate, and never hard-code a claim
              another system owns.
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
              <div className="grid grid-cols-[320px_384px_minmax(0,1fr)] bg-[#fafbfc]">
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
                    Question
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
                    Behavior here
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {handoffs.map((item, index) => (
                <div
                  key={item.question}
                  className={`
                    grid
                    grid-cols-[320px_384px_minmax(0,1fr)]
                    ${
                      index !== handoffs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.question}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        leading-5
                        ${
                          item.authorityLink
                            ? "font-semibold text-[#5279b4]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {item.authority}
                    </span>
                  </div>

                  {/* BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        leading-5
                        ${
                          item.emphasis
                            ? "font-bold text-[#5d7192]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {item.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {handoffs.map((item, index) => (
                <div
                  key={item.question}
                  className={`
                    p-5
                    ${
                      index !== handoffs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
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
                    Question
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
                    {item.question}
                  </p>

                  {/* AUTHORITY */}
                  <p
                    className="
                      !m-0
                      mt-4
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
                      leading-6
                      ${
                        item.authorityLink
                          ? "font-semibold text-[#5279b4]"
                          : "text-[#5d7192]"
                      }
                    `}
                  >
                    {item.authority}
                  </p>

                  {/* BEHAVIOR */}
                  <p
                    className="
                      !m-0
                      mt-4
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Behavior here
                  </p>

                  <p
                    className={`
                      !m-0
                      mt-1.5
                      text-sm
                      leading-6
                      ${
                        item.emphasis
                          ? "font-bold text-[#5d7192]"
                          : "text-[#5d7192]"
                      }
                    `}
                  >
                    {item.behavior}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}