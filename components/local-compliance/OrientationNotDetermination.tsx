export default function OrientationNotDetermination() {
  const doesItems = [
    {
      title: "Structures a requirement record",
      description:
        " so its jurisdiction, authority and evidence travel with it.",
    },
    {
      title: "Tracks currentness",
      description:
        ", including when a source can no longer be verified.",
    },
    {
      title: "Routes to approved sources",
      description:
        " for the legal, tax and filing substance.",
    },
  ];

  const refusesItems = [
    {
      title: "Deciding whether a requirement applies to you.",
      description:
        " That is a legal determination with a qualified owner.",
    },
    {
      title: "Stating any rate, threshold, due date or mandate.",
      description:
        " None appears anywhere on the page.",
    },
    {
      title: "Implying that an organized list equals compliance.",
      description: " Structure is not assurance.",
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
                Orientation, not determination
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
              Three things it does, three it refuses.
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
              The line runs between organizing known context and concluding
              anything from it.
            </p>
          </div>

          {/* CONTENT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              pt-2

              md:grid-cols-2
            "
          >
            {/* WHAT IT DOES */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#e1e5ea]
                bg-[#f2f3f5]
                px-6
                pt-6
                pb-10

                md:pb-14
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                What it does
              </h3>

              <div className="flex w-full flex-col items-start">
                {doesItems.map((item, index) => (
                  <p
                    key={item.title}
                    className={`
                      !m-0
                      w-full
                      text-sm
                      leading-5
                      text-[#5d7192]
                      ${index !== 0 ? "pt-2" : ""}
                    `}
                  >
                    <span className="font-bold">{item.title}</span>
                    <span className="font-normal">{item.description}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* WHAT IT REFUSES */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#e1e5ea]
                bg-white
                px-6
                pt-6
                pb-9
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                What it refuses
              </h3>

              <div className="flex w-full flex-col items-start">
                {refusesItems.map((item, index) => (
                  <p
                    key={item.title}
                    className={`
                      !m-0
                      w-full
                      text-sm
                      leading-5
                      text-[#5d7192]
                      ${index !== 0 ? "pt-2" : ""}
                    `}
                  >
                    <span className="font-bold">{item.title}</span>
                    <span className="font-normal">{item.description}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}