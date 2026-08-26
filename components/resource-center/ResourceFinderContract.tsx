import Image from "next/image";

const rows = [
  {
    label: "Default scope",
    content: (
      <>
        Published current public registry only —{" "}
        <strong>
          no account content, support tickets, product data or drafts
        </strong>
      </>
    ),
  },
  {
    label: "Filters",
    content:
      "Goal, billing topic, audience and resource type; a locale filter only where resource differences genuinely exist",
  },
  {
    label: "Sort",
    content:
      "Relevance by default; newest or recently reviewed only when dates are normalized and meaningful",
  },
  {
    label: "Active state",
    content:
      "Visible filter chips, result count and Clear all, with the count announced politely to assistive technology",
  },
  {
    label: "Keyboard",
    content:
      "Search → filters → active filters → results; no trap; Escape never clears input unexpectedly",
  },
  {
    label: "Analytics privacy",
    content: (
      <>
        Track filter category and result count —{" "}
        <strong>not raw search text</strong>. Raw-query analysis requires
        privacy review and sanitization
      </>
    ),
  },
];

export default function ResourceFinderContract() {
  return (
    <section className="w-full bg-white">
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
                Resource finder contract
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
              Four filter dimensions, and analytics
              that do not read your query.
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
              The finder above is the working surface. Its behavior is fixed
              by contract — including what happens when nothing matches.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5
              pt-5

              lg:flex-row
              lg:items-start
            "
          >
            {/* FINDER BEHAVIOR */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {/* CARD HEADER */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <span
                  className="
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  Finder behavior.
                </span>
              </div>

              {/* DESKTOP TABLE */}
              <div className="hidden sm:block">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      grid
                      grid-cols-[128px_minmax(0,1fr)]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.label}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE CARDS */}
              <div className="flex flex-col sm:hidden">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      p-5
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
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
                      {row.label}
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
                      {row.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              <Image
                src="/images/resource-center/resource-finder.png"
                alt="Resource finder interface"
                width={579}
                height={489}
                className="
                  h-auto
                  w-full
                  object-cover
                  object-top
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}