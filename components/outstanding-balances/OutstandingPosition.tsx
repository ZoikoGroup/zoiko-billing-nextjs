const summaryCards = [
  {
    label: "Total outstanding",
    value: "£2,486,310",
    detail: (
      <>
        Across <strong>412</strong> accounts
      </>
    ),
    accent: "bg-blue-600",
  },
  {
    label: "Overdue",
    value: "£934,720",
    detail: (
      <>
        <strong>37.6%</strong> of the balance
      </>
    ),
    accent: "bg-orange-500",
  },
  {
    label: "90+ days",
    value: "£186,940",
    detail: (
      <>
        <strong>24</strong> accounts at risk
      </>
    ),
    accent: "bg-red-500",
  },
  {
    label: "In dispute",
    value: "£141,205",
    detail: (
      <>
        <strong>11</strong> open cases
      </>
    ),
    accent: "bg-blue-500",
  },
  {
    label: "Collected this month",
    value: "£1,072,480",
    detail: (
      <>
        Avg. days to pay <strong>34</strong>
      </>
    ),
    accent: "bg-emerald-500",
  },
];

const agingData = [
  {
    label: "Current",
    value: "£1,551,590",
    detail: "62.4% · 288 accounts",
    color: "bg-emerald-500",
    width: "62.4%",
  },
  {
    label: "1–30 days",
    value: "£400,455",
    detail: "16.1% · 61 accounts",
    color: "bg-slate-400",
    width: "16.1%",
  },
  {
    label: "31–60 days",
    value: "£208,850",
    detail: "8.4% · 24 accounts",
    color: "bg-orange-500",
    width: "8.4%",
  },
  {
    label: "61–90 days",
    value: "£138,475",
    detail: "5.6% · 15 accounts",
    color: "bg-orange-600",
    width: "5.6%",
  },
  {
    label: "90+ days",
    value: "£186,940",
    detail: "7.5% · 24 accounts",
    color: "bg-red-500",
    width: "7.5%",
  },
];

export default function OutstandingPosition() {
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
            items-start
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[900px]
              flex-col
              items-start
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                What is outstanding
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                mt-3
                w-full
                max-w-[900px]
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
              The position, before you open a single account.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-3
                w-full
                max-w-[606px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:mt-4
                sm:text-base
              "
            >
              Figures update as payments post. Nothing here is estimated or
              rolled forward.
            </p>
          </div>

          {/* SUMMARY CARDS */}
          <div
            className="
              mt-8
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-5
            "
          >
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:p-6
                "
              >
                {/* ACCENT */}
                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    ${card.accent}
                  `}
                />

                <div className="flex flex-col">
                  {/* LABEL */}
                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      leading-5
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    {card.label}
                  </span>

                  {/* VALUE */}
                  <span
                    className="
                      mt-1
                      text-xl
                      font-extrabold
                      leading-8
                      tracking-[-0.02em]
                      text-[#091127]

                      sm:text-2xl
                    "
                  >
                    {card.value}
                  </span>

                  {/* DETAIL */}
                  <span
                    className="
                      mt-0.5
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {card.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AGING DISTRIBUTION */}
          <div
            className="
              mt-6
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                flex-col
                gap-3
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4

                sm:px-6
                sm:py-5

                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div>
                <h3
                  className="
                    !m-0
                    text-base
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  Aging distribution
                </h3>

                <p
                  className="
                    !m-0
                    mt-0.5
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  Select a band to filter the table below.
                </p>
              </div>

              <p
                className="
                  !m-0
                  text-xs
                  font-normal
                  leading-5
                  text-[#5d7192]

                  md:text-right
                "
              >
                Buckets counted from invoice due date, not issue date.
              </p>
            </div>

            {/* AGING BAR */}
            <div className="px-5 pt-7 sm:px-6 sm:pt-8">
              <div
                className="
                  flex
                  h-3.5
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-[#edf0f4]
                "
              >
                {agingData.map((item) => (
                  <div
                    key={item.label}
                    className={`h-full ${item.color}`}
                    style={{ width: item.width }}
                  />
                ))}
              </div>
            </div>

            {/* AGING DETAILS */}
            <div
              className="
                grid
                grid-cols-1

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-5
              "
            >
              {agingData.map((item, index) => (
                <div
                  key={item.label}
                  className={`
                    px-5
                    py-5

                    sm:px-6

                    xl:px-4

                    ${
                      index > 0
                        ? "border-t border-[#edf0f4] sm:border-l-0 lg:border-l lg:border-t-0"
                        : ""
                    }
                  `}
                >
                  {/* LABEL */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`
                        h-2
                        w-2
                        shrink-0
                        rounded-[3px]
                        ${item.color}
                      `}
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        leading-5
                        tracking-tight
                        text-[#5d7192]
                      "
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* VALUE */}
                  <div className="pt-1.5">
                    <span
                      className="
                        text-lg
                        font-bold
                        leading-8
                        tracking-tight
                        text-[#091127]

                        sm:text-xl
                      "
                    >
                      {item.value}
                    </span>
                  </div>

                  {/* DETAIL */}
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {item.detail}
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