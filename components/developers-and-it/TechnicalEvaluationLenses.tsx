export default function TechnicalEvaluationLenses() {
  const lenses = [
    {
      number: "Lens 01",
      title: "Capability fit",
      description:
        "Whether the platform can do the thing you need it to do.",
      question:
        "which business objects must move, in which direction, and what makes a transfer complete rather than merely accepted?",
    },
    {
      number: "Lens 02",
      title: "Boundary & authority",
      description:
        "Which system owns the truth, and which one is allowed to change it.",
      question:
        "when two systems disagree about the same record, which one wins — and who decided that?",
    },
    {
      number: "Lens 03",
      title: "Operational ownership",
      description:
        "Who detects, diagnoses and resolves each class of failure once it is live.",
      question:
        "at 2am, when a batch does not reconcile, whose alert fires and what evidence do they have?",
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
                Technical evaluation lenses
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
              Three lenses, and most evaluations only use the first.
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
              Capability is the easiest to assess and the least likely to
              determine whether the integration succeeds.
            </p>
          </div>

          {/* LENS CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-2

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {lenses.map((lens) => (
              <div
                key={lens.number}
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-1
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-4
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* LENS NUMBER */}
                <div className="w-full">
                  <span
                    className="
                      text-xs
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {lens.number}
                  </span>
                </div>

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
                    {lens.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full pb-2.5 pt-0.5">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {lens.description}
                  </p>
                </div>

                {/* QUESTION */}
                <div
                  className="
                    w-full
                    rounded-md
                    border
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-3
                    py-2.5
                  "
                >
                  <p
                    className="
                      !m-0
                      text-xs
                      leading-5
                      text-[#4c6284]
                    "
                  >
                    <span className="font-bold text-[#4c6284]">
                      Ask:
                    </span>{" "}
                    {lens.question}
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