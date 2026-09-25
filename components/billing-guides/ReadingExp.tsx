const interactions = [
  {
    title: "Table of contents",
    description:
      "Semantic anchor links, keyboard usable, with optional current-section indication",
  },
  {
    title: "Copy link",
    description: (
      <>
        Only if implemented, and{" "}
        <strong>never behind a forced login</strong>; a stable URL is
        sufficient on its own
      </>
    ),
  },
  {
    title: "Print",
    description:
      "Print styles remove navigation clutter but preserve headings, the source and freshness panel, links and scope notes",
  },
  {
    title: "Code blocks",
    description:
      "Only for genuinely technical educational snippets, with accessible highlighting",
  },
  {
    title: "Tables",
    description: (
      <>
        Responsive and accessible — <strong>never used for layout</strong>
      </>
    ),
  },
  {
    title: "Callouts",
    description:
      "Reserved for decision, caution, source, example or next-step information",
  },
  {
    title: "Sticky elements",
    description: (
      <>
        <strong>
          No sticky call to action that covers article content
        </strong>
        ; a desktop table of contents may be sticky within safe bounds
      </>
    ),
  },
];

export default function ReadingExp() {
  return (
    <section className="w-full bg-[#f7f8fa]">
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
              max-w-[800px]
              flex-col
              items-center
              gap-3
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
                  tracking-[0.14em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Reading experience
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              No sticky call to action covering the article.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Seven interaction rules that keep the guide readable, printable
              and keyboard-navigable.
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
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[192px_minmax(0,1fr)]
                  bg-[#f7f8fa]
                "
              >
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3.5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    Interaction
                  </span>
                </div>

                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3.5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    Requirement
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {interactions.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    grid
                    grid-cols-[192px_minmax(0,1fr)]
                    transition-colors
                    duration-150
                    hover:bg-[#f7f8fa]/70
                    ${
                      index !== interactions.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* INTERACTION */}
                  <div className="px-4 py-4">
                    <span
                      className="
                        text-sm
                        font-bold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="px-4 py-4">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {interactions.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    p-5
                    transition-colors
                    duration-150
                    hover:bg-[#f7f8fa]/70
                    ${
                      index !== interactions.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* INTERACTION */}
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Interaction
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </p>

                  {/* REQUIREMENT */}
                  <p
                    className="
                      !m-0
                      mt-5
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Requirement
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
                    {item.description}
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