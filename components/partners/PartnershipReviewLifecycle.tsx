export default function PartnershipReviewLifecycle() {
  const stages = [
    {
      number: "Stage 01",
      title: "Enquiry received",
      description:
        "A proposal has been submitted through the governed route.",
      publicText: "nothing. Receipt is not a relationship.",
    },
    {
      number: "Stage 02",
      title: "Initial review",
      description:
        "Fit, domain relevance and responsibility ownership are assessed.",
      publicText: "nothing. Under review is not a status.",
    },
    {
      number: "Stage 03",
      title: "Specialist review",
      description:
        "Technical, legal or commercial implications are examined by the relevant owners.",
      publicText: (
        <>
          nothing.{" "}
          <strong>Technical review implies no integration.</strong>
        </>
      ),
    },
    {
      number: "Stage 04",
      title: "Governed discussion",
      description:
        "Terms, responsibilities and scope are discussed through controlled channels.",
      publicText: (
        <>
          nothing without approval.{" "}
          <strong>No NDA terms are promised.</strong>
        </>
      ),
    },
    {
      number: "Stage 05",
      title: "Outcome",
      description:
        "Proceed, decline or defer, communicated through the same route.",
      publicText: "only what an approved announcement permits.",
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
                Partnership review lifecycle
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
              Five stages, and what may be said publicly at each.
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
              The public communication column is the one that matters —{" "}
              <strong className="font-bold">
                an early stage is the easiest to describe as more than it is
              </strong>
              .
            </p>
          </div>

          {/* LIFECYCLE */}
          <div className="w-full pt-2">
            {/* DESKTOP */}
            <div
              className="
                hidden
                w-full
                grid-cols-5
                gap-2

                md:grid
              "
            >
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="
                    flex
                    min-w-0
                    flex-col
                    items-start
                    rounded-lg
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-3
                    py-3
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {/* STAGE NUMBER */}
                  <div className="flex w-full flex-col items-start">
                    <span
                      className="
                        w-full
                        text-[9px]
                        font-normal
                        leading-4
                        text-[#7890b2]
                      "
                    >
                      {stage.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="flex w-full flex-col items-start">
                    <h3
                      className="
                        !m-0
                        w-full
                        text-xs
                        font-bold
                        leading-4
                        text-[#091127]
                      "
                    >
                      {stage.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      items-start
                      pt-3.5
                      pb-2
                    "
                  >
                    <p
                      className="
                        !m-0
                        w-full
                        text-xs
                        font-normal
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {stage.description}
                    </p>
                  </div>

                  {/* PUBLIC */}
                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      items-start
                      border-t
                      border-[#edf0f4]
                      pt-2
                    "
                  >
                    <p
                      className="
                        !m-0
                        w-full
                        text-[10px]
                        leading-3
                        text-[#7890b2]
                      "
                    >
                      <span className="font-bold">Public:</span>{" "}
                      {stage.publicText}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET */}
            <div className="flex w-full flex-col gap-4 md:hidden">
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="
                    flex
                    w-full
                    flex-col
                    items-start
                    overflow-hidden
                    rounded-xl
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
                      w-full
                      flex-col
                      items-start
                      gap-1
                      border-b
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-4
                      py-3
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-normal
                        leading-4
                        text-[#7890b2]
                      "
                    >
                      {stage.number}
                    </span>

                    <h3
                      className="
                        !m-0
                        text-sm
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {stage.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="w-full px-4 py-4">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {stage.description}
                    </p>
                  </div>

                  {/* PUBLIC */}
                  <div
                    className="
                      w-full
                      border-t
                      border-[#edf0f4]
                      bg-[#fcfcfd]
                      px-4
                      py-3
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-xs
                        leading-5
                        text-[#7890b2]
                      "
                    >
                      <span className="font-bold">Public:</span>{" "}
                      {stage.publicText}
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