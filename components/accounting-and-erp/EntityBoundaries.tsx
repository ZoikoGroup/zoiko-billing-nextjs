import Link from "next/link";

const rows = [
  {
    context: "Entity",
    rule:
      "Map a billing entity to a target company or ledger concept only where registered.",
    boundary: (
      <>
        No consolidated accounting — see{" "}
        <Link
          href="/multi-entity-billing"
          className="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Multi-Entity Billing
        </Link>
      </>
    ),
  },
  {
    context: "Currency",
    rule: "Preserve document and payment currencies plus target mapping.",
    boundary: "No automatic FX or reporting-currency conversion claim",
  },
  {
    context: "Tax amount / result",
    rule:
      "Pass the authoritative Billing or tax-provider value where supported.",
    boundary: "No tax calculation, filing or compliance claim",
  },
  {
    context: "Tax code",
    rule: "Map to a target code per governed mapping.",
    boundary: "A target code is not a source tax determination",
  },
  {
    context: "Localized document",
    rule: "Send document and reference fields per the object contract.",
    boundary: (
      <>
        <Link
          href="/localized-documents"
          className="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Localized Documents
        </Link>{" "}
        owns template integrity
      </>
    ),
  },
  {
    context: "Customer relationship",
    rule: "Map stable references with explicit authority.",
    boundary: "No universal customer master",
  },
  {
    context: "Reporting currency / book",
    rule:
      "Only if the target integration explicitly supports such metadata.",
    boundary: "No financial consolidation or revenue recognition",
  },
  {
    context: "Jurisdiction",
    rule: "Integration availability can vary by market.",
    boundary: (
      <>
        Check{" "}
        <Link
          href="/jurisdiction-availability"
          className="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Jurisdiction Availability
        </Link>
      </>
    ),
  },
];

export default function EntityBoundaries() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-8
          px-5
          py-12

          sm:gap-10
          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        {/* INTRO */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-3
            pt-2
            text-center
          "
        >
          {/* EYEBROW */}
          <div
            className="
              flex
              max-w-full
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-center
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.12em]

                md:whitespace-nowrap
                md:tracking-[0.15em]
              "
            >
              Multi-entity, currency, tax &amp; localization boundaries
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              w-full
              text-center
              font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#091127]

              text-[30px]

              sm:text-[34px]

              md:text-[36px]
              md:leading-10

              lg:whitespace-nowrap
            "
          >
            Entity mapping is not consolidation.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              text-center
              text-sm
              font-normal
              leading-6
              text-[#5d7192]

              sm:text-base
              sm:leading-7
            "
          >
            Eight contexts, each mapped where registered and bounded where it
            would otherwise bleed into another finance domain.
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
          {/* RESPONSIVE HORIZONTAL SCROLL */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1040px]">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[208px_565px_1fr]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3">
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
                    Context
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3">
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
                    Integration rule
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3">
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
                    Boundary
                  </span>
                </div>
              </div>

              {/* TABLE ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.context}
                  className={`
                    grid
                    grid-cols-[208px_565px_1fr]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#eef1f5]"
                        : ""
                    }
                  `}
                >
                  {/* CONTEXT */}
                  <div className="px-4 py-3.5">
                    <div
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.context}
                    </div>
                  </div>

                  {/* INTEGRATION RULE */}
                  <div className="px-4 py-3.5">
                    <div
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.rule}
                    </div>
                  </div>

                  {/* BOUNDARY */}
                  <div className="px-4 py-3.5">
                    <div
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.boundary}
                    </div>
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