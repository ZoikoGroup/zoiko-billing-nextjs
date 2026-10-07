export default function PartnershipQualificationFramework() {
  const dimensions = [
    {
      dimension: "Intent",
      question: "What kind of collaboration is being proposed?",
      boundary: (
        <>
          Structured selection —{" "}
          <strong>not a category you are placed in</strong>.
        </>
      ),
    },
    {
      dimension: "Customer / use case",
      question:
        "What operating problem or customer need is addressed?",
      boundary: (
        <>
          <strong>No sensitive customer data in an initial enquiry.</strong>
        </>
      ),
    },
    {
      dimension: "Capability relevance",
      question: "Which Zoiko Billing domain is relevant?",
      boundary: (
        <>
          <strong>Controlled taxonomy. No entitlement inference.</strong>
        </>
      ),
    },
    {
      dimension: "Market / scope",
      question:
        "Which market, segment or context matters, if any?",
      boundary: <>Never creates a coverage claim.</>,
    },
    {
      dimension: "Responsibility",
      question:
        "Who would own delivery, support, implementation or advisory work?",
      boundary:
        "Structured notes — the most consequential answer in the set.",
    },
    {
      dimension: "Technical dependency",
      question:
        "Does the proposal require integration or interoperability?",
      boundary: (
        <>
          <strong>
            Routes to technical review. No integration assumption.
          </strong>
        </>
      ),
    },
    {
      dimension: "Evidence / experience",
      question:
        "What non-confidential evidence supports the proposed capability?",
      boundary: "Safe references only where a governed path exists.",
    },
    {
      dimension: "Commercial / legal",
      question:
        "Are contractual, commercial or legal discussions required?",
      boundary: (
        <>
          <strong>
            Routed after initial review. No public terms.
          </strong>
        </>
      ),
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
            gap-5

            sm:gap-7

            md:gap-8
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
                Partnership qualification framework
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
              Eight dimensions a proposal is assessed on.
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
              These are the questions a review asks.{" "}
              <strong className="font-bold">
                None of them is scored, and answering them all establishes
                nothing.
              </strong>
            </p>
          </div>

          {/* FRAMEWORK TABLE */}
          <div className="w-full pt-2">
            {/* DESKTOP TABLE */}
            <div
              className="
                hidden
                w-full
                overflow-hidden
                rounded-xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                md:block
              "
            >
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#182b49]
                "
              >
                <div
                  className="
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Dimension
                  </span>
                </div>

                <div
                  className="
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Question
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {dimensions.map((item, index) => (
                <div
                  key={item.dimension}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      index !== dimensions.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.dimension}
                    </span>
                  </div>

                  {/* QUESTION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* BOUNDARY */}
                  <div
                    className="
                      bg-[#fffafa]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#7f1d1d]
                      "
                    >
                      {item.boundary}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex w-full flex-col gap-4 md:hidden">
              {dimensions.map((item) => (
                <article
                  key={item.dimension}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {/* DIMENSION */}
                  <div
                    className="
                      border-b
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-4
                      py-3
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Dimension
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1
                        text-sm
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.dimension}
                    </p>
                  </div>

                  {/* QUESTION */}
                  <div className="border-b border-[#edf0f4] px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Question
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1
                        text-sm
                        font-normal
                        leading-6
                        text-[#091127]
                      "
                    >
                      {item.question}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div className="bg-[#fffafa] px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Boundary
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1
                        text-sm
                        font-normal
                        leading-6
                        text-[#7f1d1d]
                      "
                    >
                      {item.boundary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}