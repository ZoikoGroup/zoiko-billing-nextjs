interface BoundaryRow {
  domain: string;
  relationship: string;
  boundary: string;
}

const boundaryRows: BoundaryRow[] = [
  {
    domain: "Currency Control",
    relationship:
      "Defines allowed and configured currency policy, display and precision context.",
    boundary:
      "A currency configured there does not prove a price exists here.",
  },
  {
    domain: "FX Management",
    relationship:
      "Defines conversion rate, source and timing governance where FX context is required.",
    boundary:
      "This page does not execute FX or guarantee rates.",
  },
  {
    domain: "Supported Countries",
    relationship:
      "Defines capability-scoped market availability.",
    boundary:
      "A displayed currency or market label does not prove support.",
  },
  {
    domain: "Local Payment Methods",
    relationship:
      "Defines payment method and execution context where separately approved.",
    boundary:
      "A price currency does not imply payment acceptance or settlement.",
  },
  {
    domain: "Indirect Tax · Tax and Compliance",
    relationship:
      "Define tax and compliance orientation and specialist truth.",
    boundary:
      "Price display does not determine tax treatment.",
  },
];

export default function CurrencyFxPaymentTaxBoundaries() {
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
                Currency, FX, payment, tax &amp; coverage boundaries
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
              Five adjacent domains, five non-
              <br className="hidden sm:block" />
              negotiable boundaries.
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
              Each domain contributes something real to a price and establishes
              nothing about the others.
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
                  Adjacent domain
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
                  Relationship
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
                  Non-negotiable boundary
                </span>
              </div>
            </div>

            {/* ROWS */}
            {boundaryRows.map((row, index) => (
              <div
                key={row.domain}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== boundaryRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* DOMAIN */}
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
                    {row.domain}
                  </span>
                </div>

                {/* RELATIONSHIP */}
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
                    {row.relationship}
                  </span>
                </div>

                {/* BOUNDARY */}
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
                    {row.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {boundaryRows.map((row) => (
              <div
                key={row.domain}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* DOMAIN */}
                <div className="border-b border-[#edf0f4] bg-[#fafafa] px-4 py-3.5">
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
                    Adjacent domain
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
                    {row.domain}
                  </p>
                </div>

                {/* RELATIONSHIP */}
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
                    Relationship
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
                    {row.relationship}
                  </p>
                </div>

                {/* BOUNDARY */}
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
                    Non-negotiable boundary
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
                    {row.boundary}
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