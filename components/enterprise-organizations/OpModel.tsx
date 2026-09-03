const layers = [
  {
    layer: "Organization & entity",
    question: "Which legal or operating scope owns this billing activity?",
    shown: "Explicit organization and entity context, plus availability state",
  },
  {
    layer: "Team & role",
    question: "Who may view, prepare, approve, issue, reconcile or administer?",
    shown: "Role and permission state",
  },
  {
    layer: "Policy & workflow",
    question: "Which approved rule and version governs the action?",
    shown: "Policy or workflow version and state",
  },
  {
    layer: "Billing object",
    question:
      "Which customer, schedule, invoice, payment or balance record is authoritative?",
    shown: "A stable object reference and its source",
  },
  {
    layer: "Integration",
    question: "Which external system supplies or receives context?",
    shown: "Direction, authority, health and currentness",
  },
  {
    layer: "Evidence",
    question: "How do we know the state is current?",
    shown: "History, source, and as-of or last-verified time",
  },
  {
    layer: "Exception",
    question: "What prevents progress?",
    shown: "Reason, owner and next action",
  },
  {
    layer: "Commercial availability",
    question: "Is this capability, market or plan currently offered?",
    shown: "A registry-backed state",
  },
];

export default function OpModel() {
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
                Enterprise operating model
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
              Eight layers, each answering one question.
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
              Centralized visibility is not centralized permission. The control
              plane shows the whole picture without any one person holding
              every financial, entity, security and integration right.
            </p>
          </div>

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
            <div
              className="
                grid
                grid-cols-[minmax(150px,0.9fr)_minmax(300px,2.7fr)_minmax(220px,1.8fr)]
              "
            >
              {/* HEADER */}
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
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
                  Layer
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
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
                  Question it answers
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
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
                  What must be shown
                </span>
              </div>

              {/* ROWS */}
              {layers.map((item, index) => {
                const isLast = index === layers.length - 1;

                return (
                  <div key={item.layer} className="contents">
                    {/* LAYER */}
                    <div
                      className={`
                        px-4
                        py-3.5
                        ${!isLast ? "border-b border-[#edf0f4]" : ""}
                      `}
                    >
                      <span
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {item.layer}
                      </span>
                    </div>

                    {/* QUESTION */}
                    <div
                      className={`
                        px-4
                        py-3.5
                        ${!isLast ? "border-b border-[#edf0f4]" : ""}
                      `}
                    >
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* SHOWN */}
                    <div
                      className={`
                        px-4
                        py-3.5
                        ${!isLast ? "border-b border-[#edf0f4]" : ""}
                      `}
                    >
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.shown}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {layers.map((item) => (
              <div
                key={item.layer}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_4px_16px_rgba(15,23,42,0.04)]
                "
              >
                {/* LAYER */}
                <div className="border-b border-[#edf0f4] bg-[#fafbfc] px-4 py-3.5">
                  <span
                    className="
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {item.layer}
                  </span>
                </div>

                {/* QUESTION */}
                <div className="px-4 py-3.5">
                  <div
                    className="
                      mb-1.5
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Question it answers
                  </div>

                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {item.question}
                  </p>
                </div>

                {/* WHAT MUST BE SHOWN */}
                <div className="border-t border-[#edf0f4] px-4 py-3.5">
                  <div
                    className="
                      mb-1.5
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    What must be shown
                  </div>

                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {item.shown}
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