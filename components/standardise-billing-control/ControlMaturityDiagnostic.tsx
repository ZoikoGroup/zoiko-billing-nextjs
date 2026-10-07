export default function ControlMaturityDiagnostic() {
  const questions = [
    {
      label: "Rule ownership",
      options: ["Clear", "Mixed", "Unclear"],
    },
    {
      label: "Change approval",
      options: ["Consistent", "Varies by team", "Mostly informal"],
    },
    {
      label: "Exception handling",
      options: ["Defined", "Partially defined", "Ad hoc"],
    },
    {
      label: "Decision evidence",
      options: ["Centralized", "Distributed", "Difficult to find"],
    },
    {
      label: "Change review",
      options: ["Routine", "Periodic", "Reactive"],
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
                Control maturity diagnostic
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
              Five questions, and the output is a
            
              priority order.
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
              Structured selections only —{" "}
              <span className="font-bold">
                no free text, no email gate, and answers editable
                <br className="hidden sm:block" />
                without restarting
              </span>
              . Nothing is stored.
            </p>
          </div>

          {/* DIAGNOSTIC CARD */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_4px_24px_rgba(11,27,60,0.07)]
            "
          >
            {/* CARD HEADER */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-1
                border-b
                border-[#edf0f4]
                bg-[#fafbfc]
                px-5
                py-4
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-base
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Describe how billing decisions work today
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-xs
                  font-normal
                  leading-5
                  text-[#7890b2]
                "
              >
                Neutral language throughout. Most teams answer &quot;varies&quot; to at
                least one of these.
              </p>
            </div>

            {/* QUESTIONS */}
            <div className="flex w-full flex-col">
              {questions.map((question, index) => (
                <div
                  key={question.label}
                  className={`
                    flex
                    w-full
                    items-center
                    gap-2
                    border-[#edf0f4]
                    px-5
                    py-3.5
                    ${
                      index !== questions.length - 1
                        ? "border-b"
                        : ""
                    }

                    flex-wrap

                    md:flex-nowrap
                  `}
                >
                  {/* QUESTION LABEL */}
                  <div
                    className="
                      w-full
                      shrink-0

                      sm:w-48
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {question.label}
                    </span>
                  </div>

                  {/* OPTIONS */}
                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >
                    {question.options.map((option, optionIndex) => {
                      const selected = optionIndex === 0;

                      return (
                        <button
                          key={option}
                          type="button"
                          className={`
                            shrink-0
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            leading-5
                            transition-none
                            ${
                              selected
                                ? "border-blue-600 bg-[#f0f2f5] text-[#2563eb]"
                                : "border-[#dfe5ee] bg-white text-[#5d7192]"
                            }
                          `}
                        >
                          {option}
                        </button>
                      );
                    })}
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