interface CommercialConcept {
  concept: string;
  treatment: React.ReactNode;
  guardrail: string;
}

const commercialConcepts: CommercialConcept[] = [
  {
    concept: "Override",
    treatment:
      "Show owner, reason category, scope, expiry or review, and evidence.",
    guardrail: "No real override logic or value.",
  },
  {
    concept: "Promotion",
    treatment:
      "Treat as a separately governed commercial modifier.",
    guardrail: "No discount percentage or code without a source.",
  },
  {
    concept: "Contract price",
    treatment:
      "Show a contract-source indicator if public handling is approved.",
    guardrail: "No customer or contract details.",
  },
  {
    concept: "Exception",
    treatment:
      "Show the temporary state, owner and review date.",
    guardrail: "No automatic approval inference.",
  },
  {
    concept: "Conflict",
    treatment: (
      <>
        Expose the conflicting source and context, and{" "}
        <strong>block authoritative display</strong>.
      </>
    ),
    guardrail: "Do not choose a value automatically.",
  },
];

export default function CommercialGovernancePatterns() {
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
                Overrides, promotions, discounts &amp; exceptions
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                pb-[0.69px]
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
              Five commercial concepts, as
              <br className="hidden sm:block" /> governance patterns only.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              These appear{" "}
              <strong className="font-bold">
                only as patterns unless an approved Zoiko Billing commercial
                source defines them
              </strong>{" "}
              — and none does.
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
            {/* HEADER */}
            <div
              className="
                grid
                grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                bg-[#0f1b3d]
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
                  Concept
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
                  Recommended UI treatment
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
                  Guardrail
                </span>
              </div>
            </div>

            {/* ROWS */}
            {commercialConcepts.map((row, index) => (
              <div
                key={row.concept}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== commercialConcepts.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* CONCEPT */}
                <div
                  className="
                    border-r
                    border-[#edf0f4]
                    bg-[#fafafa]
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
                    {row.concept}
                  </span>
                </div>

                {/* UI TREATMENT */}
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
                    {row.treatment}
                  </span>
                </div>

                {/* GUARDRAIL */}
                <div
                  className="
                    bg-[#f9fafb]
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      leading-5
                      text-red-900
                    "
                  >
                    {row.guardrail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {commercialConcepts.map((row) => (
              <div
                key={row.concept}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* CONCEPT */}
                <div
                  className="
                    border-b
                    border-[#edf0f4]
                    bg-[#fafafa]
                    px-4
                    py-3.5
                  "
                >
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Concept
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.concept}
                  </p>
                </div>

                {/* UI TREATMENT */}
                <div className="border-b border-[#edf0f4] px-4 py-3.5">
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Recommended UI treatment
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {row.treatment}
                  </p>
                </div>

                {/* GUARDRAIL */}
                <div className="bg-[#f9fafb] px-4 py-3.5">
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Guardrail
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-bold
                      leading-6
                      text-red-900
                    "
                  >
                    {row.guardrail}
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