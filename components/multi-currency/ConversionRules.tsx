"use client";

const rules = [
  {
    concept: "Conversion equation",
    rule: "Store the base amount, source currency, target currency, rate, direction and result — not just the result",
  },
  {
    concept: "Calculation precision",
    rule: "Approved internal precision is used before any display rounding",
  },
  {
    concept: "Minor unit",
    rule: "From currency metadata, with non-decimal and exceptional minor-unit behavior explicitly supported",
  },
  {
    concept: "Line vs total rounding",
    rule: "The policy defines whether rounding occurs per line, per tax component, at subtotal, total, payment or settlement",
  },
  {
    concept: "Residual & variance",
    rule: "Never hidden — classified and reconciled according to policy",
  },
  {
    concept: "Markup or spread",
    rule: "Only where commercially approved, distinguishing the source rate from the applied rate",
  },
  {
    concept: "Fees",
    rule: "A separate amount or line with its own currency and source; not buried inside a rate unless policy explicitly does so",
  },
  {
    concept: "Rate override",
    rule: "Permission, reason, source, effective period and audit",
  },
  {
    concept: "Display rounding",
    rule: "May differ from stored precision, and is labeled where material",
  },
];

export default function ConversionRules() {
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
              max-w-[900px]
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
                Conversion, rounding, spread &amp; precision
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
              Variance is reconciled, not hidden.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Rounding at the line, tax component, subtotal, total, payment
              and settlement layers can each produce a residual. The policy
              names where rounding happens, and any difference is classified
              rather than absorbed.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[224px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Concept
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Required rule
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rules.map((item, index) => (
                <div
                  key={item.concept}
                  className={`
                    grid
                    grid-cols-[224px_minmax(0,1fr)]
                    ${
                      index !== rules.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONCEPT */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.concept}
                    </span>
                  </div>

                  {/* REQUIRED RULE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.rule}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rules.map((item, index) => (
                <div
                  key={item.concept}
                  className={`
                    p-5
                    ${
                      index !== rules.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONCEPT */}
                  <div className="mb-4">
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
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.concept}
                    </p>
                  </div>

                  {/* REQUIRED RULE */}
                  <div>
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
                      Required rule
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
                      {item.rule}
                    </p>
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