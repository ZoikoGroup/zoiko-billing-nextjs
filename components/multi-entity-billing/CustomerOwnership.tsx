const rows = [
  {
    relationship: "Owned billing account",
    meaning:
      "The entity is the authoritative billing scope for the defined relationship.",
    control: "Effective date, profile, permissions and history",
  },
  {
    relationship: "Bill-to relationship",
    meaning:
      "The entity issues and addresses billing to the defined party where supported.",
    control: "No ownership inference beyond the billing relationship",
  },
  {
    relationship: "Payer relationship",
    meaning: "Payment responsibility mapped separately if supported.",
    control: "Does not change customer ownership automatically",
  },
  {
    relationship: "Shared customer context",
    meaning:
      "The same customer reference is visible to multiple entities under policy.",
    control: "Shared identity does not equal shared profile, terms or balance",
  },
  {
    relationship: "Reference-only",
    meaning:
      "The entity may view approved customer context but cannot bill or change it.",
    control: "Read-only scope",
  },
  {
    relationship: "External mapped",
    meaning:
      "CRM, ERP or Zoiko One mapping supplies the relationship.",
    control: "Source, direction, freshness and conflict visible",
  },
  {
    relationship: "Needs review / conflict",
    meaning: "Ownership cannot be safely resolved.",
    control: "Ambiguous financial action is blocked",
  },
];

export default function CustomerOwnership() {
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
                Entity ownership of customers, profiles &amp; context
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
              A shared customer reference is not a shared balance.
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
              A common identifier can reduce duplication while preserving
              entity-specific billing context. It never authorizes one global
              set of terms, balances, tax attributes, contacts or permissions.
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
              <div
                className="
                  grid
                  grid-cols-[208px_minmax(0,536px)_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-r border-[#dfe5ee] px-4 py-3.5">
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
                    Relationship
                  </span>
                </div>

                <div className="border-b border-r border-[#dfe5ee] px-4 py-3.5">
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
                    Meaning
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
                    Control
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.relationship}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,536px)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* RELATIONSHIP */}
                  <div className="border-r border-[#edf0f4] px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.relationship}
                    </span>
                  </div>

                  {/* MEANING */}
                  <div className="border-r border-[#edf0f4] px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.meaning}
                    </span>
                  </div>

                  {/* CONTROL */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        leading-5
                        text-[#5d7192]
                        ${
                          row.relationship === "Needs review / conflict"
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {row.control}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.relationship}
                  className={`
                    p-5

                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* RELATIONSHIP */}
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
                      Relationship
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
                      {row.relationship}
                    </p>
                  </div>

                  {/* MEANING */}
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
                      Meaning
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
                      {row.meaning}
                    </p>
                  </div>

                  {/* CONTROL */}
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
                      Control
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                        ${
                          row.relationship === "Needs review / conflict"
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {row.control}
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