export default function SandboxGuide() {
  const cards = [
    {
      title: "Where to run it",
      description:
        "Sandbox path shown only where the capability is genuinely supported there.",
    },
    {
      title: "What it proves",
      description:
        "The declared behavior under the tested conditions, and nothing beyond it.",
    },
    {
      title: "Fidelity inheritance",
      description:
        "Linked directly to the sandbox fidelity matrix for the relevant dimension.",
    },
    {
      title: "Test data",
      description:
        "Synthetic fixtures only — never real customer or payment material.",
    },
    {
      title: "Side effects",
      description:
        'The published side-effect status governs, not the word "test."',
    },
    {
      title: "Next step",
      description:
        "Production-readiness review, with the gaps named explicitly.",
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
                Testing &amp; Developer Sandbox
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
              An example that runs in the sandbox proves sandbox behavior.
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
              Fidelity limitations carry across: anything marked
              Representative, Simulated, Unavailable or Unverified still
              needs production validation.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="
                  flex
                  min-h-[180px]
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
                {/* TITLE */}
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

                {/* DESCRIPTION */}
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
                    {card.description}
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