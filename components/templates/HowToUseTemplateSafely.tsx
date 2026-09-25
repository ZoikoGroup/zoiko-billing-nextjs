"use client";

const usageSteps = [
  {
    step: "1 · Confirm fit",
    description:
      "Check the template matches the intended operational task and scope",
  },
  {
    step: "2 · Check currency",
    description:
      "Verify the current version and last-reviewed date before use",
  },
  {
    step: "3 · Read the scope note",
    description:
      "Review the professional-review and jurisdiction or product scope note where present",
  },
  {
    step: "4 · Respect editable areas",
    description:
      "Use only the intended input fields; preserve controlled guidance and formulas unless instructed otherwise",
  },
  {
    step: "5 · Minimize data",
    description:
      "Avoid payment card data, credentials and confidential information unless an approved business process requires and protects it",
    boldStart: true,
  },
  {
    step: "6 · Validate outputs",
    description:
      "Check decisions and calculations against the authoritative product, accounting, legal, tax, regulatory, provider or policy source for your organization",
  },
  {
    step: "7 · Escalate appropriately",
    description:
      "When the task becomes product- or account-specific, move to Documentation, Help, Product, Developers or Trust — do not treat the template as system truth",
    boldEnd: true,
  },
  {
    step: "8 · Retire old copies",
    description:
      "When a replacement version publishes, adopt the current version and retire obsolete local copies per your policy",
  },
];

export default function HowToUseTemplateSafely() {
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
          {/* Intro */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                How to use a template safely
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
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
              Eight steps, ending with retiring your
              <br className="hidden sm:block" /> old copy.
            </h2>

            {/* Description */}
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
              The sequence assumes the template will be downloaded, edited
              locally and reused — which is exactly where version drift begins.
            </p>
          </div>

          {/* Desktop / Tablet Table */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              md:block
            "
          >
            {/* Table heading */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#f7f8fa]
                px-5
                py-4
              "
            >
              <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                Usage sequence.
              </p>
            </div>

            {/* Rows */}
            {usageSteps.map((item, index) => (
              <div
                key={item.step}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)]
                  transition-colors
                  hover:bg-[#f7f8fa]/70
                  ${
                    index !== usageSteps.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* Step */}
                <div className="px-5 py-4">
                  <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                    {item.step}
                  </p>
                </div>

                {/* Description */}
                <div className="px-5 py-4">
                  <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                    {item.boldStart ? (
                      <>
                        <strong className="font-bold text-[#091127]">
                          Avoid payment card data, credentials and confidential
                          information
                        </strong>{" "}
                        unless an approved business process requires and
                        protects it
                      </>
                    ) : item.boldEnd ? (
                      <>
                        When the task becomes product- or account-specific,
                        move to Documentation, Help, Product, Developers or
                        Trust —{" "}
                        <strong className="font-bold text-[#091127]">
                          do not treat the template as system truth
                        </strong>
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {usageSteps.map((item) => (
              <div
                key={item.step}
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                "
              >
                {/* Step */}
                <div className="border-b border-[#edf0f4] bg-[#f7f8fa] px-5 py-3.5">
                  <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                    {item.step}
                  </p>
                </div>

                {/* Description */}
                <div className="px-5 py-4">
                  <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                    {item.boldStart ? (
                      <>
                        <strong className="font-bold text-[#091127]">
                          Avoid payment card data, credentials and confidential
                          information
                        </strong>{" "}
                        unless an approved business process requires and
                        protects it
                      </>
                    ) : item.boldEnd ? (
                      <>
                        When the task becomes product- or account-specific,
                        move to Documentation, Help, Product, Developers or
                        Trust —{" "}
                        <strong className="font-bold text-[#091127]">
                          do not treat the template as system truth
                        </strong>
                      </>
                    ) : (
                      item.description
                    )}
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