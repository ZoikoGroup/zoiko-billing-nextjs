"use client";

const evidenceItems = [
  {
    title: "Methodology",
    description: (
      <>
        A report states how its data was gathered and over what period.{" "}
        <strong className="font-bold">
          A figure without a data period cannot be assessed for staleness.
        </strong>
      </>
    ),
  },
  {
    title: "Limitations",
    description: (
      <>
        What the analysis does not support. Published alongside the finding,
        not omitted from a summary.
      </>
    ),
  },
  {
    title: "Consent & rights",
    description: (
      <>
        A customer story requires current consent, attribution rights and claim
        verification.{" "}
        <strong className="font-bold">
          Consent withdrawal removes it immediately
        </strong>
        , through all nine layers.
      </>
    ),
  },
  {
    title: "Correction handling",
    description: (
      <>
        A known unresolved correction disqualifies a report from featuring{" "}
        <strong className="font-bold">before</strong> the fix ships.
      </>
    ),
  },
  {
    title: "No borrowed benchmarks",
    description: (
      <>
        <strong className="font-bold">
          No industry statistic or analyst figure is presented as evidence
          about Zoiko Billing.
        </strong>
      </>
    ),
  },
  {
    title: "Nothing rendered here",
    description: (
      <>
        <strong className="font-bold">
          No metric, customer name, logo or outcome appears on this page.
        </strong>{" "}
        The registry holds none, and none is invented to demonstrate the
        pattern.
      </>
    ),
  },
];

export default function EvidenceAndProof() {
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

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
                Evidence &amp; proof
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
              Reports and customer stories carry
             
              the heaviest conditions.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Both make claims about the world, which is why both can be
              disqualified without editing a word of them.
            </p>
          </div>

          {/* EVIDENCE CARDS */}
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
            {evidenceItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
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
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    text-xs
                    font-normal
                    leading-5
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
    </section>
  );
}