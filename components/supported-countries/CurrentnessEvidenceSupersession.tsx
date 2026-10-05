export default function CurrentnessEvidenceSupersession() {
  const cards = [
    {
      title: "Market record",
      normal: "Reviewed date visible where public. ",
      bold: "Unknown is explicit rather than blank.",
    },
    {
      title: "Capability record",
      normal: "Independent currentness. ",
      bold: "A recently reviewed market does not refresh its capability rows.",
    },
    {
      title: "Scope text",
      normal: "Reviewed with the status it qualifies. ",
      bold: "A stale scope makes a current status misleading.",
    },
    {
      title: "Evidence reference",
      normal: "Public link or controlled indicator. ",
      bold: "Attached is not sufficient.",
    },
    {
      title: "Supersession",
      normal: "Replacement linked, lineage preserved. ",
      bold: "Never a silent overwrite.",
    },
    {
      title: "Whole-directory freshness",
      normal: "",
      bold: "Not a substitute for per-record currentness.",
      afterBold:
        " One aggregate date hides every stale row beneath it.",
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
                Currentness, evidence &amp; supersession
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
              Every coverage object carries its own
              <br className="hidden sm:block" />
              review clock.
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
              A coverage directory is a perishable artifact — it describes a
              position that changes without notice from the outside.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-2

              sm:grid-cols-2
              sm:gap-4

              lg:grid-cols-3
            "
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="
                  flex
                  min-h-[156px]
                  w-full
                  flex-col
                  items-start
                  justify-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* CARD TITLE */}
                <div className="w-full">
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {card.title}
                  </h3>
                </div>

                {/* CARD DESCRIPTION */}
                <div className="w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {card.normal}

                    <strong className="font-bold text-[#5d7192]">
                      {card.bold}
                    </strong>

                    {card.afterBold && (
                      <span>{card.afterBold}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}