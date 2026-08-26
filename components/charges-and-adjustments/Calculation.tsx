const evidenceItems = [
  {
    number: "01",
    title: "Source",
    description:
      "Manual entry, product, contract, order, usage, schedule, import, API or approved integration.",
  },
  {
    number: "02",
    title: "Inputs",
    description:
      "Quantity, unit, rate, percentage, taxable basis, dates, entity, currency and eligible attributes.",
  },
  {
    number: "03",
    title: "Rule version",
    description:
      "The exact approved rule or definition used for the calculation.",
  },
  {
    number: "04",
    title: "Effective context",
    description:
      "Start and end date, event time, service period or transaction context.",
  },
  {
    number: "05",
    title: "Precision and rounding",
    description:
      "Calculation precision, rounding mode and output precision where applicable.",
  },
  {
    number: "06",
    title: "Override",
    description:
      "Any authorized manual value, with its reason, actor and approval.",
  },
  {
    number: "07",
    title: "Result",
    description:
      "Base, discount, fee, tax, net and total components as supported.",
  },
  {
    number: "08",
    title: "Relationship",
    description:
      "The draft line, issued line, credit, payment or balance context it belongs to.",
  },
];

const calculationRows = [
  {
    number: "1",
    label: "Source",
    value:
      "Approved integration · usage record UR-4471 · event 02 Aug 06:04 UTC",
    mono: false,
  },
  {
    number: "2",
    label: "Inputs",
    value: "quantity 32 hours · rate £120.00 · entity Zoiko Ltd · GBP",
    mono: true,
  },
  {
    number: "3",
    label: "Rule version",
    value: "PR-IMP-01 · v2 · effective 01 Jan 2026",
    mono: true,
  },
  {
    number: "4",
    label: "Effective context",
    value: "Service period 01–31 Jul 2026",
    mono: false,
  },
  {
    number: "5",
    label: "Precision and rounding",
    value: "calculate 6 dp · round half up · output 2 dp",
    mono: true,
  },
  {
    number: "6",
    label: "Override",
    value: "None applied",
    mono: false,
  },
];

export default function Calculation() {
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
          py-16

          sm:px-8
          sm:py-20

          md:px-10
          md:py-24

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1220px]
            flex-col
            items-start
            gap-8

            sm:gap-9

            md:px-0
            md:gap-9

            xl:px-12
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              flex-col
              items-end
              justify-center
              gap-8

              md:flex-row
              md:gap-12

              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2.5
                pb-4

                md:pb-6
              "
            >
              {/* EYEBROW */}
              <div className="flex h-4 items-center">
                <span
                  className="
                    h-0.5
                    w-5
                    shrink-0
                    rounded-sm
                    bg-gradient-to-r
                    from-[#4bb9c7]
                    to-[#5b8fc4]
                  "
                />

                <span
                  className="
                    ml-2
                    text-xs
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.12em]
                    text-[#5b8fc4]
                  "
                >
                  Calculation
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  m-0
                  w-full
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-[#08233f]

                  sm:text-[40px]

                  md:text-[44px]

                  lg:text-5xl
                  lg:leading-[53.82px]
                "
              >
                Make calculations reviewable without exposing sensitive
                formulas.
              </h2>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start

                md:max-w-[528.77px]
              "
            >
              <p
                className="
                  m-0
                  w-full
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#4f6687]

                  sm:text-base
                  sm:leading-8
                "
              >
                Enough evidence to reproduce and challenge a number —
                without publishing proprietary pricing logic or contract
                terms.
              </p>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
              pt-2

              lg:flex-row
              lg:gap-16
            "
          >
            {/* LEFT: PRODUCT VIEW */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-3

                lg:w-1/2
              "
            >
              {/* BADGE */}
              <div className="flex flex-wrap items-center">
                <div
                  className="
                    flex
                    h-7
                    items-center
                    rounded-full
                    border
                    border-[#d7eadf]
                    bg-white/70
                    px-3
                  "
                >
                  <span
                    className="
                      mr-2
                      h-[5px]
                      w-[5px]
                      rounded-sm
                      bg-[#5b8fc4]
                    "
                  />

                  <span
                    className="
                      text-[9.9px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#5b8fc4]
                    "
                  >
                    Illustrative product view
                  </span>
                </div>
              </div>

              {/* CALCULATION CARD */}
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_4px_14px_rgba(14,33,27,0.04),0_1px_2px_rgba(14,33,27,0.05)]
                "
              >
                {/* CARD HEADER */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2.5
                    border-b
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    px-4
                    py-3.5
                  "
                >
                  <span className="h-2 w-2 rounded-sm bg-[#5b8fc4]" />

                  <span
                    className="
                      text-xs
                      font-normal
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#4f6687]
                    "
                  >
                    Calculation event CE-9920
                  </span>

                  <div className="ml-auto">
                    <div
                      className="
                        flex
                        h-7
                        items-center
                        rounded-full
                        border
                        border-[#cfd9e5]
                        bg-[#f7f8fa]
                        px-2.5
                      "
                    >
                      <span className="mr-1.5 text-xs text-[#5b8fc4]">
                        ✓
                      </span>

                      <span
                        className="
                          text-[10.2px]
                          font-medium
                          uppercase
                          leading-4
                          tracking-[0.08em]
                          text-[#5b8fc4]
                        "
                      >
                        Final
                      </span>
                    </div>
                  </div>
                </div>

                {/* EVIDENCE ROWS */}
                {calculationRows.map((row) => (
                  <div
                    key={row.number}
                    className="
                      flex
                      items-start
                      gap-3.5
                      border-b
                      border-[#e5e8ed]
                      px-4
                      py-3.5
                    "
                  >
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-[#d4dce7]
                        bg-[#f7f8fa]
                      "
                    >
                      <span
                        className="
                          text-[9.3px]
                          font-semibold
                          leading-4
                          text-[#5b8fc4]
                        "
                      >
                        {row.number}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span
                        className="
                          block
                          text-[9.4px]
                          font-normal
                          uppercase
                          leading-4
                          tracking-[0.08em]
                          text-[#5b8fc4]
                        "
                      >
                        {row.label}
                      </span>

                      <span
                        className={`
                          mt-1.5
                          block
                          text-sm
                          leading-6
                          text-[#08233f]
                          ${row.mono ? "font-mono" : "font-normal"}
                        `}
                      >
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}

                {/* TOTALS */}
                <div className="flex flex-col gap-1.5 bg-[#fafbfc] px-4 py-4">
                  <CalculationTotal label="Base" value="£3,840.00" />

                  <CalculationTotal
                    label="Discount · contract −5%"
                    value="−£192.00"
                  />

                  <CalculationTotal
                    label="Tax component · VAT 20%"
                    value="£729.60"
                  />

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      justify-between
                      gap-4
                      border-t-2
                      border-[#08233f]
                      pt-2
                    "
                  >
                    <span className="text-base leading-6 text-[#08233f]">
                      Net component total
                    </span>

                    <span
                      className="
                        font-mono
                        text-base
                        font-semibold
                        leading-6
                        text-[#08233f]
                      "
                    >
                      £4,377.60
                    </span>
                  </div>
                </div>

                {/* FOOTER TAGS */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    border-t
                    border-[#dfe5ee]
                    px-6
                    py-3.5
                  "
                >
                  <CalculationTag>Draft line: ZB-UK-2026-0419</CalculationTag>
                  <CalculationTag>Not yet issued</CalculationTag>
                </div>
              </div>
            </div>

            {/* RIGHT: EVIDENCE LIST */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start

                lg:w-1/2
              "
            >
              <h3
                className="
                  m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#08233f]
                "
              >
                What the evidence has to contain
              </h3>

              <p
                className="
                  m-0
                  mt-1.5
                  max-w-[480px]
                  text-sm
                  font-normal
                  leading-7
                  text-[#4f6687]
                "
              >
                Eight elements make an amount reproducible. Anything missing
                is shown as unknown, estimated or provisional rather than
                presented as final.
              </p>

              {/* EVIDENCE ITEMS */}
              <div className="mt-3.5 w-full">
                {evidenceItems.map((item, index) => (
                  <div
                    key={item.number}
                    className={`
                      flex
                      items-start
                      gap-4
                      py-3
                      ${
                        index !== evidenceItems.length - 1
                          ? "border-b border-[#e5e8ed]"
                          : ""
                      }
                    `}
                  >
                    <span
                      className="
                        w-4
                        shrink-0
                        pt-0.5
                        font-mono
                        text-[9.8px]
                        font-semibold
                        leading-4
                        text-[#5b8fc4]
                      "
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h4
                        className="
                          m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#08233f]
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          m-0
                          mt-1
                          text-sm
                          font-normal
                          leading-5
                          text-[#4f6687]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CALCULATION BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5b8fc4]
              bg-[#f7f8fa]
              px-5
              py-7

              sm:px-6

              md:px-7
              md:pt-9
              md:pb-8
            "
          >
            <span
              className="
                text-[9.9px]
                font-normal
                uppercase
                leading-4
                tracking-[0.08em]
                text-[#5b8fc4]
              "
            >
              Calculation boundary
            </span>

            <p
              className="
                m-0
                mt-2
                w-full
                max-w-[761px]
                text-base
                font-normal
                leading-7
                text-[#08233f]
              "
            >
              Proprietary formulas and sensitive contract data are never
              published here. Recalculation never silently changes an issued
              document — a new calculation applies to a draft, or produces a
              governed correction.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full flex-wrap items-center">
            <button
              type="button"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#08233f]
                bg-[#08233f]
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                text-white
                transition-opacity
                hover:opacity-90
              "
            >
              See approved amount sources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculationTotal({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-sm leading-6 text-[#08233f]">{label}</span>

      <span className="font-mono text-sm leading-6 text-[#08233f]">
        {value}
      </span>
    </div>
  );
}

function CalculationTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        rounded-full
        border
        border-[#dfe5ee]
        bg-[#f7f8fa]
        px-2.5
        py-1.5
        font-mono
        text-[10.4px]
        leading-4
        text-[#4f6687]
      "
    >
      {children}
    </span>
  );
}