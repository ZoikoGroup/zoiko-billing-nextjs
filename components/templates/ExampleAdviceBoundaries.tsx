const adviceBoundaries = [
  {
    area: "Data",
    allowed: "Blank or synthetic sample values.",
    notAllowed:
      "Real customer, account, payment, employee, credential or confidential data in a published asset",
  },
  {
    area: "Accounting, tax & legal",
    allowed:
      "General operational structure with an explicit review boundary.",
    notAllowed:
      "Professional conclusions, statutory compliance assurance, tax calculations or rates, legal interpretation",
  },
  {
    area: "Product",
    allowed: "Approved product terminology and links.",
    notAllowed:
      "Invented fields, screens, workflows, automation, availability or plans",
  },
  {
    area: "Payment providers",
    allowed: "General process checklists.",
    notAllowed:
      "Provider fees, settlement timing, contractual obligations or guarantees without source approval",
  },
  {
    area: "Technical",
    allowed: "Integration planning and readiness.",
    notAllowed:
      "Invented endpoints, payloads, scopes, tokens, retry rules or SDK commands",
  },
];

export default function ExampleAdviceBoundaries() {
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
                Example &amp; advice boundaries
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
              Five areas where a template can
              <br className="hidden sm:block" /> overreach.
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
              Each &quot;not allowed&quot; entry describes something a template
              could plausibly contain and must not.
            </p>
          </div>

          {/* Desktop Table */}
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
            {/* Table Description */}
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
                Area, allowed and not allowed.
              </p>
            </div>

            {/* Header */}
            <div className="grid grid-cols-[176px_384px_minmax(0,1fr)] bg-[#f7f8fa]">
              <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Area
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Allowed
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Not allowed
                </span>
              </div>
            </div>

            {/* Rows */}
            {adviceBoundaries.map((item, index) => (
              <div
                key={item.area}
                className={`
                  grid
                  grid-cols-[176px_384px_minmax(0,1fr)]
                  transition-colors
                  hover:bg-[#f7f8fa]/70
                  ${
                    index !== adviceBoundaries.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                <div className="px-5 py-4">
                  <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                    {item.area}
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                    {item.allowed}
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                    {item.notAllowed}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {adviceBoundaries.map((item) => (
              <div
                key={item.area}
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
                {/* Area */}
                <div className="border-b border-[#edf0f4] bg-[#f7f8fa] px-5 py-4">
                  <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                    {item.area}
                  </p>
                </div>

                <div className="flex flex-col">
                  {/* Allowed */}
                  <div className="border-b border-[#edf0f4] px-5 py-4">
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Allowed
                    </p>

                    <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                      {item.allowed}
                    </p>
                  </div>

                  {/* Not Allowed */}
                  <div className="px-5 py-4">
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Not allowed
                    </p>

                    <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                      {item.notAllowed}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}